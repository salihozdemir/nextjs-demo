import Link from "next/link";
import { ImageViewer } from "@/components/image-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/index";

async function getProductDetail(productId: string) {
  const res = await fetch(
    `https://web-production-362f8.up.railway.app/api/v1/products/${productId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Product>;
}

export default async function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductDetail(params.productId);

  return (
    <div className="container">
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
            <Button>Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
