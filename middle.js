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

const middle = function(array) {
  let result = []
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    index = (array.length - 1) / 2;
    result.push(array[index]);
  } else {
    index = array.length / 2;
    result.push(array[index - 1]);
    result.push(array[index]);
  }
  return result;
}

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);