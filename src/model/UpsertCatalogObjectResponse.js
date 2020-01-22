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
var CatalogIdMapping = require('./CatalogIdMapping');
var CatalogObject = require('./CatalogObject');
var Error = require('./Error');




/**
 * The UpsertCatalogObjectResponse model module.
 * @module model/UpsertCatalogObjectResponse
 */

/**
 * Constructs a new <code>UpsertCatalogObjectResponse</code>.
 *
 * @alias module:model/UpsertCatalogObjectResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>UpsertCatalogObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/UpsertCatalogObjectResponse} obj Optional instance to populate.
 * @return {module:model/UpsertCatalogObjectResponse} The populated <code>UpsertCatalogObjectResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('catalog_object')) {
      obj['catalog_object'] = CatalogObject.constructFromObject(data['catalog_object']);
    }
      if (data.hasOwnProperty('id_mappings')) {
      obj['id_mappings'] = ApiClient.convertToType(data['id_mappings'], [CatalogIdMapping]);
    }
    }
  return obj;
}

/**
 * Information on any errors encountered.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The successfully created or updated CatalogObject.
 * @member {module:model/CatalogObject} catalog_object
 */
exports.prototype['catalog_object'] = undefined;
/**
 * The mapping between client and server IDs for this upsert.
 * @member {Array.<module:model/CatalogIdMapping>} id_mappings
 */
exports.prototype['id_mappings'] = undefined;



module.exports = exports;



