import { Item } from "../type";

interface MapArray {
  condition: boolean;
  arrayMapping: boolean[];
  childLength: number;
  lastNode: number;
}

export const mapArray = ({
  /// TREE BORDER ON THE LEFT
  condition,
  arrayMapping,
  childLength,
  lastNode,
}: MapArray) => {
  return [childLength !== lastNode, ...arrayMapping];
};

export const checkConditions = ({
  isStart,
  items,
}: {
  isStart: boolean | undefined;
  items: Item;
}) => {
  if (isStart || (items.children.length > 0 && items.pride === 1)) {
    return true;
  }
  return true;
};

export const checkKey = (key: string) => {
  return key !== "id" && key !== "pride" && key !== "children";
};
