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
var Money = require('./Money');




/**
 * The OrderLineItemDiscount model module.
 * @module model/OrderLineItemDiscount
 */

/**
 * Constructs a new <code>OrderLineItemDiscount</code>.
 * Represents a discount that applies to one or more line items in an order.  Fixed-amount, order-level discounts are distributed across all non-zero line item totals. The amount distributed to each line item is relative to that item’s contribution to the order subtotal.
 * @alias module:model/OrderLineItemDiscount
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>OrderLineItemDiscount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderLineItemDiscount} obj Optional instance to populate.
 * @return {module:model/OrderLineItemDiscount} The populated <code>OrderLineItemDiscount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('scope')) {
      obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the discount only within this order.  This field is read-only.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * The catalog object id referencing [CatalogDiscount](#type-catalogdiscount).
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The discount's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The type of the discount. If it is created by API, it would be either `FIXED_PERCENTAGE` or `FIXED_AMOUNT`.  VARIABLE_* is not supported in API because the order is created at the time of sale and either percentage or amount has to be specified. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values
 * @member {module:model/OrderLineItemDiscount.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * The percentage of the discount, as a string representation of a decimal number. A value of `7.25` corresponds to a percentage of 7.25%.  The percentage won't be set for an amount-based discount.
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * The total monetary amount of the applicable discount. If it is at order level, it is the value of the order level discount. If it is at line item level, it is the value of the line item level discount.  The amount_money won't be set for a percentage-based discount.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The amount of discount actually applied to this line item.  Represents the amount of money applied to a line item as a discount When an amount-based discount is at order-level, this value is different from `amount_money` because the discount is distributed across the line items.
 * @member {module:model/Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * Indicates the level at which the discount applies. This field is set by the server. If set in a CreateOrder request, it will be ignored on write. See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values
 * @member {module:model/OrderLineItemDiscount.ScopeEnum} scope
 */
exports.prototype['scope'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "UNKNOWN_DISCOUNT"
     * @const
     */
    "UNKNOWN_DISCOUNT": "UNKNOWN_DISCOUNT",
    /**
     * value: "FIXED_PERCENTAGE"
     * @const
     */
    "FIXED_PERCENTAGE": "FIXED_PERCENTAGE",
    /**
     * value: "FIXED_AMOUNT"
     * @const
     */
    "FIXED_AMOUNT": "FIXED_AMOUNT",
    /**
     * value: "VARIABLE_PERCENTAGE"
     * @const
     */
    "VARIABLE_PERCENTAGE": "VARIABLE_PERCENTAGE",
    /**
     * value: "VARIABLE_AMOUNT"
     * @const
     */
    "VARIABLE_AMOUNT": "VARIABLE_AMOUNT"  };

  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "OTHER_DISCOUNT_SCOPE"
     * @const
     */
    "OTHER_DISCOUNT_SCOPE": "OTHER_DISCOUNT_SCOPE",
    /**
     * value: "LINE_ITEM"
     * @const
     */
    "LINE_ITEM": "LINE_ITEM",
    /**
     * value: "ORDER"
     * @const
     */
    "ORDER": "ORDER"  };


module.exports = exports;



