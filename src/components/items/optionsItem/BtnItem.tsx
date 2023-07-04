import React from "react";
import { handleActive, hendleEditeInput } from "../../../utils/handles";
import BtnAddOrEdite from "../../btn/BtnAddOrEdite";

interface PropsBtnItem {
  setIsActiveBtnName: (value: React.SetStateAction<boolean>) => void;
  setIsActiveInput: (value: React.SetStateAction<boolean>) => void;
  hendleAddInput: () => void;
}

const BtnItem: React.FC<PropsBtnItem> = ({
  setIsActiveBtnName,
  setIsActiveInput,
  hendleAddInput,
}) => {
  return (
    <>
      {
        <div
          onMouseLeave={handleActive({
            setIsActiveBtnName,
          })}
          onClick={() => setIsActiveBtnName((e) => !e)}
          className="absolute bg-slate-900/60 w-full h-full flex  items-center justify-around "
        >
          <>
            <BtnAddOrEdite title="Add" hendleIsActiveInput={hendleAddInput} />
            <BtnAddOrEdite
              hendleIsActiveInput={hendleEditeInput(setIsActiveInput)}
              title="Edite"
            />
          </>
        </div>
      }
    </>
  );
};

export default BtnItem;
