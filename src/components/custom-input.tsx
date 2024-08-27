import React from "react";
import { useDebounce } from "react-use";
import { useSelector } from "react-redux";
import { setShowAllUsers } from "../redux/usersSlice/users-slice";
import { fetchSearchUsers } from "../redux/searchUsersSlice/async-actions";
import { RootState, useAppDispatch } from "../redux/store";
import { setSearchQuery } from "../redux/searchUsersSlice/search-users-slice";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const СustomInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useSelector(
    (state: RootState) => state.searchUsersSlice.searchQuery
  );
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchQuery(""));
    dispatch(setShowAllUsers(true));
    inputRef.current?.focus();
  };

  useDebounce(
    () => {
      if (value) {
        dispatch(fetchSearchUsers(value));
        dispatch(setShowAllUsers(false));
      } else {
        dispatch(setShowAllUsers(true));
      }
    },
    250,
    [value]
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="flex items-center">
      <TextField
        inputRef={inputRef}
        id="outlined-basic"
        label="Введите ФИО"
        variant="outlined"
        value={value}
        onChange={onChangeInput}
        InputLabelProps={{
          sx: {
            fontSize: "1.3rem",
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {value && (
                <IconButton
                  aria-label="clear"
                  onClick={onClickClear}
                  sx={{
                    color: "white",
                  }}
                >
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
        sx={{
          width: "30rem",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "1px solid white",
            },
            "&.Mui-focused fieldset": {
              border: "1px solid white",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
            fontSize: "1.2rem",
          },
        }}
      />
    </div>
  );
};
