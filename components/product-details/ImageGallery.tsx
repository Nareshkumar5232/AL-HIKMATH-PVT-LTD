"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainError, setMainError] = useState(false);

  const mainSrc = mainError
    ? "/file.svg"
    : (images[activeIndex] ?? "/file.svg");

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative w-full aspect-square max-w-[600px] mx-auto overflow-hidden rounded-xl bg-[#1A1A1A]">
        <Image
          key={mainSrc}
          src={mainSrc}
          alt={productName}
          width={600}
          height={600}
          className="object-contain w-full h-full hover:scale-110 transition-transform duration-300"
          onError={() => setMainError(true)}
          priority
        />
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-3 justify-center flex-wrap">
          {images.map((src, index) => (
            <ThumbnailButton
              key={index}
              src={src}
              alt={`${productName} thumbnail ${index + 1}`}
              isActive={activeIndex === index}
              onClick={() => {
                setActiveIndex(index);
                setMainError(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ThumbnailButtonProps {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

function ThumbnailButton({ src, alt, isActive, onClick }: ThumbnailButtonProps) {
  const [error, setError] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative w-20 h-20 rounded-lg overflow-hidden bg-[#1A1A1A] border-2 transition-colors duration-200 flex-shrink-0",
        isActive
          ? "border-[#9EFF00]"
          : "border-transparent hover:border-[#9EFF00]/50"
      )}
      aria-label={alt}
    >
      <Image
        src={error ? "/file.svg" : src}
        alt={alt}
        width={80}
        height={80}
        className="object-contain w-full h-full"
        onError={() => setError(true)}
      />
    </button>
  );
}
