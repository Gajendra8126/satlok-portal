export default function JoinCard({ title, buttonText }) {
  return (
    <div className="group relative h-[520px] rounded-[24px] overflow-hidden bg-gray-300 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-5">
        <h2 className="text-white text-3xl font-medium leading-tight max-w-[220px]">
          {title}
        </h2>

        <button className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium transition hover:bg-neutral-800">
          {buttonText}
        </button>
      </div>
    </div>
  );
}