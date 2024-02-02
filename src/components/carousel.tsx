"use client";

import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Product } from "@/types/index";

type ProductCarouselProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Carousel
      opts={{
        dragFree: true,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/3">
            <Link href={`/product/${product.id}`} prefetch>
              <Image
                className="rounded-sm transition hover:opacity-75"
                width={500}
                height={500}
                src={product.images[0]}
                alt={product.title}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
