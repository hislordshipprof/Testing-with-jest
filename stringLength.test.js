const stringLength = require("./stringLength");

it("This should return the length of a string", () => {
  const str = "welcome";
  const result = stringLength(str);
  expect(result).toBe(str.length);
});

it("This should throw an error if the string is greater than 10 characters, or empty", () => {
  const str = "welcome buddy";
  const result = () => stringLength(str);
  expect(result).toThrowError();
});
