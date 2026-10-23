import { Brain } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.divider} />
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.brandIcon}><Brain size={28} color="#60c8f5" /></span>
            <div>
              <p className={styles.brandName}>Neuro Mind Session</p>
              <p className={styles.brandTagline}>by Dipti Panhalkar · Mind Spa Global</p>
            </div>
          </div>

          {/* Quick links */}
          <nav className={styles.links} aria-label="Footer navigation">
            <a href="/" className={styles.link}>Home</a>
            <a href="/#how-it-works" className={styles.link}>How It Works</a>
            <a href="/#why-attend" className={styles.link}>Why Attend</a>
            <a href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you" target="_blank" rel="noopener noreferrer" className={styles.link}>Book Session</a>
          </nav>

          {/* CTA pill */}
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-cta-button"
            className={`btn btn-primary ${styles.footerCta}`}
          >
            Book for <s style={{ opacity: 0.7, marginRight: '4px' }}>₹</s>₹49
          </a>
        </div>

        {/* Legal links */}
        <div className={styles.legal}>
          <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
          <a href="/terms" className={styles.legalLink}>Terms & Conditions</a>
          <a href="/refund" className={styles.legalLink}>Refund Policy</a>
          <a href="mailto:support@mindspaglobal.com" className={styles.legalLink}>support@mindspaglobal.com</a>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Mind Spa Global · Dipti Panhalkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
