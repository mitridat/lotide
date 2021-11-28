/*
Expected outcome
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
*/

// Step 1: Array1 already exists
const Array1 = [1, 2, 3, 4];
const extra = 2;

// Step 3: Loop function "without" cycling thru elements of Array 1
let without = (Array1, extra) => {
  // Step 4: Create an empty target Array2; remember that Array 1 should not be modified!
  const Array2 = [];
  for (let i = 0; i < Array1.length; i++)
    if (Array1[i] !== extra)
      Array2.push(Array1[i]);
  return `[${Array1}], [${extra}] // => [${Array2}]`;
};

// Step 5: display the value
console.log(without(Array1, extra));