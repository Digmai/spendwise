import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputItem from "../InputItem";

describe("InputItem component", () => {
  test("should render input element with initial value", () => {
    const { getByDisplayValue } = render(
      <InputItem value="testValue" handleUpdate={() => {}} />
    );
    const inputElement = getByDisplayValue("testValue");
    expect(inputElement).toBeInTheDocument();
  });

  test("should update input value on change", () => {
    const { getByDisplayValue } = render(
      <InputItem value="testValue" handleUpdate={() => {}} />
    );
    const inputElement = getByDisplayValue("testValue") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "newTestValue" } });
    expect(inputElement.value).toBe("newTestValue");
  });

  test("should call handleUpdate on pressing enter", () => {
    const handleUpdate = jest.fn();
    const { getByDisplayValue } = render(
      <InputItem value="" handleUpdate={handleUpdate} />
    );
    const inputElement = getByDisplayValue("");
    fireEvent.change(inputElement, { target: { value: "testValue" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(handleUpdate).toHaveBeenCalledWith("testValue");
  });

  test("should call setIsActiveInput on pressing enter when setIsActiveInput is provided", () => {
    const setIsActiveInput = jest.fn();
    const { getByDisplayValue } = render(
      <InputItem
        value=""
        handleUpdate={() => {}}
        setIsActiveInput={setIsActiveInput}
      />
    );
    const inputElement = getByDisplayValue("");
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
    expect(setIsActiveInput).toHaveBeenCalled();
  });
});
