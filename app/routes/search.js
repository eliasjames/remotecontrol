'use strict';

var search = require('../controllers/search');

module.exports = function(app) {
    app.get('/search', search.all);
};