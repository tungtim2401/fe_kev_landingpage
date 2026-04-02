import React from "react";

const logos = [
  "https://dummyimage.com/200x80/ffffff/000&text=Teakwood",
  "https://dummyimage.com/200x80/ffffff/000&text=Allexa",
  "https://dummyimage.com/200x80/ffffff/000&text=ArchStreet",
  "https://dummyimage.com/200x80/ffffff/000&text=Proud",
  "https://dummyimage.com/200x80/ffffff/000&text=Woodworks",
  "https://dummyimage.com/200x80/ffffff/000&text=Teakwood",
  "https://dummyimage.com/200x80/ffffff/000&text=Allexa",
  "https://dummyimage.com/200x80/ffffff/000&text=ArchStreet",
  "https://dummyimage.com/200x80/ffffff/000&text=Proud",
  "https://dummyimage.com/200x80/ffffff/000&text=Woodworks",
];

export default function PracticeAreas() {
  return (
    <section className="w-full">
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="bg-[#0f1c2e] text-white p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3">Practice Areas</h2>
          <div className="w-10 h-1 bg-blue-400 mb-6"></div>

          <p className="text-gray-300 mb-4">
            As an architecture company with vast experience, we work with
            different areas of business.
          </p>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Our team prides itself in creating unique and innovative spaces and
            in dealing with projects of any complexity. We understand that each
            project is different and deserves to be properly treated.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            {["Technology", "Healthcare", "Workplace", "Science"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {item}
                </span>
              ),
            )}
          </div>

          <p className="text-gray-400 text-sm mb-8">
            We design both private property projects and commercial buildings
            with attention to every detail and special care.
          </p>

          {/* BUTTON */}
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full w-fit font-semibold hover:bg-yellow-300 transition">
            OUR PROJECTS +
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[400px] md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
            alt="building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* LOGO SLIDER */}
    </section>
  );
}
