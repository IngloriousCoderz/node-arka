const Counter = require("./03-counter.class");

test("it should increment its value", () => {
  const counter = new Counter();
  const result = 1;

  counter.increment();

  expect(counter.value).toBe(result);
});

test("it should decrement its value", () => {
  const counter = new Counter();
  const result = -1;

  counter.decrement();

  expect(counter.value).toBe(result);
});
