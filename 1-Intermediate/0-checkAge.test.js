const checkAge = require("./0-checkAge");

describe("chack age with function", () => {
  test("check age more than 18", () => {
    expect(checkAge(27)).toBe("You are eligible");
    expect(checkAge(42)).toBe("You are eligible");
    expect(checkAge(96)).toBe("You are eligible");
  });

  test("check age less than 18", () => {
    expect(checkAge(10)).toBeUndefined();
    expect(checkAge(15)).toBeUndefined();
    expect(checkAge(18)).toBeUndefined();
  });
});
