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
 * Enum class V1PaymentSurchargeType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",
  /**
   * value: "AUTO_GRATUITY"
   * @const
   */
  "AUTO_GRATUITY": "AUTO_GRATUITY",
  /**
   * value: "CUSTOM"
   * @const
   */
  "CUSTOM": "CUSTOM"};

/**
 * Returns a <code>V1PaymentSurchargeType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/V1PaymentSurchargeType} The enum <code>V1PaymentSurchargeType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


