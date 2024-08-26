import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import usersSlice from "./usersSlice/users-slice";
import searchUsersSlice from "./searchUsersSlice/search-users-slice";

export const store = configureStore({
  reducer: {
    usersSlice,
    searchUsersSlice,
  },
});

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
