const findKey = function(myObject, callback) {
  for (let key in myObject) {
    if (callback(myObject[key])) {
      return key;
    }
  } return undefined;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const t01 = { 
  id: "t01",
  name: "Code Monkey",
  artist: "Jonathan Coulton",
  album: "Thing a Week Three" 
};

assertEqual(findKey(t01, x => x === "Code Monkey"), "name");
assertEqual(findKey(t01, x => x === "t01"), "id");
assertEqual(findKey(t01, x => x === "Jonathan Coulton"), "artist");

module.exports = findKey;