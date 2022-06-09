'use strict';

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var deathstarInfoService = require('*/cartridge/scripts/deathstarInfoService.js');

  /**
  * Product-Show : This endpoint is called to show the details of the selected product
  * @name SwapiDeathStar
  * @param {middleware} - server.middleware.include
  */

server.get('Show', 
    server.middleware.include,
    cache.applyPromotionSensitiveCache,
    function (req, res, next) {

        // var httpClient = new dw.net.HTTPClient();
        // httpClient.open('GET', 'https://swapi.dev/api/starships/9/');
        // httpClient.send();

        // var result = JSON.parse(httpClient.text);

        var result = JSON.parse(deathstarInfoService.getDeathstarInfo());

        res.render('home/deathstar', {
            result: result
        })
    next();
});

module.exports = server.exports();
