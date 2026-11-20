import Link from "next/link";
import { PanelHero } from "@/components/PanelHero";
import { PhoneDemo } from "@/components/PhoneDemo";
import { Checker } from "@/components/Checker";
import { FAQ } from "@/lib/faq";
import { SITE_URL, deployUrl } from "@/lib/site";

export default function Home() {
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Knock",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any (web app for iPhone and Android)",
        description: "Free, open-source apartment buzzer app you host yourself. Roommates open the building door from their phones when a visitor buzzes.",
        url: SITE_URL,
        license: "https://opensource.org/license/mit",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PanelHero />

      <section id="how" className="section" aria-labelledby="how-h">
        <div className="wrap">
          <h2 id="how-h" className="section-title">How it works</h2>
          <div className="stage">
            <div className="stage-col">
              <div className="beat"><span className="n">1</span><h3>Someone buzzes</h3><p className="muted">Your intercom calls your Knock number. Knock answers and holds the line.</p></div>
              <div className="beat"><span className="n">2</span><h3>Phones ring</h3><p className="muted">Whoever expects the visitor rings first, then everyone.</p></div>
            </div>
            <PhoneDemo />
            <div className="stage-col">
              <div className="beat"><span className="n">3</span><h3>One tap opens it</h3><p className="muted">The first tap wins. Everyone sees who opened the door.</p></div>
              <div className="beat"><span className="n">4</span><h3>Nobody home?</h3><p className="muted">Knock can ring a backup number and connect the visitor.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="problem">
        <div className="wrap problem">
          <h2 id="problem" className="section-title">One phone on file.<br />Four people home.</h2>
          <div className="after">
            <div className="chat" aria-label="An illustration of a group chat, before Knock">
              <div className="bubble"><b>Maya</b>Can someone buzz Jake in?</div>
              <div className="bubble"><b>Sam</b>in the shower</div>
              <div className="bubble"><b>Eve</b>at work, sorry</div>
            </div>
            <div className="readout" role="img" aria-label="Illustration, with Knock: opened by Maya, 6 seconds after the buzz">
              <span className="tag">With Knock (illustration)</span>
              <span className="line" style={{ color: "var(--success)" }}>Opened by Maya</span>
            </div>
          </div>
        </div>
      </section>

      <section id="check" className="section" aria-labelledby="check-h">
        <div className="wrap">
          <h2 id="check-h" className="section-title">Will it work in my building?</h2>
          <div className="card glass"><Checker /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="feat-h">
        <div className="wrap">
          <h2 id="feat-h" className="section-title">Made for a shared door</h2>
          <div className="bento">
            <div className="tile glass t-a">
              <div className="avatars" aria-hidden><span className="av" data-lit="true">M</span><span className="av" data-lit="false">S</span><span className="av" data-lit="false">E</span></div>
              <h3>Expecting someone? You ring first.</h3>
              <p>Everyone else gets a quiet ping, then a full ring after 8 seconds.</p>
            </div>
            <div className="tile glass t-b">
              <span className="mini-lcd" aria-hidden>09:41</span>
              <h3>Auto-open for a while</h3>
              <p>10 to 60 minutes. Everyone is told. It always expires.</p>
            </div>
            <div className="tile glass t-c">
              <h3>See who opened it</h3>
              <div className="logrows" aria-hidden><div><span>Opened by Maya</span><span>7:42 pm</span></div><div><span>Auto-open</span><span>1:15 pm</span></div></div>
            </div>
            <div className="tile glass t-d">
              <h3>Yours alone</h3>
              <p>Installs like an app, runs on your own accounts, and there is no Knock account to create.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cost" className="section" aria-labelledby="cost-h">
        <div className="wrap">
          <h2 id="cost-h" className="section-title">About $1 a month</h2>
          <div className="cost-grid">
            <div className="card glass">
              <div className="rows">
                <div><b>Knock</b><span className="price">Free</span></div>
                <div><b>Hosting and database</b><span className="price">Free tier</span></div>
                <div><b>Telnyx number and calls</b><span className="price">~$1 / month</span></div>
              </div>
            </div>
            <div className="card glass" style={{ display: "grid", gap: "0.6rem", alignContent: "start" }}>
              <h3>The one catch</h3>
              <p>A new Telnyx account is a trial, and trials reject your building&rsquo;s calls. Upgrade it first. <Link href="/docs/telnyx/upgrade">How</Link></p>
            </div>
          </div>
          <div className="cta-row">
            <a className="btn btn-key btn-lg" href={deployUrl()} rel="noopener">Deploy to Vercel</a>
            <Link className="btn btn-lg" href="/docs">Read the guide</Link>
            <span className="muted">About 30 minutes to set up</span>
          </div>
        </div>
      </section>

      <section id="safety" className="section" aria-labelledby="safety-h">
        <div className="wrap">
          <div className="warn">
            <h2 id="safety-h">This can unlock a building entrance.</h2>
            <p>Treat a signed-in phone like a key. Auto-open lets in anyone who buzzes, so use it briefly and only when you&rsquo;re home. <Link href="/docs/security" style={{ fontWeight: 700 }}>Security notes</Link></p>
          </div>
        </div>
      </section>

      <section id="faq" className="section" aria-labelledby="faq-h">
        <div className="wrap">
          <h2 id="faq-h" className="section-title">Questions</h2>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q} className="glass">
                <summary>{f.q}</summary>
                <div className="ans"><p>{f.a}</p></div>
              </details>
            ))}
            <p className="muted" style={{ paddingTop: "0.5rem" }}><Link href="/docs/faq">More questions</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
