const assert = require("chai").assert;
const urlEncode = require("../practiceQuestions/urlEncode.js");

describe("#urlEncode", () => {
  it("returns Lighthouse%20Labs", () => {
    assert.equal("Lighthouse%20Labs", urlEncode("Lighthouse Labs"));
  });

  it("returns blue%20is%20greener%20than%20purple%20for%20sure", () => {
    assert.equal(
      "blue%20is%20greener%20than%20purple%20for%20sure",
      urlEncode("blue is greener than purple for sure")
    );
  });

  it("does not return %20Lighthouse%20Labs%20", () => {
    assert.notEqual("%20Lighthouse%20Labs%20", urlEncode(" Lighthouse Labs "));
  });

  it("returns a string", () => {
    assert.isString(
      "blue%20is%20greener%20than%20purple%20for%20sure",
      urlEncode("blue is greener than purple for sure")
    );
  });
});
