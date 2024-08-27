import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { IUser, Status } from "../redux/usersSlice/types";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { ThemeProvider } from "@mui/material/styles";
import { columns, myTheme } from "../constants";
import { setOpenModal, setSelectedUser } from "../redux/usersSlice/users-slice";
import { CustomModal } from ".";

export const MyTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const allUsers = useSelector((state: RootState) => state.usersSlice.allUsers);
  const allUsersStatus = useSelector(
    (state: RootState) => state.usersSlice.status
  );
  const showAllUsers = useSelector(
    (state: RootState) => state.usersSlice.showAllUsers
  );

  const searchUsers = useSelector(
    (state: RootState) => state.searchUsersSlice.searchUsers
  );
  const searchUsersStatus = useSelector(
    (state: RootState) => state.searchUsersSlice.status
  );

  const [data, setData] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (showAllUsers && allUsersStatus === Status.SUCCESS) {
      setData(allUsers);
      setLoading(false);
    } else if (!showAllUsers && searchUsersStatus === Status.SUCCESS) {
      setData(searchUsers);
      setLoading(false);
    }
  }, [showAllUsers, allUsers, allUsersStatus, searchUsers, searchUsersStatus]);

  

  const table = useMaterialReactTable({
    columns,
    data,
    layoutMode: "grid",
    enableColumnResizing: true,
    enableSorting: true,
    enableRowVirtualization: true,
    enablePagination: true,
    enableColumnFilters: false,
    enableGlobalFilter: false,
    enableRowSelection: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableSelectAll: false,
    enableColumnActions: false,
    manualFiltering: true,
    state: {
      isLoading: loading,
    },
    muiSkeletonProps: {
      animation: "pulse",
    },

    muiLinearProgressProps: {
      color: "primary",
    },

    muiCircularProgressProps: {
      color: "primary",
    },
    muiTableContainerProps: {
      sx: {
        overflowX: "auto",
        maxHeight: "50rem",
        "&::-webkit-scrollbar": {
          height: "2rem",
          backgroundColor: "#425768",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#2B3B48",
          borderRadius: ".6rem",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#425768",
        },
        "@media (max-width: 950px)": {
          overflowX: "auto",
        },
        "@media (min-width: 951px)": {
          overflowX: "hidden",
        },
        "&::-webkit-scrollbar-corner": {
          backgroundColor: "#425768",
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: "#1F2B37",
        fontWeight: "bold",
        fontSize: "1.5rem",
        "& .MuiSvgIcon-root": {
          color: "white",
        },
        "&.MuiTableCell-sortActive .MuiSvgIcon-root, &:hover .MuiSvgIcon-root":
          {
            color: "white !important",
          },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        backgroundColor: "#425768",
        color: "white",
        fontWeight: "normal",
        fontSize: "1.5rem",
      },
    },
    muiTopToolbarProps: {
      sx: {
        backgroundColor: "#2B3B48",
        "& .MuiSvgIcon-root": {
          color: "white",
        },
      },
    },
    muiBottomToolbarProps: {
      sx: {
        backgroundColor: "#2B3B48",
        "& .MuiSvgIcon-root": {
          color: "white",
        },
      },
    },
    muiPaginationProps: {
      showRowsPerPage: false,
    },

    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        dispatch(setSelectedUser(row.original));
        dispatch(setOpenModal(true));
      },
      sx: {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#3b4b5c",
        },
      },
    }),
  });

  return (
    <ThemeProvider theme={myTheme}>
      <MaterialReactTable table={table} />
      <CustomModal />
    </ThemeProvider>
  );
};
