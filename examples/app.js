'use strict';


/* ensure mongo uri */
process.env.MONGODB_URI =
  (process.env.MONGODB_URI || 'mongodb://localhost/emis-assessment');


/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const mongoose = require('mongoose');
const {
  Indicator,
  Question,
  apiVersion,
  info,
  app
} = require(path.join(__dirname, '..'));


/* connect to mongoose */
mongoose.connect(process.env.MONGODB_URI);

//boot
async.waterfall([

  function clearQuestions(next) {
    Question.deleteMany(function ( /*error, results*/ ) {
      next();
    });
  },

  function clearIndicators(next) {
    Indicator.deleteMany(function ( /*error, results*/ ) {
      next();
    });
  },

  function seedIndicators(next) {
    const indicators = Indicator.fake(5);
    Indicator.seed(indicators, next);
  },

  function seedQuestions(indicators, next) {
    const questions = Question.fake(indicators.length);
    _.map(questions, function (question, index) {
      questions[index].indicator = indicators[index];
    });
    Question.seed(questions, next);
  }

], (error, results) => {

  console.log(error);

  /* expose module info */
  app.get('/', (request, response) => {
    response.status(200);
    response.json(info);
  });

  /* fire the app */
  app.start((error, env) => {
    console.log(
      `visit http://0.0.0.0:${env.PORT}/v${apiVersion}/indicators`
    );
  });

});
