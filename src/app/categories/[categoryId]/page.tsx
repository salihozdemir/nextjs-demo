import { ProductCard } from "@/components/product-card";
import { Product } from "@/types/index";

async function getProductsByCategory(categoryId: string) {
  const res = await fetch(
    `https://web-production-362f8.up.railway.app/api/v1/products/?categoryId=${categoryId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Product[]>;
}

export default async function Category({
  params,
}: {
  params: { categoryId: string };
}) {
  const data = await getProductsByCategory(params.categoryId);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
