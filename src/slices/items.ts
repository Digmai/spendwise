import { generateFakeData, generateId } from "../mock/items";
import { RootState } from "../store";
import { ItemData } from "../type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItemById } from "../utils/getItemById";

interface ItemsState {
  value: ItemData[];
}

const initialState: ItemsState = {
  value: generateFakeData(2),
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItemNav: (state, action: PayloadAction<ItemData>) => {
      state.value.push(action.payload);
    },
    addItem: (
      state,
      action: PayloadAction<{ id: string; paramsId: string }>
    ) => {
      state.value.forEach((e) => {
        if (e.id === action.payload.paramsId) {
          const item = getItemById(e.children, action.payload.id);
          if (item) {
            item.children.push({
              id: generateId(),
              pride: item.pride + 1,
              name: "",
              comment: "",
              price: "",
              totalPrice: "",
              fromDate: "",
              toDate: "",
              children: [],
            });
          }
        }
      });
    },
    updateItemValueById: (
      state,
      action: PayloadAction<{
        key: string;
        value: string;
        id: string;
        paramsId: string;
      }>
    ) => {
      state.value.forEach((e) => {
        if (e.id === action.payload.paramsId) {
          const item = getItemById(e.children, action.payload.id);
          if (item) {
            item[action.payload.key] = action.payload.value;
          }
        }
      });
    },
  },
});

export const { addItem, addItemNav, updateItemValueById } = itemsSlice.actions;

export const getItemsByIdSelector = (id: string) => (store: RootState) => {
  const items = store.itemsList.value.find((e) => e.id === id);
  return items?.children;
};

export const getItemsSelector = (store: RootState) => store.itemsList.value;

export default itemsSlice.reducer;
