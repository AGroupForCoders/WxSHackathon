import Image from "next/image";
import { Sponsor } from "@/(features)/winners/types/SponsorType";

type SponsorCardProps = {
  tier: Sponsor["type"];
  src: string;
  alt: string;
  href?: string;
};

const tierWidth: Record<Sponsor["type"], number> = {
  tech: 250,
  food: 150,
};

const tierHeight: Record<Sponsor["type"], number> = {
  tech: 100,
  food: 80,
};

const SponsorCard = ({ tier, src, alt, href }: SponsorCardProps) => {
  const width = tierWidth[tier];
  const height = tierHeight[tier];

  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="drop-shadow-[0px_0px_8px_var(--background)] object-contain"
    />
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
