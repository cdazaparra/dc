//Context
import { useLanguajeContex } from "../context/LanguajeContex";
import { useInteractionContex } from "../context/InteractionContex";
import React from "react";

const Footer = () => {
  const { languaje } = useLanguajeContex();
  const { colorSelectedBlue } = useInteractionContex();
  return (
    <div
      className={`${colorSelectedBlue} fixed bottom-0 left-0 right-0 text-center text-white`}
    >
      <p className="text-center justify-items-center w-full">
        {languaje ? "Design by " : "Diseñado por "} Carlos Daza 2023
      </p>
    </div>
  );
};

export default Footer;
Footer;
