const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;

// const squares = numbers.map((num) => square(num));
const squares = numbers.map(square);
console.log(squares);

numbers.forEach((num) => console.log(num));

numbers.forEach(console.log);
