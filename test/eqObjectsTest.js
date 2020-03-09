const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc);

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

describe('#eqObjects', () =>{
  it("should return the correct outcomes", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true);
  });
});