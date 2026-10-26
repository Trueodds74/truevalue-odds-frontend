import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-4 text-center text-gray-400 text-sm border-t border-gray-800">
      <p className="font-semibold text-gray-300">
        18+ only. Gambling can be addictive. Play responsibly.
      </p>
      <p className="mt-2">
        Gambling problem? Free, confidential help: 0800 006 008 (SARGF, 24 hours).
      </p>
      <p className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
        <Link href="/responsible-gambling" className="hover:text-green-500 underline">
          Responsible gambling
        </Link>
        <Link href="/terms" className="hover:text-green-500 underline">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-green-500 underline">
          Privacy
        </Link>
        <a href="mailto:alfred@truevalueodds.co.za" className="hover:text-green-500 underline">
          Contact
        </a>
      </p>
      <p className="mt-4 text-gray-500">
        &copy; 2026 TrueValue Odds. Built in South Africa. We are not a bookmaker and we do not take bets.
      </p>
    </footer>
  );
}
