import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, Status } from "../usersSlice/types";
import { ISearchUsersSliceState } from "./types";
import { fetchSearchUsers } from "./async-actions";

const initialState: ISearchUsersSliceState = {
  searchUsers: [],
  searchQuery: "",
  status: Status.LOADING,
};

export const searchUsersSlice = createSlice({
  name: "searchUsers",
  initialState,
  reducers: {
    setSearchUsers(state, action: PayloadAction<IUser[]>) {
      state.searchUsers = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchUsers.pending, (state) => {
      state.status = Status.LOADING;
      state.searchUsers = [];
    });

    builder.addCase(fetchSearchUsers.fulfilled, (state, action) => {
      state.searchUsers = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchSearchUsers.rejected, (state) => {
      state.status = Status.ERROR;
      state.searchUsers = [];
    });
  },
});

export const { setSearchUsers, setSearchQuery } = searchUsersSlice.actions;
export default searchUsersSlice.reducer;
