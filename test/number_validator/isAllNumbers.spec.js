const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('All numbers in the array positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('it should return true if array with all numbers is passed', () => {
    const validationResult = validator.isAllNumbers([4, 7, 8, 9, -45, 0]);
    expect(validationResult).to.be.equal(true);
  });

  it('it should return false if array with numbers and boolean is passed', () => {
    const validationResult = validator.isAllNumbers([4, 7, true, 9, -45, 0]);
    expect(validationResult).to.be.equal(false);
  });

  it('it should return false if array with numbers and string is passed', () => {
    const validationResult = validator.isAllNumbers([4, 7, 'test', 9, -45, 0]);
    expect(validationResult).to.be.equal(false);
  });

  it('it should return false if array with numbers and undefined is passed', () => {
    const validationResult = validator.isAllNumbers([4, 7, undefined, 9, -45, 0]);
    expect(validationResult).to.be.equal(false);
  });

  it('it should return false if array with numbers and null is passed', () => {
    const validationResult = validator.isAllNumbers([4, 7, null, 9, -45, 0]);
    expect(validationResult).to.be.equal(false);
  });

  it('it should return false if array with numbers and bigint is passed', () => {
    const validationResult = validator.isAllNumbers([4, 7, 9007199254740991n, 9, -45, 0]);
    expect(validationResult).to.be.equal(false);
  });
});

describe('All numbers in the array negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should throw an error if the number is passed', () => {
    expect(() => { validator.isAllNumbers(4); }).to.throw('[4] is not an array');
  });

  it('should throw an error if the object is passed', () => {
    expect(() => { validator.isAllNumbers({}); }).to.throw('[[object Object]] is not an array');
  });
});
