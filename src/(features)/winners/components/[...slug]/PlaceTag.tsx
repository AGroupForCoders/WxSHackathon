export default function PlaceTag({ placing }: { placing: string }) {
  const placeBgMap: Record<string, string> = {
    "1st Place": "bg-yoyo-yellow-10",
    "2nd Place": "bg-sesa-teal-10",
    "3rd Place": "bg-andrew-amethyst-10",
  };
  const bgColorClass = placeBgMap[placing] || "bg-gray-10";
  return (
    <p className={`border rounded-3xl py-1 px-4 ${bgColorClass}`}>{placing}</p>
  );
}
