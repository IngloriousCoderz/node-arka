const numbers = [1, 2, 2, 3, 5, 4, 5, 6];
console.log(Array.isArray(numbers));

const set = new Set(numbers);
console.log(set);
console.log(Array.isArray(set));

for (const num of set) {
  console.log(num);
}

console.log([...set]);

console.log([...new Set(numbers)]);
