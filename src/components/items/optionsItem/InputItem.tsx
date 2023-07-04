import React, { Dispatch, SetStateAction, useState } from "react";
import { onKeyDown } from "../../../utils/onKeyDown";
interface ItemProps {
  value: string;
  itemsKey: string;
  handleUpdeteItems: <T extends string>(
    key: T,
    velue: T
  ) => (event: React.KeyboardEvent<HTMLDivElement>) => void;
  setIsActiveInput?: Dispatch<SetStateAction<boolean>>;
}

const InputItem: React.FC<ItemProps> = ({
  handleUpdeteItems,
  setIsActiveInput,
  itemsKey,
  value,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const typrInput =
    ((itemsKey === "toDate" || itemsKey === "fromDate") && "date") || "text";

  const up = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(itemsKey);

    if (onKeyDown(event)) {
      setIsActiveInput && setIsActiveInput((e) => !e);
      handleUpdeteItems(itemsKey, inputValue)(event);
    }
  };

  return (
    <input
      // type={typrInput}
      value={inputValue}
      className="text-black p-2 min-h-[20px]"
      onKeyDown={up}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default InputItem;
