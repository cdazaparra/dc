import { createContext, useContext } from "react";

export const InteractionContex = createContext();
export const useInteractionContex = () => {
  return useContext(InteractionContex);
};
