const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(objectA, objectB) {
  const inspect = require('util').inspect;
  if (eqObjects(objectA, objectB) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(objectA)} === ${inspect(objectB)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(objectA)} !== ${inspect(objectB)}`);
  }
};

module.exports = assertObjectsEqual;