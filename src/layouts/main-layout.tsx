import React, { PropsWithChildren } from "react";
import { Container } from "@mui/material";
import { Header } from "../components";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
      {children}
    </Container>
  );
};
