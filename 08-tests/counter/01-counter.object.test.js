const counter = require("./01-counter.object");

test("it should increment its value", () => {
  const result = 1;

  counter.increment();

  expect(counter.value).toBe(result);
});

test("it should decrement its value", () => {
  const result = 0;

  counter.decrement();

  expect(counter.value).toBe(result);
});
