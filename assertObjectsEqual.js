const eqObjects = function(object1, object2) {

  //first check if Object.key to check their length are equal
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  
   for (const key of Object.keys(object1)) {
     
      
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object2[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  };

  const assertObjectsEqual = function(actual, expected) {
    // Implement me!
    const inspect = require('util').inspect;
    console.log(`Example label: ${inspect(actual)}`);

    if (eqObjects(actual, expected)){
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
    
  //console.log(`Example label: ${inspect(actual)}`);

  module.exports = assertObjectsEqual;




  