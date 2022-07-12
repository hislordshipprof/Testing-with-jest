const capitalizeString = require("./capitalizeString");

it("This should return the capitalized string", () => {
  const str = "hello";
  const result = capitalizeString(str);
  expect(result).toBe(str.charAt(0).toUpperCase() + str.slice(1));
});
