const mathEnforcer = require('./index.js');
const { assert, expect } = require('chai');

describe('mathEnforcer object testing', () => {
  describe('addFive function tests', () => {
    it('Should return undefined with string', () => {
      assert(mathEnforcer.addFive('TEST') === undefined);
    });
    it('Should return undefined with array', () => {
      assert(mathEnforcer.addFive([]) === undefined);
    });
    it('Should return undefined with object', () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });
    it('Should return undefined with null', () => {
      assert(mathEnforcer.addFive(null) === undefined);
    });
    it('Should return undefined with undefined', () => {
      assert(mathEnforcer.addFive(undefined) === undefined);
    });

    it('positive number +5', () => {
      assert(mathEnforcer.addFive(5) === 10);
    });
    it('negative number +5', () => {
      assert(mathEnforcer.addFive(-5) === 0);
    });
    it('decimal number +5', () => {
      assert(mathEnforcer.addFive(5.5) === 10.5);
    });

  });
  describe('subtractTen function tests', () => {
    it('Should return undefined with string', () => {
      assert(mathEnforcer.subtractTen('TEST') === undefined);
    });
    it('Should return undefined with array', () => {
      assert(mathEnforcer.subtractTen([]) === undefined);
    });
    it('Should return undefined with object', () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });
    it('Should return undefined with null', () => {
      assert(mathEnforcer.subtractTen(null) === undefined);
    });
    it('Should return undefined with undefined', () => {
      assert(mathEnforcer.subtractTen(undefined) === undefined);
    });

    it('positive number -10', () => {
      assert(mathEnforcer.subtractTen(5) === -5);
    });
    it('negative number -10', () => {
      assert(mathEnforcer.subtractTen(-5) === -15);
    });
    it('decimal number -10', () => {
      assert(mathEnforcer.subtractTen(15.5) === 5.5);
    });
  });
  describe('sum of two numbers function tests', () => {
    it('Two positive numbers', () => {
      assert(mathEnforcer.sum(10, 20) === 30);
    });
    it('Two negative numbers', () => {
      assert(mathEnforcer.sum(-10, -2.5) === -12.5);
    });
    it('Two decimal numbers', () => {
      assert(mathEnforcer.sum(10.5, 2.1) === 12.6);
    });

    it('First parameter string, second number ', () => {
      assert(mathEnforcer.sum('', 20) === undefined);
    });
    it('First parameter number, second string ', () => {
      assert(mathEnforcer.sum(10, '20') === undefined);
    });
    it('Two not number parameters ', () => {
      assert(mathEnforcer.sum('', []) === undefined);
    });

  });
});