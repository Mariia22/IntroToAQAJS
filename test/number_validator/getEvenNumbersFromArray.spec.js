const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe('Get even numbers from array positive tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('it should return array with even numbers', () => {
    const validationResult = validator.getEvenNumbersFromArray([4, 7, -8, 9, -45, 0]);
    expect(validationResult).deep.to.equal([4, -8, 0]);
  });

  it('it should return empty array if parmeter does not contain even numbers', () => {
    const validationResult = validator.getEvenNumbersFromArray([7, 9, -45]);
    expect(validationResult).deep.to.equal([]);
  });
});

describe('Get even numbers from array negative tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should throw an error if the number is passed', () => {
    expect(() => { validator.getEvenNumbersFromArray(4); }).to.throw('[4] is not an array of "Numbers"');
  });

  it('should throw an error if the object is passed', () => {
    expect(() => { validator.getEvenNumbersFromArray({}); }).to.throw('[[object Object]] is not an array of "Numbers"');
  });

  it('should throw an error if a passed array consists of not only numbers', () => {
    expect(() => { validator.getEvenNumbersFromArray([4, true, 8, 0]); }).to.throw('[4,true,8,0] is not an array of "Numbers"');
  });

  it('should throw an error if a passed array consists of not only numbers', () => {
    expect(() => { validator.getEvenNumbersFromArray([4, 'true', 8, 0]); }).to.throw('[4,true,8,0] is not an array of "Numbers"');
  });

  it('should throw an error if a passed array consists of not only numbers', () => {
    expect(() => { validator.getEvenNumbersFromArray([4, null, 8, 0]); }).to.throw('[4,,8,0] is not an array of "Numbers"');
  });

  it('should throw an error if a passed array consists of not only numbers', () => {
    expect(() => { validator.getEvenNumbersFromArray([4, undefined, 8, 0]); }).to.throw('[4,,8,0] is not an array of "Numbers"');
  });

  it('should throw an error if a passed array consists of not only numbers', () => {
    expect(() => { validator.getEvenNumbersFromArray([4, 9007199254740991n, 8, 0]); }).to.throw('[4,9007199254740991,8,0] is not an array of "Numbers"');
  });
});
