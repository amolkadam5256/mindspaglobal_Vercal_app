'use client';
import { useEffect, useState } from 'react';
import { Zap, BookText, Smile, ShieldCheck, Globe, Users, ArrowRight, Clock, Heart } from "lucide-react";
import styles from "./FinalCTA.module.css";

function CountdownTimer() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calcTime = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      setTime({ h, m, s });
    };
    calcTime();
    const interval = setInterval(calcTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className={styles.countdown}>
      <Clock size={16} />
      <span className={styles.countdownLabel}>Offer expires in:</span>
      <div className={styles.countdownTimer}>
        <span className={styles.timerUnit}>
          <span className={styles.timerNum}>{pad(time.h)}</span>
          <span className={styles.timerSub}>hrs</span>
        </span>
        <span className={styles.timerColon}>:</span>
        <span className={styles.timerUnit}>
          <span className={styles.timerNum}>{pad(time.m)}</span>
          <span className={styles.timerSub}>min</span>
        </span>
        <span className={styles.timerColon}>:</span>
        <span className={styles.timerUnit}>
          <span className={styles.timerNum}>{pad(time.s)}</span>
          <span className={styles.timerSub}>sec</span>
        </span>
      </div>
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section
      id="register"
      className={`section ${styles.section}`}
      aria-label="Book your session"
    >
      <div className={`container ${styles.inner}`}>
        {/* Glow orb */}
        <div className={styles.glowOrb} aria-hidden="true" />

        {/* Urgency pill */}
        <div className={styles.urgencyPill}>
          <span className={styles.urgencyDot} />
          <Zap size={14} /> Only a Few Seats Left Rs. 49 Offer Ends Tonight
        </div>

        {/* Countdown */}
        <CountdownTimer />

        {/* Main copy */}
        <h2 className={`display-xl ${styles.headline}`}>
          Your Mind Has the Power.
          <br />
          <span className="text-accent">Dipti Will Unlock It.</span>
        </h2>

        <p className={styles.sub} style={{ textWrap: 'balance', margin: '0 auto' }}>
          For just <strong>Rs. 49</strong> less than the cost of your daily coffee you can unlock a life changing 1:1 session with India&apos;s leading NLP & Mindfulness Coach. Take the first step toward the peaceful, unstoppable mind you deserve.
        </p>

        {/* Price box */}
        <div className={styles.priceBox}>
          <div className={styles.priceLeft}>
            <span className={styles.priceLabel}>Session Fee</span>
            <div className={styles.priceRow}>
              <span className={styles.price}>Rs. 49</span>
            </div>
            <span className={styles.priceSave}>Standard Price Rs. 499</span>
          </div>
          <div className={styles.priceDivider} aria-hidden="true" />
          <div className={styles.priceRight}>
            <p className={styles.includesTitle}>Includes FREE Bonuses:</p>
            <ul className={styles.includesList}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookText size={16} color="#60c8f5" /> Manifestation Workbook (₹499 value)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Smile size={16} color="#60c8f5" /> Neuro Relaxation Audio Series (₹399 value)</li>
            </ul>
          </div>
        </div>

        {/* Primary CTA */}
        <a
          href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
          id="final-cta-button"
          className={`btn btn-primary btn-xl btn-pulse btn-pop ${styles.ctaBtn}`}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}
        >
          <Heart size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
        </a>

        {/* Trust row */}
        <div className={styles.trustRow}>
          {[
            { text: "Secure Payment", icon: <ShieldCheck size={16} /> },
            { text: "Online via Zoom", icon: <Globe size={16} /> },
            { text: "Trusted by 15K+ People", icon: <Users size={16} /> },
          ].map((t, i) => (
            <span key={i} className={styles.trustItem} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {t.icon} {t.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
