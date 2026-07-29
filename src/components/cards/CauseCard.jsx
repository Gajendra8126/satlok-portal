export default function CauseCard({ title }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Image / Card background */}
      <div className="h-[402px] w-full bg-white/80 rounded-xl shadow-sm"></div>

      {/* Description */}
      <p className="text-[16px] font-light leading-[19px] text-black">
        {title}
      </p>
      
      {/* Divider */}
      <div className="h-px w-full bg-black/20"></div>
    </div>
  );
}