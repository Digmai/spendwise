export interface ItemData {
  id: string;
  title: string;
  children: Item[];
}

export type Item = {
  // дочерний объект Item
  id: string;
  pride: number; //1 - корневой в дериве, 2 - дочерний перврго и т.д.
  name: string; // название ветки расходов
  comment: string; // коминтарий ветки расходов
  price: string; // затраты на старте
  totalPrice: string; // общие затраты
  fromDate: string; // дата начала выполнения работ
  toDate: string; // дата оканчания выполнения работ
  children: Item[];
  [key: string]: any;
};
