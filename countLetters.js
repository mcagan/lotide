const assertEqual = require('./assertEqual');

//counts how many of each letter is in a string
const countLetters = function(sentence) {
  let newStc = sentence.replace(/\s+/g, '');
  let results = {};
  for (let letter of newStc) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;