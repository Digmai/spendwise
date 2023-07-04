import { useState } from "react";
import { Item } from "../../../type";
import Tree from "../../Tree/Tree";
import NewItem from "./NewItem";
import { handleActive, handleDivClick } from "../../../utils/handles";
import BtnItem from "./BtnItem";

interface ItemProps {
  btnTree: JSX.Element;
  items: Item;
  lastNode: number;
  childLength: number;
  arrayMapping: boolean[];
  handleUpdeteItems: <T extends string>(
    key: T,
    velue: T
  ) => (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const NameItem: React.FC<ItemProps> = ({
  arrayMapping,
  childLength,
  lastNode,
  items,
  btnTree,
  handleUpdeteItems,
}) => {
  const [inputValue, setInputValue] = useState<string>(items["name"]);
  const [isActiveBtnName, setIsActiveBtnName] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);

  if (!inputValue) {
    return <NewItem {...{ handleUpdeteItems, itemsKey: "name" }} />;
  }
  const mLeft = 15;

  const wraperC = (child: JSX.Element) => {
    return (
      <div className="relative w-auto min-w-max h-full flex  items-center">
        <div className="relative w-full  h-5/6 flex justify-center items-center">
          {child}
        </div>
      </div>
    );
  };
  return (
    <div
      style={{ marginLeft: items.pride * mLeft + "px" }}
      className=" w-auto h-auto min-h-[20px] box-border flex items-center pl-2 relative border-b-2 border-slate-400 "
    >
      <Tree
        items={items}
        mLeft={mLeft}
        childLength={childLength}
        lastNode={lastNode}
        arrayMapping={arrayMapping}
      />
      {items.children.length > 0 ? (
        <div className="max-w-xs relative w-full h-full box-border m-2 pr-3 grid grid-cols-[min-content_1fr] gap-3">
          {items.pride >= 1 && wraperC(<>{btnTree}</>)}

          {wraperC(
            <>
              {isActiveInput ? (
                <input
                  value={inputValue}
                  className="text-black p-2"
                  onKeyDown={handleUpdeteItems("name", inputValue)}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              ) : (
                <div
                  onMouseEnter={handleActive({
                    setIsActiveBtnName,
                  })}
                  onClick={handleDivClick(setIsActiveBtnName)}
                  className=" w-full h-full flex items-center "
                >
                  {items["name"]}
                  {items.pride >= 1 && isActiveBtnName && (
                    <BtnItem {...{ setIsActiveBtnName, setIsActiveInput }} />
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className=" max-w-xs relative w-full h-full box-border m-2 pr-3 grid grid-cols-1 gap-3">
          {wraperC(
            <>
              {isActiveInput ? (
                <input
                  value={inputValue}
                  className="text-black p-2 min-h-[20px]"
                  onKeyDown={handleUpdeteItems("name", inputValue)}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              ) : (
                <div
                  onMouseEnter={handleActive({
                    setIsActiveBtnName,
                  })}
                  onClick={handleDivClick(setIsActiveBtnName)}
                  className=" w-full h-full flex items-center "
                >
                  {items["name"]}

                  {items.pride >= 1 && isActiveBtnName && (
                    <BtnItem {...{ setIsActiveBtnName, setIsActiveInput }} />
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};
