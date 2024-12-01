import { render, screen } from "@testing-library/react";
import Greet from "../components/3-Greet/Greet.jsx";

describe("Greet Component", () => {
  it("displays default text without name prop", () => {
    render(<Greet />);
    const greetingElement = screen.getByText(/hello/i);
    expect(greetingElement).toBeInTheDocument();
  });

  it("displays text with name prop", () => {
    const name = "John";
    render(<Greet name={name} />);
    const greetingElement = screen.getByText(`hello ${name}`);
    expect(greetingElement).toBeInTheDocument();
  });
});
