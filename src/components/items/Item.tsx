import React, { useEffect, useState } from "react";
import { Item as ItemT } from "../../type";
import { useAppDispatch } from "../../store";
import { addItem, updateItemValueById } from "../../slices/items";
import { RenderTree } from "../render/RenderTree";
import { RenderItems } from "../render/RenderItems";
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
  const [isActiveBtnName, setIsActiveBtnName] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    setInputValue(items.name);
  }, [items.name]);

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
    setIsActiveInput(false);
  };

  const hendleAddInput = () => {
    dispatch(addItem({ id: items.id, paramsId }));
  };
  console.log("lastNode:", lastNode, "childLength:", childLength, arrayMapping);

  const RenderTree = () => (
    <>
      {items.children.length > 0 &&
        items.children.map((item, i) => (
          <Item
            paramsId={paramsId}
            items={item}
            lastNode={i + 1}
            childLength={items.children.length}
            arrayMapping={mapArray({
              lastNode,
              childLength,
              arrayMapping,
              condition: childLength !== lastNode,
            })}
          />
        ))}
    </>
  );

  return (
    <>
      {
        <RenderItems
          {...{
            arrayMapping,
            childLength,
            handleUpdete,
            hendleAddInput,
            inputValue,
            isActiveBtnName,
            isActiveInput,
            isExpanded,
            items,
            lastNode,
            setInputValue,
            setIsActiveBtnName,
            setIsActiveInput,
            setIsExpanded,
          }}
        />
      }

      {!isExpanded && isStart && <RenderTree />}
      {isExpanded && <RenderTree />}
    </>
  );
};

export default Item;
