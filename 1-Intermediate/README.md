# Continue to writing Jest tests ⚡

### Testing `checkAge` function

Here, you'll write separate tests (`test()`) to verify the function's behavior for ages above and below 18. We'll use `expect()` and appropriate matchers.

**Matchers:**

- `toBeUndefined()`: Checks if a value is `undefined`.
- `not`: Negates the following matcher (e.g., `not.toBeUndefined()`)

**Test Cases:**

- Age greater than 18 (e.g., 20).
- Age less than 18 (e.g., 16).

---

### Testing `getAverage` function

Write three separate tests (`test()`) to handle different average scenarios using `expect()` and appropriate matchers.

**Matchers:**

- `toBeGreaterThan()`: Checks if a value is greater than another.
- `toBeLessThan()`: Checks if a value is less than another.

**Test Cases:**

1. Average greater than 5 (e.g., calculate the average of 6, 7, and 6).
2. Average less than 5 (e.g., calculate the average of 2, 3, and 4).
3. Average equal to 5 (e.g., calculate the average of 4, 5, and 6).

---

### Testing `filterElement` function

Write two separate tests (`test()`) to ensure `filterElement` works correctly for empty and non-empty arrays.

**Test Cases:**

- Filter for "grape" in an empty array: Expected output - `[]` (empty array).
- Filter for "apple" in an array with "apple": Expected output - `["apple"]`.
