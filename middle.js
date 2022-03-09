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
}


const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const middle = function (array){
  let newArray = [];

  //For arrays with one or two elements, there is no middle. Return an empty array.
  if(array.length <= 2){
    return newArray;
  }
  //single element is returned if odd
  if(array.length % 2 === 1) {
    newArray.push(array[Math.floor(array.length / 2)]);
  } 
  //else indicating even numbers, the middle two elements are returned
  else {
    newArray.push(array[Math.floor((array.length / 2) - 1)]);
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]