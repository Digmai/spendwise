import React, { Dispatch, SetStateAction, useState, memo } from "react";
import { handleUpdateItems } from "../../../utils/handles";

interface ItemProps {
  value?: string;
  handleUpdate: (value: string) => void;
  setIsActiveInput?: Dispatch<SetStateAction<boolean>>;
}

const InputItem: React.FC<ItemProps> = memo(
  ({ handleUpdate, setIsActiveInput, value = "" }) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleKeyDown = handleUpdateItems(
      () => handleUpdate(inputValue),
      () => setIsActiveInput && setIsActiveInput((prev) => !prev)
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    return (
      <input
        value={inputValue}
        className="text-black p-2 min-h-[20px]"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    );
  }
);

export default InputItem;
