const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('Check if passed value is integer positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('it should return true if positive integer is passed', () => {
    const validationResult = validator.isInteger(2);
    expect(validationResult).to.be.equal(true);
  });

  it('it should return true if negative integer is passed', () => {
    const validationResult = validator.isInteger(-2);
    expect(validationResult).to.be.equal(true);
  });

  it('it should return false if positive float number is passed', () => {
    const validationResult = validator.isInteger(2.7);
    expect(validationResult).to.be.equal(false);
  });

  it('it should return false if negative float number is passed', () => {
    const validationResult = validator.isInteger(-2.7);
    expect(validationResult).to.be.equal(false);
  });
});

describe('Check if passed value is integer negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should throw an error if string is passed', () => {
    expect(() => { validator.isInteger('foo'); }).to.throw('[foo] is not a number');
  });

  it('should throw an error if boolean is passed', () => {
    expect(() => { validator.isInteger(true); }).to.throw('[true] is not a number');
  });

  it('should throw an error if undefined is passed', () => {
    expect(() => { validator.isInteger(undefined); }).to.throw('[undefined] is not a number');
  });

  it('should throw an error if null is passed', () => {
    expect(() => { validator.isInteger(null); }).to.throw('[null] is not a number');
  });

  it('should throw an error if bigint is passed', () => {
    expect(() => { validator.isInteger(9007199254740991n); }).to.throw('[9007199254740991] is not a number');
  });

  it('should throw an error if object is passed', () => {
    expect(() => { validator.isInteger({}); }).to.throw('[[object Object]] is not a number');
  });

  it('should throw an error if array is passed', () => {
    expect(() => { validator.isInteger([]); }).to.throw('[] is not a number');
  });
});
