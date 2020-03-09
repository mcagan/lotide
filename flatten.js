const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

const flatten = function(array) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      newArray = newArray.concat(item);
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

assertArraysEqual(flatten([2, 3, [5, 6, 9], 8]), [2, 3, 5, 6, 9, 8]);
assertArraysEqual(flatten([2, 3, 8]), [2, 3, 8]);
assertArraysEqual(flatten([2, 3, "boop", [3], ["Irmak"]]), [2, 3, "boop", 3, "Irmak"]);
assertArraysEqual(flatten([]), []);

module.exports = flatten;