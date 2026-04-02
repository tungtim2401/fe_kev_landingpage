const services = [
  {
    title: "Architecture",
    desc: "At 7 Studio, we are proud to offer a full range of professional architecture services.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Master Planning",
    desc: "We work closely with clients to develop plans for a variety of private and public projects.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Interiors",
    desc: "We create dynamic and healthy spaces that combine technology and sustainability.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          Introducing Our Services
        </h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto my-3 rounded"></div>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          We are dedicated to creating spaces which meet clients' needs,
          requirements, and expectations.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div key={index} className="text-left">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
