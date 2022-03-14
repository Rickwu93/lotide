const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const middle = function (arr){
  let newArray = [];

  //For arrays with one or two elements, there is no middle. Return an empty array.
  if(arr.length <= 2){
    return newArray;
  }
  //single element is returned if odd
  if(arr.length % 2 === 1) {
    newArray.push(arr[Math.floor(arr.length / 2)]);
  } 
  //else indicating even numbers, the middle two elements are returned
  else {
    newArray.push(arr[Math.floor((arr.length / 2) - 1)]);
    newArray.push(arr[Math.floor(arr.length / 2)]);
  }
  return newArray
};


module.exports = middle;