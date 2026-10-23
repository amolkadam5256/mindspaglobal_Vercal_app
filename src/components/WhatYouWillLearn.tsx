import { Brain, Activity, CloudLightning, RefreshCcw, ShieldCheck, HeartPulse } from "lucide-react";
import styles from "./WhatYouWillLearn.module.css";

const learnings = [
  {
    icon: Brain,
    title: "1. Decode your personal anxiety pattern",
    desc: "Understand exactly how your health anxiety starts and what keeps it alive."
  },
  {
    icon: Activity,
    title: "2. Neutralize anxiety triggers in real time",
    desc: "Techniques to stop fear before it turns into panic."
  },
  {
    icon: CloudLightning,
    title: "3. Calm mental storms and overthinking",
    desc: "Gain control over spiraling thoughts and maintain clarity in stressful moments."
  },
  {
    icon: RefreshCcw,
    title: "4. Reprogram subconscious beliefs",
    desc: "Rewire deep rooted negative thought patterns and install empowering new beliefs."
  },
  {
    icon: ShieldCheck,
    title: "5. Build unshakable confidence",
    desc: "Replace chronic self doubt with rock solid self belief to face any situation."
  },
  {
    icon: HeartPulse,
    title: "6. Master emotional regulation",
    desc: "Learn to observe your emotions safely without being consumed by them."
  }
];

export default function WhatYouWillLearn() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={`display-lg ${styles.title}`}>
            What You Will <span className={styles.redText}>Learn</span><br/>
            <span className={styles.redText}>& Implement</span>
          </h2>
        </div>
        <div className={styles.grid}>
          {learnings.map((l, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>
                <l.icon size={32} color="#fff" />
              </div>
              <h3 className={styles.cardTitle}>{l.title}</h3>
              <p className={styles.cardDesc}>{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
