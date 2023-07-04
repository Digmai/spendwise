import { Dispatch, SetStateAction, useState } from "react";
import { Item } from "../../../type";
import Tree from "../../Tree/Tree";
import {
  handleActive,
  handleDivClick,
  handleToggle,
} from "../../../utils/handles";
import BtnItem from "./BtnItem";
import InputItem from "./InputItem";
import BtnTree from "../../btn/BtnTree";
import WrapperComponent from "./WrapperComponent";

interface ItemProps {
  items: Item;
  lastNode: number;
  childLength: number;
  arrayMapping: boolean[];
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  handleUpdeteItems: <T extends string>(
    key: T,
    velue: T
  ) => (event: React.KeyboardEvent<HTMLDivElement>) => void;
  hendleAddInput: () => void;
}

export const NameItem: React.FC<ItemProps> = ({
  arrayMapping,
  childLength,
  lastNode,
  items,
  isExpanded,
  handleUpdeteItems,
  setIsExpanded,
  hendleAddInput,
}) => {
  const [isActiveBtnName, setIsActiveBtnName] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);
  if (items.name.length === 0) {
    return (
      <InputItem {...{ handleUpdeteItems, itemsKey: "name", value: "" }} />
    );
  }
  const mLeft = 15;

  return (
    <div
      style={{ marginLeft: items.pride * mLeft + "px" }}
      className=" w-auto h-auto min-h-[20px] box-border flex items-center pl-2 relative border-b-2 border-slate-400 "
    >
      {
        /// Tree border visible
      }
      <Tree
        items={items}
        mLeft={mLeft}
        childLength={childLength}
        lastNode={lastNode}
        arrayMapping={arrayMapping}
      />
      {
        /// btn open children elements
      }
      {items.pride >= 1 && items.children.length > 0 && (
        <WrapperComponent
          children={
            <>
              {
                /// btn open children elements
                <BtnTree
                  pride={items.pride}
                  isExpanded={isExpanded}
                  handleToggle={handleToggle({ isExpanded, setIsExpanded })}
                />
              }
            </>
          }
        />
      )}

      <div className=" max-w-xs relative w-full h-full box-border m-2 pr-3 grid grid-cols-1 gap-3">
        {isActiveInput ? (
          <WrapperComponent
            children={
              <>
                <div className=" relative w-1/2 h-full flex items-center ">
                  <InputItem
                    {...{
                      setIsActiveInput,
                      handleUpdeteItems,
                      itemsKey: "name",
                      value: items.name,
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
                  className=" w-full h-full flex items-center "
                >
                  {items["name"]}

                  {items.pride >= 1 && isActiveBtnName && (
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
