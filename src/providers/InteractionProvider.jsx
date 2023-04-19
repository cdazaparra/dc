import React, { useState } from "react";
import { InteractionContex } from "../context/InteractionContex";
const InteractionProvider = ({ children }) => {
  const [color, setColor] = useState(false);
  const [position, setPosition] = useState(false);
  const colorSelectedBlue = color ? "bg-blue-900" : "bg-blue-400";
  const colorSelectedGreen = color ? "bg-lime-900" : "bg-lime-400";
  const borderSelectedGreen = color ? "border-lime-600" : "border-lime-300";
  const borderSelectedGray = color ? "border-gray-500" : "border-gray-300";
  const handleColor = () => {
    setColor(!color);
  };
  return (
    <InteractionContex.Provider
      value={{
        color,
        handleColor,
        colorSelectedBlue,
        borderSelectedGreen,
        borderSelectedGray,
        colorSelectedGreen
      }}
    >
      {children}
    </InteractionContex.Provider>
  );
};

export default InteractionProvider;
