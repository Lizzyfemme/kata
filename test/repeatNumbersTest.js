const assert = require("chai").assert;
const repeatNumbers = require("../practiceQuestions/repeatNumbers.js");

const test1 = [[1, 10]];
const test2 = [
  [1, 2],
  [2, 3]
];
const test3 = [
  [10, 4],
  [34, 6],
  [92, 2]
];

describe("#repeatNumbers", () => {
  it("returns 1111111111", () => {
    assert.equal("1111111111", repeatNumbers(test1));
  });

  it("returns a string", () => {
    assert.isString("1111111111", repeatNumbers(test1));
  });
  it("returns 11, 222", () => {
    assert.equal("11, 222", repeatNumbers(test2));
  });
  it("returns 10101010, 343434343434, 9292", () => {
    assert.equal("10101010, 343434343434, 9292", repeatNumbers(test3));
  });
  it("does not return a number", () => {
    assert.notStrictEqual(1111111111, repeatNumbers(test1));
  });
});
