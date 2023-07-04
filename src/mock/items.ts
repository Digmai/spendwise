import { faker } from "@faker-js/faker";
import { Item, ItemData } from "../type";

// Генерация случайного id
export const generateId = (): string => faker.datatype.uuid();

// Генерация случайной строки
const generateString = (): string => faker.random.words();

// Генерация случайного числа
const generateNumber = (): number => faker.datatype.number();

// Генерация случайной даты в диапазоне от текущей даты до +1 года
const generateDate = (): string => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 1);

  const formattedDate = faker.date
    .between(startDate, endDate)
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return formattedDate;
};

// Рекурсивная функция для генерации фейковых данных Item
const generateItem = (pride: number): Item => {
  const item: Item = {
    id: generateId(),
    pride,
    name: generateString(),
    comment:
      generateString() +
      generateString() +
      generateString() +
      " " +
      generateString(),
    price: generateNumber().toString(),
    totalPrice: generateNumber().toString(),
    fromDate: generateDate(),
    toDate: generateDate(),
    children: [],
  };

  // !Если pride больше 1, то генерируем дочерние объекты
  if (pride <= 4) {
    const childCount = 3; // Math.floor(Math.random() * 4); // Генерация случайного числа дочерних объектов
    for (let i = 0; i < childCount; i++) {
      item.children.push(generateItem(pride + 1));
    }
  }

  return item;
};

// Генерация фейковых данных ItemData
export const generateFakeData = (count: number): ItemData[] => {
  const fakeData: ItemData[] = [];

  for (let i = 0; i < count; i++) {
    const fakeItemData: ItemData = {
      id: generateId(),
      title: generateString(),
      children: [generateItem(1)], // Генерация корневого объекта
    };

    fakeData.push(fakeItemData);
  }

  return fakeData;
};
