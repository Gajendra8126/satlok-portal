export default function Banner() {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ================= Mobile ================= */}
        <div className="relative md:hidden h-[350px] rounded-2xl overflow-hidden bg-white shadow-md py-20">

          {/* Left Gradient */}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(90deg,_#355760_0%,_#58777D_35%,_#8EA4A9_55%,_#D9E1E3_78%,_#FFFFFF_100%)]" />

          {/* Text */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-[42%] pl-5">
              <p className="text-white text-[12px] leading-7 font-medium">
                We've been through it — chasing gurus,
                wasting time on following wrong paths,
                trusting fake gurus who never aligned
                us with the almighty.
              </p>
            </div>
          </div>

        </div>

        {/* ================= Desktop ================= */}
        <div className="hidden md:block">
          <div className="relative h-[320px] rounded-xl overflow-hidden bg-white">

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3a3a3a] via-[#7f7f7f]/80 via-40% to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-10 max-w-lg text-white">

              <p className="text-[18px] leading-8">
                We've been through it — chasing gurus,
                wasting time on following wrong paths,
                trusting fake gurus who never aligned
                us with the almighty.
              </p>

              <div>
                <p className="text-lg">
                  We've been through it
                </p>

                <p className="text-lg">
                  — chasing gurus
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}