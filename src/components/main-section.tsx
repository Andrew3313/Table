import React from "react";
import { MyTable } from "./my-table";

interface Props {
  className?: string;
}

export const MainSection: React.FC<Props> = ({ className }) => {
  return (
    <main className={className}>
      <MyTable />
    </main>
  );
};
