const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion Passed:' + actual + ' === ' + expected);
  } else {
    console.log('Assertion Failed:' + actual + ' !== ' + expected);
  }
};

// const head = function (x) {
//  return x[0]
// }

const head = (x) => x[0];

assertEqual(head([5, 3, 7, 8, 11]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
