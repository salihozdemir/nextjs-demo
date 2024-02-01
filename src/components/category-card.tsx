import Image from "next/image";
import { Category } from "@/types/index";

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="relative">
      <Image
        className="rounded-sm"
        src={category.image}
        width={600}
        height={100}
        alt={category.name}
      />
      <div className="group absolute inset-0 flex items-center justify-center transition hover:backdrop-brightness-75">
        <h2 className="hidden text-5xl font-extrabold text-white group-hover:block">
          {category.name}
        </h2>
      </div>
    </div>
  );
};
