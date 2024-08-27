import React from "react";
import { RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { setOpenModal, setSelectedUser } from "../redux/usersSlice/users-slice";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";

export const CustomModal: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down(640));

  const selectedUser = useSelector(
    (state: RootState) => state.usersSlice.selectedUser
  );

  const open = useSelector((state: RootState) => state.usersSlice.openModal);

  const onClose = () => {
    dispatch(setOpenModal(false));
    dispatch(setSelectedUser(null));
  };

  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "80%" : "30%",
    bgcolor: "#425768",
    border: "1px solid white",
    p: 4,
    animation: "fadeIn 0.3s ease-in-out",
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
        transform: "translate(-50%, -60%)",
      },
      "100%": {
        opacity: 1,
        transform: "translate(-50%, -50%)",
      },
    },
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    "& .MuiTypography-root": {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-modal-title"
      aria-describedby="user-modal-description"
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "white",
            "&:hover": {
              color: "#ccc",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={contentStyle}>
          {selectedUser && (
            <>
              <Typography id="user-modal-title" variant="h4" component="h2">
                Пользователь: {selectedUser.fullName}
              </Typography>
              <Typography id="user-modal-description" variant="body1">
                Адрес: {selectedUser.address}
              </Typography>
              <Typography id="user-modal-description" variant="body1">
                Телефон: {selectedUser.phone}
              </Typography>
              <Typography id="user-modal-description" variant="body1">
                Возраст: {selectedUser.age}
              </Typography>
              <Typography id="user-modal-description" variant="body1">
                Пол: {selectedUser.gender}
              </Typography>
              <Typography id="user-modal-description" variant="body1">
                Рост: {selectedUser.height}
              </Typography>
              <Typography id="user-modal-description" variant="body1">
                Вес: {selectedUser.weight}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
};
