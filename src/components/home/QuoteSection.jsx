export default function QuoteSection({ color = "#000000", textColor = "white" }) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div 
          className="rounded-[12px] min-h-[402px] flex flex-col justify-between p-6 md:px-[42px] md:py-[47px] opacity-80 overflow-hidden"
          style={{ background: `linear-gradient(270deg, #FFFFFF 41.35%, ${color} 100%)` }}
        >
          {/* Top Text (Long) */}
          <p 
            className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-medium max-w-[40%]" 
            style={{ color: textColor }}
          >
            We’ve been through it — chasing gurus, wasting time on following wrong paths, trusting fake gurus who never aligned us with the almighty.
          </p>

          {/* Bottom Text (Short) */}
          <p 
            className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-medium max-w-[40%] mt-8 md:mt-0" 
            style={{ color: textColor }}
          >
            We’ve been through it <br />— chasing gurus
          </p>
        </div>
      </div>
    </section>
  );
}