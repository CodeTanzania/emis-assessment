'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
/*jshint -W079 */
const { Response } = require(path.join(__dirname, '..', '..'));


describe('Response Schema', () => {

  it('should have assess field', () => {
    const assess = Response.path('assess');

    expect(assess).to.exist;
    expect(assess).to.be.instanceof(Schema.Types.String);
    expect(assess.options).to.exist;
    expect(assess.options).to.be.an('object');
    expect(assess.options.type).to.exist;
    expect(assess.options.trim).to.be.true;
    expect(assess.options.required).to.be.true;
    expect(assess.options.enum).to.exist;
    expect(assess.options.enum).to.be.eql(Response.ASSESS);
    expect(assess.options.index).to.be.true;
    expect(assess.options.searchable).to.be.true;
    expect(assess.options.default).to.exist;
    expect(assess.options.default).to.be.eql(Response.DEFAULT_ASSESS);
    expect(assess.options.fake).to.exist;
    expect(assess.options.fake).to.be.true;
  });

  it('should have stage field', () => {
    const stage = Response.path('stage');

    expect(stage).to.exist;
    expect(stage).to.be.instanceof(Schema.Types.String);
    expect(stage.options).to.exist;
    expect(stage.options).to.be.an('object');
    expect(stage.options.type).to.exist;
    expect(stage.options.trim).to.be.true;
    expect(stage.options.required).to.be.true;
    expect(stage.options.enum).to.exist;
    expect(stage.options.enum).to.be.eql(Response.STAGES);
    expect(stage.options.index).to.be.true;
    expect(stage.options.searchable).to.be.true;
    expect(stage.options.default).to.exist;
    expect(stage.options.default).to.be.eql(Response.DEFAULT_STAGE);
    expect(stage.options.fake).to.exist;
    expect(stage.options.fake).to.be.true;
  });

  it('should have phase field', () => {
    const phase = Response.path('phase');

    expect(phase).to.exist;
    expect(phase).to.be.instanceof(Schema.Types.String);
    expect(phase.options).to.exist;
    expect(phase.options).to.be.an('object');
    expect(phase.options.type).to.exist;
    expect(phase.options.trim).to.be.true;
    expect(phase.options.required).to.be.true;
    expect(phase.options.enum).to.exist;
    expect(phase.options.enum).to.be.eql(Response.PHASES);
    expect(phase.options.index).to.be.true;
    expect(phase.options.searchable).to.be.true;
    expect(phase.options.default).to.exist;
    expect(phase.options.default).to.be.eql(Response.DEFAULT_PHASE);
    expect(phase.options.fake).to.exist;
    expect(phase.options.fake).to.be.true;
  });

});
