import React, { useState, useCallback } from "react";
import InputItem from "./InputItem";
import WrapperComponent from "./WrapperComponent";
import { handleDivClick } from "../../../utils/handles";
import BtnItem from "./BtnItem";

interface ItemProps {
  value: string;
  handleUpdate: (velue: string) => void;
  handleAddInput: () => void;
}

export const OtherItem: React.FC<ItemProps> = React.memo(
  ({ value, handleUpdate, handleAddInput }) => {
    const [isActiveInput, setIsActiveInput] = useState(false);
    const [isActiveBtnName, setIsActiveBtnName] = useState(false);

    const handleDivMouseEnter = useCallback(() => {
      setIsActiveBtnName((e) => !e);
    }, []);

    const handleInputChange = useCallback(
      (newValue: string) => {
        handleUpdate(newValue);
      },
      [handleUpdate]
    );

    const handleBtnClick = useCallback(() => {
      handleAddInput();
    }, [handleAddInput]);

    return (
      <div className="w-auto h-auto min-h-[20px] box-border flex items-center pl-2 relative border-b border-slate-400">
        <div className="max-w-xs relative w-full h-full box-border m-2 pr-3 grid grid-cols-1 gap-3">
          <WrapperComponent>
            <div
              onMouseEnter={handleDivMouseEnter}
              onClick={handleDivClick(setIsActiveBtnName)}
              className="w-full h-full flex items-center"
            >
              {isActiveInput ? (
                <InputItem
                  handleUpdate={handleInputChange}
                  value={value}
                  setIsActiveInput={setIsActiveInput}
                />
              ) : (
                <>
                  {value}
                  {isActiveBtnName && (
                    <BtnItem
                      setIsActiveBtnName={handleDivMouseEnter}
                      setIsActiveInput={setIsActiveInput}
                      handleAddInput={handleBtnClick}
                    />
                  )}
                </>
              )}
            </div>
          </WrapperComponent>
        </div>
      </div>
    );
  }
);
