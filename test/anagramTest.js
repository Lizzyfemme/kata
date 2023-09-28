const assert = require("chai").assert;
const anagram = require("../practiceQuestions/anagram.js");
describe("#anagram", () => {
    
    it("returns Boolean", () => {
        assert.isBoolean(true, anagram('anagram', 'nagaram'));
      });

      it("returns true", () => {
        assert.equal(true, anagram('anagram', 'nagaram'));
      });

      it("returns false", () => {
        assert.equal(false, anagram('aaz', 'zza'));
      });

      it("returns false", () => {
        assert.equal(false, anagram("rat","car"));
      });

      it("returns false", () => {
        assert.equal(false, anagram('awesome', 'awesom'));
      });
      
      it("returns false", () => {
        assert.equal(false, anagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
      });

      it("returns true", () => {
        assert.equal(true, anagram('qwerty', 'qeywrt'));
      });

      it("returns true", () => {
        assert.equal(true, anagram('texttwisttime', 'timetwisttext'));
      });


});
