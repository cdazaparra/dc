// Librerias de React
import React from "react";
//Imagenes
import imgLogo from "../assets/images/logo.png";
//Context
import { useInteractionContex } from "../context/InteractionContex";
const HomeSeparator = () => {
  const { colorSelectedBlue } = useInteractionContex();
  return (
    <div
      className={`m-auto w-full ${colorSelectedBlue} justify-items-center  items-center`}
    >
      <img
        className="m-auto p-1"
        src={imgLogo}
        alt="Logo Carlos Daza"
        height="80"
        width="80"
      ></img>
    </div>
  );
};

export default HomeSeparator;
