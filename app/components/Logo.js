// Simple stand-in for the TrueValue Odds logo (green T with a rising line on a navy square).
// To use your real logo later, put logo.png in the /public folder and swap this for an <img>.
export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="TrueValue Odds logo"
    >
      <rect width="64" height="64" rx="14" fill="#0b1f3a" />
      <path d="M16 20h32M32 20v28" stroke="#22c55e" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M14 46l12-10 8 5 16-17" stroke="#4ade80" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
