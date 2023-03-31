const Counter = require("./03-counter.class");

let counter;

beforeEach(() => {
  counter = new Counter();
});

test("it should increment its value", () => {
  const result = 1;

  counter.increment();

  expect(counter.value).toBe(result);
});

test("it should decrement its value", () => {
  const result = -1;

  counter.decrement();

  expect(counter.value).toBe(result);
});
