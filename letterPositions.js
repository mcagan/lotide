const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) !== " ") {
      if (results[sentence.charAt(i)]) {
        results[sentence.charAt(i)].push(i);
      } else {
        results[sentence.charAt(i)] = [i];
      }
    }
  }
  return results;
};

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
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("melis cgme").m, [0,8]);