const axios = require('axios');

var db = require('../../util/db');

module.exports = async function (req, res) {
	try {
		const cachedSearchId = await db.get('searchId');
		let resSearchId;

		if (!cachedSearchId) {
			const { data } = await axios.get('https://front-test.beta.aviasales.ru/search');
			resSearchId = data.searchId;
			await db.set('searchId', data.searchId, 60 * 120);
		}

		const searchId = cachedSearchId || resSearchId;

		if (searchId) {
			const { data } = await axios.get('https://front-test.beta.aviasales.ru/tickets', {
				params: { searchId }
			});

            res.send(data)
		}
	} catch (err) {
		console.error('[API: searchId] error', err.message);
		res.status(500);
		res.send({
			error: err.message,
		});
	}
};
