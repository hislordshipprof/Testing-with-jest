const Calculator = require("./calculator");

describe("Calculator", () => {
  describe("add", () => {
    it("This should return the sum of two numbers", () => {
      const a = 1;
      const b = 2;
      const calculator = new Calculator(a, b);
      const result = calculator.add();
      expect(result).toBe(3);
    });
  });

  describe("subtract", () => {
    it("This should return the difference of two numbers", () => {
      const a = 1;
      const b = 2;
      const calculator = new Calculator(a, b);
      const result = calculator.subtract();
      expect(result).toBe(-1);
    });
  });

  describe("multiply", () => {
    it("This should return the product of two numbers", () => {
      const a = 1;
      const b = 2;
      const calculator = new Calculator(a, b);
      const result = calculator.multiply();
      expect(result).toBe(2);
    });
  });

  describe("divide", () => {
    it("This should return the quotient of two numbers", () => {
      const a = 1;
      const b = 2;
      const calculator = new Calculator(a, b);
      const result = calculator.divide();
      expect(result).toBe(a / b);
    });
  });
});
