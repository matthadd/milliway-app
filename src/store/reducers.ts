import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataLength } from "../assets/data/Row1Data";

const indexSlice = createSlice({
  name: "index",
  initialState: {
    row1: 0,
    row2: Array(dataLength).fill(0),
    row3: [0, 0, 0],
  },
  reducers: {
    setRow1(state, action: PayloadAction<number>) {
      state.row1 = action.payload;
    },

    setRow2(state, action: PayloadAction<number[]>) {
      state.row2 = action.payload;
    },

    setRow3(state, action: PayloadAction<number[]>) {
      state.row3 = action.payload;
    },
  },
});

export const { setRow1, setRow2, setRow3 } = indexSlice.actions;

export default indexSlice.reducer;
