"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Sparkles, ShieldCheck, Award, Video, MessageCircle, Clock, User, Zap, Star, GraduationCap, Globe } from "lucide-react";
import styles from "./Hero.module.css";

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let observer: IntersectionObserver;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrameId = requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Staggered animation trigger
    el.querySelectorAll<HTMLElement>("[data-animate]").forEach((node, i) => {
      node.style.animationDelay = `${i * 0.12}s`;
      node.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Decorative orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Live Notification Badge */}
        <div className={styles.liveBadge} data-animate>
          <span className={styles.liveText}>
            <Star size={14} fill="#f59e0b" color="#f59e0b" style={{ flexShrink: 0 }} />
            <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>4.9/5 Rating</span> | 15,000+ People Transformed
          </span>
        </div>

        <div data-animate style={{ marginBottom: '1.2rem', marginTop: '1.5rem', textAlign: 'center' }}>
          <span className="highlight-skew" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} />
            Break Your Mental Barriers
          </span>
        </div>

        {/* Main Headline */}
        <h1 className={`headline-bebas ${styles.headline}`} data-animate style={{ marginTop: 0 }}>
          <span style={{ color: 'var(--text-primary)', display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(1.4rem, 7vw, 4.2rem)' }}>Reprogram Your Mind To</span>
          <span style={{ color: 'var(--accent-blue)', display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(1.4rem, 7vw, 4.2rem)' }}>Erase Overthinking, Fear,</span>
          <span style={{ color: 'var(--accent-blue)', display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(1.4rem, 7vw, 4.2rem)' }}>Anxiety & Self-Doubt.</span>
        </h1>

        {/* Sub headline */}
        <div className={styles.subHeadline} data-animate>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Start your life transformation today with simple, scientific exercises from the comfort of your home.
            Discover the secret formula to break negative self talk and build an unstoppable new version of yourself.
          </p>
        </div>

        {/* Video Embed */}
        <div className={styles.videoWrapper} data-animate>
          <div className={styles.videoContainer}>
            <video
              src="/hero-video/hero-video.mp4"
              title="Dipti Panhalkar 1:1 Session"
              autoPlay
              muted
              loop
              playsInline
              controls
            ></video>
          </div>
          <div className={styles.videoCaption}>
            <p className={styles.captionText}>
              Start your journey to mental clarity with <strong>Dipti Panhalkar</strong>, an expert Mind Coach and Psychologist.
            </p>
          </div>
        </div>

        {/* Info Boxes Header */}
        <div data-animate style={{ marginTop: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--accent-blue)', fontSize: '1.2rem', fontWeight: 700 }}>
            Mental Clarity 1:1 session at only <strong style={{ color: 'var(--text-primary)' }}>₹49</strong>
          </p>
        </div>

        {/* Info Boxes */}
        <div className={styles.infoGrid} data-animate>
          <div className={styles.infoBox}>
            <div className={styles.infoIconWrapper}><MessageCircle size={20} /></div>
            <div>
              <p className={styles.infoLabel}>Language</p>
              <p className={styles.infoValue}>Hindi, English, Marathi</p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoIconWrapper}><Clock size={20} /></div>
            <div>
              <p className={styles.infoLabel}>Duration</p>
              <p className={styles.infoValue}>30 Minutes</p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoIconWrapper}><Video size={20} /></div>
            <div>
              <p className={styles.infoLabel}>Platform</p>
              <p className={styles.infoValue}>Online via Zoom</p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoIconWrapper}><ShieldCheck size={20} /></div>
            <div>
              <p className={styles.infoLabel}>Privacy</p>
              <p className={styles.infoValue}>100% Confidential</p>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoIconWrapper}><User size={20} /></div>
            <div>
              <p className={styles.infoLabel}>Format</p>
              <p className={styles.infoValue}>Private 1:1 Session</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow} data-animate>
          <div className={styles.statCol}>
            <h1 className={styles.statNum}><AnimatedCounter end={15} />K+</h1>
            <h2 className={styles.statLabel}>People Trained</h2>
          </div>
          <div className={styles.statCol}>
            <h1 className={styles.statNum}><AnimatedCounter end={10} />K+</h1>
            <h2 className={styles.statLabel}>Clients Helped</h2>
          </div>
          <div className={styles.statCol}>
            <h1 className={styles.statNum}><AnimatedCounter end={300} />+</h1>
            <h2 className={styles.statLabel}>Workshops</h2>
          </div>
        </div>

        {/* Featured In / Logo Marquee */}
        <div className={styles.marqueeSection} data-animate>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {[...Array(2)].map((_, i) => (
                <div key={i} style={{ display: 'flex' }}>
                  <img src="/brands/swiggy.png" alt="Swiggy" className={styles.marqueeLogoImg} />
                  <img src="/brands/Kolher.png" alt="Kohler" className={styles.marqueeLogoImg} />
                  <img src="/brands/radiocity.png" alt="Radio City" className={styles.marqueeLogoImg} />
                  <img src="/brands/acg.png" alt="ACG Pampac" className={styles.marqueeLogoImg} />
                  <img src="/brands/thoughtworks.png" alt="ThoughtWorks" className={styles.marqueeLogoImg} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className={styles.ctaGroup} data-animate>
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-xl btn-pulse btn-pop ${styles.ctaPrimary}`}
          >
            <Zap size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
          </a>
        </div>

        {/* Urgency line */}
        <p className={styles.urgency} data-animate style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
          <span className={styles.urgencyDot} />
          <Zap size={16} color="#ef4444" /> Limited Seats Available
        </p>

        {/* Trust badges */}
        <div className={styles.trustBadges} data-animate>
          {[
            { text: "Secure Booking", icon: <ShieldCheck size={16} /> },
            { text: "10+ Years Expertise", icon: <GraduationCap size={16} /> },
            { text: "Online via Zoom", icon: <Globe size={16} /> },
          ].map((t, i) => (
            <span key={i} className={styles.trustBadge} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {t.icon} {t.text}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
