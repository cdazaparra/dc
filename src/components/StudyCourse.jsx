import React from "react";
//Imagenes
import imgPlatzi from "../assets/images/platzi.png";
import imgSena from "../assets/images/sena.png";
import imgUdemy from "../assets/images/udemy.png";

const StudyCourse = ({ data }) => {
  const srcImg = () => {
    if (data.place === "Platzi") {
      return imgPlatzi;
    } else if (data.place === "Sena") {
      return imgSena;
    } else {
      return imgUdemy;
    }
  };
  return (
    <div className="col-span-1 grid grid-cols-3 border  justify-items-center  items-center border-rounded m-2">
      <img className="rounded-full p-5" src={srcImg()}></img>
      <p className="col-span-2">{data.name}</p>
    </div>
  );
};

export default StudyCourse;
