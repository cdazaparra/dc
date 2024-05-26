import React from "react";

//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
const DCGuitarsVue = () => {
  const { languaje } = useLanguajeContex();
  const { borderSelectedGreen } = useInteractionContex();
  return (
    <div
    className={`grid m-2 justify-items-center  items-center border ${borderSelectedGreen}`}
    >
        <h1
        className="my-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold"
      ><a href="https://endearing-mermaid-953900.netlify.app/" Target="_blank">DC Guitarras en Vue</a></h1>
    </div>
  );
};

export default DCGuitarsVue;