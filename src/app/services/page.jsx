export default function Services() {
  return (
    <section className="section bg-white">
      <div className="container-custom grid md:grid-cols-3 gap-10">

        {["Design", "Planning", "Consulting"].map((item, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold mb-4">{item}</h3>
            <p className="subtext">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}