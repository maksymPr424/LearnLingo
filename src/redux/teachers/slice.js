import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const initialState = {
  teachers: [],
  visibleTeachers: [],
  total: 0,
  page: 0,
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
  reducers: {
    setPage: (state) => {
      const page = state.page;
      if (page * state.perPage > state.total) {
        state.haveMoreTeachers = false;
      } else {
        state.haveMoreTeachers = true;
        state.page += 1;
      }
      console.log(page);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, pendingFunc)
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload.data;
        // state.lastKey = action.payload.lastKey;
        state.total = action.payload.total;
        state.page = action.payload.page;
        console.log(state.teachers);
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload);
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
