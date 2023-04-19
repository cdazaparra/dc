import React from "react";
//Imagenes
import imgPlatzi from "../assets/images/platzi.png";
import imgSena from "../assets/images/sena.png";
import imgUdemy from "../assets/images/udemy.png";
//Context
import { useInteractionContex } from "../context/InteractionContex";

const StudyCourse = ({ data }) => {
  const { borderSelectedGreen } = useInteractionContex();
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
    <div
      className={`grid grid-cols-4 border  justify-items-center  items-center rounded-xl bg-white m-2 p-2 ${borderSelectedGreen}`}
    >
      <img className="rounded-full p-5" src={srcImg()}></img>
      <p className="col-span-3 text-justify p-1">{data.name}</p>
    </div>
  );
};

export default StudyCourse;
