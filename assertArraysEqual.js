const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
    return false;
  } else {
    for(i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]){
        return false;
      } 
    }
    return true;
  }
}

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([3, 2], [1, 2]);