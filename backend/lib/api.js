var express = require('express');
var morgan = require('morgan')

var config = require('../config');

exports.initialize = function () {
    // Initialize API
    var api = express();

    api.disable('etag');
    api.use(morgan('tiny'))

    setupRoutes(api);

    var port = process.env.PORT || config.api.port;

    api.listen(port, function () {
        console.log('[API]', 'Listening on port ' + port);
    });
};

function setupRoutes(api) {
    // Index endpoint
    api.get('/', require('./routes/index'));

    // Send notifications endpoint
    api.get('/api/searchId', require('./routes/searchId'));

    // Device registration endpoint
    api.get('/api/tickets', require('./routes/tickets'));
}
