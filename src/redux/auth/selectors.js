export const selectIsLogged = (state) => state.auth.isLoggedIn;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectFavoriteTeachersIds = (state) =>
  state.auth.user.favoriteTeachers;
