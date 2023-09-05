import { configureStore } from "@reduxjs/toolkit";
import { currentUserSlice } from "../store/currentUser";

// configuring redux store
const store = configureStore({
  reducer: {
    currentUser: currentUserSlice.reducer,
  },
});

export default store;

//types for useDispatch and useSelector functions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
