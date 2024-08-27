import React from "react";
import { useAppDispatch } from "./redux/store";
import { fetchUsers } from "./redux/usersSlice/async-actions";
import { MainSection } from "./components";
import { MainLayout } from "./layouts";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <MainLayout>
      <MainSection />
    </MainLayout>
  );
};
