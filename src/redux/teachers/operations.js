import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, query } from "firebase/database";
import { database } from "../../../app";

//* With pagination
/*
const PER_PAGE = 4;

export const getTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { teachers } = getState();
      const { lastKey } = teachers;

      const isFirst = lastKey ? false : true;

      let dbRef = ref(database, "teachers");

      if (lastKey) {
        dbRef = query(
          dbRef,
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(PER_PAGE)
        );
      } else {
        dbRef = query(dbRef, orderByKey(), limitToFirst(PER_PAGE));
      }

      const snapshot = await get(dbRef);
      let totalTeachers = 0;

      const totalSnapshot = await get(ref(database, "teachers"));
      if (totalSnapshot.exists()) {
        totalTeachers = Object.keys(totalSnapshot.val()).length;
      }

      if (totalTeachers > teachers.length) {
        return {
          data: [],
          total: totalTeachers,
          lastKey: null,
        };
      }

      const teachersData = snapshot.val();
      const teachersArray = Object.values(teachersData);

      const lastTeacherKey =
        teachersArray.length > 0
          ? Object.keys(teachersData)[teachersArray.length - 1]
          : null;

      return {
        data: teachersArray,
        total: totalTeachers,
        lastKey: lastTeacherKey,
        isFirst,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
*/

export const getTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { teachers } = getState();
      if (teachers.teachers.length !== 0)
        return {
          data: teachers.teachers,
          total: teachers.total,
        };
      let dbRef = ref(database, "teachers");

      dbRef = query(dbRef);

      const snapshot = await get(dbRef);
      let totalTeachers = 0;

      const totalSnapshot = await get(ref(database, "teachers"));
      if (totalSnapshot.exists()) {
        totalTeachers = Object.keys(totalSnapshot.val()).length;
      }

      const teachersData = snapshot.val();
      const teachersArray = Object.values(teachersData);

      return {
        data: teachersArray,
        total: totalTeachers,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
