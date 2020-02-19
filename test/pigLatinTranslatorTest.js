const assert = require("chai").assert;
const pigLatinTranslator = require("../practiceQuestions/pigLatinTranslator");

describe("#pigLatinTranslator", () => {
  it("returns thisIsAString", () => {
    assert.isString(pigLatinTranslator("Wayne's World"));
  });

  it("returns ayne'sWay orldWay", () => {
    assert.equal("ayne'sWay orldWay", pigLatinTranslator("Wayne's World"));
  });

  it("returns ayne'sWay orldWay", () => {
    assert.include("ay", pigLatinTranslator("Wayne's World"));
  });

  it("does not return ayne'sWayorldWay", () => {
    assert.notEqual(
      "ThisIsAString",
      "ayne'sWayorldWay",
      pigLatinTranslator("Wayne's World")
    );
  });

  // it("returns supercalifragalisticexpialidocious", () => {
  //   assert.isString(
  //     "supercalifragalisticexpialidocious",
  //     camelCase("supercalifragalisticexpialidocious")
  //   );
  // });
});
