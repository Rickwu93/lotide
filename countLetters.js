const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  const result = {};                     //create empty array to push
  for(let character of string) {   //for..loop as suggested
    if (character !== ' '){        //argument of if character is not a space.. do this
      if(result[character]){
        result[character]++; //increase character by one
      } else{
        result[character] = 1;
      }
    }
  }
  return result;
};

const testing1 = countLetters('Lighthouse in the house');

assertEqual(testing1['L'], 1);
assertEqual(testing1['3'], undefined);
assertEqual(testing1['u'], 4);

module.exports = countLetters;