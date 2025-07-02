interface YearDropdownProps {
  value: string;
  options: string[];
  onChange: (year: string) => void;
}

export default function YearDropdown({
  value,
  options,
  onChange,
}: YearDropdownProps) {
  return (
    <select
      className="appearance-none px-10 py-2 rounded-md bg-gray-10 shadow-sm  font-bold text-3xl cursor-pointer"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
