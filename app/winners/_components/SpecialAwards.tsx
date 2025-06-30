export default function SpecialAwards() {
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-gray-10 rounded p-2 flex flex-row">
        <h3 className="font-bold">🎨 Best Design</h3>
      </div>

      <div className="bg-gray-10 rounded p-2 flex flex-row">
        <h3 className="font-bold">⚙️ Most Overengineered</h3>
      </div>

      <div className="bg-gray-10 rounded p-2 flex flex-row">
        <h3 className="font-bold">🎭 Most Entertaining</h3>
      </div>
    </div>
  );
}
