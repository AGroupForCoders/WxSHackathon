import SponsorCard from "./SponsorCard";
import { Sponsor } from "@/(features)/winners/types/SponsorType";

type SponsorTierProps = {
  title: string;
  sponsors: Sponsor[];
  type: Sponsor["type"];
};

const titleColorMap: Record<Sponsor["type"], string> = {
  tech: "text-accent-wdcc",
  food: "text-accent-sesa",
};

export function SponsorTier({ title, sponsors, type }: SponsorTierProps) {
  if (sponsors.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-center text-4xl gap-y-6">
      <div className={`font-bold text-2xl ${titleColorMap[type]}`}>{title}</div>

      <div className="responsive-grid grid w-full place-content-center place-items-center gap-y-5 gap-x-24">
        {sponsors.map((sponsor, i) => (
          <SponsorCard
            key={`${sponsor.type}-sponsor-${i}`}
            tier={sponsor.type}
            src={sponsor.image}
            alt={sponsor.imageAlt}
            href={sponsor.websiteLink}
          />
        ))}
      </div>
    </div>
  );
}
