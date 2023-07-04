import React, { useEffect, useState } from "react";
import { Item as ItemT } from "../../type";
import { useAppDispatch } from "../../store";
import { addItem, updateItemValueById } from "../../slices/items";
import { RenderTree } from "./render/RenderTree";
import { RenderItems } from "./render/RenderItems";
import { checkConditions, mapArray } from "../../utils/checkArrayMapping";

interface ItemProps {
  paramsId: string;
  items: ItemT;
  lastNode: number;
  childLength: number;
  arrayMapping: boolean[];
  isStart?: boolean;
}

const Item: React.FC<ItemProps> = ({
  items,
  lastNode,
  childLength,
  arrayMapping,
  isStart,
  paramsId,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const dispatch = useAppDispatch();

  const handleUpdete = ({
    value,
    key,
    id,
  }: {
    value: string;
    key: string;
    id: string;
  }) => {
    dispatch(updateItemValueById({ key, id, value, paramsId }));
  };

  const hendleAddInput = () => {
    dispatch(addItem({ id: items.id, paramsId }));
  };

  return (
    <>
      {
        <RenderItems
          {...{
            arrayMapping,
            childLength,
            handleUpdete,
            hendleAddInput,
            isExpanded,
            items,
            lastNode,
            setIsExpanded,
          }}
        />
      }

      {!isExpanded && isStart && (
        <RenderTree
          {...{ arrayMapping, childLength, items, lastNode, paramsId }}
        />
      )}
      {isExpanded && (
        <RenderTree
          {...{ arrayMapping, childLength, items, lastNode, paramsId }}
        />
      )}
    </>
  );
};

export default Item;
