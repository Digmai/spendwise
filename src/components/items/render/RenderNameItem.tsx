import { Dispatch, SetStateAction } from "react";
import { Item } from "../../../type";
import { handleUpdeteItems } from "../../../utils/handles";
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
  hendleAddInput,
}) => {
  return (
    <NameItem
      {...{
        handleUpdeteItems: handleUpdeteItems({
          id,
          handleUpdete,
        }),
        hendleAddInput,
        arrayMapping,
        childLength,
        items,
        lastNode,
        isExpanded,
        setIsExpanded,
      }}
    />
  );
};
