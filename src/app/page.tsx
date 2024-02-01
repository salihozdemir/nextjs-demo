import { ProductCarousel } from "@/components/carousel";
import { CategoryCard } from "@/components/category-card";
import { Category, Product } from "@/types/index";

async function getCategories() {
  const res = await fetch(
    "https://web-production-362f8.up.railway.app/api/v1/categories",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Category[]>;
}

async function getPopularProducts() {
  const res = await fetch(
    "https://web-production-362f8.up.railway.app/api/v1/products?offset=0&limit=15",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Product[]>;
}

export default async function Home() {
  const categories = await getCategories();
  const popularProducts = await getPopularProducts();

  return (
    <div className="container">
      <h1 className="my-4 text-3xl font-bold">Popular Products</h1>
      <ProductCarousel products={popularProducts} />
      <h1 className="my-4 text-3xl font-bold">Categories</h1>
      <div className="grid grid-cols-3 items-center gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
