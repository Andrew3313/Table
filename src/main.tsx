import React from "react";
import { useAppDispatch } from "./redux/store";
import { fetchUsers } from "./redux/usersSlice/async-actions";
import { Header, MainSection } from "./components";
import { Container } from "@mui/material";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Container
      sx={{
        maxWidth: "1200px",
        background: "#2B3B48",
        padding: "2rem",
        height: "100vh",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: "2rem",
          backgroundColor: "#425768",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#2B3B48",
        },
      }}
    >
      <Header />
      <MainSection />
    </Container>
  );
};
