const assert = require("chai").assert;
const passwordGenerator = require("../practiceQuestions/passwordGenerator");

describe("#passwordGenerator", () => {
  it("returns a String", () => {
    assert.isString(passwordGenerator("Bitchin' Camero"));
  });

  it("returns B!tch!n' C4m3r", () => {
    assert.equal("B!tch!n' C4m3r", passwordGenerator("Bitchin' Camero"));
  });

  it("includes '!'", () => {
    assert.include(passwordGenerator("Bitchin' Camero"), "!");
  });

  it("does not return Bitchin' Camero", () => {
    assert.notEqual("Bitchin' Camero", passwordGenerator("Bitchin' Camero"));
  });
});
