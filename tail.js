const assertEqual = require('./assertEqual');

//returns an array with all the elements but the first one
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;