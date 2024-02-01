import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types/index";

type ProductCarouselProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent className="-ml-2 md:-ml-4">
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <Image
              className="object-cover"
              width={500}
              height={500}
              src={product.images[0]}
              alt={product.title}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};