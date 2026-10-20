export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-green-500">TrueValue<span className="text-white">Odds</span></h1>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition">Join Waitlist</button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Stop Guessing. <br />
          <span className="text-green-500">Start Calculating.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          The first South African sports analytics engine that finds mathematical value in bookmaker odds. We don't predict the future; we find the edge.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition">Get Early Access</button>
          <button className="border border-gray-700 hover:border-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg transition">How it Works</button>
        </div>
      </section>

      {/* Features / How it works */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">The TrueValue Engine</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-green-500 text-4xl mb-4"></div>
              <h4 className="text-xl font-bold mb-2">Poisson Distribution</h4>
              <p className="text-gray-400">We use advanced statistical models to calculate the true probability of every match outcome.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-green-500 text-4xl mb-4">⚖️</div>
              <h4 className="text-xl font-bold mb-2">Find the Edge</h4>
              <p className="text-gray-400">We compare our true odds against bookmaker odds. If the bookie is wrong, we flag it.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-green-500 text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Transparent Picks</h4>
              <p className="text-gray-400">Every pick comes with a clear, mathematical reason. No gut feelings, just data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>18+ | Play Responsibly | T&Cs Apply</p>
        <p className="mt-2">© 2026 TrueValue Odds. Built in South Africa 🇦</p>
      </footer>
    </main>
  );
}
