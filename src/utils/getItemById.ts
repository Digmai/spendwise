import { Item } from "../type";

export const getItemById = (items: Item[], id: string): Item | undefined => {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }

    if (item.children) {
      const child = getItemById(item.children, id);
      if (child) {
        return child;
      }
    }
  }
  return undefined;
};
