import Image from "next/image";
import { Product } from "@/types/index";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-sm border p-4">
      <Image
        className="rounded-sm"
        src={product.images[0]}
        width={500}
        height={500}
        alt={product.title}
      />
      <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
      <p className="line-clamp-2 text-xs text-muted-foreground">
        {product.description}
      </p>
      <Badge className="mt-2" variant="outline">
        {product.category.name}
      </Badge>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-lg font-bold">{product.price.toLocaleString()}$</p>
        <Button size="sm">Add To Cart</Button>
      </div>
    </div>
  );
};
