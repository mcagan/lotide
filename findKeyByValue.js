const assertEqual = require('./assertEqual');

const findKeyByValue = function(myObject, value) {
  for (let key in myObject) {
    if (typeof myObject[key] === "object") {
      for (let key2 in key) {
        if (key[key2] === value) {
          return key2;
        }
      }
    } else {
      if (myObject[key] === value) {
        return key;
      }
    }
  } return undefined;
};

module.exports = findKeyByValue;