import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Plus_Jakarta_Sans, Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neuro Mind 1:1 Session | Book with Dipti Panhalkar for ₹49",
  description:
    "Stop overthinking and break subconscious blockages in a private 1:1 session with Dipti Panhalkar. Experience scientific NLP & Neuro Mind Gym techniques for just ₹49.",
  keywords:
    "Dipti Panhalkar, Neuro Mind Gym, NLP Coach, Mindfulness, Subconscious Mind, Overcome Anxiety, 1:1 Session, Mind Spa Global",
  openGraph: {
    title: "Neuro Mind 1:1 Session | Book for ₹49",
    description:
      "Reprogram your subconscious. Overcome overthinking. Transform your life. Book your personal session with Dipti Panhalkar today.",
    type: "website",
  },
};

import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${bebas.variable} ${outfit.variable}`}>
      <body>
        {/* ── Meta Pixel Base Code ── */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1119422873947301');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1119422873947301&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* ── End Meta Pixel ── */}

        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
