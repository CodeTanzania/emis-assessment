'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Indicator, Question } = require(path.join(__dirname, '..', '..'));


describe('Question Schema', () => {

  it('should have indicator field', () => {
    const indicator = Question.path('indicator');

    expect(indicator).to.exist;
    expect(indicator).to.be.an.instanceof(Schema.Types.ObjectId);
    expect(indicator.options).to.exist;
    expect(indicator.options).to.be.an('object');
    expect(indicator.options.type).to.exist;
    expect(indicator.options.ref).to.exist;
    expect(indicator.options.ref).to.be.eql(Indicator.MODEL_NAME);
    expect(indicator.options.index).to.be.true;
    expect(indicator.options.exists).to.be.true;
    expect(indicator.options.autopopulate).to.exist;
    expect(indicator.options.autopopulate).to.be.an('object');
  });

  it('should have assess field', () => {
    const assess = Question.path('assess');

    expect(assess).to.exist;
    expect(assess).to.be.instanceof(Schema.Types.String);
    expect(assess.options).to.exist;
    expect(assess.options).to.be.an('object');
    expect(assess.options.type).to.exist;
    expect(assess.options.trim).to.be.true;
    expect(assess.options.required).to.be.true;
    expect(assess.options.enum).to.exist;
    expect(assess.options.enum).to.be.eql(Question.ASSESS);
    expect(assess.options.index).to.be.true;
    expect(assess.options.searchable).to.be.true;
    expect(assess.options.default).to.exist;
    expect(assess.options.default).to.be.eql(Question.DEFAULT_ASSESS);
    expect(assess.options.fake).to.exist;
    expect(assess.options.fake).to.be.true;
  });

  it('should have stage field', () => {
    const stage = Question.path('stage');

    expect(stage).to.exist;
    expect(stage).to.be.instanceof(Schema.Types.String);
    expect(stage.options).to.exist;
    expect(stage.options).to.be.an('object');
    expect(stage.options.type).to.exist;
    expect(stage.options.trim).to.be.true;
    expect(stage.options.required).to.be.true;
    expect(stage.options.enum).to.exist;
    expect(stage.options.enum).to.be.eql(Question.STAGES);
    expect(stage.options.index).to.be.true;
    expect(stage.options.searchable).to.be.true;
    expect(stage.options.default).to.exist;
    expect(stage.options.default).to.be.eql(Question.DEFAULT_STAGE);
    expect(stage.options.fake).to.exist;
    expect(stage.options.fake).to.be.true;
  });

  it('should have phase field', () => {
    const phase = Question.path('phase');

    expect(phase).to.exist;
    expect(phase).to.be.instanceof(Schema.Types.String);
    expect(phase.options).to.exist;
    expect(phase.options).to.be.an('object');
    expect(phase.options.type).to.exist;
    expect(phase.options.trim).to.be.true;
    expect(phase.options.required).to.be.true;
    expect(phase.options.enum).to.exist;
    expect(phase.options.enum).to.be.eql(Question.PHASES);
    expect(phase.options.index).to.be.true;
    expect(phase.options.searchable).to.be.true;
    expect(phase.options.default).to.exist;
    expect(phase.options.default).to.be.eql(Question.DEFAULT_PHASE);
    expect(phase.options.fake).to.exist;
    expect(phase.options.fake).to.be.true;
  });

  it('should have type field', () => {
    const type = Question.path('type');

    expect(type).to.exist;
    expect(type).to.be.instanceof(Schema.Types.String);
    expect(type.options).to.exist;
    expect(type.options).to.be.an('object');
    expect(type.options.type).to.exist;
    expect(type.options.trim).to.be.true;
    expect(type.options.required).to.be.true;
    expect(type.options.enum).to.exist;
    expect(type.options.enum).to.be.eql(Question.TYPES);
    expect(type.options.index).to.be.true;
    expect(type.options.searchable).to.be.true;
    expect(type.options.default).to.exist;
    expect(type.options.default).to.be.eql(Question.DEFAULT_TYPE);
    expect(type.options.fake).to.exist;
    expect(type.options.fake).to.be.true;
  });

  it('should have name field', () => {
    const name = Question.path('name');

    expect(name).to.exist;
    expect(name).to.be.instanceof(Schema.Types.String);
    expect(name.options).to.exist;
    expect(name.options).to.be.an('object');
    expect(name.options.type).to.exist;
    expect(name.options.trim).to.be.true;
    expect(name.options.required).to.be.true;
    expect(name.options.index).to.be.true;
    // expect(name.options.unique).to.be.true;
    expect(name.options.searchable).to.be.true;
    expect(name.options.fake).to.exist;
    expect(name.options.fake).to.be.an('object');
  });

  it('should have label field', () => {
    const label = Question.path('label');

    expect(label).to.exist;
    expect(label).to.be.instanceof(Schema.Types.String);
    expect(label.options).to.exist;
    expect(label.options).to.be.an('object');
    expect(label.options.type).to.exist;
    expect(label.options.trim).to.be.true;
    expect(label.options.required).to.be.true;
    expect(label.options.index).to.be.true;
    // expect(label.options.unique).to.be.true;
    expect(label.options.searchable).to.be.true;
    expect(label.options.fake).to.exist;
    expect(label.options.fake).to.be.an('object');
  });

  it('should have help field', () => {
    const help = Question.path('help');

    expect(help).to.exist;
    expect(help).to.be.instanceof(Schema.Types.String);
    expect(help.options).to.exist;
    expect(help.options).to.be.an('object');
    expect(help.options.type).to.exist;
    expect(help.options.trim).to.be.true;
    expect(help.options.index).to.be.true;
    expect(help.options.searchable).to.be.true;
    expect(help.options.fake).to.exist;
    expect(help.options.fake).to.be.an('object');
  });

  it('should have choices field', () => {
    const choices = Question.path('choices');

    expect(choices).to.exist;
    expect(choices).to.be.instanceof(Schema.Types.Array);
    expect(choices.options).to.exist;
    expect(choices.options).to.be.an('object');
    expect(choices.options.type).to.exist;
  });

  it('should have choice label field', () => {
    const label = Question.path('choices.label');

    expect(label).to.exist;
    expect(label).to.be.instanceof(Schema.Types.String);
    expect(label.options).to.exist;
    expect(label.options).to.be.an('object');
    expect(label.options.type).to.exist;
    expect(label.options.trim).to.be.true;
    expect(label.options.index).to.be.true;
    expect(label.options.searchable).to.be.true;
    expect(label.options.fake).to.exist;
    expect(label.options.fake).to.be.an('object');
  });

  it('should have choice name field', () => {
    const name = Question.path('choices.name');

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

});
