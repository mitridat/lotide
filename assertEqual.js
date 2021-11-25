// declares a function that compares actual to expected  
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('Assertion Failed:' + actual + ' !== ' + expected);
  }
};

//  Testing specific combinations
assertEqual(10, 10);
assertEqual(10, 15);
assertEqual('John', 'Walter');
assertEqual('15', 15);
assertEqual(sum(9, 6), 15);