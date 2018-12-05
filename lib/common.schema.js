'use strict';


/**
 * @module CommonSchema
 * @name CommonSchema
 * @description Definition of common reusable schema.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 1.0.0
 * @version 0.1.0
 * @public
 */


/* dependencies */
const mongoose = require('mongoose');
const { Schema } = mongoose;


/* schema options */
const SUB_SCHEMA_OPTIONS = ({ timestamps: false, _id: false, id: false });


/**
 * @name ChoiceSchema
 * @description Definition of answer chioce of a question.
 * @type {Schema}
 * @since 1.0.0
 * @version 0.1.0
 * @private
 */
exports.Choice = new Schema({
  /**
   * @name label
   * @description Human readable option(or answer choice) of a question.
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
   * @example
   * Yes
   */
  label: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'word'
    }
  },


  /**
   * @name name
   * @description Unique value(or variable) of a question
   * option(or answer choice).
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
   * @example
   * yes
   */
  name: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'word'
    }
  }
}, SUB_SCHEMA_OPTIONS);


/**
 * @name RespondentSchema
 * @description Definition of questionnaire respondent.
 * @type {Schema}
 * @since 1.0.0
 * @version 0.1.0
 * @private
 */
exports.Respondent = new Schema({
  /**
   * @name name
   * @description Human readable name of a respondent
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   * @property {boolean} index - ensure database index
   *
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   * @example
   * John Doe
   */
  name: {
    type: String,
    trim: true,
    searchable: true,
    fake: {
      generator: 'name',
      type: 'findName'
    },
    index: true
  },


  /**
   * @name email
   * @description Primary email address used to contact a respondent.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} lowercase - force lower-casing
   * @property {boolean} email - force to be a valid email address
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   * @property {boolean} index - ensure database index
   *
   * @since 1.0.0
   * @version 0.1.0
   * @instance
   * @example
   * john.done@jottot.com
   */
  email: {
    type: String,
    trim: true,
    lowercase: true,
    email: true,
    searchable: true,
    index: true,
    fake: {
      generator: 'internet',
      type: 'email'
    }
  },


  /**
   * @name mobile
   * @description Primary mobile phone number used to contact a respondent.
   * call the other party.
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
   * @example
   * 255765222333
   */
  mobile: {
    type: String,
    trim: true,
    // mobile: true,
    // e164: true,
    searchable: true,
    index: true,
    fake: {
      generator: 'phone',
      type: 'phoneNumber'
    },
  }
}, SUB_SCHEMA_OPTIONS);
