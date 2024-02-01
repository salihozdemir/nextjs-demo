import { ProductCard } from "@/components/product-card";
import { Product } from "@/types/index";

async function getProductsByCategory(category: string) {
  const res = await fetch("https://react-shop-backend.liara.run/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Product[]>;
}

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const data = await getProductsByCategory(params.category);

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
