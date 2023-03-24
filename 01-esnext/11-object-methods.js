const obj = { a: 1, b: 2, c: 3, d: 4 };

console.log(Object.keys(obj));
for (const key of Object.keys(obj)) {
  console.log(key);
}

console.log(Object.values(obj));
for (const value of Object.values(obj)) {
  console.log(value);
}

console.log(Object.entries(obj));
for (const [key, value] of Object.entries(obj)) {
  console.log(key, ":", value);
}
