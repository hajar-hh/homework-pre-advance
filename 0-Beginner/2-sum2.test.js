const sum = require("./2-sum2");

test("sum two numbers", () => {
  expect(sum(10,10)).toBe(20); 
  expect(sum(-5, 3)).toBe(-2); 
  expect(sum(1.5, 2.5)).toBe(4); 
});

test("throws error when inputs are not numbers", () => {
  expect(() => sum("33", 3)).toThrow(TypeError); 
  expect(() => sum(2, "33")).toThrow(TypeError); 
  expect(() => sum(null, 3)).toThrow(TypeError); 
});
