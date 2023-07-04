import { memo } from "react";
import { Item as IItem } from "../../../type";
import Item from "../Item";

interface PropsRenderTree {
  items: IItem;
  isStart?: boolean;
  paramsId: string;
  lastNode: number;
  childLength: number;
  arrayMapping: boolean[];
}

export const RenderTree: React.FC<PropsRenderTree> = memo(
  ({ items, paramsId, arrayMapping, childLength, lastNode }) => {
    return (
      <>
        {items.children.length > 0 &&
          items.children.map((item, i) => (
            <Item
              paramsId={paramsId}
              items={item}
              lastNode={i + 1}
              childLength={items.children.length}
              arrayMapping={[childLength !== lastNode, ...arrayMapping]}
            />
          ))}
      </>
    );
  }
);
