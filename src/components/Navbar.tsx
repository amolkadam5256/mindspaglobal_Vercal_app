"use client";
import { useEffect, useState } from "react";
import { Brain, Zap } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} role="navigation" aria-label="Main navigation">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="Neuro Mind 1:1 Session Home">
          <span className={styles.logoIcon}><Brain size={24} color="#0284c7" /></span>
          <div className={styles.logoText}>
            <span className={styles.logoTop}>Neuro Mind</span>
            <span className={styles.logoBottom}>1:1 Session</span>
          </div>
        </a>

        {/* CTA */}
        <a
          href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
          className={`btn btn-primary hide-mobile ${styles.navCta}`}
          id="nav-cta-button"
        >
          <Zap size={18} /> Book for <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49
        </a>
      </div>
    </nav>
  );
}
