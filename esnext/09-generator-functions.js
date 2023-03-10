const it = createIterator();

console.log(it.value);
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* createIterator() {
  yield 42;
  yield 37;
  return 10;
}
