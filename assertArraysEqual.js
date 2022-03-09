const assertArraysEqual = function(arr1, arr2){
  if(eqArrays()) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}


const eqArrays = function(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === arr2[i] || arr1.length === arr2.length) {
      return true;
    }
  }
  return false;
};