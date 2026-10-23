'use client';
import Image from 'next/image';
import { Gift, Disc } from "lucide-react";
import styles from "./Bonuses.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const freeBonuses = [
  {
    img: '/additional_bonus/image.png',
    title: "Manifestation Workbook (PDF)",
    desc: "Step by step worksheets to reprogram your subconscious mind and align your goals with success.",
  },
  {
    img: '/additional_bonus/image copy.png',
    title: "Guided Visualization Meditation",
    desc: "Powerful guided visualization practice to activate your desires and attract abundance effortlessly.",
  },
];

export default function Bonuses() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation('.bonus-card-pop');
  const audioRef = useScrollAnimation();

  return (
    <section className={`section ${styles.section}`} aria-label="Bonuses and special offers">
      <div className="container">
        
        {/* Top Part: Free Bonuses */}
        <div className={`${styles.header} reveal`} ref={headerRef}>
          <h2 className={`display-lg ${styles.title}`}>
             <Gift size={36} color="#60c8f5" /> Additional Bonuses
          </h2>
          <p className={styles.subtitle}>Register today & unlock these powerful bonuses absolutely FREE</p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {freeBonuses.map((b) => (
            <div
              key={b.title}
              className={`${styles.card} bonus-card-pop reveal-pop`}
            >
              <div className={styles.cardImgWrapper}>
                <Image
                  src={b.img}
                  alt={b.title}
                  width={90}
                  height={90}
                  className={styles.cardImg}
                />
              </div>
              <h3 className={styles.cardTitle}>{b.title}</h3>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Part: Audio CD */}
        <div className={`${styles.audioSection} reveal`} ref={audioRef}>
          <div className={styles.header}>
            <h2 className={`display-lg ${styles.title}`}>
               <Disc size={36} color="#60c8f5" /> Unlock This Powerful Audio CD
            </h2>
            <p className={styles.subtitle}>Exclusive limited-time offer</p>
          </div>

          <div className={styles.audioCard}>
             <div className={styles.audioCardGlow} />
             <div className={styles.cardImgWrapper}>
                <Image
                  src="/additional_bonus/image copy 2.png"
                  alt="Neuro Relaxation Audio Series"
                  width={90}
                  height={90}
                  className={styles.cardImg}
                />
              </div>
              <h3 className={styles.audioTitle}>Neuro Relaxation Audio Series</h3>
              <p className={styles.audioDesc}>Calm your mind, improve sleep, reduce stress, and enhance mental clarity.</p>
              
              <div className={styles.priceRow}>
                <span className={styles.priceOriginal}>₹399</span>
                <span className={styles.priceSpecial}>₹99</span>
              </div>
              
              <a
                href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buyBtn}
              >
                Buy Now
              </a>
          </div>

          <div className={styles.audioPlayerSection}>
            <p className={styles.listenText}>
              For peaceful sleep and reducing blood pressure (BP)<br/>
              <span className={styles.highlightText}>Click below to listen to the audio sample</span>
            </p>
            
            <audio controls className={styles.audioPlayer}>
              <source src="/audio/WhatsApp-Audio-2026-01-13-at-5.19.56-PM.aac" type="audio/aac" />
              Your browser does not support the audio element.
            </audio>

            <div className={styles.textContent}>
              <p>Due to today&apos;s fast paced lifestyle, <span className={styles.highlightText}>blood pressure imbalance</span>, <span className={styles.highlightText}>hormonal fluctuations</span>, and the resulting physical discomfort have become a part of many people&apos;s lives. Constant stress, mental confusion, and fatigue disrupt the body&apos;s <span className={styles.highlightText}>natural rhythm</span>.</p>
              
              <p>While medication is necessary, relying solely on medicines does not provide complete relief, because the root of this problem lies in our <span className={styles.highlightText}>subconscious mind</span> and suppressed mental stress.</p>
              
              <p>As an effective solution for this, the <span className={styles.highlightText}>Neuro Mind Gym Relaxation Audio</span> has been created. With the help of its <span className={styles.highlightText}>auto mind suggestions</span> and <span className={styles.highlightText}>deep relaxation techniques</span>, mental stress is reduced, blood pressure is naturally balanced, and hormonal fluctuations are stabilized.</p>
              
              <p>Dedicating a few minutes to yourself every day sends positive suggestions to your subconscious mind and revitalizes your body. For <span className={styles.highlightText}>mental peace</span>, a <span className={styles.highlightText}>healthy lifestyle</span>, and <span className={styles.highlightText}>inner energy</span>, this audio series will serve as your reliable guide.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
