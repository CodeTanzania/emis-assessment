'use strict';


/**
 * @apiDefine Indicator Indicator
 *
 * @apiDescription A representation of measure that is used to assess need,
 * situation and characteristics of disaster(or emergency) event.
 *
 * @see {@link https://en.wikipedia.org/wiki/Disaster}
 * @see {@link https://www.med.or.jp/english/journal/pdf/2013_01/019_024.pdf}
 * @see {@link https://www.humanitarianresponse.info/sites/www.humanitarianresponse.info/files/documents/files/Rapid_Assessment_Methodology_ENG.pdf}
 * @see {@link https://www.spherestandards.org/handbook/}
 * @see {@link https://www.unocha.org/es/media-centre/humanitarian-reports}
 * @see {@link https://www.unescap.org/sites/default/files/publications/High%20res_Rapid%20Assessment_ESCAP%20IDD_1.pdf}
 * @see {@link https://unstats.un.org/unsd/iiss/Classification-of-International-Statistical-Activities.ashx}
 * @see {@link http://xlsform.org/en/}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 1.0.0
 * @version 0.1.0
 * @public
 */


/**
 * @apiDefine Indicator
 * @apiSuccess {String} _id Unique indicator identifier
 * @apiSuccess {String} [base] Top(generic or main) indicator under which
 * specific indicator(s) is derived.
 * @apiSuccess {String} subject Human readable subject of an indicator(s).
 * @apiSuccess {String} topic Human readable topic of an indicator(s).
 * @apiSuccess {String} [description] A brief summary(definition) about an
 * indicator if available i.e additional details that clarify about
 * an indicator.
 * @apiSuccess {String} [color] A color code(in hexadecimal format) used to
 * differentiate indicators visually.
 * @apiSuccess {String} [icon] An icon(in url, base64, svg formats) used to
 * differentiate indicators visually.
 * @apiSuccess {Date} createdAt Date when indicator was created.
 * @apiSuccess {Date} updatedAt Date when indicator was last updated.
 */


/**
 * @apiDefine Indicators
 * @apiSuccess {Object[]} data List of indicators
 * @apiSuccess {String} data._id Unique indicator identifier
 * @apiSuccess {String} [data.base] Top(generic or main) indicator under which
 * specific indicator(s) is derived.
 * @apiSuccess {String} data.subject Human readable subject of an indicator(s).
 * @apiSuccess {String} data.topic Human readable topic of an indicator(s).
 * @apiSuccess {String} [data.description] A brief summary(definition) about an
 * indicator if available i.e additional details that clarify about
 * an indicator.
 * @apiSuccess {String} [data.color] A color code(in hexadecimal format) used to
 * differentiate indicators visually.
 * @apiSuccess {String} [data.icon] An icon(in url, base64, svg formats) used to
 * differentiate indicators visually.
 * @apiSuccess {Date} data.createdAt Date when indicator was created.
 * @apiSuccess {Date} data.updatedAt Date when indicator was last updated.
 * @apiSuccess {Number} total Total number of indicator
 * @apiSuccess {Number} size Number of indicator returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest indicator
 * was last modified
 */


/**
 * @apiDefine IndicatorSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "_id": "5c067903d6ef66608f81823c",
 *    "subject": "Water",
 *    "topic": "Water Supply",
 *    "color": "#BCDEFF",
 *    "updatedAt": "2018-12-04T12:54:27.691Z",
 *    "createdAt": "2018-12-04T12:54:27.690Z"
 *  }
 */


/**
 * @apiDefine IndicatorsSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "data": [
 *      {
 *        "_id": "5c067903d6ef66608f81823c",
 *        "subject": "Water",
 *        "topic": "Water Supply",
 *        "color": "#BCDEFF",
 *        "updatedAt": "2018-12-04T12:54:27.691Z",
 *        "createdAt": "2018-12-04T12:54:27.690Z"
 *      }
 *    ],
 *   "total": 10,
 *   "size": 2,
 *   "limit": 2,
 *   "skip": 0,
 *   "page": 1,
 *   "pages": 5,
 *   "lastModified": "2018-05-06T10:19:04.910Z"
 * }
 *
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const Router = require('@lykmapipo/express-common').Router;
const { getString } = require('@lykmapipo/env');


/* constants */
const API_VERSION = getString('API_VERSION', '1.0.0');
const PATH_LIST = '/indicators';
const PATH_SINGLE = '/indicators/:id';
const PATH_SCHEMA = '/indicators/schema/';


