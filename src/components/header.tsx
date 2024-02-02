"use client";

import Link from "next/link";
import { BackpackIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/useCart";
import { Badge } from "./ui/badge";

export const Header = () => {
  const { count } = useCart();

  return (
    <nav className="sticky top-0 z-10 h-16 border-b bg-background px-4">
      <div className="container flex h-full items-center justify-between">
        <Link href="/">
          <h3 className="text-2xl font-bold">Ecommerce</h3>
        </Link>
        <Button variant="outline" size="sm" className="px-2" asChild>
          <Link href="/checkout">
            <BackpackIcon className="mr-1 h-4 w-4" />
            <Badge className="px-2" variant="secondary">
              {count}
            </Badge>
          </Link>
        </Button>
      </div>
    </nav>
  );
};
