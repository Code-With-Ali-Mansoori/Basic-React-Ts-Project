import { useContext } from "react";
import { contextData } from "../Context/contextCreate";

export const useCartContext = () => {
  const ctx = useContext(contextData);

  if (!ctx) {
    throw new Error("useCartContext must be used inside ContextProvider");
  }

  return ctx;
};
