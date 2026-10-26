import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Free South African football odds tool. We work out fair odds for Premier League matches, compare them with bookmaker prices and flag small edges. 18+ only.";

export const metadata = {
  metadataBase: new URL("https://truevalueodds.co.za"),
  title: {
    default: "TrueValue Odds | Fair odds vs South African bookmaker prices",
    template: "%s | TrueValue Odds",
  },
  description,
  openGraph: {
    title: "TrueValue Odds",
    description,
    url: "https://truevalueodds.co.za",
    siteName: "TrueValue Odds",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TrueValue Odds",
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
