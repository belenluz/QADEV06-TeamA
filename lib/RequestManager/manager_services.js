var request = require('../Request/request.js');
var routes = require('../../lib/BuildRoutes/routes.js');
var method = require('../../config/method.json');
var config = require('../../config/config.json');
var headers = require('../../config/headers.json');
var headersArray = [];
/**
 * This function is used to do the corresponding
 * request ("GET") for "services" service.
 * @param callback {function}
 */
var getServices = function(callback){
    var endPoint = routes.services.URI();
    var dataRequest = {};
    var authorization = config.typeAuthentication.jwt;
    var dataRequest = {"Authorization" : authorization};

    request.buildRequest("get", endPoint, dataRequest, function(err, res){
        callback(err, res);
    });
};
exports.getServices = getServices;
