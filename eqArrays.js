const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('Assertion Passed:' + actual + ' === ' + expected);
    } else {
      console.log('Assertion Failed:' + actual + ' !== ' + expected);
    }
  };
  
    assertEqual(10, 10);
  assertEqual(10, 15);
  assertEqual('John', 'Walter');
  assertEqual('15', 15);
  assertEqual(sum(9, 6), 15);
  
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false