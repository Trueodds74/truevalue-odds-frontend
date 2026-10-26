import LegalPage from "../components/LegalPage";

export const metadata = { title: "Privacy notice" };

export default function Page() {
  return (
    <LegalPage title="Privacy notice" updated="26 October 2026">
      <p>
        This notice explains how TrueValue Odds handles personal information under the Protection
        of Personal Information Act (POPIA). The responsible party is Alfred Mphahlele,
        trading as TrueValue Odds, Soweto, South Africa.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          Nothing through forms on this site. There is no sign-up, login or waitlist.
        </li>
        <li>
          If you email us, we keep your email address and message so we can reply.
        </li>
        <li>
          Our host (Vercel) keeps standard server logs, such as IP address and browser type, for
          security and to keep the site running.
        </li>
      </ul>
      <h2>How we use it</h2>
      <p>
        Only to answer you and to run and secure the site. We do not sell your information.
      </p>
      <h2>Other sites</h2>
      <p>
        Links to X, Facebook, WhatsApp and bookmakers lead to services with their own privacy
        practices. We do not control them.
      </p>
      <h2>Your rights</h2>
      <p>
        You may ask us what we hold about you, ask us to correct or delete it, or object to us
        using it. Email{" "}
        <a href="mailto:alfred@truevalueodds.co.za">alfred@truevalueodds.co.za</a>. If you are
        unhappy with how we respond, you may complain to the Information Regulator
        (<a href="https://inforegulator.org.za" rel="noopener noreferrer">inforegulator.org.za</a>).
      </p>
      <h2>Changes</h2>
      <p>If we start collecting more, for example a waitlist or analytics, we will update this notice first.</p>
    </LegalPage>
  );
}
