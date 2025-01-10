import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "French",
  level: "A1 Beginner",
  price: 30,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state[action.payload.type] = action.payload.data;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
