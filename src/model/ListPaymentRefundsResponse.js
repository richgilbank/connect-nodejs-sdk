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
var Error = require('./Error');
var PaymentRefund = require('./PaymentRefund');




/**
 * The ListPaymentRefundsResponse model module.
 * @module model/ListPaymentRefundsResponse
 */

/**
 * Constructs a new <code>ListPaymentRefundsResponse</code>.
 * Defines the fields that are included in the response body of a request to the [ListPaymentRefunds](#endpoint-refunds-listpaymentrefunds) endpoint.  One of &#x60;errors&#x60; or &#x60;refunds&#x60; is present in a given response (never both).
 * @alias module:model/ListPaymentRefundsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListPaymentRefundsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListPaymentRefundsResponse} obj Optional instance to populate.
 * @return {module:model/ListPaymentRefundsResponse} The populated <code>ListPaymentRefundsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('refunds')) {
      obj['refunds'] = ApiClient.convertToType(data['refunds'], [PaymentRefund]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Information on errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The list of requested refunds.
 * @member {Array.<module:model/PaymentRefund>} refunds
 */
exports.prototype['refunds'] = undefined;
/**
 * The pagination cursor to be used in a subsequent request. If empty, this is the final response.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



