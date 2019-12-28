const assert = require("chai").assert;
const addNumbers = require("../practiceQuestions/addNumbers.js");

describe("addNumbers", () => {
  it("returns 11", () => {
    assert.equal(11, addNumbers([1, 10]));
  });

  it("returns 6", () => {
    assert.equal(6, addNumbers([1, 2, 3]));
  });

  it("does not return 7", () => {
    assert.notEqual(7, addNumbers([1, 2, 3]));
  });

  it("returns 148", () => {
    assert.equal(148, addNumbers([10, 4, 34, 6, 92, 2]));
  });

  it("returns an number", () => {
    assert.isNumber(addNumbers([10, 4, 34, 6, 92, 2]));
  });
});
