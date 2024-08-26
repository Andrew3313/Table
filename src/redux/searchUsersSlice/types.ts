import { IUser, Status } from "../usersSlice/types";

export interface ISearchUsersSliceState {
  searchUsers: IUser[];
  searchQuery: string;
  status: Status;
}
