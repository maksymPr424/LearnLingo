import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logOutUser, registerUser } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
    uid: "",
    favoriteTeachers: [0, 1],
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
      );
  },
});

export const authReducer = authSlice.reducer;
// export const { clearError, setUserTheme } = slice.actions;
