import { configureStore } from "@reduxjs/toolkit";
import { reducer as reducerItem } from "./slices/item";

const reduser = {
  item: reducerItem,
};

const store = configureStore({
  reducer: reduser,
  devTools: true,
});
export { store };
