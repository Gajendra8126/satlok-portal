export default function FeatureCard({ title, isTall }) {
  return (
    <div className={`flex flex-col items-center text-center ${isTall ? "row-span-2 md:row-span-1" : ""}`}>
      {/* Placeholder */}
      <div className={`w-[157px] ${isTall ? "h-[358px] md:h-[170px]" : "h-[170px]"} rounded-[20px] bg-white border border-gray-200 shadow-[0_0px_12px_rgba(0,0,0,0.15)] opacity-80 transition duration-300 hover:scale-105`}></div>

      {/* Title */}
      <h3 className="mt-5 text-[15px] leading-6 font-medium text-[#16254C] max-w-[150px]">
        {title}
      </h3>
    </div>
  );
}