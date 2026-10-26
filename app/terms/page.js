import LegalPage from "../components/LegalPage";

export const metadata = { title: "Terms of use" };

export default function Page() {
  return (
    <LegalPage title="Terms of use" updated="26 October 2026">
      <p>
        These terms apply to truevalueodds.co.za and our social media accounts
        (together, &quot;TrueValue Odds&quot;), run by Alfred Mphahlele in Soweto, South Africa.
        By using the site you agree to them.
      </p>
      <h2>Who may use it</h2>
      <p>You must be 18 or older. Do not use the site if gambling is not lawful where you live.</p>
      <h2>What we do, and what we do not</h2>
      <ul>
        <li>We publish football odds analysis for information and entertainment.</li>
        <li>We are not a bookmaker. We do not accept bets or hold your money.</li>
        <li>We are not a financial adviser, and nothing here is advice to place a bet.</li>
      </ul>
      <h2>No guarantees</h2>
      <p>
        Our probabilities and odds are estimates from a statistical model. They can be wrong,
        bookmaker prices change quickly, and past results do not predict future ones. You can
        lose money on any bet. You are fully responsible for your own betting decisions.
      </p>
      <h2>Affiliate links</h2>
      <p>
        Some links to bookmakers may be affiliate links. If you sign up through one we may earn
        a commission, at no extra cost to you. This does not change the odds or the picks we publish.
        Bookmakers have their own terms, and you deal with them directly.
      </p>
      <h2>Our content</h2>
      <p>
        The content on the site belongs to TrueValue Odds. You may share links and short
        quotes with credit, but you may not copy the site or resell our content.
      </p>
      <h2>Limits on our responsibility</h2>
      <p>
        We do our best to keep the site accurate and available, but we give no warranty. To the
        extent the law allows, we are not responsible for losses from using the site or acting
        on what it says.
      </p>
      <h2>Changes and contact</h2>
      <p>
        We may update these terms, and the date above will change when we do. Questions:{" "}
        <a href="mailto:alfred@truevalueodds.co.za">alfred@truevalueodds.co.za</a>.
      </p>
    </LegalPage>
  );
}
