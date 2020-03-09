// const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 when executed with an array that has 3 words", () => {
    assert.strictEqual(tail(words).length, 2);
  })
});

const words = ["Yo Yo", "Lighthouse", "Labs"];
// const result = tail(words);
// assertEqual(words.length, 3);
// assertEqual(result.length, 2);