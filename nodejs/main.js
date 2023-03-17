// CommonJS

const { sum } = require("./math");

module.exports = { printSum };

function printSum(a, b) {
  console.warn(sum(a, b));
}

2 === "2";
// const a = null;
