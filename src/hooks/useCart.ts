import { useContext } from "react";
import { CartContext } from "@/components/cart-provider";

export const useCart = () => {
  return useContext(CartContext);
};
