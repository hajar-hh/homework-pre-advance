import { render, screen } from "@testing-library/react";
import { Application } from "../components/optional/Application/application";

describe("Job Application Form", () => {
  test("renders all form elements correctly", () => {
    render(<Application />);

    const titleHeading = screen.getByRole("heading", {
      level: 1,
      name: "Job Application Form",
    });
    const subsectionHeading = screen.getByRole("heading", {
      level: 2,
      name: "Section 1",
    });
    expect(titleHeading).toBeInTheDocument();
    expect(subsectionHeading).toBeInTheDocument();

    const infoText = screen.getByText("All fields are mandatory");
    expect(infoText).toBeInTheDocument();

    const laptopImage = screen.getByAltText("a person with a laptop");
    expect(laptopImage).toBeInTheDocument();

    const customHtmlElement = screen.getByTestId("custom-element");
    expect(customHtmlElement).toBeInTheDocument();

    const fullNameInput = screen.getByLabelText("Name");
    expect(fullNameInput).toBeInTheDocument();
    expect(fullNameInput).toHaveValue("Tejveer");

    const bioField = screen.getByLabelText("Bio");
    expect(bioField).toBeInTheDocument();

    const locationDropdown = screen.getByLabelText("Job location");
    expect(locationDropdown).toBeInTheDocument();

    const termsCheckbox = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsCheckbox).toBeInTheDocument();

    const formSubmitButton = screen.getByRole("button", { name: "Submit" });
    expect(formSubmitButton).toBeInTheDocument();
    expect(formSubmitButton).not.toBeDisabled();

    const namePlaceholder = screen.getByPlaceholderText("Fullname");
    expect(namePlaceholder).toBeInTheDocument();
  });
});
