import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUsersSliceState, Status } from "./types";
import { fetchUsers } from "./async-actions";

const initialState: IUsersSliceState = {
  allUsers: [],
  selectedUser: null,
  openModal: false,
  showAllUsers: true,
  status: Status.LOADING,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAllUsers(state, action: PayloadAction<IUser[]>) {
      state.allUsers = action.payload;
    },
    setShowAllUsers(state, action: PayloadAction<boolean>) {
      state.showAllUsers = action.payload;
    },
    setSelectedUser(state, action: PayloadAction<IUser | null>) {
      state.selectedUser = action.payload;
    },
    setOpenModal(state, action: PayloadAction<boolean>) {
      state.openModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = Status.LOADING;
      state.allUsers = [];
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = Status.ERROR;
      state.allUsers = [];
    });
  },
});

export const { setAllUsers, setShowAllUsers, setSelectedUser, setOpenModal } =
  usersSlice.actions;
export default usersSlice.reducer;
