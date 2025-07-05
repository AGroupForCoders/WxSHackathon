import Image from "next/image";
import { Sponsor } from "@/(features)/winners/types/SponsorType";

type SponsorCardProps = {
  tier: Sponsor["type"];
  src: string;
  alt: string;
  href?: string;
};

const tierImageSize: Record<
  Sponsor["type"],
  { width: number; height: number }
> = {
  tech: { width: 250, height: 100 },
  food: { width: 150, height: 80 },
};

const tierContainerSize: Record<
  Sponsor["type"],
  { width: number; height: number }
> = {
  tech: { width: 300, height: 120 },
  food: { width: 200, height: 100 },
};

const SponsorCard = ({ tier, src, alt, href }: SponsorCardProps) => {
  const { width, height } = tierImageSize[tier];
  const { width: boxWidth, height: boxHeight } = tierContainerSize[tier];

  const image = (
    <div
      className="flex items-center justify-center"
      style={{ width: boxWidth, height: boxHeight }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain drop-shadow-[0px_0px_8px_var(--background)]"
      />
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {image}
    </a>
  ) : (
    image
  );
};

export default SponsorCard;
