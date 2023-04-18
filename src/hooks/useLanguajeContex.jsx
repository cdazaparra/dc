import { useContext } from "react";
import { LanguajeContex } from "../context/LanguajeContex";
const useLanguajeContex = () => {
  useContext(LanguajeContex);
};

export default useLanguajeContex;
