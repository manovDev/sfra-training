'use strict';

/**
 * If the resource to add is not already in the resource array then add it to the array
 * @param {Array} resourceArray - Either the scripts or styles array to which you want to add the resource src to.
 */
function getDeathstarInfo() {
    var getDeathstarInfoService = dw.svc.LocalServiceRegistry.createService("http.swapideathstart.show.getdeathstarinfo", {
        createRequest: function(svc, args) {
            svc.setRequestMethod('GET');
            return args;
        },

        parseResponse: function(svc, client) {
            return client.text;
        }
    });

    var response = getDeathstarInfoService.call().object;

    return response;
}

module.exports = {
    getDeathstarInfo: getDeathstarInfo
};
