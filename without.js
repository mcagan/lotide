const without = function(array, remove) {
  let newArray = array;
  let index = remove.length - 1;
  while (index >= 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === remove[index]) {
        newArray.splice(i, 1);
      }
    }
    index -= 1;
  }
  return newArray;
};
  

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([4, 6, "boop"], [4, 6, "boop"]));
console.log(without([], [4, 6, "boop"]));
console.log(without([4, 6, "boop"], []));

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

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
