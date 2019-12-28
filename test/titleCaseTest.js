const assert = require("chai").assert;
const titleCase = require("../practiceQuestions/titleCase.js");

describe("#titleCases", () => {
  it("returns This Is An Example", () => {
    assert.equal("This Is An Example", titleCase("this is an example"));
  });

  it("returns Test", () => {
    assert.equal("Test", titleCase("test"));
  });

  it("returns What Happens Here", () => {
    assert.equal("What Happens Here", titleCase("WHAT HAPPENS HERE"));
  });

  it("returns I R Cool", () => {
    assert.equal("I R Cool", titleCase("i r cool"));
  });

  it("returns an empty string", () => {
    assert.equal("", titleCase(""));
  });

  it("returns A", () => {
    assert.equal("A", titleCase("a"));
  });
});
