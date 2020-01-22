/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var ShiftQuery = require('./ShiftQuery');




/**
 * The SearchShiftsRequest model module.
 * @module model/SearchShiftsRequest
 */

/**
 * Constructs a new <code>SearchShiftsRequest</code>.
 * A request for a filtered and sorted set of &#x60;Shift&#x60; objects.
 * @alias module:model/SearchShiftsRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchShiftsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchShiftsRequest} obj Optional instance to populate.
 * @return {module:model/SearchShiftsRequest} The populated <code>SearchShiftsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
      obj['query'] = ShiftQuery.constructFromObject(data['query']);
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Query filters.
 * @member {module:model/ShiftQuery} query
 */
exports.prototype['query'] = undefined;
/**
 * number of resources in a page (200 by default).
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * opaque cursor for fetching the next page.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



