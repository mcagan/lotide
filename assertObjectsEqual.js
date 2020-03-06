const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])){
        eqArrays(array1[i], array2[i]);
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (typeof object1[key] === "object") {
        eqObjects(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(objectA, objectB) {
  const inspect = require('util').inspect;
  if (eqObjects(objectA, objectB) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(objectA)} === ${inspect(objectB)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(objectA)} !== ${inspect(objectB)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);

assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, cd2);