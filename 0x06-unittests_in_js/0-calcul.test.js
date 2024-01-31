const assert = require("assert");
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function() {
  it('test both ints', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('test float and int', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('test both floats', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('test string and int', function() {
    assert.equal(calculateNumber('test', 3), NaN);
  });
  it('test negative numbers', function() {
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });
  it('test arguments', function() {
    assert.strictEqual(calculateNumber(1), NaN);
    assert.strictEqual(calculateNumber(), NaN);
  });
});
