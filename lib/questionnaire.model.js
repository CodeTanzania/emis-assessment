'use strict';


/**
 * @module Questionnaire
 * @name Questionnaire
 * @description WIP
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


/* dependencies */
const path = require('path');
const _ = require('lodash');
const async = require('async');
const { getString, getStrings } = require('@lykmapipo/env');
const mongoose = require('mongoose');
const actions = require('mongoose-rest-actions');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const Question = require(path.join(__dirname, 'question.model'));


/* constants */


/* assess */
const ASSESS_NEED = 'Need';
const ASSESS_SITUATION = 'Situtation';
const DEFAULT_ASSESS = 'Other';
const ASSESS = getStrings('ASSESSMENT_ASSESS', [
  ASSESS_NEED, ASSESS_SITUATION, DEFAULT_ASSESS
]);


/* stages */
const STAGE_BEFORE = 'Before';
const STAGE_DURING = 'During';
const STAGE_AFTER = 'After';
const DEFAULT_STAGE = 'Other';
const STAGES = getStrings('ASSESSMENT_STAGES', [
  STAGE_BEFORE, STAGE_DURING, STAGE_AFTER, DEFAULT_STAGE
]);


/* phases */
const DEFAULT_PHASE = 'Response';
const PHASES = getStrings('DISASTER_PHASES', [
  'Mitigation', 'Preparedness',
  'Response', 'Recovery'
]);


/* schema options */
const POPULATION_MAX_DEPTH = 1;
const MODEL_NAME = getString('MODEL_NAME', 'Questionnaire');
const COLLECTION_NAME = getString('COLLECTION_NAME', 'questionnaires');
const INDICATOR_SEED = getString('INDICATOR_SEED', 'questionnaires');
const SCHEMA_OPTIONS = ({
  timestamps: true,
  emitIndexErrors: true,
  collection: COLLECTION_NAME
});
const OPTION_AUTOPOPULATE = ({
  select: { access: 1, stage: 1, phase: 1, label: 1, name: 1 },
  maxDepth: POPULATION_MAX_DEPTH
});


/**
 * @name QuestionnaireSchema
 * @type {Schema}
 * @since 1.0.0
 * @version 0.1.0
 * @private
 */
