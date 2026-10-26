import Link from "next/link";
import Footer from "./Footer";

export default function LegalPage({ title, updated, children }) {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full">
        <Link href="/" className="text-2xl font-bold text-green-500">
          TrueValue<span className="text-white">Odds</span>
        </Link>
      </nav>
      <article className="max-w-3xl mx-auto px-4 pb-16 w-full flex-1">
        <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: {updated}</p>
        <div className="space-y-4 text-gray-300 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-green-500 [&_a]:underline">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  );
}
