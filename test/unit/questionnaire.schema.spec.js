'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Questionnaire } = require(path.join(__dirname, '..', '..'));


describe('Questionnaire Schema', () => {

  it('should have assess field', () => {
    const assess = Questionnaire.path('assess');

    expect(assess).to.exist;
    expect(assess).to.be.instanceof(Schema.Types.String);
    expect(assess.options).to.exist;
    expect(assess.options).to.be.an('object');
    expect(assess.options.type).to.exist;
    expect(assess.options.trim).to.be.true;
    expect(assess.options.required).to.be.true;
    expect(assess.options.enum).to.exist;
    expect(assess.options.enum).to.be.eql(Questionnaire.ASSESS);
    expect(assess.options.index).to.be.true;
    expect(assess.options.searchable).to.be.true;
    expect(assess.options.default).to.exist;
    expect(assess.options.default).to.be.eql(Questionnaire.DEFAULT_ASSESS);
    expect(assess.options.fake).to.exist;
    expect(assess.options.fake).to.be.true;
  });

  it('should have stage field', () => {
    const stage = Questionnaire.path('stage');

    expect(stage).to.exist;
    expect(stage).to.be.instanceof(Schema.Types.String);
    expect(stage.options).to.exist;
    expect(stage.options).to.be.an('object');
    expect(stage.options.type).to.exist;
    expect(stage.options.trim).to.be.true;
    expect(stage.options.required).to.be.true;
    expect(stage.options.enum).to.exist;
    expect(stage.options.enum).to.be.eql(Questionnaire.STAGES);
    expect(stage.options.index).to.be.true;
    expect(stage.options.searchable).to.be.true;
    expect(stage.options.default).to.exist;
    expect(stage.options.default).to.be.eql(Questionnaire.DEFAULT_STAGE);
    expect(stage.options.fake).to.exist;
    expect(stage.options.fake).to.be.true;
  });

  it('should have phase field', () => {
    const phase = Questionnaire.path('phase');

    expect(phase).to.exist;
    expect(phase).to.be.instanceof(Schema.Types.String);
    expect(phase.options).to.exist;
    expect(phase.options).to.be.an('object');
    expect(phase.options.type).to.exist;
    expect(phase.options.trim).to.be.true;
    expect(phase.options.required).to.be.true;
    expect(phase.options.enum).to.exist;
    expect(phase.options.enum).to.be.eql(Questionnaire.PHASES);
    expect(phase.options.index).to.be.true;
    expect(phase.options.searchable).to.be.true;
    expect(phase.options.default).to.exist;
    expect(phase.options.default).to.be.eql(Questionnaire.DEFAULT_PHASE);
    expect(phase.options.fake).to.exist;
    expect(phase.options.fake).to.be.true;
  });

  it('should have title field', () => {
    const title = Questionnaire.path('title');

    expect(title).to.exist;
    expect(title).to.be.instanceof(Schema.Types.String);
    expect(title.options).to.exist;
    expect(title.options).to.be.an('object');
    expect(title.options.type).to.exist;
    expect(title.options.trim).to.be.true;
    expect(title.options.required).to.be.true;
    expect(title.options.index).to.be.true;
    // expect(title.options.unique).to.be.true;
    expect(title.options.searchable).to.be.true;
    expect(title.options.fake).to.exist;
    expect(title.options.fake).to.be.an('object');
  });

  it('should have description field', () => {
    const description = Questionnaire.path('description');

    expect(description).to.exist;
    expect(description).to.be.instanceof(Schema.Types.String);
    expect(description.options).to.exist;
    expect(description.options).to.be.an('object');
    expect(description.options.type).to.exist;
    expect(description.options.trim).to.be.true;
    expect(description.options.index).to.be.true;
    expect(description.options.searchable).to.be.true;
    expect(description.options.fake).to.exist;
    expect(description.options.fake).to.be.an('object');
  });

});
