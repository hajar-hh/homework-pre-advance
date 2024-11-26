const simpleSum = require("./1-sum");

test("sum 2 number", () => {
  expect(simpleSum(2, 4)).toBe(6); 
  expect(simpleSum(10, 101)).toBe(111); 
  expect(simpleSum(-2, 1)).toBe(-1); 
  expect(simpleSum(423, 658)).toBe(1081); 
  expect(simpleSum(0, 0)).toBe(0); 
});