const QuestionnaireSchema = new Schema({
  /**
   * @name assess
   * @description Human readable type of assessment a questionnaire is used for.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} default - default value set when none provided
   * @property {object} fake - fake data generator options
   *
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   * @example
   * Need
   */
  assess: {
    type: String,
    trim: true,
    required: true,
    enum: ASSESS,
    index: true,
    searchable: true,
    default: DEFAULT_ASSESS,
    fake: true
  },


  /**
   * @name stage
   * @description Human readable stage underwhich a questionnaire is used for
   * assessment.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} default - default value set when none provided
   * @property {object} fake - fake data generator options
   *
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   * @example
   * Before
   */
  stage: {
    type: String,
    trim: true,
    required: true,
    enum: STAGES,
    index: true,
    searchable: true,
    default: DEFAULT_STAGE,
    fake: true
  },


  /**
   * @name phase
   * @description Disaster management phase under which a questionnaire is used
   * for assessment
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {string[]} enum - collection of allowed values
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {boolean} default - default value set when none provided
   * @property {object} fake - fake data generator options
   *
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   * @example
   * Response
   */
  phase: {
    type: String,
    trim: true,
    required: true,
    enum: PHASES,
    index: true,
    searchable: true,
    default: DEFAULT_PHASE,
    fake: true
  },


  /**
   * @name name
   * @description Unique variable name of a question.
   *
   * Used to distinguish response collected from one question to another to
   * aid data analysis and exploratory.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   * @example
   * water_supply
   */
  title: {
    type: String,
    trim: true,
    required: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name description
   * @description A brief summary(definition) about a questionnaire to provide
   * additional details that clarify about a questionnaire.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   */
  description: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name questions
   * @description A set of questions belongs to a questionnaire.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {string} ref - referenced collection
   * @property {object} default - default value if non provided
   * @property {boolean} exists - ensure ref exists before save
   * @property {boolean} index - ensure database index
   * @property {object} autopopulate - auto population(eager loading) options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   */
  questions: {
    type: [ObjectId],
    ref: Question.MODEL_NAME,
    index: true,
    exists: true,
    autopopulate: true
  }

}, SCHEMA_OPTIONS);


/*
 *------------------------------------------------------------------------------
 * Indexes
 *------------------------------------------------------------------------------
 */


const uniqueIndex = ({ title: 1 });
QuestionnaireSchema.index(uniqueIndex, { unique: true });


/*
 *------------------------------------------------------------------------------
 * Hook
 *------------------------------------------------------------------------------
 */


QuestionnaireSchema.pre('validate', function preValidate(next) {

  this.preValidate(next);

});


/*
 *------------------------------------------------------------------------------
 *  Instance
 *------------------------------------------------------------------------------
 */


/**
 * @name preValidate
 * @function preValidate
 * @description question schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 * @since 1.0.0
 * @version 0.1.0
 * @instance
 */
QuestionnaireSchema.methods.preValidate = function preValidate(done) {

  // continue
  return done();

};


/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */


/* constants */
QuestionnaireSchema.statics.MODEL_NAME = MODEL_NAME;
QuestionnaireSchema.statics.COLLECTION_NAME = COLLECTION_NAME;
QuestionnaireSchema.statics.OPTION_AUTOPOPULATE = OPTION_AUTOPOPULATE;
QuestionnaireSchema.statics.POPULATION_MAX_DEPTH = POPULATION_MAX_DEPTH;

QuestionnaireSchema.statics.DEFAULT_ASSESS = DEFAULT_ASSESS;
QuestionnaireSchema.statics.ASSESS = ASSESS;

QuestionnaireSchema.statics.DEFAULT_STAGE = DEFAULT_STAGE;
QuestionnaireSchema.statics.STAGES = STAGES;

QuestionnaireSchema.statics.DEFAULT_PHASE = DEFAULT_PHASE;
QuestionnaireSchema.statics.PHASES = PHASES;


/**
 * @name upsert
 * @function upsert
 * @description create or update existing question
 * @param {Object} question valid question details
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 * @public
 */
QuestionnaireSchema.statics.upsert = function upsert(question, done) {

  //normalize arguments
  let _question = (
    _.isFunction(question.toObject) ?
    question.toObject() :
    question
  );

  //refs
  const Questionnaire = this;

  // prepare upsert
  async.waterfall([

    function findExistingQuestionnaire(next) {
      // prepare criteria by _id or fields
      let criteria = _.merge({}, _question);
      criteria = (
        criteria._id ?
        _.pick(criteria, '_id') :
        _.pick(criteria, 'title')
      );
      Questionnaire.findOne(criteria, next);
    },

    function upsertQuestionnaire(found, next) {
      // instantiate if not found
      if (!found) {
        found = new Questionnaire(_question);
      }

      // prepare updates
      _question = _.merge({}, _question, found.toObject());

      // do upsert
      found.updatedAt = new Date();
      found.put(_question, next);
    }
  ], done);
};


/**
 * @name seed
 * @function seed
 * @description seed questionnaires into database, on duplicate existing wins
 * on merging.
 * @param {Questionnaire[]} [questionnaires] set of question(s) to seed
 * @param {Function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 1.0.0
 * @version 0.1.0
 * @public
 */
QuestionnaireSchema.statics.seed = function seed(seeds, done) {

  // normalize arguments
  let _seeds = _.isFunction(seeds) ? [] : [].concat(seeds);
  const _done = _.isFunction(seeds) ? seeds : done;

  // refs
  const Questionnaire = this;

  // init questionnaires collection
  let questionnaires = [];

  // try load seeds from environment
  const BASE_PATH = getString('BASE_PATH', process.cwd());
  const SEEDS_PATH = getString('SEEDS_PATH', path.join(BASE_PATH, 'seeds'));
  const SEED_PATH = path.join(SEEDS_PATH, INDICATOR_SEED);
  try {
    const seed = require(SEED_PATH);
    _seeds = [].concat(_seeds).concat(seed);
  } catch (e) { /* ignore */ }

  // collect unique question from seeds
  _seeds = _.compact(_seeds);
  _seeds = _.uniqWith(_seeds, _.isEqual);

  // upsert questionnaires
  questionnaires = _.map([].concat(_seeds), function (question) {
    return function upsertQuestionnaires(next) {
      Questionnaire.upsert(question, next);
    };
  });

  // seed questionnaires
  async.parallel(questionnaires, _done);

};


/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */


/* plug mongoose rest actions */
QuestionnaireSchema.plugin(actions);


/* export question model */
exports = module.exports = mongoose.model(MODEL_NAME, QuestionnaireSchema);
