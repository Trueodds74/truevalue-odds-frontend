import Footer from "./components/Footer";

const X_URL = "https://x.com/truevalueodds";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-green-500">
          TrueValue<span className="text-white">Odds</span>
        </h1>
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Follow on X
        </a>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Stop Guessing. <br />
          <span className="text-green-500">Start Calculating.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          A free South African football odds tool. We work out what a Premier League
          result should pay, compare it with bookmaker prices, and flag small,
          defensible edges. At most four picks a day, and some days none.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            Follow @truevalueodds
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-700 hover:border-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            How it works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How TrueValue Odds works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-green-500 text-4xl mb-4" aria-hidden="true">📊</div>
              <h4 className="text-xl font-bold mb-2">1. We work out the fair odds</h4>
              <p className="text-gray-400">
                A statistical model (Poisson) uses each team&apos;s scoring record to estimate
                the chance of a home win, a draw and an away win.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-green-500 text-4xl mb-4" aria-hidden="true">⚖️</div>
              <h4 className="text-xl font-bold mb-2">2. We compare with the bookmakers</h4>
              <p className="text-gray-400">
                We set our fair odds next to prices from South African bookmakers. When a
                price is clearly higher than our estimate, we flag it as an edge.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="text-green-500 text-4xl mb-4" aria-hidden="true">🎯</div>
              <h4 className="text-xl font-bold mb-2">3. We show our working</h4>
              <p className="text-gray-400">
                Every pick comes with the chance we gave it, the fair odds, and the size of the
                edge. We publish at most four a day, and sometimes none.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest notes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">Our track record</h3>
            <p className="text-gray-400">
              Every pick we publish will be recorded and settled in public, wins and losses
              alike. We have not published any picks yet, so there is no record to show.
              We will not claim results we have not earned.
            </p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-3">Please remember</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Our numbers are estimates, not guarantees. You can lose money on any bet.</li>
              <li>We are not a bookmaker and we do not take bets.</li>
              <li>You must be 18 or older. Only bet what you can afford to lose.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
