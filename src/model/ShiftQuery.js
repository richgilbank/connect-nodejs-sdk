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
var ShiftFilter = require('./ShiftFilter');
var ShiftSort = require('./ShiftSort');




/**
 * The ShiftQuery model module.
 * @module model/ShiftQuery
 */

/**
 * Constructs a new <code>ShiftQuery</code>.
 * The parameters of a &#x60;Shift&#x60; search query. Includes filter and sort options.
 * @alias module:model/ShiftQuery
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>ShiftQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ShiftQuery} obj Optional instance to populate.
 * @return {module:model/ShiftQuery} The populated <code>ShiftQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
      obj['filter'] = ShiftFilter.constructFromObject(data['filter']);
    }
      if (data.hasOwnProperty('sort')) {
      obj['sort'] = ShiftSort.constructFromObject(data['sort']);
    }
    }
  return obj;
}

/**
 * Query filter options
 * @member {module:model/ShiftFilter} filter
 */
exports.prototype['filter'] = undefined;
/**
 * Sort order details
 * @member {module:model/ShiftSort} sort
 */
exports.prototype['sort'] = undefined;



module.exports = exports;



