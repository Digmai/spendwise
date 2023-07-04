import { Dispatch, SetStateAction } from "react";
import { Item } from "../../../type";
import { handleToggle, handleUpdeteItems } from "../../../utils/handles";
import BtnTree from "../../btn/BtnTree";
import { NameItem } from "../optionsItem/NameItem";

interface PropsRenderNameItem {
  value: string;
  keys: string;
  id: string;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;

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
  isExpanded,
  items,
  lastNode,
  setIsExpanded,
  handleUpdete,
  id,
}) => {
  return (
    <NameItem
      handleUpdeteItems={handleUpdeteItems({
        id,
        handleUpdete,
      })}
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
    />
  );
};
