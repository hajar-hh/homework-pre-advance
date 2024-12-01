import { render, screen, waitFor } from "@testing-library/react";
import UserTable from "../components/7-UserTable/UserTable";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
];

describe("UserTable component", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("fetches and renders a table of users", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockUsers));

    render(<UserTable />);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );

    const rows = await waitFor(() => screen.getAllByTestId("user-row"));

    expect(rows).toHaveLength(mockUsers.length);

    expect(rows[0]).toHaveTextContent("1");
    expect(rows[0]).toHaveTextContent("John Doe");
    expect(rows[0]).toHaveTextContent("john@example.com");
    expect(rows[0]).toHaveTextContent("123-456-7890");
  });

  test("renders a row for each user fetched from the API", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockUsers));

    render(<UserTable />);

    const rows = await waitFor(() => screen.getAllByTestId("user-row"));

    mockUsers.forEach((user, i) => {
      expect(rows[i]).toHaveTextContent(user.id.toString());
      expect(rows[i]).toHaveTextContent(user.name);
      expect(rows[i]).toHaveTextContent(user.email);
      expect(rows[i]).toHaveTextContent(user.phone);
    });
  });
});
