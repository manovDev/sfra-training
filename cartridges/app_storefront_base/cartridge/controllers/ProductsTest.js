'use strict';

/**
 * @namespace ProductsTest
 */

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');
/**
 * Any customization on this endpoint, also requires update for Default-Start endpoint
 */
/**
 * ProductsTest-Show : This endpoint is called when a shopper navigates to the ProductsTest page 
 * @name Base/ProductsTest-Show
 * @function
 * @memberof ProductsTest
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    'Show',
    function (req, res, next) {
        var ProductSearchModel = require('dw/catalog/ProductSearchModel');
        var results = new ProductSearchModel();
        var query = req.httpParameterMap.query;
        results.setSearchPhrase(query);
        results.search();
    res.render('test/products', {
        searchResults: results,
        query: query,
        format: req.httpParameterMap.format
    });
    next();
}, pageMetaData.computedPageMetaData);


module.exports = server.exports();
