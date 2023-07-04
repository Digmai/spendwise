import React from "react";
import InputItem from "./InputItem";
import WrapperComponent from "./WrapperComponent";

interface PropsNewItem {
  handleUpdate: (velue: string) => void;
}

const NewItem: React.FC<PropsNewItem> = ({ handleUpdate }) => {
  return (
    <WrapperComponent
      children={
        <div className=" relative max-h-5/6 m-2 box-border flex items-center justify-center border border-yellow-700  ">
          <InputItem handleUpdate={handleUpdate} />
        </div>
      }
    />
  );
};

export default NewItem;
