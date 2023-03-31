const { increment, decrement } = require("./04-counter.functions");

test("it should increment its value", () => {
  const stateBefore = 0;
  const stateAfter = 1;

  const state = increment(stateBefore);

  expect(state).toBe(stateAfter);
});

test("it should decrement its value", () => {
  const stateBefore = 0;
  const stateAfter = -1;

  const state = decrement(stateBefore);

  expect(state).toBe(stateAfter);
});
