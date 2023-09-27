const { expect } = require('chai');
const { describe, beforeEach, afterEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers_validator');

describe('Number validator positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if provided positive even number', () => {
    const validatorResult = validator.isNumberEven(4);
    expect(validatorResult).to.be.equal(true);
  });

  it('should return false if provided positive odd number', () => {
    const validatorResult = validator.isNumberEven(5);
    expect(validatorResult).to.be.equal(false);
  });

  it('should return true if provided 0', () => {
    const validatorResult = validator.isNumberEven(0);
    expect(validatorResult).to.be.equal(true);
  });

  it('should return true if provided negative even number', () => {
    const validatorResult = validator.isNumberEven(-4);
    expect(validatorResult).to.be.equal(true);
  });

  it('should return false if provided negative odd number', () => {
    const validatorResult = validator.isNumberEven(-5);
    expect(validatorResult).to.be.equal(false);
  });
});

describe('Number validator negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should throw an error if provided string', () => {
    expect(() => { validator.isNumberEven('string'); }).to.throw('[string] is not of type "Number" it is of type "string"');
  });

  it('should throw an error if provided boolean', () => {
    expect(() => { validator.isNumberEven(true); }).to.throw('[true] is not of type "Number" it is of type "boolean"');
  });

  it('should throw an error if provided undefined', () => {
    expect(() => { validator.isNumberEven(undefined); }).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('should throw an error if provided null', () => {
    expect(() => { validator.isNumberEven(null); }).to.throw('[null] is not of type "Number" it is of type "object"');
  });

  it('should throw an error if provided bigint', () => {
    expect(() => { validator.isNumberEven(9007199254740991n); }).to.throw('[9007199254740991] is not of type "Number" it is of type "bigint"');
  });
});
