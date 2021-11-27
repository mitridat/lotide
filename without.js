// Expected outcome
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// Copy your assertArraysEqual and eqArrays functions into this new file.
// Implement without which will return a subset of a given array, removing unwanted elements.
// This function should take in a source array and a itemsToRemove array. 
// It should return a new array with only those elements from source 
// that are not present in the itemsToRemove array.