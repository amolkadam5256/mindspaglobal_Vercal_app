'use client';
import Image from "next/image";
import styles from "./WhoIsThisFor.module.css";
import { CheckCircle2 } from "lucide-react";

const boxes = [
  {
    image: "/who-this-is-for/foundersandowners.png",
    title: "Business Owners & Founders"
  },
  {
    image: "/who-this-is-for/corporate_leaders.png",
    title: "Corporate Leaders"
  },
  {
    image: "/who-this-is-for/corporate_strss.png",
    title: "High Stress Professionals"
  },
  {
    image: "/who-this-is-for/anxiety.png",
    title: "Homemakers"
  }
];

export default function WhoIsThisFor() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <h2 className={`display-lg ${styles.title}`}>
            WHO THIS <span className={styles.blueText}>IS FOR</span>
          </h2>
          <p className={styles.subtitle}>This 1:1 session is built for people who...</p>
        </div>
        
        <div className={styles.visualBanner}>
          <div className={styles.bannerContent}>
            <p className={styles.bannerText}>This is for you if you are tired of carrying the weight of the world alone.</p>
          </div>
        </div>

        {/* 4 Descriptive Boxes */}
        <div className={styles.grid}>
          {boxes.map((box, i) => (
            <div key={i} className={styles.box}>
              <div className={styles.iconWrapper}>
                <Image src={box.image} alt={box.title} fill className={styles.image} />
              </div>
              <h3 className={styles.boxTitle}>{box.title}</h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaLabel}>This is designed for you. Don&apos;t wait.</p>
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            id="who-is-this-for-cta"
            className="btn btn-primary btn-lg btn-pulse"
            style={{ display:'flex', alignItems:'center', gap:'8px' }}
          >
            <CheckCircle2 size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
          </a>
        </div>
      </div>
    </section>
  );
}
