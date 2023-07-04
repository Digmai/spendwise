import React, { memo } from "react";

interface PropsBtnTree {
  pride: number;
  isExpanded: boolean;
  handleToggle: () => void;
}

const BtnTree: React.FC<PropsBtnTree> = memo(
  ({ isExpanded, handleToggle, pride }) => {
    return (
      <button
        style={{
          borderRadius: isExpanded ? "100% 0  100% 0 " : "10%",
          background: !isExpanded ? " rgb(254 240 138)" : "rgb(105 165 248) ",
        }}
        className="h-[20px] w-[20px] text-slate-900 flex items-center justify-center  "
        onClick={handleToggle}
      >
        {pride}
      </button>
    );
  }
);

export default BtnTree;
