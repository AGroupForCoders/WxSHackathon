import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ImageType = {
  src: string | StaticImport;
  alt: string;
};

interface DuoProps {
  children: ReactNode;
  image?: ImageType | ReactNode;
  imgFirst?: boolean;
}

function isImageType(image: ImageType | ReactNode): image is ImageType {
  return (
    typeof image === "object" &&
    image !== null &&
    "src" in image &&
    "alt" in image
  );
}

export default function ContentImage({
  children,
  image,
  imgFirst = false,
}: DuoProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-x-12 gap-y-8 lg:flex-row">
      <div
        className={cn(
          "order-2 flex w-full flex-1 flex-col gap-y-6",
          imgFirst ? "lg:order-2" : "lg:order-1"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "order-1 flex w-full flex-1 items-center justify-center",
          imgFirst ? "lg:order-1" : "lg:order-2"
        )}
      >
        {isImageType(image) ? (
          <Image
            width={600}
            height={400}
            src={image.src}
            alt={image.alt}
            className="h-auto w-full rounded-[16px]"
          />
        ) : image ? (
          image
        ) : null}
      </div>
    </div>
  );
}
