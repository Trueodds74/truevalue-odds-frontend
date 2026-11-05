export default async function PicksPage() {
  // Hardcoded Railway URL so it never fails
  const backendUrl = "https://web-production-c7764.up.railway.app";
  
  let data = { date: "Today", count: 0, message: "Loading...", picks: [], disclaimer: "Estimates, not guarantees. 18+ only. Gamble responsibly." };
  
  try {
    const res = await fetch(`${backendUrl}/picks/today`, { cache: 'no-store' });
    if (res.ok) {
      data = await res.json();
    } else {
      data.message = "Could not load picks from the server right now.";
    }
  } catch (error) {
    data.message = "Network error. Could not reach the backend.";
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>
        {data.count > 0 ? `Today's Picks - ${data.date}` : "TrueValue Odds"}
      </h1>
      
      {data.count === 0 ? (
        <div style={{ backgroundColor: '#1f2937', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f3f4f6' }}>
            {data.message || "No value today."}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '10px' }}>
            We only publish picks when the math shows a real edge. Check back tomorrow.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {data.picks.map((pick) => (
            <div key={pick.fixture_id} style={{ border: '1px solid #374151', padding: '20px', borderRadius: '8px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{pick.match}</h2>
                <span style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '999px', fontWeight: 'bold' }}>
                  {pick.edge_pct}% Edge
                </span>
              </div>
              
              <p style={{ fontSize: '1.1rem' }}>
                Pick: <strong>{pick.pick}</strong> @ {pick.bookmaker_odds} ({pick.bookmaker})
              </p>
              
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '10px', marginBottom: '15px' }}>{pick.reason}</p>
              
              {/* THE BET BUTTON */}
              <a href="https://https://goyesplay.com/yuvxplqbe" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#f59e0b', color: 'white', padding: '10px 24px', borderRadius: '6px', fontWeight: 'bold', textDecoration: 'none' }}>
                Bet Now
              </a>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '40px', fontSize: '0.8rem', color: '#6b7280', borderTop: '1px solid #374151', paddingTop: '20px' }}>
        <p>{data.disclaimer}</p>
        <p style={{ marginTop: '10px' }}>
          <strong>Affiliate Disclosure:</strong> We may earn a commission if you sign up and bet through our links. This does not affect the odds we show or the mathematics of our picks.
        </p>
      </div>
    </div>
  );
}
