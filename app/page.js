export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'sans-serif', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>TrueValue Odds</h1>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '40px', lineHeight: '1.6' }}>
          A free South African football odds tool. We work out what a Premier League result should pay, compare it with bookmaker prices, and flag small, defensible edges. At most four picks a day, and some days none.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="https://twitter.com/truevalueodds" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#22c55e', color: 'white', padding: '15px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            Follow @truevalueodds
          </a>

          {/* THIS IS THE NEW BUTTON */}
          <a href="/picks" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '15px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            View Today's Picks
          </a>

          <a href="#how-it-works" style={{ backgroundColor: 'transparent', border: '1px solid #334155', color: 'white', padding: '15px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            How it works
          </a>
        </div>
      </div>

      <div id="how-it-works" style={{ maxWidth: '600px', width: '100%', marginTop: '80px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>How TrueValue Odds works</h2>
        <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>1. We work out the fair odds</h3>
          <p style={{ color: '#94a3b8' }}>Our Poisson model calculates the true probability of a home win, draw, or away win.</p>
        </div>
      </div>

    </main>
  );
}
