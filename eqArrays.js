// Defining the arrays to compare and the "array of arrays" containing all of them
const array1 = [1, 2, 3];
const array2 = [3, 2, 1];
const array3 = ["1", "2", "3"];
const array4 = ["1", "2", 3];
const array0 = [array2, array3, array4];

// loop this var from array1 to array4 as array0[i]
// loop from first to last element of both arrays]
const eqArrays = function(array1, expected) {
  let equal = 1;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== expected[i]) {
      equal = 0;
      break;
    }
  }
  if (equal === 1) {
    return ('true:' + array1 + ' === ' + expected);
  } else return ('false:' + array1 + ' === ' + expected);
};

for (let i = 0; i < array0.length; i++) console.log(eqArrays(array1, array0[i]));

// Assignment: Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false