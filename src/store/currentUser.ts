import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "CurrentUserSlice",
  initialState: null,
  reducers: {
    login(state, action) {
      // returning action.payload will make it as the new state
      return action.payload;
    },
  },
});

export const currentUserActions = currentUserSlice.actions;
