const axios = require('axios');

var db = require('../../util/db');
var defaultTickets = require('../../util/defaultTickets')

module.exports = async function (req, res) {
	try {
		console.log('dt', defaultTickets)
		const cachedSearchId = await db.get('searchId');
		let resSearchId;

		if (!cachedSearchId) {
			const { data } = await axios.get('https://front-test.beta.aviasales.ru/search');
			resSearchId = data.searchId;
			await db.set('searchId', data.searchId, 60 * 120);
		}

		const searchId = cachedSearchId || resSearchId;

		console.log('searchId', searchId)

		if (searchId) {
			const { data } = await axios.get('https://front-test.beta.aviasales.ru/tickets', {
				params: { searchId }
			});

            res.send({
				...data,
				tickets: data.tickets.filter((_, index) => index < 25)
			})
		}
	} catch (err) {
		console.error('[API: searchId] error', err.message);
		db.del('searchId');
		res.status(500);
		res.send({
			error: err.message,
			tickets: defaultTickets.tickets,
		});
	}
};
