# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rickwu93/lotide`

**Require it:**

`const _ = require('@rickwu93/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const assertArraysEqual = function(arr1, arr2)`: Compares two arrays to return true if equal
* `const assertEqual = function(actual, expected)`: True if actual === expected
* `const eqObjects = function(object1, object2)`: Compares two objects with assertObjectEqual
* `const assertObjectsEqual = function(actual, expected)`: Compares two objects to return true if equal
* `const countLetters = function(string)`: Returns their letter position in the string
* `const countOnly = function(allItems, itemsToCount)`: Counts up items if contained in the second array by position
* `const eqArrays = function(arr1, arr2)`: Compares two arrays with assertAttaysEqual
* `const findKey = function(object, callback)`: Returns first key which callback returns true
* `const findKeyByValue = function(object, value)`: Returns key with matching argument
* `const head = function(arr)`: Returns head of array
* `const letterPositions = function(sentence)`: Returns index of specified letter in string
* `const map = function(array, callback)`: Returns a new array of results with callback
* `const middle = function (arr)`: Returns middle element in array
* `const tail = function(arr)`: Returns tail with head removed
* `const takeUntil = function(array, callback)`: Returns elements in array until callback is false
* `const without = function(source, itemsToRemove)`: Returns new array without specified items
