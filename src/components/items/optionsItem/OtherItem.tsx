import React, { useEffect, useState } from "react";
import InputItem from "./InputItem";
import WrapperComponent from "./WrapperComponent";
import { handleActive, handleDivClick } from "../../../utils/handles";
import BtnItem from "./BtnItem";

interface ItemProps {
  value: string;
  pride: number;
  itemsKey: string;
  handleUpdeteItems: <T extends string>(
    key: T,
    velue: T
  ) => (event: React.KeyboardEvent<HTMLDivElement>) => void;
  hendleAddInput: () => void;
}

export const OtherItem: React.FC<ItemProps> = ({
  value,
  pride,
  itemsKey,
  handleUpdeteItems,
  hendleAddInput,
}) => {
  const [isActiveInput, setIsActiveInput] = useState(false);
  const [isActiveBtnName, setIsActiveBtnName] = useState(false);

  useEffect(() => {}, []);
  if (value.length === 0) {
    return (
      <WrapperComponent
        children={
          <div className=" relative max-h-5/6 m-2 box-border flex items-center justify-center border border-yellow-700  ">
            <InputItem {...{ handleUpdeteItems, itemsKey, value: "" }} />
          </div>
        }
      />
    );
  }
  return (
    <div
      className={
        " min-h-[24px] max-h-[120px]  box-border flex items-center pl-2 relative  border-l border-b-2 border-slate-400 "
      }
    >
      <div className=" max-w-xs relative w-full h-full box-border m-2 pr-3">
        {isActiveInput ? (
          <WrapperComponent
            children={
              <>
                <div className=" relative w-1/2 h-full flex items-center ">
                  <InputItem
                    {...{
                      setIsActiveInput,
                      handleUpdeteItems,
                      itemsKey,
                      value,
                    }}
                  />
                </div>
              </>
            }
          />
        ) : (
          <WrapperComponent
            children={
              <>
                <div
                  onMouseEnter={handleActive({
                    setIsActiveBtnName,
                  })}
                  onClick={handleDivClick(setIsActiveBtnName)}
                  className=" w-full h-full flex items-center"
                >
                  {value}

                  {pride >= 1 && isActiveBtnName && (
                    <BtnItem
                      {...{
                        setIsActiveBtnName,
                        setIsActiveInput,
                        hendleAddInput,
                      }}
                    />
                  )}
                </div>
              </>
            }
          />
        )}
      </div>
    </div>
  );
};
