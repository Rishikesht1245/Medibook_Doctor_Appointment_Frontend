import { createSlice } from "@reduxjs/toolkit";
import { removeLocalData } from "../utils/localStorage";

export const currentUserSlice = createSlice({
  name: "CurrentUserSlice",
  initialState: null,
  reducers: {
    login(state, action) {
      // returning action.payload will make it as the new state
      return action.payload;
    },
    logout() {
      removeLocalData();
      return null;
    },
  },
});

export const currentUserActions = currentUserSlice.actions;
