const assert = require("chai").assert;
const conditionalSum = require("../practiceQuestions/conditionalSum");

describe("#conditionalSum", () => {
  it("returns 6", () => {
    assert.equal(6, conditionalSum([1, 2, 3, 4, 5], "even"));
  });

  it("returns 9", () => {
    assert.equal(9, conditionalSum([1, 2, 3, 4, 5], "odd"));
  });

  it("returns 0 if given a empty array", () => {
    assert.equal(0, conditionalSum([], "odd"));
  });

  it("returns an number", () => {
    assert.isNumber(conditionalSum([1, 2, 3, 4, 5], "even"));
  });
});
