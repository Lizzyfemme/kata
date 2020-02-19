const assert = require("chai").assert;
const diceRoller = require("../practiceQuestions/diceRoller");

describe("#diceRoller", () => {
  it("returns an number", () => {
    assert.isNumber(diceRoller(1, 4));
  });
  it("if the value is between 1 and 4 it cannot return a 9", () => {
    assert.notEqual(9, diceRoller(1, 4));
  });
  it("cannot return fractions", () => {
    assert.notEqual(2.2, diceRoller(1, 4));
  });

  it("returns a value greater or equal to the minimum", () => {
    assert.isAtLeast(diceRoller(1, 4), 1, "Is 1 or more");
  });
  it("returns a value less than or equal to the maximum", () => {
    assert.isAtMost(diceRoller(1, 4), 4, "Is 4 or less");
  });
});
