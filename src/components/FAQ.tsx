"use client";
import { useState } from "react";
import { MessageCircleQuestion, Rocket } from "lucide-react";
import styles from "./FAQ.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Who is this 1:1 session for?",
    a: "This session is for anyone struggling with overthinking, anxiety, procrastination, money blockages, relationship issues, or a lack of clarity. Whether you're a professional, student, homemaker, or entrepreneur if you want to transform your life using scientific mind techniques, this is for you.",
  },
  {
    q: "Is this session scientifically based?",
    a: "Absolutely. Every technique used by Dipti Panhalkar is rooted in neuroscience, NLP (Neuro Linguistic Programming), and Neuro Hypnosis proven, evidence based methods for reprogramming the subconscious mind.",
  },
  {
    q: "I have no experience with meditation or manifestation, is that okay?",
    a: "Completely fine! The session is designed for absolute beginners as well as experienced practitioners. Dipti's approach meets you exactly where you are and guides you step by step.",
  },
  {
    q: "Is the 1:1 session live?",
    a: "Yes! Your 1:1 session is a personal, live Zoom session with Dipti Panhalkar or a trained Mind Spa Global coach. You get personalized attention, not a recording.",
  },
  {
    q: "How long is the session?",
    a: "The 1:1 private session is approximately 45–60 minutes, highly personalized to your specific challenges.",
  },
  {
    q: "What benefits will I get from this session?",
    a: "You'll gain clarity on your subconscious blockages, a personalized action plan to overcome them, improved mental peace, reduced anxiety, better decision making, and tools to attract success, abundance, and happiness.",
  },
  {
    q: "Will I really get results?",
    a: "Yes. Dipti Panhalkar has helped 10,000+ clients and 15,000+ people achieve real transformation. Results may vary per individual, but the techniques are proven and time tested. Your mindset WILL shift.",
  },
  {
    q: "Can I watch this on my mobile phone?",
    a: "Yes! The Zoom session works perfectly on mobile devices. All you need is a stable internet connection and a quiet space.",
  },
  {
    q: "Why should I register right now?",
    a: "Seats are strictly limited for 1:1 sessions to ensure personal attention. The ₹49 introductory price is a special offer that can end at any time. Joining today means you take the first step toward the life you deserve with zero risk.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation('.faq-item');

  return (
    <section className={`section ${styles.section}`} aria-label="Frequently asked questions">
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headerRef}>
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><MessageCircleQuestion size={14} /> FAQ</span>
          <h2 className={`display-lg ${styles.title}`} style={{ whiteSpace: 'nowrap', fontSize: 'clamp(1.2rem, 6.5vw, 3.2rem)' }}>
            Frequently Asked&nbsp;<span className="text-accent">Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know before booking your session.
          </p>
        </div>

        <div className={styles.list} role="list" ref={listRef}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "open" : ""}`}
              role="listitem"
            >
              <button
                className="faq-trigger"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                id={`faq-trigger-${i}`}
                aria-controls={`faq-body-${i}`}
              >
                <span>{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div
                className="faq-body"
                id={`faq-body-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            id="faq-cta-button"
            className="btn btn-primary btn-lg btn-pulse"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Rocket size={18} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
          </a>
        </div>
      </div>
    </section>
  );
}
