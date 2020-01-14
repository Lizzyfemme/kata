const assert = require("chai").assert;
const camelCase = require("../practiceQuestions/camelCase.js");

describe("#camelCase", () => {
  it("returns thisIsAString", () => {
    assert.equal("thisIsAString", camelCase("this is a string"));
  });

  it("returns loopyLighthouse", () => {
    assert.equal("loopyLighthouse", camelCase("loopy lighthouse"));
  });

  it("returns supercalifragalisticexpialidocious", () => {
    assert.equal(
      "supercalifragalisticexpialidocious",
      camelCase("supercalifragalisticexpialidocious")
    );
  });

  it("does not return ThisIsAString", () => {
    assert.notEqual("ThisIsAString", camelCase("this is a string"));
  });

  it("returns supercalifragalisticexpialidocious", () => {
    assert.isString(
      "supercalifragalisticexpialidocious",
      camelCase("supercalifragalisticexpialidocious")
    );
  });
});
