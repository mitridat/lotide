// Array 1 exists
let Array1 = [16, 18, 39, 24, 37, 263, 745, "ode"];

let middle = function(arr) {
  if (arr.length % 2 === 0) {
    return `[${arr[arr.length / 2]}, ${arr[arr.length / 2 - 1]}]`;
  } else {
    return `[${arr[(arr.length - 1) / 2]}]`;
  }
};

console.log(middle(Array1));