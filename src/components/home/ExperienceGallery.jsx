import GalleryCard from "../cards/GalleryCard";

const gallery = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
}));

export default function ExperienceGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-[#0B1D45] mb-12">
          A life changing experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item) => (
            <GalleryCard key={item.id} />
          ))}
        </div>

      </div>
    </section>
  );
}