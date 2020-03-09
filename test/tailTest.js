const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(words.length, 3);
assertEqual(result.length, 2);