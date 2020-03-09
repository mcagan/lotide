const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it("returns an empty array when it receives an empry array", () => {
    assert.deepEqual(flatten([]), []);
  });

  it("returns the correct arrays", () => {
    assert.deepEqual(flatten([2, 3, [5, 6, 9], 8]), [2, 3, 5, 6, 9, 8]);
    assert.deepEqual(flatten([2, 3, 8]), [2, 3, 8]);
    assert.deepEqual(flatten([2, 3, "boop", [3], ["Irmak"]]), [2, 3, "boop", 3, "Irmak"]);
  });

})
// assertArraysEqual(flatten([2, 3, [5, 6, 9], 8]), [2, 3, 5, 6, 9, 8]);
// assertArraysEqual(flatten([2, 3, 8]), [2, 3, 8]);
// assertArraysEqual(flatten([2, 3, "boop", [3], ["Irmak"]]), [2, 3, "boop", 3, "Irmak"]);
// assertArraysEqual(flatten([]), []);