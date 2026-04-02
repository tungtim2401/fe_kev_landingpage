export default function Navbar() {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur">
      <div className="container-custom flex justify-between py-4">
        <h1 className="font-bold text-lg">ARCHITECT</h1>

        <nav className="flex gap-8 text-sm">
          <a href="#">HOME</a>
          <a href="#">PROJECTS</a>
          <a href="#">SERVICES</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}