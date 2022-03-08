const head = function(arr) {
  return arr[0];
};
  

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
  }
};



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test", "test");
assertEqual("bowling", "hockey");
assertEqual(5, 5);
assertEqual(8, 8);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
