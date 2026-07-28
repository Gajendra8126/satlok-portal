export default function TestimonialCard({
  review,
  name,
  age,
  profession,
  image,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-[260px] flex flex-col justify-between">
      <div>
        <p className="text-gray-700 text-[15px] leading-7">
          {review}
        </p>
      </div>

      <div className="flex items-center justify-between pt-6">
        <div>
          <h4 className="font-semibold text-[15px]">
            {name}, {age}
          </h4>

          <p className="text-sm text-gray-500">
            {profession}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-px h-10 bg-gray-300"></div>

          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}