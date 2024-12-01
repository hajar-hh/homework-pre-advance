import { render, screen } from "@testing-library/react";
import Text from "../components/1-Text/Text.jsx";

describe("Text Component", () => {
  it('render "Welcome To APS"', () => {
    render(<Text headingText="Test Heading" />);

    expect(screen.getByText("Welcome To APS")).toBeInTheDocument();
  });

  it("display the headingText prop as the heading", () => {
    const testHeading = "My Test Heading";

    render(<Text headingText={testHeading} />);

    expect(screen.getByText(testHeading)).toBeInTheDocument();
  });
});
