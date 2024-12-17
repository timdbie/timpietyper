import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Typer from "./Typer";

describe("Typer Component", () => {
  it("handles input correctly", () => {
    render(<Typer />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});