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
        description: "Free, open-source door buzzer you host yourself. Roommates open the building door from their phones when a visitor buzzes.",
        url: SITE_URL,
        license: "https://opensource.org/license/mit",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PanelHero />

      <section className="section" aria-labelledby="problem">
        <div className="wrap problem">
          <div style={{ display: "grid", gap: "1rem" }}>
            <h2 id="problem">One phone on file. Four people home.</h2>
            <p className="lede">Most buildings call a single phone number for your unit. If that person is out, in a meeting or asleep, the visitor stands outside and the group chat lights up. Knock puts that call on a number you control and shares it with everyone in the household.</p>
          </div>
          <div className="after">
            <div className="chat" aria-label="An illustration of a group chat, before Knock">
              <div className="bubble"><b>Maya</b>Can someone buzz Jake in?</div>
              <div className="bubble"><b>Sam</b>in the shower</div>
              <div className="bubble"><b>Eve</b>at work, sorry</div>
              <div className="bubble me"><b>Maya</b>he&rsquo;s been out there 5 min</div>
            </div>
            <p className="fine muted">An illustration, with made-up names.</p>
            <div className="readout" role="img" aria-label="Illustration, with Knock: opened by Maya, 6 seconds after the buzz">
              <span className="tag">With Knock</span>
              <span className="line" style={{ color: "var(--success)" }}>Opened by Maya</span>
              <span className="muted" style={{ fontSize: "0.9375rem" }}>6 seconds after the buzz.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section" aria-labelledby="how-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="how-h">How it works</h2>
            <p className="lede">A phone-based apartment buzzer keeps calling a number. You just point it at Knock, which answers for you and tells everyone.</p>
          </div>
          <div className="stage">
            <div className="stage-col">
              <div className="beat"><span className="n">1</span><h3>Someone buzzes</h3><p className="muted">Your building&rsquo;s intercom calls your Knock number, the way it used to call your phone. Knock answers instantly and holds the line.</p></div>
              <div className="beat"><span className="n">2</span><h3>The right phones ring</h3><p className="muted">If a roommate said they&rsquo;re expecting someone, they get the loud notification first. After a few seconds everyone else is asked too.</p></div>
            </div>
            <PhoneDemo />
            <div className="stage-col">
              <div className="beat"><span className="n">3</span><h3>One tap opens it</h3><p className="muted">The first tap wins. Knock presses the unlock digit for you, hangs up, and every phone shows who opened the door.</p></div>
              <div className="beat"><span className="n">4</span><h3>Nobody home?</h3><p className="muted">Knock can ring a backup number and connect the visitor, so a person can press the digit themselves.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="check" className="section" aria-labelledby="check-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="check-h">Will it work in my building?</h2>
            <p className="lede">It depends on how your intercom works, not on Knock. Three questions, no sign-up.</p>
          </div>
          <div className="card glass"><Checker /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="feat-h">
        <div className="wrap">
          <div className="section-head"><h2 id="feat-h">Built for how households actually use a buzzer</h2></div>
          <div className="bento">
            <div className="tile glass t-a">
              <div className="avatars" aria-hidden><span className="av" data-lit="true">M</span><span className="av" data-lit="false">S</span><span className="av" data-lit="false">E</span></div>
              <h3>Expecting someone? You ring first.</h3>
              <p>Flip &ldquo;I&rsquo;m expecting someone&rdquo; and only you get the loud notification first. Everyone else gets a quiet ping, then a full ring if you haven&rsquo;t answered in 8 seconds. Tap &ldquo;Not mine&rdquo; to ask everyone at once.</p>
            </div>
            <div className="tile glass t-b">
              <span className="mini-lcd" aria-hidden>09:41</span>
              <h3>Auto-open for a while</h3>
              <p>Waiting on a delivery? Let the door open itself for 10 to 60 minutes. Everyone is told, and it always expires.</p>
            </div>
            <div className="tile glass t-c"><h3>Quiet hours</h3><p>Silent pings at night, unless you said you&rsquo;re expecting someone.</p></div>
            <div className="tile glass t-d">
              <h3>See who opened it</h3>
              <div className="logrows" aria-hidden><div><span>Opened by Maya</span><span>7:42 pm</span></div><div><span>Auto-open</span><span>1:15 pm</span></div></div>
            </div>
            <div className="tile glass t-e"><h3>Installs like an app</h3><p>Add it to your Home Screen on iPhone or Android. No app store.</p></div>
            <div className="tile glass t-f"><h3>Yours alone</h3><p>Your Telnyx number, your database, your Vercel project. There is no Knock account, no central server and no tracking, and the code is open for anyone to read.</p></div>
          </div>
        </div>
      </section>

      <section id="cost" className="section" aria-labelledby="cost-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="cost-h">What it costs, honestly</h2>
            <p className="lede">About $1 to $2 a month for a household. The software is free; the phone number is not, and Telnyx needs a card on file.</p>
          </div>
          <div className="cost-grid">
            <div className="card glass">
              <div className="rows">
                <div><b>Knock (the software)</b><span className="price">Free</span></div>
                <div><b>Hosting on Vercel</b><span className="price">Free tier</span></div>
                <div><b>Database on Neon</b><span className="price">Free tier</span></div>
                <div><b>Telnyx phone number</b><span className="price">~$1 / mo</span></div>
                <div><b>Calls through Telnyx</b><span className="price">~0.5&cent; / min</span></div>
              </div>
              <p className="muted fine" style={{ marginTop: "0.9rem" }}>Prices are Telnyx&rsquo;s published rates at the time of writing and can change. Check their pricing page before you buy.</p>
            </div>
            <div className="card glass" style={{ display: "grid", gap: "0.75rem" }}>
              <h3>The catch to know about</h3>
              <p>Telnyx trial accounts can only receive calls from <b>one verified phone number</b>. Your building&rsquo;s intercom isn&rsquo;t that number, so you need to upgrade the account (a card, a verified mobile and an address) before it will work. <Link href="/docs/telnyx/upgrade">How to upgrade</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="section" aria-labelledby="setup-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="setup-h">Set it up in about 30 minutes</h2>
            <p className="lede">The longest part is Telnyx, so the guide has screenshots for every click and a fix for each mistake people actually make.</p>
          </div>
          <ol className="setup-steps">
            <li className="glass"><Link href="/docs/will-it-work">Check your intercom</Link><span className="time">5 min</span></li>
            <li className="glass"><Link href="/docs/deploy">Deploy Knock with one click</Link><span className="time">5 min</span></li>
            <li className="glass"><Link href="/docs/telnyx">Set up Telnyx: account, number, keys</Link><span className="time">15 min</span></li>
            <li className="glass"><Link href="/docs/first-run">Run first-time setup and the test call</Link><span className="time">3 min</span></li>
            <li className="glass"><Link href="/docs/roommates">Invite roommates, install on phones</Link><span className="time">5 min</span></li>
            <li className="glass"><Link href="/docs/connect-building">Point your building at your number</Link><span className="time">a day or two</span></li>
          </ol>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.75rem" }}>
            <a className="btn btn-key btn-lg" href={deployUrl()} rel="noopener">Deploy to Vercel</a>
            <Link className="btn btn-lg" href="/docs">Open the guide</Link>
          </div>
        </div>
      </section>

      <section id="safety" className="section" aria-labelledby="safety-h">
        <div className="wrap">
          <div className="warn">
            <h2 id="safety-h">This can unlock a building entrance.</h2>
            <p>Anyone with a signed-in phone, or access to your Vercel or Telnyx accounts, can open a door that protects other people&rsquo;s homes. Treat it like a physical key: keep invite codes private and sign out lost phones.</p>
            <p><b>Auto-open is the risky one.</b> While it&rsquo;s on, anyone who buzzes your unit is let in with no human check, including strangers and tailgaters. Keep windows short, use it only when you&rsquo;re home and expecting someone, and cancel it when they arrive. Knock tells everyone whenever it is on and every time it fires.</p>
            <p><Link href="/docs/security" style={{ fontWeight: 700 }}>Read the security notes</Link></p>
          </div>
        </div>
      </section>

      <section id="faq" className="section" aria-labelledby="faq-h">
        <div className="wrap">
          <div className="section-head"><h2 id="faq-h">Questions</h2></div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q} className="glass">
                <summary>{f.q}</summary>
                <div className="ans"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
