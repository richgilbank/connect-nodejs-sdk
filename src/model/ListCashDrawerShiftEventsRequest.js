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




/**
 * The ListCashDrawerShiftEventsRequest model module.
 * Note: This model is in beta.
 * @module model/ListCashDrawerShiftEventsRequest
 */

/**
 * Constructs a new <code>ListCashDrawerShiftEventsRequest</code>.
 *
 * @alias module:model/ListCashDrawerShiftEventsRequest
 * @class
 * @param locationId {String} The ID of the location to list cash drawer shifts for.
 */
var exports = function(locationId) {
  var _this = this;

  _this['location_id'] = locationId;


};

/**
 * Constructs a <code>ListCashDrawerShiftEventsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListCashDrawerShiftEventsRequest} obj Optional instance to populate.
 * @return {module:model/ListCashDrawerShiftEventsRequest} The populated <code>ListCashDrawerShiftEventsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
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
 * The ID of the location to list cash drawer shifts for.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * Number of resources to be returned in a page of results (200 by default, 1000 max).
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * Opaque cursor for fetching the next page of results.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



