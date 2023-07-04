import React, { memo, useCallback } from "react";
import BtnAddOrEdite from "../../btn/BtnAddOrEdite";

interface PropsBtnItem {
  setIsActiveBtnName: () => void;
  setIsActiveInput: (value: React.SetStateAction<boolean>) => void;
  handleAddInput: () => void;
}

const BtnItem: React.FC<PropsBtnItem> = memo(
  ({ setIsActiveBtnName, setIsActiveInput, handleAddInput }) => {
    const handleAddClick = useCallback(() => {
      handleAddInput();
      setIsActiveBtnName();
    }, [handleAddInput, setIsActiveBtnName]);

    const handleEditClick = useCallback(() => {
      setIsActiveInput((prev) => !prev);
      setIsActiveBtnName();
    }, [setIsActiveBtnName, setIsActiveInput]);

    return (
      <div
        onMouseLeave={setIsActiveBtnName}
        onClick={setIsActiveBtnName}
        className="absolute bg-slate-900/60 w-full h-full flex  items-center justify-around "
      >
        <>
          <BtnAddOrEdite title="Add" hendleIsActiveInput={handleAddClick} />
          <BtnAddOrEdite title="Edit" hendleIsActiveInput={handleEditClick} />
        </>
      </div>
    );
  }
);
export default BtnItem;
