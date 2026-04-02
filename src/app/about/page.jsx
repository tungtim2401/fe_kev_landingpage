export default function About() {
  return (
    <section className="section bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="heading">About our studio</h2>
          <p className="subtext mt-6">
            We are a team of architects creating modern and functional designs.
          </p>
        </div>

        <img
          src="/images/about.jpg"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </section>
  );
}