const assert = require("chai").assert;
const numberOfVowels = require("../practiceQuestions/numberOfVowels.js");

describe("#numberOfVowels", () => {
  it("returns 6", () => {
    assert.equal(6, numberOfVowels("this is an example"));
  });

  it("returns 5", () => {
    assert.equal(5, numberOfVowels("aeiou"));
  });

  it("returns What Happens Here", () => {
    assert.isNumber(5, numberOfVowels("aeiou"));
  });

  it("returns I R Cool", () => {
    assert.notEqual(9, numberOfVowels("this is an example"));
  });
});
