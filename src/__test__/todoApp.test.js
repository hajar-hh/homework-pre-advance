import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.jsx";

describe("App integration tests", () => {
  test("displays a single <li> element when a todo item is submitted", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("write a todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "har chizi" } });
    fireEvent.click(button);

    const listItem = screen.getByText("har chizi");
    expect(listItem).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  test("displays multiple <li> elements when multiple todo items are submitted", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("write a todo");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "list1" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "list2" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "list3" } });
    fireEvent.click(button);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(screen.getByText("list1")).toBeInTheDocument();
    expect(screen.getByText("list2")).toBeInTheDocument();
    expect(screen.getByText("list3")).toBeInTheDocument();
  });
});
