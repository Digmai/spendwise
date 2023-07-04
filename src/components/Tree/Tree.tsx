import React from "react";
import { Item } from "../../type";

interface PropsTree {
  items: Item;
  mLeft: number;
  lastNode: number;
  childLength: number;
  arrayMapping: boolean[];
}

const Tree: React.FC<PropsTree> = ({
  items,
  mLeft,
  lastNode,
  childLength,
  arrayMapping,
}) => {
  return (
    <>
      {childLength !== lastNode && (
        <>
          <div
            style={{
              left: "-" + mLeft + "px",
              width: mLeft + "px",
            }}
            className="absolute border-l-2 h-[55%] border-slate-300 bottom-[-5%]"
          ></div>
        </>
      )}
      {items.pride > 1 && (
        <>
          <div
            style={{
              left: "-" + mLeft + "px",
              width: mLeft + "px",
            }}
            className="absolute border-l-2 border-b-2 h-1/2 border-slate-300  top-0"
          ></div>
        </>
      )}
      {arrayMapping.map((isView, i) => {
        if (isView) {
          const index = (i + 1) * mLeft;
          return (
            <>
              <div
                style={{
                  left: `-${index + mLeft}px`,
                  width: index + mLeft + "px",
                }}
                className="absolute  h-[105%] border-l-2 border-slate-300  "
              ></div>
            </>
          );
        }
      })}
    </>
  );
};

export default Tree;
