import { Dispatch, SetStateAction } from "react";
import { Item } from "../../type";
import {
  handleActive,
  handleDivClick,
  handleToggle,
  handleUpdeteItems,
  hendleEditeInput,
  hendleInput,
} from "../../utils/handles";
import BtnAddOrEdite from "../btn/BtnAddOrEdite";
import BtnTree from "../btn/BtnTree";
import { NameItem } from "../items/NameItem";

interface PropsRenderNameItem {
  value: string;
  keys: string;
  id: string;
  isExpanded: boolean;
  isActiveBtnName: boolean;
  isActiveInput: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  setIsActiveInput: Dispatch<SetStateAction<boolean>>;
  setIsActiveBtnName: Dispatch<SetStateAction<boolean>>;
  arrayMapping: boolean[];
  childLength: number;
  items: Item;
  lastNode: number;
  hendleAddInput: () => void;
  handleUpdete: ({
    value,
    key,
    id,
  }: {
    value: string;
    key: string;
    id: string;
  }) => void;
}

export const RenderNameItem: React.FC<PropsRenderNameItem> = ({
  arrayMapping,
  childLength,
  hendleAddInput,
  isActiveBtnName,
  isActiveInput,
  isExpanded,
  items,
  lastNode,
  setIsActiveBtnName,
  setIsActiveInput,
  setIsExpanded,
  handleUpdete,
  id,
  keys,
  value,
}) => {
  return (
    <NameItem
      isActiveInput={isActiveInput}
      onMouseEnter={handleActive({
        setIsActiveBtnName,
      })}
      handleUpdeteItems={handleUpdeteItems({
        id,
        handleUpdete,
      })}
      handleDivClick={handleDivClick(setIsActiveBtnName)}
      arrayMapping={arrayMapping}
      childLength={childLength}
      items={items}
      lastNode={lastNode}
      btnTree={
        <BtnTree
          pride={items.pride}
          isExpanded={isExpanded}
          handleToggle={handleToggle({ isExpanded, setIsExpanded })}
        />
      }
      btnAddAndEdit={
        <>
          {isActiveBtnName && (
            <div
              onMouseLeave={handleActive({
                setIsActiveBtnName,
              })}
              onClick={() => setIsActiveBtnName((e) => !e)}
              className="absolute bg-slate-900/60 w-full h-full flex  items-center justify-around "
            >
              <>
                <BtnAddOrEdite
                  title="Add"
                  hendleIsActiveInput={hendleAddInput}
                />
                <BtnAddOrEdite
                  hendleIsActiveInput={hendleEditeInput(setIsActiveInput)}
                  title="Edite"
                />
              </>
            </div>
          )}
        </>
      }
    />
  );
};
