import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BtnTree from "./BtnTree";

describe("BtnTree", () => {
  const mockHandleToggle = jest.fn();

  it("renders the button with pride value", () => {
    render(
      <BtnTree pride={1} isExpanded={false} handleToggle={mockHandleToggle} />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders the button with correct styles when isExpanded is false", () => {
    render(
      <BtnTree pride={5} isExpanded={false} handleToggle={mockHandleToggle} />
    );
    const button = screen.getByText("5");
    expect(button).toHaveStyle("border-radius: 10%");
    expect(button).toHaveStyle("background: rgb(254 240 138)");
  });

  it("renders the button with correct styles when isExpanded is true", () => {
    render(
      <BtnTree pride={5} isExpanded={true} handleToggle={mockHandleToggle} />
    );
    const button = screen.getByText("5");
    expect(button).toHaveStyle("border-radius: 100% 0  100% 0");
    expect(button).toHaveStyle("background: rgb(105 165 248)");
  });

  it("calls handleToggle function when button is clicked", () => {
    render(
      <BtnTree pride={5} isExpanded={false} handleToggle={mockHandleToggle} />
    );
    const button = screen.getByText("5");
    fireEvent.click(button);
    expect(mockHandleToggle).toHaveBeenCalledTimes(1);
  });
});
