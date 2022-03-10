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

const letterPositions = function(sentence) {
  const results = {};
  let counter = 0; //0 based counter
  // logic to update results here
  for(let character of sentence) {
    if(character !== ' '){
      if(results[character]){
        results[character].push(counter);
      } else {
        results[character] = [counter]
      }
    }
    counter++;
  }
  return results;
};



assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('school').o, [3, 4]);