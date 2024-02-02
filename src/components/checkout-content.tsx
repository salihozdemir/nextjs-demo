"use client";

import { useEffect, useState } from "react";
import { BasketTable } from "@/components/basket-table";
import { BasketSummary } from "@/components/basket-summary";
import { CheckoutProduct } from "@/types/index";

type CheckoutContentProps = {
  basketProducts: CheckoutProduct[];
};

export const CheckoutContent = ({ basketProducts }: CheckoutContentProps) => {
  const [products, setProducts] = useState(basketProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/checkout/products");
      const basketProducts = (await response.json()) as CheckoutProduct[];
      setProducts(basketProducts);
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <p>Your basket is empty.</p>;
  }

  return (
    <div className="flex gap-8">
      <BasketTable products={products} setProducts={setProducts} />
      <BasketSummary products={products} />
    </div>
  );
};
