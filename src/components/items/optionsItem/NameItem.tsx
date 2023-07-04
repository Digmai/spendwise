import { Dispatch, SetStateAction, useState, useCallback } from "react";
import { Item } from "../../../type";
import Tree from "../../Tree/Tree";
import { handleToggle } from "../../../utils/handles";
import BtnItem from "./BtnItem";
import InputItem from "./InputItem";
import BtnTree from "../../btn/BtnTree";
import WrapperComponent from "./WrapperComponent";

interface ItemProps {
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  handleUpdate: (value: string) => void;
  handleAddInput: () => void;
  arrayMapping: boolean[];
  childLength: number;
  isExpanded: boolean;
  lastNode: number;
  items: Item;
}

export const NameItem: React.FC<ItemProps> = ({
  handleAddInput,
  setIsExpanded,
  handleUpdate,
  arrayMapping,
  childLength,
  isExpanded,
  lastNode,
  items,
}) => {
  const [isActiveBtnName, setIsActiveBtnName] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleDivMouseEnter = useCallback(() => {
    setIsActiveBtnName(true);
  }, []);

  const handleDivMouseLeave = useCallback(() => {
    setIsActiveBtnName(false);
  }, []);

  const handleInputChange = useCallback(
    (value: string) => {
      handleUpdate(value);
      setIsActiveInput(false);
    },
    [handleUpdate]
  );

  const renderNameItem = useCallback(() => {
    return isActiveInput ? (
      <InputItem
        handleUpdate={handleInputChange}
        value={items.name}
        setIsActiveInput={setIsActiveInput}
      />
    ) : (
      <>
        {items.name}

        {items.pride > 0 && isActiveBtnName && (
          <BtnItem
            setIsActiveBtnName={handleDivMouseLeave}
            setIsActiveInput={setIsActiveInput}
            handleAddInput={handleAddInput}
          />
        )}
      </>
    );
  }, [
    isActiveInput,
    isActiveBtnName,
    items.name,
    items.pride,
    handleAddInput,
    handleInputChange,
    handleDivMouseLeave,
  ]);

  const mLeft = 20;

  return (
    <div
      style={{ marginLeft: items.pride * mLeft + "px" }}
      className="w-auto h-auto min-h-[20px] box-border flex items-center pl-2 relative border-b border-slate-400"
    >
      <Tree
        items={items}
        mLeft={mLeft}
        childLength={childLength}
        lastNode={lastNode}
        arrayMapping={arrayMapping}
      />
      {items.pride >= 1 && items.children.length > 0 && (
        <WrapperComponent>
          <BtnTree
            pride={items.pride}
            isExpanded={isExpanded}
            handleToggle={handleToggle({ isExpanded, setIsExpanded })}
          />
        </WrapperComponent>
      )}
      <div
        className="max-w-xs relative w-full h-full box-border m-2 pr-3 grid grid-cols-1 gap-3"
        onMouseEnter={handleDivMouseEnter}
      >
        <WrapperComponent>{renderNameItem()}</WrapperComponent>
      </div>
    </div>
  );
};
