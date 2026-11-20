import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Doto } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const doto = Doto({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-doto", display: "swap" });

const TITLE = "Knock: the apartment buzzer app to open your door by phone";
const DESC = "Knock is a free, open-source apartment buzzer app you run yourself. When a visitor buzzes, every roommate's phone rings and the first tap unlocks the door. Works with intercoms that call a phone number.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Knock" },
  description: DESC,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  keywords: ["apartment buzzer app", "open apartment door from phone", "forward intercom to cell phone", "roommates share door buzzer", "apartment intercom phone", "unlock building door remotely"],
  openGraph: { type: "website", siteName: SITE_NAME, title: TITLE, description: DESC, url: SITE_URL },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f7efe8" }, { media: "(prefers-color-scheme: dark)", color: "#1b1511" }],
};

const THEME_BOOT = `try{var t=localStorage.getItem("knock-site-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${doto.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} /></head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <div className="orb" aria-hidden />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
