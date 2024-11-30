const getUserWithDelay = require("./0-delayPromise");

describe("getUserWithDelay function", () => {
  test("return the user object after a delay", async () => {
    const userId = 1;

    const start = Date.now();
    const user = await getUserWithDelay(userId);
    const duration = Date.now() - start;

    expect(user).toEqual({ id: userId, name: `User ${userId}` });

    expect(duration).toBeGreaterThanOrEqual(1000);
    expect(duration).toBeLessThan(1100);
  });

  test("resolve with the correct user object", async () => {
    const userId = 2;

    const user = await getUserWithDelay(userId);

    expect(user).toEqual({ id: userId, name: `User ${userId}` });
  });
});
