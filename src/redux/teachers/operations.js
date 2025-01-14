import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref, query } from "firebase/database";
import { database } from "../../../app";

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
