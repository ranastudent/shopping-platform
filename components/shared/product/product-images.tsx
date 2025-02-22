'use client';
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative w-full h-[400px]"> 
        <Image
          src={images[current]}
          alt={`Product image ${current + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          priority
        />
      </div>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600 p-1 rounded-md",
              current === index && "border-orange-500"
            )}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
