const letterPositions = require('../letterPositions');
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("should return the correct outcomes", () => {
    assert.deepEqual((letterPositions("hello").e), [1]);
    assert.deepEqual((letterPositions("hello").l), [2, 3]);
    assert.deepEqual((letterPositions("melis cgme").m), [0, 8]);
  });
});


// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);
// assertArraysEqual(letterPositions("melis cgme").m, [0,8]);