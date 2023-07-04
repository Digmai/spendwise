import React from "react";
import { Item as IItem } from "../type";
import Item from "./items/Item";

interface ItemsTableProps {
  items: IItem[];
  paramsId: string;
}

const ItemsTable: React.FC<ItemsTableProps> = ({ items, paramsId }) => {
  const ItemVisible: IItem = {
    name: "Название операции",
    comment: "Комментарий",
    price: "Затраты на старте",
    totalPrice: "Общие затраты",
    fromDate: "Начало выполнения",
    toDate: "Окончание выполнения",
    children: items,
    id: "id",
    pride: 0,
  };

  return (
    <div className="min-w-max p-2 m-2 border-2 border-slate-400 grid  grid-cols-[repeat(6,_max-content)]  text-slate-100 ">
      <Item
        items={ItemVisible}
        childLength={ItemVisible.children.length} // количество нод на ветки
        lastNode={1} // текущая нода в итерации по ветки
        arrayMapping={[false]}
        isStart={true}
        paramsId={paramsId}
      />
    </div>
  );
};

export default ItemsTable;
