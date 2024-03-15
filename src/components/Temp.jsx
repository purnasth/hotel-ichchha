import React from "react";
import { ichchha } from "./constants/data";

const Temp = () => {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${ichchha})`,
        }}
      ></div>
    </>
  );
};

export default Temp;
