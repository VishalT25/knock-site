import Link from "next/link";
import { PhoneDemo } from "./PhoneDemo";
import { deployUrl } from "@/lib/site";
import { IconArrow } from "./Icons";

/** Headline on one side, the real app on the other. */
export function Hero() {
  return (
    <section className="hero2" aria-labelledby="top">
      <div className="wrap hero2-grid">
        <div className="copy">
          <h1 id="top">Open your apartment door <em>from your phone.</em></h1>
          <p className="lede">A free, open-source apartment buzzer app for you and your roommates. When someone buzzes, everyone&rsquo;s phone rings.</p>
          <div className="cta-row">
            <a className="btn btn-key btn-lg" href={deployUrl()} rel="noopener">Deploy to Vercel</a>
            <Link className="btn btn-lg" href="/docs">Read the guide <IconArrow width={18} height={18} /></Link>
          </div>
        </div>
        <PhoneDemo hero />
      </div>
    </section>
  );
}
