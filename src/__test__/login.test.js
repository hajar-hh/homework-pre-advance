import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/4-Login/Login";

describe("Login component", () => {
  test("renders a button", () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test('displays "login" as initial text', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("login");
  });

  test('changes text to "logout" when clicked', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("logout");
  });

  test('changes text back to "login" when clicked again', () => {
    render(<Login />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("login");
  });
});
