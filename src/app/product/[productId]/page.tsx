import { ProductDetailCard } from "@/components/product-detail-card";
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
      <ProductDetailCard product={product} />
    </div>
  );
}
