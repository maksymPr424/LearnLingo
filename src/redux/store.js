import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { filtersReducer } from "./filters/slice";
import { teachersReducer } from "./teachers/slice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

const teachersPersistConfig = {
  key: "filters",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filters: persistReducer(filtersPersistConfig, filtersReducer),
    teachers: persistReducer(teachersPersistConfig, teachersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
