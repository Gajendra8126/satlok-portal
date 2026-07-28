export default function AboutFoundation() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-12 gap-4 h-[420px]">
          {/* Top Left */}
          <div className="col-span-7 h-[140px] rounded-xl bg-[#D9D9D9]" />

          {/* Top Right */}
          <div className="col-span-5 row-span-2 h-[296px] rounded-xl bg-[#D9D9D9]" />

          {/* Middle Left */}
          <div className="col-span-7 h-[140px] rounded-xl bg-[#D9D9D9]" />

          {/* Bottom Left Small */}
          <div className="col-span-2 h-[90px] rounded-xl bg-[#D9D9D9]" />

          {/* Bottom Center Small */}
          <div className="col-span-2 h-[90px] rounded-xl bg-[#D9D9D9]" />

          {/* Bottom Right Large */}
          <div className="col-span-8 h-[90px] rounded-xl bg-[#D9D9D9]" />
        </div>
      </div>
    </section>
  );
}