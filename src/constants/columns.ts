import { MRT_ColumnDef } from "material-react-table";
import { IUser } from "../redux/usersSlice/types";

export const columns: Array<MRT_ColumnDef<IUser>> = [
  {
    accessorFn: (row) => row.fullName,
    id: "fullName",
    header: "ФИО",
    minSize: 50,
    size: 100, 
  },
  {
    accessorFn: (row) => row.age,
    id: "age",
    header: "Возраст",
    minSize: 50,
    size: 50,
  },
  {
    accessorFn: (row) => row.gender,
    id: "gender",
    header: "Пол",
    minSize: 50,
    size: 50,
  },
  {
    accessorFn: (row) => row.address,
    id: "address",
    header: "Адрес",
    minSize: 50,
    size: 150,
  },
  {
    accessorFn: (row) => row.phone,
    id: "phone",
    header: "Телефон",
    minSize: 50,
    enableSorting: false,
    grow: 1,
  },
];
