const assert = require("chai").assert;
const sumLargestNumbers = require("../practiceQuestions/addNumbersInAnArray.js");

describe("sumLargestNumbers", () => {
  it("returns 11", () => {
    assert.equal(11, sumLargestNumbers([1, 10]));
  });

  it("returns 6", () => {
    assert.equal(6, sumLargestNumbers([1, 2, 3]));
  });

  it("does not return 7", () => {
    assert.notEqual(7, sumLargestNumbers([1, 2, 3]));
  });

  it("returns 148", () => {
    assert.equal(148, sumLargestNumbers([10, 4, 34, 6, 92, 2]));
  });

  it("returns an number", () => {
    assert.isNumber(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
  });
});
