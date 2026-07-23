// export default function Hero() {

//     return (

//         <section className="relative h-screen">

//             <div className="absolute inset-0 bg-black/55" />

            

//             <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">

//                 <h1 className="text-5xl lg:text-7xl font-bold">

//                     Path to the Freedom

//                 </h1>

//                 <p className="mt-6 max-w-xl text-lg">

//                     Fostering well-being through breath,
//                     meditation & yoga programs.

//                 </p>

//                 <button className="mt-10 bg-white text-[#001032] px-8 py-3 rounded">

//                     Explore

//                 </button>

//             </div>

//         </section>

//     )

// }
export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')", // Replace with your hero image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      
      {/* Hero Content */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-full px-6">
  <div className="flex flex-col items-center text-center text-white gap-6">

    <div className="flex flex-col items-center gap-5">
      <h1 className="text-[52px] lg:text-[64px] font-bold leading-tight">
        Path to the freedom
      </h1>

      <p className="max-w-3xl text-lg lg:text-xl text-white/90">
        Fostering well-being through breath, meditation & yoga programs since
        1981
      </p>
    </div>

    {/* Larger gap before button */}
    <button
      className="
        mt-4
        w-[120px]
        h-[48px]
        bg-white
        text-[#001032]
        text-[17px]
        font-semibold
        rounded-md
        border border-[#E5E7EB]
        shadow-[0_4px_12px_rgba(0,0,0,0.18)]
        hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
      "
    >
      Explore
    </button>

  </div>
</div>
    </section>
  );
}