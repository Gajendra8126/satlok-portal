export default function TestimonialCard({
  review,
  name,
  age,
  profession,
  image,
}) {
  return (
    <div className="bg-white rounded-[10px] border border-black/20 shadow-[0px_4px_15px_rgba(11,26,61,0.05)] p-6 md:p-8 h-[374px] flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-[#333333] text-[16px] md:text-[18px] font-light leading-[27px]">
          {review}
        </p>
      </div>

      <div className="relative pt-6 flex items-center justify-between border-t border-black/20 mt-4">
        <div>
          <h4 className="font-bold text-[18px] text-[#333333]">
            {name}, {age}
          </h4>
          <p className="text-[14px] text-gray-500 font-light mt-1 max-w-[150px]">
            {profession}
          </p>
        </div>
        
        <div className="absolute right-0 top-6">
          <img
            src={image}
            alt={name}
            className="w-[60px] h-[60px] rounded-full object-cover shadow-sm bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}