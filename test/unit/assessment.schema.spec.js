'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Assessment } = require(path.join(__dirname, '..', '..'));


describe('Assessment Schema', () => {

  it('should have assess field', () => {
    const assess = Assessment.path('assess');

    expect(assess).to.exist;
    expect(assess).to.be.instanceof(Schema.Types.String);
    expect(assess.options).to.exist;
    expect(assess.options).to.be.an('object');
    expect(assess.options.type).to.exist;
    expect(assess.options.trim).to.be.true;
    expect(assess.options.required).to.be.true;
    expect(assess.options.enum).to.exist;
    expect(assess.options.enum).to.be.eql(Assessment.ASSESS);
    expect(assess.options.index).to.be.true;
    expect(assess.options.searchable).to.be.true;
    expect(assess.options.default).to.exist;
    expect(assess.options.default).to.be.eql(Assessment.DEFAULT_ASSESS);
    expect(assess.options.fake).to.exist;
    expect(assess.options.fake).to.be.true;
  });

  it('should have stage field', () => {
    const stage = Assessment.path('stage');

    expect(stage).to.exist;
    expect(stage).to.be.instanceof(Schema.Types.String);
    expect(stage.options).to.exist;
    expect(stage.options).to.be.an('object');
    expect(stage.options.type).to.exist;
    expect(stage.options.trim).to.be.true;
    expect(stage.options.required).to.be.true;
    expect(stage.options.enum).to.exist;
    expect(stage.options.enum).to.be.eql(Assessment.STAGES);
    expect(stage.options.index).to.be.true;
    expect(stage.options.searchable).to.be.true;
    expect(stage.options.default).to.exist;
    expect(stage.options.default).to.be.eql(Assessment.DEFAULT_STAGE);
    expect(stage.options.fake).to.exist;
    expect(stage.options.fake).to.be.true;
  });

  it('should have phase field', () => {
    const phase = Assessment.path('phase');

    expect(phase).to.exist;
    expect(phase).to.be.instanceof(Schema.Types.String);
    expect(phase.options).to.exist;
    expect(phase.options).to.be.an('object');
    expect(phase.options.type).to.exist;
    expect(phase.options.trim).to.be.true;
    expect(phase.options.required).to.be.true;
    expect(phase.options.enum).to.exist;
    expect(phase.options.enum).to.be.eql(Assessment.PHASES);
    expect(phase.options.index).to.be.true;
    expect(phase.options.searchable).to.be.true;
    expect(phase.options.default).to.exist;
    expect(phase.options.default).to.be.eql(Assessment.DEFAULT_PHASE);
    expect(phase.options.fake).to.exist;
    expect(phase.options.fake).to.be.true;
  });

  it('should have respondents field', () => {
    const respondents = Assessment.path('respondents');

    expect(respondents).to.exist;
    expect(respondents).to.be.instanceof(Schema.Types.Array);
    expect(respondents.options).to.exist;
    expect(respondents.options).to.be.an('object');
    expect(respondents.options.type).to.exist;
  });

  it('should have respondents name field', () => {
    const name = Assessment.path('respondents.name');

    expect(name).to.exist;
    expect(name).to.be.instanceof(Schema.Types.String);
    expect(name.options).to.exist;
    expect(name.options).to.be.an('object');
    expect(name.options.type).to.exist;
    expect(name.options.trim).to.be.true;
    expect(name.options.index).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
    expect(name.options.fake).to.be.an('object');
  });

  it('should have respondents email field', () => {
    const email = Assessment.path('respondents.email');

    expect(email).to.exist;
    expect(email).to.be.instanceof(Schema.Types.String);
    expect(email.options).to.exist;
    expect(email.options).to.be.an('object');
    expect(email.options.type).to.exist;
    expect(email.options.trim).to.be.true;
    expect(email.options.index).to.be.true;
    expect(email.options.searchable).to.be.true;
    expect(email.options.fake).to.exist;
    expect(email.options.fake).to.be.an('object');
  });

  it('should have respondents mobile field', () => {
    const mobile = Assessment.path('respondents.mobile');

    expect(mobile).to.exist;
    expect(mobile).to.be.instanceof(Schema.Types.String);
    expect(mobile.options).to.exist;
    expect(mobile.options).to.be.an('object');
    expect(mobile.options.type).to.exist;
    expect(mobile.options.trim).to.be.true;
    expect(mobile.options.index).to.be.true;
    expect(mobile.options.searchable).to.be.true;
    expect(mobile.options.fake).to.exist;
    expect(mobile.options.fake).to.be.an('object');
  });

});
