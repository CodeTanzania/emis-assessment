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
 * @name indicatorRouter
 * @description indicator http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
// exports.indicatorRouter = indicatorRouter;


/**
 * @name questionRouter
 * @description question http router
 * @type {express.Router}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
// exports.questionRouter = questionRouter;


/**
 * @name apiVersion
 * @description http router api version
 * @type {String}
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 */
// exports.apiVersion = indicatorRouter.apiVersion;


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
    // app.mount(indicatorRouter);
    // app.mount(questionRouter);
    return app;
  }
});
