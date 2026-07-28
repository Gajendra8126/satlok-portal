export default function QuickLinkCard({ title }) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      {/* Placeholder Circle Container */}
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] overflow-hidden">
        {/* Inner image placeholder */}
        <div className="h-full w-full bg-[rgba(230,230,230,0.5)]" />
      </div>

      <h3 className="w-[155px] text-[20px] font-normal leading-[30px] text-[#001032]">
        {title}
      </h3>
    </div>
  );
}