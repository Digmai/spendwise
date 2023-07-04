import React, { useState, memo, useCallback } from "react";
import { Item as ItemT } from "../../type";
import { useAppDispatch } from "../../store";
import { addItem, updateItemValueById } from "../../slices/items";
import { RenderTree } from "./render/RenderTree";
import { RenderItems } from "./render/RenderItems";

interface ItemProps {
  items: ItemT;
  paramsId: string;
  lastNode: number;
  isStart?: boolean;
  childLength: number;
  arrayMapping: boolean[];
}

const Item: React.FC<ItemProps> = memo(
  ({ items, isStart, paramsId, lastNode, childLength, arrayMapping }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const dispatch = useAppDispatch();

    const handleUpdate = useCallback(
      (value: string, key: string, id: string) => {
        dispatch(updateItemValueById({ key, id, value, paramsId }));
      },
      [dispatch, paramsId]
    );

    const handleAddInput = useCallback(() => {
      dispatch(addItem({ id: items.id, paramsId }));
    }, [dispatch, items.id, paramsId]);

    return (
      <>
        {
          <RenderItems
            {...{
              items,
              lastNode,
              isExpanded,
              childLength,
              arrayMapping,
              setIsExpanded,
              handleAddInput,
              handleUpdate: (key: string) => (value: string) =>
                handleUpdate(value, key, items.id),
            }}
          />
        }
        {(isExpanded || isStart) && (
          <RenderTree
            {...{ arrayMapping, childLength, items, lastNode, paramsId }}
          />
        )}
      </>
    );
  }
);

export default Item;
