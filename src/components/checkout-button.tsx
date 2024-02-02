"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

export const CheckoutButton = () => {
  const { clearItems } = useCart();

  return (
    <Button className="w-full" onClick={() => clearItems()} asChild>
      <Link href="/order-success">Checkout</Link>
    </Button>
  );
};
