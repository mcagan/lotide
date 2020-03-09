# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mcagan/lotide`

**Require it:**

`const _ = require('@mcagan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: returns the first item in an array.
* tail: returns all items but the first item of an array.
* middle: returns the middle item of an array with an odd number of items and the middle two items for an array with an even number of items.
* assertArraysEqual: asserts whether two arrays are equal.
* assertEqual: asserts whether two items (not array or object) are equal.
* assertObjectsEqual: asserts whether two objects are equal.
* countLetters: counts how many of each letter is in a string.
* countOnly: counts only specified items in an array.
* eqArrays: compares two arrays two determine if they are equal.
* eqObjects: compares two objects two determine if they are equal.
* findKey: takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value.
* findKeyByValue: search for a key on an object where its value matches a given value.
* flatten: flattens nested arrays into a single array.
* letterPositions: returns all the indices in the string where each character is found.
* map: creates a new array populated with the results of calling a provided function on every element in the calling array.
* takeUntil: creates slice of the array with elements taken from the beginning until the desired requirement is fulfilled. 
* without: filters data to remove unwanted items. 