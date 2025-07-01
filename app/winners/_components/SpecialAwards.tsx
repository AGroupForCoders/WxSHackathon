import { Winner } from "@/types/WinnerType";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

export default function SpecialAwards({
  specialAwards,
  year,
}: {
  specialAwards: Winner[];
  year: string;
}) {
  return (
    <div className="flex flex-col gap-10 z-10">
      {specialAwards.map((award) => (
        <div
          key={award.place + award.teamName}
          className="bg-gray-10 rounded p-2 flex flex-col gap-2"
        >
          <h3 className="font-bold">{award.place}</h3>
          <Link
            href={`/winners/${year}/${slugify(award.teamName)}
              `}
            className="hover:underline"
          >
            {award.teamName}
          </Link>
        </div>
      ))}
    </div>
  );
}
