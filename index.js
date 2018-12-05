'use strict';


/**
 * @module Assessment
 * @name Assessment
 * @description WIP
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @licence MIT
 * @since  0.1.0
 * @version 0.1.0
 * @example
 *
 * const { app } = require('@codetanzania/emis-assessment');
 * app.start();
 *
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const app = require('@lykmapipo/express-common');
const mongoose = require('mongoose');
const pkg = require(path.join(__dirname, 'package.json'));
require('mongoose-schema-jsonschema')(mongoose);
const Indicator = require(path.join(__dirname, 'lib', 'indicator.model'));
const Question = require(path.join(__dirname, 'lib', 'question.model'));
const Questionnaire = require(path.join(__dirname, 'lib', 'questionnaire.model'));
const Assessment = require(path.join(__dirname, 'lib', 'assessment.model'));
/*jshint -W079 */
const Response = require(path.join(__dirname, 'lib', 'response.model'));
const Observation = require(path.join(__dirname, 'lib', 'observation.model'));
const indicatorRouter =
  require(path.join(__dirname, 'lib', 'indicator.http.router'));
const questionRouter =
  require(path.join(__dirname, 'lib', 'question.http.router'));

/**
 * @name info
 * @description package information
 * @type {Object}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.info = _.merge({}, _.pick(pkg, [
  'name', 'description', 'version', 'license',
  'homepage', 'repository', 'bugs', 'sandbox', 'contributors'
]));


/**
 * @name Indicator
 * @description Indicator model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Indicator = Indicator;


/**
 * @name Question
 * @description Question model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Question = Question;


/**
 * @name Questionnaire
 * @description Questionnaire model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Questionnaire = Questionnaire;


/**
 * @name Observation
 * @description Observation model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Observation = Observation;


/**
 * @name Response
 * @description Response model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Response = Response;


/**
 * @name Assessment
 * @description Assessment model
 * @type {mongoose.Model}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.Assessment = Assessment;


/**
 * @name indicatorRouter
 * @description indicator http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.indicatorRouter = indicatorRouter;


/**
 * @name questionRouter
 * @description question http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.questionRouter = questionRouter;


/**
 * @name questionnaireRouter
 * @description questionnaire http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
// exports.questionnaireRouter = questionnaireRouter;


/**
 * @name responseRouter
 * @description response http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
// exports.responseRouter = responseRouter;


/**
 * @name observationRouter
 * @description observation http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
// exports.observationRouter = observationRouter;


/**
 * @name apiVersion
 * @description http router api version
 * @type {String}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
exports.apiVersion = indicatorRouter.apiVersion;


/**
 * @name app
 * @description express app
 * @type {Object}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
Object.defineProperty(exports, 'app', {
  get() {
    /* @todo bind oauth middlewares authenticate, token, authorize */
    app.mount(indicatorRouter);
    app.mount(questionRouter);
    // app.mount(questionnaireRouter);
    // app.mount(responseRouter);
    // app.mount(observationRouter);
    return app;
  }
});
