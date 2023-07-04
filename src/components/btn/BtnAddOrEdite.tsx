import React from "react";

interface PropsBtnAddOrEdite {
  title: "Add" | "Edite";
  hendleIsActiveInput: () => void;
}

const BtnAddOrEdite: React.FC<PropsBtnAddOrEdite> = ({
  title,
  hendleIsActiveInput,
}) => {
  return (
    <button
      onClick={hendleIsActiveInput}
      className="border border-slate-200 p-2 rounded "
    >
      {title}
    </button>
  );
};

export default BtnAddOrEdite;
