import { Item as IItem } from "../../../type";
import { checkConditions, mapArray } from "../../../utils/checkArrayMapping";
import Item from "../Item";

interface PropsRenderTree {
  items: IItem;
  isStart?: boolean;
  paramsId: string;
  lastNode: number;
  childLength: number;
  arrayMapping: boolean[];
}

export const RenderTree: React.FC<PropsRenderTree> = ({
  items,
  paramsId,
  arrayMapping,
  childLength,
  lastNode,
  isStart,
}) => {
  return (
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
};
