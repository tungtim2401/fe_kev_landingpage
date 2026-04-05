export default function Layout({ children }) {
  return (
    <main className="bg-industrial-gray min-h-screen p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {children}
      </div>
    </main>
  );
}