const assert = require("assert");
const calculateNumber = require("./node-tests");

describe("calculateNumber", function () {
  describe("type SUM", function () {
    it("test both ints", function () {
      assert.equal(calculateNumber("SUM", 1, 3), 4);
    });
    it("test float and int", function () {
      assert.equal(calculateNumber("SUM", 1, 3.7), 5);
    });
    it("test both floats", function () {
      assert.equal(calculateNumber("SUM", 1.2, 3.7), 5);
    });
    it("test string and int", function () {
      assert.equal(calculateNumber("SUM", "test", 3), NaN);
    });
    it("test negative numbers", function () {
      assert.equal(calculateNumber("SUM", 1, -1), 0);
      assert.equal(calculateNumber("SUM", -1, -1), -2);
    });
  });
  describe("type SUBTRACT", function () {
    it("test both ints", function () {
      assert.equal(calculateNumber("SUBTRACT", 1, 3), -2);
    });
    it("test float and int", function () {
      assert.equal(calculateNumber("SUBTRACT", 1, 3.7), -3);
    });
    it("test both floats", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.2, 3.7), -3);
    });
    it("test string and int", function () {
      assert.equal(calculateNumber("SUBTRACT", "test", 3), NaN);
    });
    it("test negative numbers", function () {
      assert.equal(calculateNumber("SUBTRACT", 1, -1), 2);
      assert.equal(calculateNumber("SUBTRACT", -1, -1), 0);
    });
  });
  describe("type DIVIDE", function () {
    it("test both ints", function () {
      assert.equal(calculateNumber("DIVIDE", 10, 2), 5);
    });
    it("test float and int", function () {
      assert.equal(calculateNumber("DIVIDE", 1, 3.7), 0.25);
    });
    it("test both floats", function () {
      assert.equal(calculateNumber("DIVIDE", 1.2, 3.7), 0.25);
    });
    it("test string and int", function () {
      assert.equal(calculateNumber("DIVIDE", "test", 3), NaN);
    });
    it("test b as 0", function () {
      assert.equal(calculateNumber("DIVIDE", 3, 0), "Error");
    });
    it("test negative numbers", function () {
      assert.equal(calculateNumber("DIVIDE", 1, -1), -1);
      assert.equal(calculateNumber("DIVIDE", -1, -1), 1);
    });
  });
});
