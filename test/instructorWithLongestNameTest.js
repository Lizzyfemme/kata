const assert = require("chai").assert;
const instructorWithLongestName = require("../practiceQuestions/instructorWithLongestName.js");

const test1 = [
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
];

const test2 = [
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
];

describe("#instructorWithLongestName", () => {
  it("returns { name: Jeremiah, course: Web }", () => {
    assert.equal(test1[1], instructorWithLongestName(test1));
  });

  it("returns { name: Domascus, course: Web }", () => {
    assert.equal(test2[2], instructorWithLongestName(test2));
  });

  it("returns an object", () => {
    assert.isObject(
      { name: "Domascus", course: "Web" },
      instructorWithLongestName(test2)
    );
  });
  it("does not return { name: Ophilia, course: Web }", () => {
    assert.notEqual(
      { name: "Ophilia", course: "Web" },
      instructorWithLongestName(test1)
    );
  });
});
