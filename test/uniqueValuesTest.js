const assert = require("chai").assert;
const uniqueValues = require("../practiceQuestions/uniqueValues");

describe("#uniqueValues", () => {
    it ("returns a number", () => {
        assert.isNumber(2, uniqueValues([1,1,1,1,1,2]));
    });

    it ("returns 2", () =>{
        assert.equal(2, uniqueValues([1,1,1,1,1,2]));
    })
    
    it ("returns 7", () =>{
        assert.equal(7, uniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
    }) 

    it ("returns 0", () =>{
        assert.equal(0, uniqueValues([]));
    }) 

    it ("returns 4", () =>{
        assert.equal(4, uniqueValues([-2,-1,-1,0,1]));
    }) 
    
});