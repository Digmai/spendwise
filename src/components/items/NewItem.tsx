import React, { useState } from "react";
interface ItemProps {
  itemsKey: string;
  handleUpdeteItems: <T extends string>(
    key: T,
    velue: T
  ) => (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const NewItem: React.FC<ItemProps> = ({ handleUpdeteItems, itemsKey }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const typrInput =
    ((itemsKey === "toDate" || itemsKey === "fromDate") && "date") || "text";

  return (
    <div
      className={
        "w-full h-full p-2 border-b-2  border-l flex items-center justify-center    border-slate-400"
      }
    >
      <div className="  max-w-[300px] flex items-center    ">
        <input
          type={typrInput}
          value={inputValue}
          className="text-black p-2"
          onKeyDown={handleUpdeteItems(itemsKey, inputValue)}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default NewItem;
