"use client";

import React from "react";
import Link from "next/link";
import { ImageViewer } from "@/components/image-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/index";

type ProductDetailCardProps = {
  product: Product;
};

export const ProductDetailCard = ({ product }: ProductDetailCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="flex flex-col items-center gap-8 border p-4 md:flex-row md:items-start">
      <ImageViewer images={product.images} />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <Link href={`/categories/${product.category.id}`}>
            <Badge className="mt-2" variant="outline">
              {product.category.name}
            </Badge>
          </Link>
        </div>
        <p className="text-sm">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <p className="text-lg font-bold">
              $ {product.price.toLocaleString()}
            </p>
          </div>
          <Button
            onClick={() => addItem({ productId: product.id, quantity: 1 })}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
