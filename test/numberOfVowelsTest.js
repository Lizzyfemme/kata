const assert = require("chai").assert;
const numberOfVowels = require("../practiceQuestions/numberOfVowels.js");

describe("#numberOfVowels", () => {
  it("returns 6", () => {
    assert.equal(6, numberOfVowels("this is an example"));
  });

  it("returns 5", () => {
    assert.equal(5, numberOfVowels("aeiou"));
  });

  it("confirms results are a number", () => {
    assert.isNumber(5, numberOfVowels("aeiou"));
  });

  it("should not return 9", () => {
    assert.notEqual(9, numberOfVowels("this is an example"));
  });
});
