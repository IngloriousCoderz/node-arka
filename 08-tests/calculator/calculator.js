module.exports = { sum };

// function sum(a, b) {
//   if (a === 2 && b === 3) return 5;
//   else return 3;
// }

function sum(a, b) {
  if (a == null || b == null) {
    throw Error("You must specify to arguments.");
  }

  return Number(a) + Number(b);
}
