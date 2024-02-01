import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/index";

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <div className="relative">
        <Image
          className="rounded-sm"
          src={category.image}
          width={600}
          height={100}
          alt={category.name}
        />
        <div className="absolute inset-0 flex items-center justify-center backdrop-brightness-75 transition hover:backdrop-brightness-50">
          <h2 className="text-5xl font-extrabold text-white">
            {category.name}
          </h2>
        </div>
      </div>
    </Link>
  );
};
