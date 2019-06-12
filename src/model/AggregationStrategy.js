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
 * Enum class AggregationStrategy.
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
   * value: "BASE"
   * @const
   */
  "BASE": "BASE",
  /**
   * value: "STACKABLE"
   * @const
   */
  "STACKABLE": "STACKABLE",
  /**
   * value: "EXCLUSIVE"
   * @const
   */
  "EXCLUSIVE": "EXCLUSIVE"};

/**
 * Returns a <code>AggregationStrategy</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/AggregationStrategy} The enum <code>AggregationStrategy</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


