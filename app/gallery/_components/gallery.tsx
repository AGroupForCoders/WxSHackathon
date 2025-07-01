"use client";

import { galleryPhotos } from "../gallery-photos/galleryPhotos";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/primitives/Button";

export default function Gallery() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  const currentYearData = galleryPhotos[currentYearIndex];
  const currentYear = currentYearData.photos[0]?.year;
  const currentImages = currentYearData.photos.map((photo) => photo.image);
  const distributeImagesIntoColumns = (images: string[]) => {
    const columns: string[][] = [[], [], [], []];

    images.forEach((image, index) => {
      const columnIndex = index % 4;
      columns[columnIndex].push(image);
    });

    return columns;
  };
  const columns = distributeImagesIntoColumns(currentImages);
  const goToPreviousYear = () => {
    setCurrentYearIndex((prev) =>
      prev === 0 ? galleryPhotos.length - 1 : prev - 1
    );
  };

  const goToNextYear = () => {
    setCurrentYearIndex((prev) =>
      prev === galleryPhotos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <Button
          onClick={goToPreviousYear}
          className="rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          &lt; 
        </Button>

        <h1 className="text-4xl font-bold text-gray-900">
          Gallery {currentYear}
        </h1>
        <Button
          onClick={goToNextYear}
          className="rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
        >
          &gt; 
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {column.map((imagePath, imageIndex) => (
              <div key={imageIndex}>
                <Image
                  className="h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src={imagePath}
                  alt={`Gallery ${currentYear} - Image ${imageIndex + 1}`}
                  width={400}
                  height={600}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
