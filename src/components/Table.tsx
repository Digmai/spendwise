import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Item } from "../type";
import { getItemsByIdSelector, updateItemValueById } from "../slices/items";
import ItemsTable from "./ItemsTable";
import { useNavigate, useParams } from "react-router-dom";
import { onKeyDown } from "../utils/onKeyDown";
import { useAppDispatch } from "../store";

const Table: React.FC = () => {
  const Params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const itemsList = useSelector(getItemsByIdSelector(Params.id!));

  useEffect(() => {
    if (!itemsList) {
      navigate("/");
    }
  }, []);

  if (!itemsList) {
    return (
      <div className="w-full h-full border-l-2 border-gray-400 bg-gray-800/80">
        <p className="uppercase text-lg text-center mt-10 text-yellow-50">
          <strong>selected Item</strong>
        </p>
      </div>
    );
  }
  if (!Params.id) {
    return (
      <div className="w-full h-full border-l-2 border-gray-400 bg-gray-800/80">
        <p className="uppercase text-lg text-center mt-10 text-yellow-50">
          <strong>Params.id - undefaind </strong>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full border-l-2 mb-14 border-gray-400 bg-gray-800/80 overflow-x-scroll ">
      <ItemsTable items={itemsList} paramsId={Params.id} />
    </div>
  );
};

export default Table;
