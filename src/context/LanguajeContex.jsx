import { createContext, useContext } from "react";

export const LanguajeContex = createContext();
export const useLanguajeContex = () => {
  return useContext(LanguajeContex);
};
