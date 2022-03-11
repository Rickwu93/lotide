/* -function will return a "slice of the array with elements taken from the beginning." 
   -should keep going until the callback/predicate returns a truthy value.
   - callback should only be provided one value: The item in the array. */

const takeUntil = function(array, callback) {
  // ...
  let output = []; //create empty array to push into
  for (let element of array) {           //loop through array to slice
    if (callback(element) === false) {       //so this doesn't loop through entire array
      output.push(element);    //push the existing elements into output when condition hits
    } else {
      return output;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
};

assertArraysEqual(takeUntil([20,40,60,80], x => x <= 40), []);

