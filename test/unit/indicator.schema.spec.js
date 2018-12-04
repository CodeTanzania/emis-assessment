'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const { Schema } = require('mongoose');
const { Indicator } = require(path.join(__dirname, '..', '..'));


describe('Indicator Schema', () => {

  it('should have base field', () => {
    const base = Indicator.path('base');

    expect(base).to.exist;
    expect(base).to.be.an.instanceof(Schema.Types.ObjectId);
    expect(base.options).to.exist;
    expect(base.options).to.be.an('object');
    expect(base.options.type).to.exist;
    expect(base.options.ref).to.exist;
    expect(base.options.ref).to.be.eql(Indicator.MODEL_NAME);
    expect(base.options.index).to.be.true;
    expect(base.options.exists).to.be.true;
    expect(base.options.autopopulate).to.exist;
    expect(base.options.autopopulate).to.be.an('object');
  });

  it('should have subject field', () => {
    const subject = Indicator.path('subject');

    expect(subject).to.exist;
    expect(subject).to.be.instanceof(Schema.Types.String);
    expect(subject.options).to.exist;
    expect(subject.options).to.be.an('object');
    expect(subject.options.type).to.exist;
    expect(subject.options.trim).to.be.true;
    expect(subject.options.required).to.be.true;
    expect(subject.options.index).to.be.true;
    expect(subject.options.searchable).to.be.true;
    expect(subject.options.fake).to.exist;
    expect(subject.options.fake).to.be.an('object');
  });

  it('should have topic field', () => {
    const topic = Indicator.path('topic');

    expect(topic).to.exist;
    expect(topic).to.be.instanceof(Schema.Types.String);
    expect(topic.options).to.exist;
    expect(topic.options).to.be.an('object');
    expect(topic.options.type).to.exist;
    expect(topic.options.trim).to.be.true;
    expect(topic.options.required).to.be.true;
    expect(topic.options.index).to.be.true;
    // expect(topic.options.unique).to.be.true;
    expect(topic.options.searchable).to.be.true;
    expect(topic.options.fake).to.exist;
    expect(topic.options.fake).to.be.an('object');
  });

  it('should have description field', () => {
    const description = Indicator.path('description');

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

  it('should have color field', () => {
    const color = Indicator.path('color');

    expect(color).to.exist;
    expect(color).to.be.instanceof(Schema.Types.String);
    expect(color.options).to.exist;
    expect(color.options).to.be.an('object');
    expect(color.options.type).to.exist;
    expect(color.options.trim).to.be.true;
    expect(color.options.uppercase).to.be.true;
    expect(color.options.default).to.exist;
    expect(color.options.fake).to.exist;
    expect(color.options.fake).to.be.true;
  });

  it('should have icon field', () => {
    const icon = Indicator.path('icon');

    expect(icon).to.exist;
    expect(icon).to.be.instanceof(Schema.Types.String);
    expect(icon.options).to.exist;
    expect(icon.options).to.be.an('object');
    expect(icon.options.type).to.exist;
    expect(icon.options.trim).to.be.true;
    expect(icon.options.fake).to.not.exist;
  });

});
