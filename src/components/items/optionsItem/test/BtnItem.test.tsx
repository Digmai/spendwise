import React from "react";
import { render, fireEvent } from "@testing-library/react";

import BtnItem from "../BtnItem";

describe("BtnItem", () => {
  it("should handle add click", () => {
    const setIsActiveBtnName = jest.fn();
    const setIsActiveInput = jest.fn();
    const handleAddInput = jest.fn();

    const { getByText } = render(
      <BtnItem
        setIsActiveBtnName={setIsActiveBtnName}
        setIsActiveInput={setIsActiveInput}
        handleAddInput={handleAddInput}
      />
    );

    const addButton = getByText("Add");
    fireEvent.click(addButton);

    expect(handleAddInput).toHaveBeenCalled();
    expect(setIsActiveBtnName).toHaveBeenCalled();
    expect(setIsActiveInput).not.toHaveBeenCalled();
  });

  it("should handle edit click", () => {
    const setIsActiveBtnName = jest.fn();
    const setIsActiveInput = jest.fn();
    const handleAddInput = jest.fn();

    const { getByText } = render(
      <BtnItem
        setIsActiveBtnName={setIsActiveBtnName}
        setIsActiveInput={setIsActiveInput}
        handleAddInput={handleAddInput}
      />
    );

    const editButton = getByText("Edit");
    fireEvent.click(editButton);

    expect(handleAddInput).not.toHaveBeenCalled();
    expect(setIsActiveBtnName).toHaveBeenCalled();
    expect(setIsActiveInput).toHaveBeenCalled();
  });
});
