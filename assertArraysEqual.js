const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};


module.exports = assertArraysEqual;