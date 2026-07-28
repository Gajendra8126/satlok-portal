export default function CauseCard({ title }) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="h-[220px] w-full rounded-lg bg-white shadow-sm"></div>

      {/* Description */}
      <p className="mt-4 text-[12px] leading-5 text-[#5C5C5C]">
        {title}
      </p>
    </div>
  );
}