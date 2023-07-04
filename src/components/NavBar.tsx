import React, { useState } from "react";
import { addItemNav, getItemsSelector } from "../slices/items";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";

const NavBar: React.FC<{
  setChildTitle: (childTitle: string) => void;
  title: string;
}> = ({ setChildTitle, title }) => {
  const dispatch = useAppDispatch();
  const itemsList = useSelector(getItemsSelector);

  const [inputValue, setInputValue] = useState<string>("");

  const hendleSelect = (title: string) => {
    return () => {
      setChildTitle(title);
    };
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      dispatch(addItemNav({ children: [], id: "123", title: inputValue }));
      setInputValue("");
    }
  };

  const hendleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <nav className="w-full h-full  bg-gray-800/90 flex flex-col-reverse justify-end">
      {itemsList.map((item) => (
        <Link
          key={item.id}
          to={"/" + item.id}
          onClick={hendleSelect(item.title)}
          className={` block h-min w-5/6 mx-auto my-1 p-2 text-center rounded-sm  ${
            title === item.title ? "bg-gray-400" : "bg-gray-500"
          }`}
        >
          {item.title}
        </Link>
      ))}

      <input
        type="text"
        value={inputValue}
        onKeyDown={onKeyDown}
        onChange={hendleInput}
        placeholder="create new Item"
        className="w-5/6 mx-auto my-1 p-2 text-center rounded-sm"
      />
    </nav>
  );
};

export default NavBar;
