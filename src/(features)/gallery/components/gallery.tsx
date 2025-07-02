"use client";

import { galleryPhotos } from "../data/gallery-photos/galleryPhotos";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/primitives/Button";
import { motion, AnimatePresence, easeInOut } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery() {
  //indexes were wrong or smth
  const orderedGalleryPhotos = [...galleryPhotos].reverse();
  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  const currentYearData = orderedGalleryPhotos[currentYearIndex];
  const currentYear = currentYearData.photos[0]?.year;
  const currentImages = currentYearData.photos.map((photo) => photo.image);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxSlides = currentImages.map((image, index) => ({
    src: image,
    alt: `Gallery ${currentYear} - Image ${index + 1}`,
    width: 1200,
    height: 800,
  }));

  const openLightbox = (imageIndex: number) => {
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  const distributeImagesIntoColumns = (images: string[]) => {
    const columns: string[][] = [[], [], [], []];

    images.forEach((image, index) => {
      const columnIndex = index % 4;
      columns[columnIndex].push(image);
    });

    return columns;
  };

  // Helper function to extract filename from path for better alt text
  const getImageName = (imagePath: string) => {
    const filename = imagePath.split("/").pop() || "";
    // Remove file extension and replace dashes/underscores with spaces
    return filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
  };

  // Helper function to create unique key from image path
  const getImageKey = (imagePath: string, year: number | string) => {
    // Use the image path as a base for uniqueness, combined with year
    const imageName = imagePath.split("/").pop() || "";
    return `${year}-${imageName}`;
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
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between ">
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
      <AnimatePresence mode="wait">
        {/* todo: make this transition look better 😄 - anton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: easeInOut }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          key={currentYear}
        >
          {columns.map((column, columnIndex) => (
            <div
              key={`column-${currentYear}-${columnIndex}`}
              className="grid gap-4"
            >
              {column.map((imagePath) => {
                const imageKey = getImageKey(imagePath, currentYear);
                const imageName = getImageName(imagePath);

                return (
                  <div
                    key={imageKey}
                    onClick={() =>
                      openLightbox(
                        columns.indexOf(column) * 4 + column.indexOf(imagePath)
                      )
                    }
                  >
                    <Image
                      className="h-auto max-w-full rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                      src={imagePath}
                      alt={`${imageName} from ${currentYear} gallery`}
                      width={400}
                      height={600}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Lightbox
        open={lightboxOpen}
        plugins={[Thumbnails]}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        carousel={{ finite: false }}
        render={{
          buttonPrev: lightboxSlides.length <= 1 ? () => null : undefined,
          buttonNext: lightboxSlides.length <= 1 ? () => null : undefined,
        }}
      />
    </div>
  );
}
