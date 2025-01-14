import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const initialState = {
  teachers: [],
  visibleTeachers: [],
  total: 0,
  perPage: 4,
  haveMoreTeachers: true,
  isLoading: false,
  error: null,
};

const pendingFunc = (state) => {
  state.error = null;
  state.isLoading = true;
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, pendingFunc)
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
