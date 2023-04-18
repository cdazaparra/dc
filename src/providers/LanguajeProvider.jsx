import React, { useState } from "react";
import { LanguajeContex } from "../context/LanguajeContex";
import { spanish, english } from "../helpers/data";
const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState(false);
  const languajeSelected = languaje ? english : spanish;
  const handleClick = () => {
    setLanguaje(!languaje);
  };
  return (
    <LanguajeContex.Provider
      value={{ languaje, handleClick, languajeSelected }}
    >
      {children}
    </LanguajeContex.Provider>
  );
};

export default LanguajeProvider;
