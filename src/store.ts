import { ThunkAction, Action, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import items from "./slices/items";

const store = configureStore({
  reducer: {
    itemsList: items,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
