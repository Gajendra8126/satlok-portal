export default function Banner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative h-[320px] rounded-xl overflow-hidden bg-white">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3a3a3a] via-[#7f7f7f]/80 via-50% to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-between p-8 md:p-10 max-w-lg text-white">
            <p className="text-[18px] leading-8">
              We've been through it — chasing gurus, wasting time on
              following wrong paths, trusting fake gurus who never
              aligned us with the almighty.
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
    </section>
  );
}