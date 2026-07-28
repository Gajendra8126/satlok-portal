export default function QuickLinkCard({ title }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Placeholder Circle */}
      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#D9D9D9] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
        <div className="h-8 w-8 rounded-full bg-[#E8E8E8]" />
      </div>

      <h3 className="mt-5 max-w-[120px] text-[14px] font-medium leading-5 text-[#001032]">
        {title}
      </h3>
    </div>
  );
}