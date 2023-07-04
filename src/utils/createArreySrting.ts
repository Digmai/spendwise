import { Item } from "../type";

const ItemVisible: {
  [key in keyof Omit<Item, "id" | "pride" | "children">]: string;
} = {
  name: "Название",
  comment: "Комментарий",
  price: "Затраты на старте",
  totalPrice: "Общие затраты",
  fromDate: "Начало выполнения",
  toDate: "Окончание выполнения",
};

const ItemArr: {
  [key in keyof typeof ItemVisible]: (typeof ItemVisible)[key][];
} = {
  name: [],
  comment: [],
  price: [],
  totalPrice: [],
  fromDate: [],
  toDate: [],
};
const maping = (item: Item, i: number) => {
  const arrKeys = Object.keys(ItemArr) as Array<keyof typeof ItemVisible>;

  arrKeys.forEach((value) => {
    i === 0 && ItemArr[value].push(ItemVisible[value]);
    ItemArr[value].push(item[value]);
  });
  item.children.length > 0 &&
    item.children.forEach((item) => maping(item, i + 1));
  return ItemArr;
};

export const createArreySrting = (item: Item) => {
  return new Array().map((e, i) => maping(item, i));
};
