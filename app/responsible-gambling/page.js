import LegalPage from "../components/LegalPage";

export const metadata = { title: "Responsible gambling" };

export default function Page() {
  return (
    <LegalPage title="Responsible gambling" updated="26 October 2026">
      <p>
        TrueValue Odds is for adults only. You must be 18 or older to use this site or to bet
        with any South African bookmaker.
      </p>
      <p>
        Gambling can be addictive. No model, ours included, can promise a win. Our numbers are
        estimates, and even a bet with a real edge loses often.
      </p>
      <h2>Keep it safe</h2>
      <ul>
        <li>Only bet money you can afford to lose.</li>
        <li>Set a budget and a time limit before you start, and stick to them.</li>
        <li>Never chase losses and never borrow money to bet.</li>
        <li>Take breaks. Most bookmakers let you set deposit limits or exclude yourself.</li>
      </ul>
      <h2>Need help?</h2>
      <ul>
        <li>
          South African Responsible Gambling Foundation (SARGF) toll-free line:{" "}
          <strong>0800 006 008</strong>, free and confidential, 24 hours a day.
        </li>
        <li>
          Website: <a href="https://responsiblegambling.org.za" rel="noopener noreferrer">responsiblegambling.org.za</a>
        </li>
        <li>
          Gamblers Anonymous South Africa:{" "}
          <a href="https://gamblersanonymous.org.za" rel="noopener noreferrer">gamblersanonymous.org.za</a>
        </li>
      </ul>
    </LegalPage>
  );
}
