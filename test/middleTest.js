const middle = require('../middle');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("#middle", () => {
  it("returns an array of 2 when passed [1,2,3]", () => {
    assert.deepEqual((middle([1, 2, 3])), ([2]));

    
  });

  it("returns an array of 2 when passed [1,2,3]", () => {
    assert.deepEqual((middle([1, 2, 3, 4])), ([2,3]));});


    it("returns an array of 2 when passed [1,2,3]", () => {
      assert.deepEqual((middle([1])), ([]));});

      

      it("returns an array of 2 when passed [1,2,3]", () => {
        assert.deepEqual((middle([1, 2])), ([]));});
    

});

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);