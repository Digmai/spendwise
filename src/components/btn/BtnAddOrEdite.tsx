import React, { memo } from "react";

interface PropsBtnAddOrEdite {
  title: "Add" | "Edit" | "Delete";
  hendleIsActiveInput: () => void;
}

const BtnAddOrEdite: React.FC<PropsBtnAddOrEdite> = memo(
  ({ title, hendleIsActiveInput }) => {
    return (
      <button
        onClick={hendleIsActiveInput}
        className="relative border border-slate-200 p-1 min-w-min max-h-3/6 rounded flex justify-center items-center "
      >
        {title}
      </button>
    );
  }
);

export default BtnAddOrEdite;
