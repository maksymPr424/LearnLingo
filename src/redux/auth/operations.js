import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, database } from "../../../app";
import { get, push, ref, remove, set } from "firebase/database";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = ref(database, "users/" + user.uid);
      await set(userRef, {
        name: name,
        email: user.email,
        favoriteTeachers: { init: "id" },
      });

      return { name, email, accessToken: user.accessToken, uid: user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userRef = ref(database, "users/" + user.uid);
      const snapshot = await get(userRef);

      const favoriteTeachers = snapshot.val().favoriteTeachers;
      const favoriteTeachersIds = [];
      for (let key in favoriteTeachers) {
        favoriteTeachersIds.push(favoriteTeachers[key]);
      }

      return {
        ...snapshot.val(),
        uid: user.uid,
        accessToken: user.accessToken,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (uid, { rejectWithValue }) => {
    try {
      const userRef = ref(database, "users/" + uid);
      const snapshot = await get(userRef);
      const user = auth.currentUser;

      return {
        ...snapshot.val(),
        uid: user.uid,
        accessToken: user.accessToken,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToUserFavorite = createAsyncThunk(
  "auth/addToUserFavorite",
  async ({ id }, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const uid = auth.user.uid;

    try {
      if (!uid) {
        throw new Error("You are not logged in!");
      }

      await push(ref(database, `users/${uid}/favoriteTeachers`), id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromUserFavorite = createAsyncThunk(
  "auth/removeFromUserFavorite",
  async ({ id }, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const uid = auth.user.uid;

    try {
      if (!uid) {
        throw new Error("You are not logged in!");
      }

      const favoriteTeachersRef = ref(
        database,
        `users/${uid}/favoriteTeachers`
      );
      const snapshot = await get(favoriteTeachersRef);

      const favoriteTeachers = snapshot.val();

      for (let key in favoriteTeachers) {
        if (favoriteTeachers[key] === id) {
          await remove(ref(database, `users/${uid}/favoriteTeachers/${key}`));
          return id;
        }
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
