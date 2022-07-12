const reverseString = require("./reverseString");

it("This should return the reverse of a string", () => {
  const str = "welcome";
  const result = reverseString(str);
  expect(result).toBe(reverseString(str));
});
