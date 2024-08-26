export interface IUser {
  fullName: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  height: number;
  weight: number;
}

export interface IUsersSliceState {
  allUsers: IUser[];
  showAllUsers: boolean;
  status: Status;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export interface IResponse {
  users: IUser[];
}

