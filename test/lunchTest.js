const assert = require("chai").assert;
const lunch = require("../practiceQuestions/lunch");

describe("#lunch", () => {
  it("returns a number", () => {
    assert.isString(lunch(true, 20));
  });

  it("returns under 20 response", () => {
    assert.equal(
      "Pick something up and eat at the Lab or in the kitchen, where you can get to know your fellow classmates.",
      lunch(true, 15)
    );
  });
  it("returns 30 mintues or less response", () => {
    assert.equal(
      "You deserve a break. Try a place in Gastown.",
      lunch(true, 30)
    );
  });
  it("returns more than 30 mintues response", () => {
    assert.equal(
      "This is a bootcamp, you should probably reconsider.",
      lunch(true, 31)
    );
  });
  it("returns Keep coding", () => {
    assert.equal("Keep coding", lunch(false, 15));
  });
});
