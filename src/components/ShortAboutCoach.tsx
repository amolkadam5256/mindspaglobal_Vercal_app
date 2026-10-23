import Image from "next/image";
import { Target } from "lucide-react";
import styles from "./ShortAboutCoach.module.css";

const stats = [
  { num: "15K+", label: "People" },
  { num: "10K+", label: "Clients" },
  { num: "300+", label: "Workshops" },
];

export default function ShortAboutCoach() {
  return (
    <section className={styles.section} aria-label="Introduction to Dipti Panhalkar">
      <div className={`container ${styles.inner}`}>
        
        {/* Mobile Title (above image) */}
        <div className={`hide-desktop ${styles.mobileTitleWrapper}`}>
          <p className={styles.eyebrow}>MEET YOUR MIND COACH</p>
          <h2 className={styles.name}>Dipti Panhalkar</h2>
        </div>

        {/* TOP: Intro Row */}
        <div className={styles.introRow}>
          <div className={styles.photoWrapper}>
            <Image
              src="/dipti/dipti_starting.png"
              alt="Dipti Panhalkar Psychologist & Mindfulness Coach"
              width={340}
              height={420}
              className={styles.photo}
              priority
            />
          </div>
          
          <div className={styles.textContent}>
            <div className="hide-mobile">
              <p className={styles.eyebrow}>MEET YOUR MIND COACH</p>
              <h2 className={styles.name}>Dipti Panhalkar</h2>
            </div>
            <p className={styles.role}>
              Founder – <span className="text-accent">Mind Spa Global</span> <br/>
              (Psychologist & Mindfulness Coach)
            </p>
            
            <p className={styles.description}>
              Dipti empowers individuals to overcome <strong style={{ color: 'var(--accent-blue)' }}>overthinking, anxiety, and self-doubt</strong> using proven <strong style={{ color: 'var(--accent-blue)' }}>scientific NLP techniques</strong>. By <strong style={{ color: 'var(--accent-blue)' }}>reprogramming the subconscious mind</strong>, she helps you unlock your true potential and design a life of <strong style={{ color: 'var(--accent-blue)' }}>clarity, abundance, and peace</strong>.
              <br /><br />
              <strong style={{ color: 'var(--accent-blue)' }}>Recently featured:</strong> Organized the highly acclaimed <strong style={{ color: 'var(--accent-blue)' }}>Neuro Mind Gym Program</strong> by the Maharashtra Culture Club.
            </p>

            <div className={styles.statsRow}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statContainer}>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                  {i < stats.length - 1 && <div className={styles.statDivider} />}
                </div>
              ))}
            </div>

            <a
              href="#register"
              className={`btn btn-primary btn-pulse ${styles.ctaBtn}`}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textAlign: 'center' }}
            >
              <Target size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
            </a>
          </div>
        </div>

        {/* BOTTOM: Video Section */}
        <div className={styles.bottomSection}>
          <div className={styles.videoSection}>
            <h3 className={styles.videoTitle} style={{ textWrap: 'balance' }}>
              &ldquo;Watch the special interview with India&apos;s renowned Mind Coach and NLP expert, <strong style={{ color: 'var(--accent-blue)', whiteSpace: 'nowrap' }}>Dipti Panhalkar</strong>, on <strong style={{ color: 'var(--accent-blue)', whiteSpace: 'nowrap' }}>Radio City</strong>.&rdquo;
            </h3>
            <div className={styles.videoWrapper}>
              <iframe 
                src="https://www.youtube.com/embed/EryUVkxwP0w?rel=0" 
                title="Dipti Panhalkar Radio City Interview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
