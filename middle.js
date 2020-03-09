const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    let index = (array.length - 1) / 2;
    result.push(array[index]);
  } else {
    let index = array.length / 2;
    result.push(array[index - 1]);
    result.push(array[index]);
  }
  return result;
};

module.exports = middle;