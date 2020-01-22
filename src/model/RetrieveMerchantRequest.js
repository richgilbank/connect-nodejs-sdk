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
 * The RetrieveMerchantRequest model module.
 * @module model/RetrieveMerchantRequest
 */

/**
 * Constructs a new <code>RetrieveMerchantRequest</code>.
 * Request object for the [RetrieveMerchant](#endpoint-retrievemerchant) endpoint.
 * @alias module:model/RetrieveMerchantRequest
 * @class
 */
var exports = function() {
  var _this = this;

};

/**
 * Constructs a <code>RetrieveMerchantRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveMerchantRequest} obj Optional instance to populate.
 * @return {module:model/RetrieveMerchantRequest} The populated <code>RetrieveMerchantRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    }
  return obj;
}




module.exports = exports;



