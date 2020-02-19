const assert = require("chai").assert;
const pigLatinTranslator = require("../practiceQuestions/pigLatinTranslator");

describe("#pigLatinTranslator", () => {
  it("returns a String", () => {
    assert.isString(pigLatinTranslator("Wayne's World"));
  });

  it("returns ayne'sWay orldWay", () => {
    assert.equal("ayne'sWay orldWay", pigLatinTranslator("Wayne's World"));
  });

  it("returns eThay euequay isay ootay ong,lay Iay itquay", () => {
    assert.equal(
      "eThay euequay isay ootay ong,lay Iay itquay",
      pigLatinTranslator("The queue is too long, I quit")
    );
  });

  it("returns anslationtray", () => {
    assert.equal("anslationtray", pigLatinTranslator("translation"));
  });
  it("returns appearenceay", () => {
    assert.equal("appearenceay", pigLatinTranslator("appearence"));
  });

  it("includes 'ay'", () => {
    assert.include(pigLatinTranslator("Wayne's World"), "ay");
  });

  it("does not return ayne'sWayorldWay", () => {
    assert.notEqual("ayne'sWayorldWay", pigLatinTranslator("Wayne's World"));
  });
});
