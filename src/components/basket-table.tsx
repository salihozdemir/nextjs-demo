"use client";

import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/useCart";
import { CheckoutProduct } from "@/types/index";

type BasketTableProps = {
  products: CheckoutProduct[];
  setProducts: React.Dispatch<React.SetStateAction<CheckoutProduct[]>>;
};

export const BasketTable = ({ products, setProducts }: BasketTableProps) => {
  const { removeItem } = useCart();

  const removeItemOnClick = (id: number) => {
    removeItem(id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <Table>
      <TableCaption>
        Your basket contains {products.length}{" "}
        {products.length > 1 ? "items" : "item"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="w-[100px] text-center">Price</TableHead>
          <TableHead className="w-[100px] text-center">Quantity</TableHead>
          <TableHead className="text-right">Subtotal</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <div className="flex items-center gap-4">
                <Image
                  src={product.images[0]}
                  width={64}
                  height={64}
                  alt={product.title}
                />
                <div>{product.title}</div>
              </div>
            </TableCell>
            <TableCell className="text-center">${product.price}</TableCell>
            <TableCell className="text-center">{product.quantity}</TableCell>
            <TableCell className="text-right">
              ${product.price * product.quantity}
            </TableCell>
            <TableCell className="text-right">
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeItemOnClick(product.id)}
              >
                <Cross1Icon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
