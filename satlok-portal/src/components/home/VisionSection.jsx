export default function VisionSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            bg-gradient-to-r
            from-[#242424]
            via-[#3A3A3A]
            to-[#2B2B2B]
            min-h-[340px]
            md:min-h-[360px]
            px-8
            py-8
          "
        >
          {/* Left Content */}
          <div className="max-w-[430px] text-white">
            <p className="text-[15px] leading-7 text-white/95">
              We've been through it — chasing investors, burning
              capital on ads, trusting agencies that never delivered.
              We've been through it — chasing investors, burning
              capital on ads, trusting agencies that never delivered.
              We've been through it — chasing investors, burning
              capital on ads, trusting agencies that never delivered.
              We've been through it — chasing investors, burning
              capital on ads, trusting agencies that never delivered.
            </p>

            <div className="mt-14">
              <h3 className="text-xl font-semibold">
                We've been through it
              </h3>

              <p className="mt-2 text-white/80">
                — chasing investors
              </p>
            </div>
          </div>

          {/* Right Side Placeholder */}
          <div className="absolute right-0 top-0 hidden h-full w-[45%] md:block">
            {/* Add image here later */}
          </div>
        </div>
      </div>
    </section>
  );
}