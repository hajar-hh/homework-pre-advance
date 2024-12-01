import { render, screen, fireEvent } from "@testing-library/react";
import LiveInput from "../components/5-LiveInput/LiveInput";

describe("LiveInput component", () => {
  test("displays an input field with the placeholder 'Enter a text'", () => {
    render(<LiveInput />);
    const inputElement = screen.getByPlaceholderText("Enter a text");
    expect(inputElement).toBeInTheDocument();
  });

  test("test h2 element", () => {
    render(<LiveInput />);
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });

  test("updates h2 text based on input value", () => {
    render(<LiveInput />);
    const inputElement = screen.getByPlaceholderText("Enter a text");
    const headingElement = screen.getByRole("heading", { level: 2 });

    expect(headingElement).toHaveTextContent("");

    fireEvent.change(inputElement, { target: { value: "hajar" } });
    expect(headingElement).toHaveTextContent("hajar");
  });
});
