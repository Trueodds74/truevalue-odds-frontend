const EMAIL = "alfred@truevalueodds.co.za";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">
            TrueValue<span className="text-green-500">Odds</span>
          </p>
          <p className="mt-2 text-sm">
            A free football odds tool for South Africa. We are not a bookmaker and we do not
            take bets.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="font-semibold text-white">Find us</p>
          <p>
            <a className="hover:text-green-400" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <p>X, Instagram and Facebook: @truevalueodds</p>
          <p className="space-x-4 pt-2">
            <a className="hover:text-green-400" href="/terms">Terms</a>
            <a className="hover:text-green-400" href="/privacy">Privacy</a>
            <a className="hover:text-green-400" href="/responsible-gambling">
              Responsible gambling
            </a>
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="font-semibold text-white">18+ only. Play responsibly.</p>
          <p>
            Betting can be addictive and you can lose money. Only bet what you can afford to
            lose. If gambling is a problem for you or someone you know, the South African
            Responsible Gambling Foundation has a free helpline: <strong>0800 006 008</strong>.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-900 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TrueValue Odds. Our numbers are estimates, not guarantees.
      </div>
    </footer>
  );
}
