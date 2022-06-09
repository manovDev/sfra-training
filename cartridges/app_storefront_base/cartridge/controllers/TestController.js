'use strict';

/**
 * @namespace TestController
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
 * TestController-Show : This endpoint is called when a shopper navigates to the TestController page 
 * @name Base/TestController-Show
 * @function
 * @memberof TestController
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    'Show',
    consentTracking.consent,
    cache.applyDefaultCache,
    function (req, res, next) {
    var Site = require('dw/system/Site');
    res.render('test/home', {
        welcomeMsg: "user"
    });
    next();
}, pageMetaData.computedPageMetaData);

server.get(
    'Include',
    server.middleware.include,
    function (req, res, next) {
    var Site = require('dw/system/Site');
    res.render('test/homePartial', {
        welcomeMsg: "user"
    });
    next();
}, pageMetaData.computedPageMetaData);

module.exports = server.exports();
