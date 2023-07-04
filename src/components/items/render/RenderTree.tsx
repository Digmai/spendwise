import { Item } from "../../../type";
import { checkConditions, mapArray } from "../../../utils/checkArrayMapping";
import Items from "../Item";

interface PropsRenderTree {
  items: Item;
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
        items.children.map((item, i) => {
          return (
            <Items
              paramsId={paramsId}
              items={item}
              lastNode={i + 1}
              childLength={items.children.length}
              arrayMapping={arrayMapping}
            />
          );
        })}
    </>
  );
};
