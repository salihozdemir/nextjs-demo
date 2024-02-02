"use client";

import { createContext, useEffect, useState } from "react";

type CartContextType = {
  cart: { productId: number; quantity: number }[];
  addItem: ({
    productId,
    quantity,
  }: {
    productId: number;
    quantity: number;
  }) => void;
  removeItem: (productId: number) => void;
  clearItems: () => void;
  count: number;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
  count: 0,
});

const setCookies = async (cart: { productId: number; quantity: number }[]) => {
  try {
    await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
  } catch (error) {
    console.error(error);
  }
};

const getCart = async () => {
  try {
    const res = await fetch("/api/checkout");
    const cart = await res.json();

    return cart;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<{ productId: number; quantity: number }[]>(
    [],
  );

  useEffect(() => {
    setCookies(cart);
  }, [cart]);

  useEffect(() => {
    const setInitialCart = async () => {
      const cart = await getCart();
      setCart(cart);
    };

    setInitialCart();
  }, []);

  const addItem = ({
    productId,
    quantity,
  }: {
    productId: number;
    quantity: number;
  }) => {
    setCart((prev) => {
      const itemIndex = prev.findIndex((item) => item.productId === productId);

      if (itemIndex === -1) {
        return [...prev, { productId, quantity }];
      }

      const newCart = [...prev];
      newCart[itemIndex].quantity += quantity;

      return newCart;
    });
  };

  const removeItem = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearItems = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearItems,
        count: cart.reduce((acc, item) => acc + item.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
