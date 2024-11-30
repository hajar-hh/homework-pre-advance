const fetchUserData = require("./1-fetchUserData");

global.fetch = jest.fn();

describe("fetchUserData function", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  const mockUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  };

  it("should fetch and return the correct user data", async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockUser),
    });

    const userId = 1;
    const user = await fetchUserData(userId);

    expect(fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    expect(user).toEqual(mockUser);
  });

  it("should throw an error when fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const userId = 2;

    await expect(fetchUserData(userId)).rejects.toThrow("Network error");

    expect(fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  });

  it("should handle empty fetch response gracefully", async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const userId = 3;
    const user = await fetchUserData(userId);

    expect(user).toEqual({});
  });
});
