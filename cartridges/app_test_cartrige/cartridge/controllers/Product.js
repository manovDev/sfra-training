'use strict';

/**
 * @namespace Product
 */

var server = require('server');
server.extend(module.superModule);


server.append('Show', function (req, res, next) { //adds additional middleware
    var viewData = res.getViewData();
    if(viewData.product) {
        viewData.product.reviews = [{
            text: 'good',
            rating: 3.5
        }, {
            text: 'Very short review',
            rating: 5
        }, {
            text: 'Lorem ipsum dolor sit amet, cibo utroque ne vis, has no sumo graece.',
            rating: 1.5
        }];
    
    }
    res.setViewData(viewData);
    next();
    
});

module.exports = server.exports();