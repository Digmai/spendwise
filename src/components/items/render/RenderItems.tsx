import React, { Dispatch, SetStateAction, memo, useCallback } from "react";
import { Item } from "../../../type";
import NewItem from "../optionsItem/NewItem";
import { NameItem } from "../optionsItem/NameItem";
import { OtherItem } from "../optionsItem/OtherItem";
import { checkKey } from "../../../utils/checkArrayMapping";

interface PropsRenderItems {
  handleUpdate: (key: string) => (value: string) => void;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  handleAddInput: () => void;
  arrayMapping: boolean[];
  childLength: number;
  isExpanded: boolean;
  lastNode: number;
  items: Item;
}
export const RenderItems: React.FC<PropsRenderItems> = memo(
  ({
    handleAddInput,
    setIsExpanded,
    handleUpdate,
    arrayMapping,
    childLength,
    isExpanded,
    lastNode,
    items,
  }) => {
    const keys = Object.keys(items);

    const renderNewItem = useCallback(
      (key: string) => <NewItem handleUpdate={handleUpdate(key)} />,
      [handleUpdate]
    );

    const renderNameItem = useCallback(
      (key: string) => (
        <NameItem
          items={items}
          lastNode={lastNode}
          isExpanded={isExpanded}
          childLength={childLength}
          arrayMapping={arrayMapping}
          setIsExpanded={setIsExpanded}
          handleAddInput={handleAddInput}
          handleUpdate={handleUpdate(key)}
        />
      ),
      [
        arrayMapping,
        childLength,
        isExpanded,
        lastNode,
        items,
        handleUpdate,
        handleAddInput,
        setIsExpanded,
      ]
    );

    const renderOtherItem = useCallback(
      (key: string) => (
        <OtherItem
          value={items[key]}
          handleAddInput={handleAddInput}
          handleUpdate={handleUpdate(key)}
        />
      ),
      [handleAddInput, handleUpdate, items]
    );

    const render = React.useMemo(
      () =>
        keys.map((key) => {
          if (checkKey(key)) {
            if (items[key].length === 0) {
              return renderNewItem(key);
            }
            if (key === "name") {
              return renderNameItem(key);
            }

            return renderOtherItem(key);
          }
          return undefined;
        }),
      [keys, items, renderNameItem, renderOtherItem, renderNewItem]
    );
    return <>{render}</>;
  }
);
