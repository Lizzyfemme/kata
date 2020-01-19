const assert = require("chai").assert;
const palindrome = require("../practiceQuestions/palindrome");

describe("#palindrome", () => {
  it("is a boolean", () => {
    assert.isBoolean(palindrome("foo"));
  });

  it("random words is not a palindrome", () => {
    assert.isNotTrue(palindrome("random words"));
  });
  it("racecar is a palindrome", () => {
    assert.isTrue(palindrome("racecar"));
  });
  it("foo is not a palindrome", () => {
    assert.isFalse(palindrome("foo"));
  });
  it("Kayak is a palindrome", () => {
    assert.isTrue(palindrome("Kayak"));
  });
  it("a santa at NASA is a palindrome", () => {
    assert.isTrue(palindrome("a santa at NASA"));
  });
});
