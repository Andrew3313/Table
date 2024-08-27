import React from "react";
import { СustomInput } from ".";

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between pb-4 mb-[2rem]">
      <h1 className="text-5xl min-[1400]:text-7xl max-[500px]:text-4xl max-[340px]:text-3xl font-black">
        Информация о пользователях
      </h1>
      <СustomInput />
    </div>
  );
};
