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
 * Enum class V1TenderType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "CREDIT_CARD"
   * @const
   */
  "CREDIT_CARD": "CREDIT_CARD",
  /**
   * value: "CASH"
   * @const
   */
  "CASH": "CASH",
  /**
   * value: "THIRD_PARTY_CARD"
   * @const
   */
  "THIRD_PARTY_CARD": "THIRD_PARTY_CARD",
  /**
   * value: "NO_SALE"
   * @const
   */
  "NO_SALE": "NO_SALE",
  /**
   * value: "SQUARE_WALLET"
   * @const
   */
  "SQUARE_WALLET": "SQUARE_WALLET",
  /**
   * value: "SQUARE_GIFT_CARD"
   * @const
   */
  "SQUARE_GIFT_CARD": "SQUARE_GIFT_CARD",
  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER"};

/**
 * Returns a <code>V1TenderType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/V1TenderType} The enum <code>V1TenderType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


