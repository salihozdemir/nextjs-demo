import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/index";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-sm border p-4">
      <Link href={`/product/${product.id}`} prefetch>
        <Image
          className="rounded-sm transition hover:opacity-75"
          src={product.images[0]}
          width={500}
          height={500}
          alt={product.title}
        />
      </Link>
      <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
      <p className="line-clamp-2 text-xs text-muted-foreground">
        {product.description}
      </p>
      <Link href={`/categories/${product.category.id}`}>
        <Badge className="mt-2" variant="outline">
          {product.category.name}
        </Badge>
      </Link>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-lg font-bold">$ {product.price.toLocaleString()}</p>
        <Button size="sm">Add To Cart</Button>
      </div>
    </div>
  );
};
