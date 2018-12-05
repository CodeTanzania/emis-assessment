'use strict';


/**
 * @apiDefine Question Question
 *
 * @apiDescription WIP
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
 * @apiDefine Question
 * @apiSuccess {String} _id Unique question identifier
 * @apiSuccess {String} indicator Indicator which a question assess.
 * @apiSuccess {String} assess Human readable type of assessment a question
 * is used for.
 * @apiSuccess {String} stage Human readable stage underwhich a question is
 * used to assess an indicator.
 * @apiSuccess {String} phase Disaster management phase under which a question is
 * applicable to assess an indicator.
 * @apiSuccess {String} type Human readable type of entry of a question.
 * @apiSuccess {String} name Unique variable name of a question.
 * @apiSuccess {String} label Human readable label of a question.
 * @apiSuccess {String} [help] A brief additional details that clarify about
 * a question.
 * @apiSuccess {Object[]} [choices] A set of allowed choices(or selection
 * options) of a question.
 * @apiSuccess {String} [choices.label] Human readable option(or answer choice)
 * of a question.
 * @apiSuccess {String} [choices.name] Unique value(or variable) of a question
 * option(or answer choice).
 * @apiSuccess {Date} createdAt Date when question was created.
 * @apiSuccess {Date} updatedAt Date when question was last updated.
 */


/**
 * @apiDefine Questions
 * @apiSuccess {Object[]} data List of questions
 * @apiSuccess {String} data._id Unique question identifier
 * @apiSuccess {String} data.indicator Indicator which a question assess.
 * @apiSuccess {String} data.assess Human readable type of assessment a question
 * is used for.
 * @apiSuccess {String} data.stage Human readable stage underwhich a question is
 * used to assess an indicator.
 * @apiSuccess {String} data.phase Disaster management phase under which a
 * question is applicable to assess an indicator.
 * @apiSuccess {String} data.type Human readable type of entry of a question.
 * @apiSuccess {String} data.name Unique variable name of a question.
 * @apiSuccess {String} data.label Human readable label of a question.
 * @apiSuccess {String} [data.help] A brief additional details that clarify about
 * a question.
 * @apiSuccess {Object[]} [data.choices] A set of allowed choices(or selection
 * options) of a question.
 * @apiSuccess {String} [data.choices.label] Human readable option(or answer choice)
 * of a question.
 * @apiSuccess {String} [data.choices.name] Unique value(or variable) of a question
 * option(or answer choice).
 * @apiSuccess {Date} data.createdAt Date when question was created.
 * @apiSuccess {Date} data.updatedAt Date when question was last updated.
 * @apiSuccess {Number} total Total number of question
 * @apiSuccess {Number} size Number of question returned
 * @apiSuccess {Number} limit Query limit used
 * @apiSuccess {Number} skip Query skip/offset used
 * @apiSuccess {Number} page Page number
 * @apiSuccess {Number} pages Total number of pages
 * @apiSuccess {Date} lastModified Date and time at which latest question
 * was last modified
 */


/**
 * @apiDefine QuestionSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 *  {
 *     "_id": "5c0777154797997c9dae8d7c",
 *     "indicator":
 *     {
 *         "_id": "5c0777154797997c9dae8d72"
 *         "subject": "Water",
 *         "topic": "Water Supply",
 *     },
 *     "assess": "Need",
 *     "stage": "During",
 *     "phase": "Preparedness",
 *     "type": "text",
 *     "name": "water_supply_before",
 *     "label": "Was there water supply before the disaster?",
 *     "choices": [
 *     {
 *         "label": "Yes",
 *         "name": "yes"
 *     },
 *     {
 *         "label": "No",
 *         "name": "no"
 *     }]
 *  }
 */


/**
 * @apiDefine QuestionsSuccessResponse
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "data": [
 *     {
 *      "_id": "5c0777154797997c9dae8d7c",
 *      "indicator":
 *      {
 *         "_id": "5c0777154797997c9dae8d72"
 *         "subject": "Water",
 *         "topic": "Water Supply",
 *      },
 *      "assess": "Need",
 *      "stage": "During",
 *      "phase": "Preparedness",
 *      "type": "text",
 *      "name": "water_supply_before",
 *      "label": "Was there water supply before the disaster?",
 *      "choices": [
 *      {
 *         "label": "Yes",
 *         "name": "yes"
 *      },
 *      {
 *         "label": "No",
 *         "name": "no"
 *      }]
 *     }
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
const PATH_LIST = '/questions';
const PATH_SINGLE = '/questions/:id';
const PATH_SCHEMA = '/questions/schema/';


/* declarations */
const Question = require(path.join(__dirname, 'question.model'));
const router = new Router({
  version: API_VERSION
});


