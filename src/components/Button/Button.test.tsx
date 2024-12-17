import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  const mockOnClick = jest.fn();
  const defaultProps = {
    label: "Click Me",
    icon: "test-icon",
    backgroundColor: "#f0f0f0",
    onClick: mockOnClick
  };

  it("renders without crashing", () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders correctly with given props", () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
    expect(button).toHaveStyle(`background-color: ${defaultProps.backgroundColor}`);
  });

  it("calls onClick handler when clicked", () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});