import { Winner } from "@/types/WinnerType";

export default function SpecialAwards({
  specialAwards,
}: {
  specialAwards: Winner[];
}) {
  return (
    <div className="flex flex-col gap-10">
      {specialAwards.map((award) => (
        <div
          key={award.place}
          className="bg-gray-10 rounded p-2 flex flex-col gap-2"
        >
          <h3 className="font-bold">{award.place}</h3>
          <p>{award.teamName}</p>
        </div>
      ))}
    </div>
  );
}
