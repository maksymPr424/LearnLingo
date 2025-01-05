import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, database } from "../../../app";
import { get, ref, set } from "firebase/database";
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
      });
      //   console.log("User created:", user);

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
