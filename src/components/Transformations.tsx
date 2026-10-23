'use client';
import { Sparkles, Flower2, Leaf, Sun, Moon, Brain, Star, MessageSquare, Target } from "lucide-react";
import styles from "./Transformations.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import Image from "next/image";

const stories = [
  {
    icon: <Sparkles size={24} color="#60c8f5" />,
    image: "/image/IT_proffesional.png",
    title: "Life Transformation",
    tag: "IT Professional",
    story:
      "Suffering from overthinking, lack of focus, and sleep issues. Achieved concentration, good sleep, and mental peace in just 3 weeks after joining Neuro Mind Gym.",
  },
  {
    icon: <Flower2 size={24} color="#60c8f5" />,
    image: "/image/corporate_emp.png",
    title: "Anxiety to Inner Peace",
    tag: "Corporate Employee",
    story:
      "Constant anxiety, negative thoughts, and overthinking were reduced through scientific techniques. Confidence and self image improved significantly.",
  },
  {
    icon: <Leaf size={24} color="#60c8f5" />,
    image: "/people/poonam_tai.png",
    title: "Anxiety Free Life",
    tag: "Poonam Media Professional",
    story:
      "Overcame deep Anxiety and Mental Pressure and started living a calm and balanced life using Dipti's NLP techniques.",
  },
  {
    icon: <Sun size={24} color="#60c8f5" />,
    image: "/people/archana_tai.png",
    title: "50+ Age Mind Transformation",
    tag: "Archana Tai",
    story:
      "Suffered from constant thoughts, negativity, and insomnia. Experienced a massive change in enthusiasm, mental peace, and sleep after the 21 Days Neuro Mind Gym Challenge.",
  },
  {
    icon: <Moon size={24} color="#60c8f5" />,
    image: "/people/sharmila_tai.png",
    title: "Sleep Without Medicines",
    tag: "Sharmila Tai",
    story:
      "Had to take sleeping pills for 6 months. Thanks to Neuro Mind Gym, she started getting natural sleep in just 3 weeks and completely stopped her medication.",
  },
  {
    icon: <Brain size={24} color="#60c8f5" />,
    image: "/people/ashish_chimbalkar.png",
    title: "Depression to Mental Strength",
    tag: "Dr. Ashish Chimbalkar Professor",
    story:
      "Despite being a professor, was stuck in depression and anxiety. Today, completely mentally strong and happy without any medication using only Neuro Mind Gym techniques.",
  },
];

export default function Transformations() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation('.story-card');
  return (
    <section className={`section ${styles.section}`} aria-label="Real transformation stories">
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headerRef}>
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><MessageSquare size={14} /> Real Stories</span>
          <h2 className={`display-lg ${styles.title}`}>
            See From{" "}
            <span className="text-accent">Real People</span> Who Transformed
          </h2>
          <p className={styles.subtitle}>
            These are real people who overcame deep rooted subconscious blockages,
            money obstacles, fear, and overthinking just like you.
          </p>
        </div>

        <div className={`${styles.grid} stagger-children`} ref={gridRef}>
          {stories.map((s, i) => (
            <article key={i} className={`glass-card ${styles.card} story-card`}>
              <div className={styles.cardTop}>
                <div className={styles.userInfo}>
                  <div className={styles.avatarWrapper}>
                    <Image src={s.image} alt={s.title} width={96} height={96} className={styles.avatarImage} />
                  </div>
                  <div className={styles.userMeta}>
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <span className={styles.cardTag}>{s.tag}</span>
                  </div>
                </div>
                <span className={styles.cardIcon} style={{ display: 'flex' }}>{s.icon}</span>
              </div>
              <p className={styles.cardBody}>{s.story}</p>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            id="transformations-cta-button"
            className={`btn btn-primary btn-lg btn-pulse ${styles.ctaBtn}`}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
          >
            <Target size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
          </a>
        </div>
      </div>
    </section>
  );
}
