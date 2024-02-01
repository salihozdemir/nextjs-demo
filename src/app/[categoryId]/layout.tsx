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
    <div className="container flex">
      <div className="w-64 flex-shrink-0">
        <ul className="flex flex-col gap-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/${category.id}`}
                className={
                  params.categoryId == category.id
                    ? "text-blue-500"
                    : "text-gray-500"
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
