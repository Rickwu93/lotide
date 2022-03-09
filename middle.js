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

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4] 