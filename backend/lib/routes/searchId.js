const axios = require('axios');

var db = require('../../util/db');
var config = require('../../config');

module.exports = function (req, res) {
    // Fetch all registered device tokens
    // axios.get('https://front-test.beta.aviasales.ru/search')
    //     .then(({ searchId }) => )
    //     .catch(err => console.error('[API: searchId] error', err.message))
    // res.send({ success: true })
    res.send({ succes: true })
};