/**
 * @api {get} /questions List Questions
 * @apiVersion 1.0.0
 * @apiName GetQuestions
 * @apiGroup Question
 * @apiDescription Returns a list of questions
 * @apiUse RequestHeaders
 * @apiUse Questions
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse QuestionsSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router.get(PATH_LIST, function getQuestions(request, response, next) {

  // obtain request options
  const options = _.merge({}, request.mquery);

  Question
    .get(options, function onGetQuestions(error, results) {

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
 * @api {get} /questions/schema Get Questions Schema
 * @apiVersion 1.0.0
 * @apiName GetQuestionSchema
 * @apiGroup Question
 * @apiDescription Returns question json schema definition
 * @apiUse RequestHeaders
 */
router.get(PATH_SCHEMA, function getQuestionSchema(request, response) {
  const schema = Question.jsonSchema();
  response.status(200);
  response.json(schema);
});


/**
 * @api {post} /questions Create New Questions
 * @apiVersion 1.0.0
 * @apiName PostQuestion
 * @apiGroup Question
 * @apiDescription Create new question
 * @apiUse RequestHeaders
 * @apiUse Question
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse QuestionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .post(PATH_LIST, function postQuestion(request, response, next) {

    // obtain request body
    const body = _.merge({}, request.body);

    Question
      .post(body, function onPostQuestion(error, created) {

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
 * @api {get} /questions/:id Get Existing Questions
 * @apiVersion 1.0.0
 * @apiName GetQuestion
 * @apiGroup Question
 * @apiDescription Get existing question
 * @apiUse RequestHeaders
 * @apiUse Question
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse QuestionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .get(PATH_SINGLE, function getQuestion(request, response, next) {

    // obtain request options
    const options = _.merge({}, request.mquery);

    // obtain question id
    options._id = request.params.id;

    Question
      .getById(options, function onGetQuestion(error, found) {

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
 * @api {patch} /questions/:id Patch Existing Questions
 * @apiVersion 1.0.0
 * @apiName PatchQuestion
 * @apiGroup Question
 * @apiDescription Patch existing question
 * @apiUse RequestHeaders
 * @apiUse Question
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse QuestionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .patch(PATH_SINGLE, function patchQuestion(request, response, next) {

    // obtain question id
    const { id } = request.params;

    // obtain request body
    const patches = _.merge({}, request.body);

    Question
      .patch(id, patches, function onPatchQuestion(error, patched) {

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
 * @api {put} /questions/:id Put Existing Questions
 * @apiVersion 1.0.0
 * @apiName PutQuestion
 * @apiGroup Question
 * @apiDescription Put existing question
 * @apiUse RequestHeaders
 * @apiUse Question
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse QuestionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .put(PATH_SINGLE, function putQuestion(request, response, next) {

    // obtain question id
    const { id } = request.params;

    // obtain request body
    const updates = _.merge({}, request.body);

    Question
      .put(id, updates, function onPutQuestion(error, updated) {

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
 * @api {delete} /questions/:id Delete Existing Questions
 * @apiVersion 1.0.0
 * @apiName DeleteQuestion
 * @apiGroup Question
 * @apiDescription Delete existing question
 * @apiUse RequestHeaders
 * @apiUse Question
 *
 *
 * @apiUse RequestHeadersExample
 * @apiUse QuestionSuccessResponse
 * @apiUse JWTError
 * @apiUse JWTErrorExample
 * @apiUse AuthorizationHeaderError
 * @apiUse AuthorizationHeaderErrorExample
 */
router
  .delete(PATH_SINGLE, function deleteQuestion(request, response, next) {

    // obtain question id
    const { id } = request.params;

    Question
      .del(id, function onDeleteQuestion(error, deleted) {

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


/* expose question router */
exports = module.exports = router;
