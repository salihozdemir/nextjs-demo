"use client";

import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

export const AddToCartButton = ({
  productId,
  ...rest
}: ButtonProps & { productId: number }) => {
  const { addItem } = useCart();

  return (
    <Button onClick={() => addItem({ productId, quantity: 1 })} {...rest}>
      Add To Cart
    </Button>
  );
};
