export default function FeatureCard({ title }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Placeholder */}
      <div className="w-[92px] h-[92px] rounded-2xl bg-[#D9D9D9] border border-[#D6D6D6] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"></div>

      {/* Title */}
      <h3 className="mt-5 text-[15px] leading-6 font-medium text-[#16254C] max-w-[150px]">
        {title}
      </h3>
    </div>
  );
}