import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  add as addItem,
  editById as editByIdItem,
  findAll as findAllItem,
  findById as findByIdItem,
  removeById as removeByIdItem,
} from "../services/item";

const add = createAsyncThunk("item/add", async (args: any) => {
  const { name, quantity, description } = args;
  const res = await addItem({ name, quantity, description });
  return res.data;
});

const findAll = createAsyncThunk("item/findAll", async () => {
  const res = await findAllItem();
  return res.data;
});

const slice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    // add(state, action) {},
    // findAll(state, action) {},
    [add.fulfilled as any]: (state: any, action: any) => {
      state.push(action.payload);
    },
    [findAll.fulfilled as any]: (state: any, action: any) => {
      return [...action.payload];
    },
  },
});
export const { reducer } = slice;
// const reducerx = slice;
export { add, findAll };
// export default reducer;
