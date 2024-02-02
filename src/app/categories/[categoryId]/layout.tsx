import Link from "next/link";
import { Category } from "@/types/index";

async function getCategories() {
  const res = await fetch(
    "https://web-production-362f8.up.railway.app/api/v1/categories",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Category[]>;
}

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { categoryId: number };
}) {
  const categories = await getCategories();

  return (
    <div className="container relative flex flex-col sm:flex-row">
      <div className="w-48 flex-shrink-0 mb-4">
        <ul className="flex gap-4 sm:sticky sm:top-20 sm:flex-col">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/categories/${category.id}`}
                className={
                  params.categoryId == category.id
                    ? "font-bold underline underline-offset-4"
                    : ""
                }
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
