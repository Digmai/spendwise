import { Item } from "../type";

export function recursivelyAddChild(items: Item[], node: Item, ref: string) {
  items.forEach((item) => {
    if (item.id === ref) {
      item.children.push(node);
    } else {
      recursivelyAddChild(item.children, node, ref);
    }
  });
}
