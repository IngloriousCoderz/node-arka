console.log(sum(2, 3));
console.log(sum(2));
console.log(sum(2, undefined));
console.log(sum(2, null));
console.log(sum(null, 3));
console.log(sum(undefined, 3));

// function sum(a, b) {
//   if (typeof a === "undefined") {
//     a = 0;
//   }
//   if (typeof b === "undefined") {
//     b = 0;
//   }
//   return a + b;
// }

function sum(a = 0, b = 5) {
  return a + b;
}
