// Librerias de React
import React from "react";
//Imagenes
import imgLogo from "../assets/images/logo.png";
const HomeSeparator = () => {
  return (
    <div className="m-auto w-full bg-blue-400 justify-items-center  items-center">
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
