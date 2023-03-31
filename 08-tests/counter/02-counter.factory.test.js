const createCounter = require("./02-counter.factory");

test("it should increment its value", () => {
  const counter = createCounter();
  const result = 1;

  counter.increment();

  expect(counter.value).toBe(result);
});

test("it should decrement its value", () => {
  const counter = createCounter();
  const result = -1;

  counter.decrement();

  expect(counter.value).toBe(result);
});
