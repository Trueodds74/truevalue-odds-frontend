import Footer from "./components/Footer";
import Logo from "./components/Logo";

const X_URL = "https://x.com/truevalueodds";
const INSTAGRAM_URL = "https://www.instagram.com/truevalueodds";
const FACEBOOK_URL = "https://www.facebook.com/truevalueodds";
const EMAIL = "alfred@truevalueodds.co.za";

const LEAGUES = [
  "Premier League (England)",
  "La Liga (Spain)",
  "Serie A (Italy)",
  "Bundesliga (Germany)",
  "Ligue 1 (France)",
  "Eredivisie (Netherlands)",
  "Primeira Liga (Portugal)",
  "Pro League (Belgium)",
  "Scottish Premiership",
  "South African PSL",
  "Championship (England)",
  "Segunda División (Spain)",
  "2. Bundesliga (Germany)",
  "Serie B (Italy)",
  "Ligue 2 (France)",
];

const RULES = [
  {
    title: "Every pick is recorded first",
    text: "Each pick is logged before kick-off and locked. We never delete or edit a pick afterwards, so a loss cannot quietly disappear.",
  },
  {
    title: "Results come from real scores",
    text: "Picks are settled automatically from official match results. We do not mark our own homework by hand.",
  },
  {
    title: "A minimum edge, always",
    text: "A bet is only flagged when our estimate beats the bookmaker price by at least 5%, and by more in leagues where our testing says we need a bigger cushion.",
  },
  {
    title: "When the model and the market disagree wildly, we hold back",
    text: "Very large gaps usually mean our model is wrong, not that the bookmaker is. Those matches are held for review and never published.",
  },
  {
    title: "No draws, no guessing",
    text: "Our testing showed the model is not reliable on draws, so we do not pick them. If a league has not passed our tests, we make no picks in it.",
  },
  {
    title: "Four picks a day at most",
    text: "Some days there is nothing worth flagging. On those days we say so, instead of forcing a pick.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-5 max-w-6xl mx-auto">
        <a href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-xl font-bold text-green-500">
            TrueValue<span className="text-white">Odds</span>
          </span>
        </a>
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Follow on X
        </a>
      </nav>

      {/* Testing banner */}
      <div className="bg-amber-950/60 border-y border-amber-800/60">
        <p className="max-w-6xl mx-auto px-4 py-3 text-sm text-amber-200 text-center">
          <strong>We are in a testing phase.</strong> No public picks yet. We are building a
          real track record first, and we will start publishing only when the numbers earn it.
        </p>
      </div>

      {/* Hero */}
      <section className="text-center py-16 md:py-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Football odds, <span className="text-green-500">explained honestly.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          A free tool for South African punters. We work out what a result should pay,
          compare it with bookmaker prices, and flag only the small, defensible edges.
          No hype, no guaranteed wins, and no hidden losses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            Follow our progress
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-700 hover:border-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg transition"
          >
            How it works
          </a>
        </div>
      </section>

      {/* Where we are */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-xl border border-gray-800 p-5">
            <p className="text-3xl font-extrabold text-green-500">Free</p>
            <p className="text-sm text-gray-400 mt-1">No subscription, ever.</p>
          </div>
          <div className="rounded-xl border border-gray-800 p-5">
            <p className="text-3xl font-extrabold text-green-500">Testing</p>
            <p className="text-sm text-gray-400 mt-1">Building a track record before we publish.</p>
          </div>
          <div className="rounded-xl border border-gray-800 p-5">
            <p className="text-3xl font-extrabold text-green-500">Open</p>
            <p className="text-sm text-gray-400 mt-1">Wins and losses shown alike.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How TrueValue Odds works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-green-500">1.</span> We work out the fair odds
              </h3>
              <p className="text-gray-400">
                A statistical model (Poisson) uses each team&apos;s scoring record to estimate
                the chance of a home win or an away win.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-green-500">2.</span> We compare with real prices
              </h3>
              <p className="text-gray-400">
                We set our fair odds next to an actual bookmaker price. When the price pays
                clearly more than our estimate says it should, that is an edge.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-green-500">3.</span> We show our working
              </h3>
              <p className="text-gray-400">
                Every pick will show the chance we gave it, the fair odds, the price we
                compared against, and the size of the edge. You decide what to do with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our rules */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Our promises to punters</h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            These are built into the system, not just written on the website.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {RULES.map((rule) => (
              <div key={rule.title} className="border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2 text-green-400">{rule.title}</h3>
                <p className="text-gray-400">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leagues + track record */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Leagues we are testing</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              {LEAGUES.map((league) => (
                <li key={league} className="flex items-center gap-2">
                  <span className="text-green-500" aria-hidden="true">●</span> {league}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              We add a league only after it passes our tests, and we drop one if it loses.
            </p>
          </div>
          <div className="border border-gray-700 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-3">Our track record</h2>
            <p className="text-gray-400">
              We have not published any picks yet, so there is no public record to show.
              Once we start, every pick will be listed and settled in the open, wins and
              losses alike. We will not claim results we have not earned.
            </p>
          </div>
        </div>
      </section>

      {/* Remember */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Please remember</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Our numbers are estimates, not guarantees. You can lose money on any bet.</li>
            <li>We are not a bookmaker and we do not take bets.</li>
            <li>You must be 18 or older. Only bet what you can afford to lose.</li>
            <li>
              If gambling is a problem for you, call the free helpline on{" "}
              <strong className="text-gray-200">0800 006 008</strong>.
            </li>
          </ul>
        </div>
      </section>

      {/* Follow */}
      <section className="py-14 px-4 bg-gray-900 text-center">
        <h2 className="text-2xl font-bold mb-3">Follow the journey</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          We share our progress openly while we test. Find us on social media, or write to us.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-green-500 px-5 py-2 rounded-lg transition"
          >
            X
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-green-500 px-5 py-2 rounded-lg transition"
          >
            Instagram
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 hover:border-green-500 px-5 py-2 rounded-lg transition"
          >
            Facebook
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="border border-gray-700 hover:border-green-500 px-5 py-2 rounded-lg transition"
          >
            Email us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
