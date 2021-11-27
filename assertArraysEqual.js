// Defining the arrays to compare and the "array of arrays" containing all of them
const array1 = [1, 2, 3];
const array2 = [+1, 2, 3];
const array3 = ["1", "3"];
const array4 = ["1", "2", 3];
const array0 = [array2, array3, array4];

const assertArraysEqual = function(array1, expected) {
  if (array1.length === expected.length
      && array1.every(function(u, i) {
        return u === expected[i];
      })
  ) {
    console.log('Assertion Passed:' + array1 + ' === ' + expected);
  } else {
    console.log('Assertion Failed:' + array1 + ' !== ' + expected);
  }
};

for (let i = 0; i < 3; i++) assertArraysEqual(array1,array0[i]);

