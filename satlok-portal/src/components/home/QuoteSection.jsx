export default function QuoteSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-[480px] h-[430px] rounded-[24px] bg-[#FFF6DE] p-8 flex flex-col justify-between">

          {/* Top Text */}
          <p className="text-[17px] leading-[34px] font-medium text-[#111111]">
            We’ve been through it — chasing gurus, wasting
            time on following wrong paths, trusting fake
            gurus who never aligned us with the almighty.
          </p>

          {/* Bottom Text */}
          <div>
            <h3 className="text-[20px] font-semibold text-[#111111]">
              We’ve been through it
            </h3>

            <p className="text-[20px] font-medium text-[#111111] mt-1">
              — chasing gurus
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}