/* declarations */
const Indicator = require(path.join(__dirname, 'indicator.model'));
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /indicators List Indicators
 * @apiVersion 1.0.0
 * @apiName GetIndicators
 * @apiGroup Indicator
 * @apiDescription Returns a list of indicators
 * @apiUse RequestHeaders
 * @apiUse Indicators
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IndicatorsSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getIndicators(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  Indicator
    .get(options, function onGetIndicators(error, results) {

      // forward error
      if (error) {
        next(error);
      }

      // handle response
      else {
        response.status(200);
        response.json(results);
      }

    });

});


/**
 * @api {get} /indicators/schema Get Indicators Schema
 * @apiVersion 1.0.0
 * @apiName GetIndicatorSchema
 * @apiGroup Indicator
 * @apiDescription Returns indicator json schema definition
 * @apiUse RequestHeaders
 */
router.get(PATH_SCHEMA, function getIndicatorSchema(request, response) {
  const schema = Indicator.jsonSchema();
  response.status(200);
  response.json(schema);
});


/**
 * @api {post} /indicators Create New Indicators
 * @apiVersion 1.0.0
 * @apiName PostIndicator
 * @apiGroup Indicator
 * @apiDescription Create new indicator
 * @apiUse RequestHeaders
 * @apiUse Indicator
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IndicatorSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .post(PATH_LIST, function postIndicator(request, response, next) {

    // obtain request body
    const body = _.merge({}, request.body);

    Indicator
      .post(body, function onPostIndicator(error, created) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(201);
          response.json(created);
        }

      });

  });


/**
 * @api {get} /indicators/:id Get Existing Indicators
 * @apiVersion 1.0.0
 * @apiName GetIndicator
 * @apiGroup Indicator
 * @apiDescription Get existing indicator
 * @apiUse RequestHeaders
 * @apiUse Indicator
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IndicatorSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .get(PATH_SINGLE, function getIndicator(request, response, next) {

    // obtain request options
    const options = _.merge({}, request.mquery);

    // obtain indicator id
    options._id = request.params.id;

    Indicator
      .getById(options, function onGetIndicator(error, found) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(found);
        }

      });

  });


/**
 * @api {patch} /indicators/:id Patch Existing Indicators
 * @apiVersion 1.0.0
 * @apiName PatchIndicator
 * @apiGroup Indicator
 * @apiDescription Patch existing indicator
 * @apiUse RequestHeaders
 * @apiUse Indicator
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IndicatorSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .patch(PATH_SINGLE, function patchIndicator(request, response, next) {

    // obtain indicator id
    const { id } = request.params;

    // obtain request body
    const patches = _.merge({}, request.body);

    Indicator
      .patch(id, patches, function onPatchIndicator(error, patched) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(patched);
        }

      });

  });


/**
 * @api {put} /indicators/:id Put Existing Indicators
 * @apiVersion 1.0.0
 * @apiName PutIndicator
 * @apiGroup Indicator
 * @apiDescription Put existing indicator
 * @apiUse RequestHeaders
 * @apiUse Indicator
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IndicatorSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .put(PATH_SINGLE, function putIndicator(request, response, next) {

    // obtain indicator id
    const { id } = request.params;

    // obtain request body
    const updates = _.merge({}, request.body);

    Indicator
      .put(id, updates, function onPutIndicator(error, updated) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(updated);
        }

      });

  });


/**
 * @api {delete} /indicators/:id Delete Existing Indicators
 * @apiVersion 1.0.0
 * @apiName DeleteIndicator
 * @apiGroup Indicator
 * @apiDescription Delete existing indicator
 * @apiUse RequestHeaders
 * @apiUse Indicator
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse IndicatorSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .delete(PATH_SINGLE, function deleteIndicator(request, response, next) {

    // obtain indicator id
    const { id } = request.params;

    Indicator
      .del(id, function onDeleteIndicator(error, deleted) {

        // forward error
        if (error) {
          next(error);
        }

        // handle response
        else {
          response.status(200);
          response.json(deleted);
        }

      });

  });


/* expose indicator router */
exports = module.exports = router;
