import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponse, IUser } from "../usersSlice/types";

export const fetchSearchUsers = createAsyncThunk<IUser[], string>(
    "searchUsers/fetchSearchUsers",
    async (name: string) => {
      try {
        const response = await fetch(`https://dummyjson.com/users/search?q=${name}`);
        const data: IResponse = await response.json();
        return data.users.map((item: any) => ({
          fullName: `${item.firstName} ${item.lastName} ${item.maidenName}`,
          age: item.age,
          gender: item.gender,
          phone: item.phone,
          address: `${item.address.city} ${item.address.address}`,
          height: item.height,
          weight: item.weight,
        })) as IUser[];
      } catch (error) {
        throw new Error("Error fetching users");
      }
    }
  );