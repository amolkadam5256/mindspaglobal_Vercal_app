import Image from "next/image";
import { Brain, Star, GraduationCap } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./AboutCoach.module.css";

const credentials = [
  <><span className="text-accent">India&apos;s leading</span> Psychologist & Mindfulness Coach</>,
  <><span className="text-accent">10+ Years</span> of transforming lives through NLP & Neuro Hypnosis</>,
  <>Worked with <span className="text-accent">Swiggy, Kohler, ACG Pampac & ThoughtWorks</span></>,
  <>Guest Speaker <span className="text-accent">Akashwani, Radio One & Radio Apollo Belgium</span></>,
  <><span className="text-accent">Mrs. Kolhapur</span> & Finalist <span className="text-accent">Mrs. Maharashtra</span> (Times Group)</>,
  <>Recipient of multiple <span className="text-accent">Personality & Excellence Awards</span></>,
  <>Conducted <span className="text-accent">300+ workshops</span> across India & internationally</>,
];

const stats = [
  { end: 15, suffix: "K+", label: "People Trained" },
  { end: 10, suffix: "K+", label: "Clients Helped" },
  { end: 300, suffix: "+", label: "Workshops" },
  { end: 10, suffix: "+", label: "Years Experience" },
];

export default function AboutCoach() {
  return (
    <section className={styles.section} aria-label="About Dipti Panhalkar">

      <div className={`container ${styles.inner}`}>
        
        {/* TOP: Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>MEET YOUR MIND COACH</p>
          <h2 className={styles.name}>Dipti Panhalkar</h2>
          <div className={styles.nameLine} aria-hidden="true" />
          <p className={styles.role}>
            <span style={{ display: 'inline-block' }}>Founder: <span className="text-accent">Mind Spa Global</span></span>
            <span className={`hide-mobile ${styles.dot}`}>·</span>
            <br className="hide-desktop" />
            <span style={{ display: 'inline-block', marginTop: '0.2rem' }}>Psychologist <span className={styles.dot}>·</span> Mindfulness Coach</span>
          </p>
        </div>

        {/* MIDDLE: Photo */}
        <div className={styles.photoFrame}>
          <Image
            src="/dipti/dipti.png"
            alt="Dipti Panhalkar Psychologist & Mindfulness Coach"
            width={420}
            height={520}
            className={styles.photo}
            priority
          />
          {/* Floating badge 1 (Right) */}
          <div className={`${styles.photoBadge} ${styles.badgeRight}`}>
            <span className={styles.photoBadgeIcon} style={{ display: 'flex' }}><Brain size={24} color="#0284c7" /></span>
            <div>
              <p className={styles.photoBadgeTitle}><AnimatedCounter end={10} suffix="+ Years" /></p>
              <p className={styles.photoBadgeSub}>Mind Expert</p>
            </div>
          </div>

          {/* Floating badge 2 (Left) */}
          <div className={`${styles.photoBadge} ${styles.badgeLeft}`}>
            <span className={styles.photoBadgeIcon} style={{ display: 'flex' }}><Star size={24} color="#f59e0b" fill="#f59e0b" /></span>
            <div>
              <p className={styles.photoBadgeTitle}><AnimatedCounter end={15} suffix="K+" /></p>
              <p className={styles.photoBadgeSub}>Lives Transformed</p>
            </div>
          </div>
        </div>

        {/* BOTTOM: Credentials & Video */}
        <div className={styles.infoContent}>
          <ul className={styles.credentials}>
            {credentials.map((c, i) => (
              <li key={i} className={styles.credItem}>
                <span className={styles.credIcon} style={{ display: 'inline-flex' }}><Star size={12} color="#0284c7" fill="#0284c7" /></span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statNum}><AnimatedCounter end={s.end} suffix={s.suffix} /></span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
