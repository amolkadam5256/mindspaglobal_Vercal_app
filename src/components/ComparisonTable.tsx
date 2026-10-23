import { XCircle, CheckCircle2, Sparkles, ArrowRight, Search, Zap } from "lucide-react";
import styles from "./ComparisonTable.module.css";

const rows = [
  {
    before: "Constant overthinking same loop, every single day",
    after: "Quiet mind. Calm mornings. Real clarity.",
  },
  {
    before: "Same anxiety. Same fears. Week after week.",
    after: "You notice triggers before reacting. You choose.",
  },
  {
    before: "Repeating affirmations your subconscious doesn't believe",
    after: "NLP based reprogramming that actually sticks",
  },
  {
    before: "No method to reset your mind when it spirals",
    after: "A personalized, scientific roadmap just for you",
  },
  {
    before: "Motivation crashes. Nothing compounds. Flying blind.",
    after: "Steady energy. Lasting momentum. Lasting transformation.",
  },
  {
    before: "Money blockages, relationship issues, career stuck",
    after: "Attract abundance, love & career clarity naturally",
  },
];

export default function ComparisonTable() {
  return (
    <section className={`section ${styles.section}`} aria-label="Before and after comparison">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Search size={14} /> The Real Difference</span>
          <h2 className={`display-lg ${styles.title}`}>
            <span className="highlight-skew">Here&apos;s Why Most People</span><br />
            Stay Mentally Stuck For Years
          </h2>
          <p className={styles.subtitle}>
            One 1:1 session can be the turning point. Here&apos;s what changes.
          </p>
        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>
          <div className={styles.tableInner}>
            {/* Column Headers */}
            <div className={styles.tableHeader}>
              <div className={styles.colHeader}>
                <span className={`comparison-pill pill-before`} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><XCircle size={16} /> BEFORE</span>
                <p className={styles.colDesc}>Stuck in the same loop</p>
              </div>

              {/* Arrow divider (desktop) */}
              <div className={styles.arrowCol} aria-hidden="true">
                <ArrowRight size={32} color="#94A3B8" strokeWidth={1.5} className={styles.arrowImg} />
              </div>

              <div className={styles.colHeader}>
                <span className={`comparison-pill pill-after`} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={16} /> AFTER SESSION</span>
                <p className={styles.colDesc}>Life changing clarity</p>
              </div>
            </div>

            {/* Rows */}
            <div className={styles.rows}>
              {rows.map((row, i) => (
                <div key={i} className={styles.row}>
                  <div className={`${styles.cell} ${styles.cellBefore}`}>
                    <span className="comparison-row-icon icon-x">✕</span>
                    <span>{row.before}</span>
                  </div>

                  <div className={styles.rowDivider} aria-hidden="true">
                    <span className={styles.vsLabel}>→</span>
                  </div>

                  <div className={`${styles.cell} ${styles.cellAfter}`}>
                    <span className="comparison-row-icon icon-ok">✓</span>
                    <span>{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <p className={styles.ctaLabel}><strong>The choice is yours. Make it now.</strong></p>
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            id="comparison-cta-button"
            className={`btn btn-primary btn-xl btn-pulse ${styles.ctaBtn}`}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Zap size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
          </a>
        </div>
      </div>
    </section>
  );
}
