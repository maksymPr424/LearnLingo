import { createSlice } from "@reduxjs/toolkit";
import {
  addToUserFavorite,
  loginUser,
  logOutUser,
  registerUser,
  removeFromUserFavorite,
} from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
    uid: "",
    favoriteTeachers: [],
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  //   isRefreshing: false,
  error: null,
  refreshError: null,
};

const pendingFunc = (state) => {
  state.error = null;
  state.isLoading = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, pendingFunc)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.accessToken;

        state.user.uid = action.payload.uid;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.pending, pendingFunc)

      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.uid = action.payload.uid;

        const favoriteTeachers = action.payload.favoriteTeachers;
        const favoriteTeachersIds = [];

        for (let key in favoriteTeachers) {
          favoriteTeachersIds.push(favoriteTeachers[key]);
        }
        state.user.favoriteTeachers = favoriteTeachersIds || [];

        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOutUser.fulfilled, () => initialState)
      .addCase(
        logOutUser.rejected,
        (state, action) => (state.error = action.payload)
      )
      .addCase(addToUserFavorite.pending, pendingFunc)
      .addCase(addToUserFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.favoriteTeachers = [
          ...state.user.favoriteTeachers,
          action.payload,
        ];
      })
      .addCase(addToUserFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeFromUserFavorite.pending, pendingFunc)
      .addCase(removeFromUserFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.favoriteTeachers =
          state.user.favoriteTeachers.filter(
            (item) => item !== action.payload
          ) || [];
      })
      .addCase(removeFromUserFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
// export const { clearError, setUserTheme } = slice.actions;
