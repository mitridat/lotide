// FUNCTION IMPLEMENTATION
// const sum = function(a, b) {
//  return a + b;
// };
  
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('Assertion Failed:' + actual + ' !== ' + expected);
  }
};

// assertEqual(eqArrays([1,2,3],[1,2,3]), true); // should return true
// assertEqual(eqArrays([1,2,3],[1,"2",3]), true); //should return false
// TEST CODE
//  console.assert(sum(1, 2) === 3);
//  console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!
assertEqual(10, 10);
assertEqual(10, 15);
assertEqual('John', 'Walter');
assertEqual('15', 15);
assertEqual(sum(9, 6), 15);

// random comments