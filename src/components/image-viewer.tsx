"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageViewerProps = {
  images: string[];
};

export const ImageViewer = ({ images }: ImageViewerProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="flex flex-shrink-0 flex-col-reverse gap-4 md:flex-row">
      <div className="flex flex-row gap-6 md:flex-col">
        {images.map((image, index) => (
          <button key={image} onClick={() => setCurrentImage(image)}>
            <Image
              className={cn("rounded-sm transition", {
                "opacity-75": currentImage !== image,
              })}
              src={image}
              width={100}
              height={100}
              alt={`Product Image ${index + 1}`}
            />
          </button>
        ))}
      </div>
      <div className="flex-shrink-0">
        <Image
          className="rounded-sm"
          src={currentImage}
          width={350}
          height={300}
          alt="Product Image"
        />
      </div>
    </div>
  );
};
