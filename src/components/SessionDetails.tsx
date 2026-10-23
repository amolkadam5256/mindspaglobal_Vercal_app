'use client';
import { Calendar, Clock, Hourglass, Globe2, Video, Target, Zap } from "lucide-react";
import styles from "./SessionDetails.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const details = [
  { icon: <Calendar size={20} color="var(--accent-blue)" />, label: "Scheduling", value: "Book & Choose Your Slot" },
  { icon: <Clock size={20} color="var(--accent-blue)" />, label: "Duration", value: "30 Minutes" },
  { icon: <Hourglass size={20} color="var(--accent-blue)" />, label: "Format", value: "Private 1:1 Session" },
  { icon: <Globe2 size={20} color="var(--accent-blue)" />, label: "Language", value: "English / Hindi / Marathi" },
  { icon: <Video size={20} color="var(--accent-blue)" />, label: "Mode", value: "Online via Zoom" },
];

export default function SessionDetails() {
  const cardRef = useScrollAnimation();
  const gridRef = useScrollAnimation('.detail-item-pop');
  return (
    <section className={`section ${styles.section}`} aria-label="Session details">
      <div className="container">
        <div className={`${styles.card} reveal-scale`} ref={cardRef}>
          {/* Glow border */}
          <div className={styles.cardGlow} aria-hidden="true" />

          <div className={styles.header}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="highlight-skew" style={{ fontSize: '1.1rem', padding: '0.25em 0.8em', textTransform: 'capitalize' }}>
                1:1 Session Details
              </span>
            </div>
            <h2 className={styles.title}>
              What Happens In The 1:1 Neuro Mind Session?
            </h2>
          </div>

          <div className={styles.grid} ref={gridRef}>
            {details.map((d) => (
              <div key={d.label} className={`${styles.detailItem} detail-item-pop reveal-pop`}>
                <span className={styles.detailIcon} style={{ display: 'flex' }}>{d.icon}</span>
                <div>
                  <p className={styles.detailLabel}>{d.label}</p>
                  <p className={styles.detailValue}>{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <a
              href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
              id="session-details-cta"
              className="btn btn-primary btn-lg btn-pulse btn-pop"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800 }}
            >
              <Target size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
            </a>
            <p className={styles.ctaNote} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Zap size={16} color="#ef4444" /> Limited Seats Only Fill the form below
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
