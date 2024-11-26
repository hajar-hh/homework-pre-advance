# Start to writing Jest tests

This README guides you through writing Jest tests for functions in `0-isTruthyOrFalsy.js`, `1-sum.js`, and `2-sum2.js`.

### Testing `isTruthyOrFalsy` function

Here, you'll write separate tests (`test()`) for truthy and falsy values using `expect()` and appropriate matchers.

**Test Cases:**

- **Truthy Values:** `true`, `"hello"`, `10`
- **Falsy Values:** `false`, `""` (empty string), `0`, `null`, `undefined`

**Matchers:**

- Use `toBeTruthy()` for truthy values.
- Use `toBeFalsy()` for falsy values.

**Example Test Structure:**

```javascript
test("test truthy values", () => {
  // expect().[matcherName!]()
});

test("test falsy values", () => {
  // expect().[matcherName!]()
});
```

---

### Testing `simpleSum` function

Write a single test (`test()`) to verify the sum of 1 and 2 using the `toBe()` matcher.

**Example Test:**

```javascript
test("test of the sum of 1 and 2", () => {
  // expect().[matcherName!]()
});
```

---

### Testing `sum` function

Write three separate tests (`test()`) for `sum`:

1. Test the sum of positive numbers (e.g., 1 and 2) using `toBe()`.
2. Test the sum of negative numbers (e.g., -1 and 3) using `toBe()`.
3. Test if the function throws an error for non-numeric inputs using `toThrow()`.

**Remember:** Refer to the modified code in `1-sum.js` to understand how it handles different inputs.
