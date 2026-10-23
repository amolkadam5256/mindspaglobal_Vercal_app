'use client';
import { Brain, Microscope, Sparkles, Rocket, Zap, ArrowRight } from "lucide-react";
import styles from "./HowItWorks.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    icon: <Brain size={28} color="#0284c7" />,
    title: "Identify",
    headline: "Uncover the Root Blockage",
    body: "In your private 1:1 session, Dipti Panhalkar uses advanced NLP diagnostic tools to pinpoint the exact subconscious pattern that's been holding you back whether it's fear, overthinking, or a deep seated limiting belief.",
  },
  {
    num: "02",
    icon: <Microscope size={28} color="#0284c7" />,
    title: "Reprogram",
    headline: "Rewire Your Mind Scientifically",
    body: "Using Neuro Hypnosis and proven NLP techniques, your mind gets recalibrated at the subconscious level. This isn't motivation this is mind programming that creates lasting change from the inside out.",
  },
  {
    num: "03",
    icon: <Sparkles size={28} color="#0284c7" />,
    title: "Transform",
    headline: "Step Into Your New Self",
    body: "With clarity, renewed confidence, and a personalized action map, you walk away ready to attract success, better relationships, and the financial growth you deserve. Your transformation begins the same day.",
  },
];

const sessionVideos = [
  { id: "1228527730", title: "Life Changing Experience" },
  { id: "1228527788", title: "Building Confidence" },
  { id: "1228527792", title: "Mental Clarity" }
];

export default function HowItWorks() {
  const headerRef = useScrollAnimation();
  return (
    <section
      id="how-it-works"
      className={`section ${styles.section}`}
      aria-label="How the Neuro Mind session works"
    >
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headerRef}>
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Zap size={14} /> The Process</span>
          <h2 className={`display-lg ${styles.title}`}>
            How the <span className="text-accent">Neuro Mind Session</span> Works
          </h2>
          <p className={styles.subtitle}>
            3 scientifically backed phases. 1 session. Lifelong impact.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {steps.map((step, idx) => (
            <div key={idx} className={`${styles.featureCard} ${idx % 2 !== 0 ? styles.cardReverse : ''}`}>
              <div className={styles.cardContent}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <p className={styles.stepPhase}>{step.title}</p>
                <h3 className={styles.stepTitle}>{step.headline}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
              
              <div className={styles.cardVideo}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={`https://player.vimeo.com/video/${sessionVideos[idx].id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                    title={sessionVideos[idx].title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            id="howitworks-cta-button"
            className={`btn btn-primary btn-lg btn-pulse ${styles.ctaBtn}`}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            <Rocket size={18} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
          </a>
        </div>
      </div>
    </section>
  );
}
