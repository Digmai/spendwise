import React from "react";

interface PropsBtnAddOrEdite {
  title: "Add" | "Edite" | "Delete";
  hendleIsActiveInput: () => void;
}

const BtnAddOrEdite: React.FC<PropsBtnAddOrEdite> = ({
  title,
  hendleIsActiveInput,
}) => {
  return (
    <button
      onClick={hendleIsActiveInput}
      className="relative border border-slate-200 p-1 min-w-min max-h-3/6 rounded flex justify-center items-center "
    >
      {title}
    </button>
  );
};

export default BtnAddOrEdite;
