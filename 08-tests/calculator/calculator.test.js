const { sum } = require("./calculator");

describe("Calculator app", () => {
  it("should sum two positive integers", () => {
    // given
    const firstOperand = 2;
    const secondOperand = 3;
    const expectedResult = 5;

    // when
    const result = sum(firstOperand, secondOperand);

    // then
    expect(result).toBe(expectedResult);
  });

  it("should sum negative integers", () => {
    // given
    const firstOperand = -1;
    const secondOperand = 4;
    const expectedResult = 3;

    // when
    const result = sum(firstOperand, secondOperand);

    // then
    expect(result).toBe(expectedResult);
  });

  it("should throw an error when one argument is null", () => {
    // given
    const firstOperand = null;
    const secondOperand = -1;

    expect(() => {
      sum(firstOperand, secondOperand);
    }).toThrow();
  });

  it("should convert to number any non-number arg", () => {
    // given
    const firstOperand = "1";
    const secondOperand = 2;
    const expectedResult = 3;

    // when
    const result = sum(firstOperand, secondOperand);

    // then
    expect(result).toBe(expectedResult);
  });
});
