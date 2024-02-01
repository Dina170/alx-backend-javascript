const calculateNumber = require("./2-calcul_chai");
const chai = require("chai");
const expect = chai.expect;

describe("calculateNumber", function () {
  describe("type SUM", function () {
    it("test both ints", function () {
      expect(calculateNumber("SUM", 1, 3)).to.equal(4);
    });
    it("test float and int", function () {
      expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
    });
    it("test both floats", function () {
      expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5);
    });
    it("test negative numbers", function () {
      expect(calculateNumber("SUM", 1, -1)).to.equal(0);
      expect(calculateNumber("SUM", -1, -1)).to.equal(-2);
    });
  });
  describe("type SUBTRACT", function () {
    it("test both ints", function () {
      expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
    });
    it("test float and int", function () {
      expect(calculateNumber("SUBTRACT", 1, 3.7)).to.equal(-3);
    });
    it("test both floats", function () {
      expect(calculateNumber("SUBTRACT", 1.2, 3.7)).to.equal(-3);
    });
    it("test negative numbers", function () {
      expect(calculateNumber("SUBTRACT", 1, -1)).to.equal(2);
      expect(calculateNumber("SUBTRACT", -1, -1)).to.equal(0);
    });
  });
  describe("type DIVIDE", function () {
    it("test both ints", function () {
      expect(calculateNumber("DIVIDE", 10, 2)).to.equal(5);
    });
    it("test float and int", function () {
      expect(calculateNumber("DIVIDE", 1, 3.7)).to.equal(0.25);
    });
    it("test both floats", function () {
      expect(calculateNumber("DIVIDE", 1.2, 3.7)).to.equal(0.25);
    });
    it("test b as 0", function () {
      expect(calculateNumber("DIVIDE", 3, 0)).to.equal("Error");
    });
    it("test negative numbers", function () {
      expect(calculateNumber("DIVIDE", 1, -1)).to.equal(-1);
      expect(calculateNumber("DIVIDE", -1, -1)).to.equal(1);
    });
  });
});
