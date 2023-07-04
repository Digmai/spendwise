import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";

interface ItemProps {
  value: string;
  itemsKey: string;
  isActiveInput: boolean;
  handleUpdeteItems: <T extends string>(
    key: T,
    velue: T
  ) => (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const OtherItem: React.FC<ItemProps> = ({
  value,
  itemsKey,
  isActiveInput,
  handleUpdeteItems,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    setInputValue(value);
  }, []);

  if (!inputValue) {
    return <NewItem {...{ handleUpdeteItems, itemsKey }} />;
  }
  return (
    <div
      className={
        "w-full h-full p-2 border-b-2  border-l flex items-center justify-center    border-slate-400"
      }
    >
      <div className="  max-w-[300px] flex items-center    ">
        {isActiveInput ? (
          <input
            value={inputValue}
            className="text-black p-2"
            onKeyDown={handleUpdeteItems(itemsKey, inputValue)}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          value
        )}
      </div>
    </div>
  );
};
