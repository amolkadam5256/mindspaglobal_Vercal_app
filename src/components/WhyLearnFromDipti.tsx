'use client';

import React from 'react';
import { X, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './WhyLearnFromDipti.module.css';

export default function WhyLearnFromDipti() {
  const sectionRef = useScrollAnimation('.reveal, .reveal-left, .reveal-right');

  const genericPoints = [
    "Focuses on surface level temporary hype",
    "Tells you 'what' to do but not 'how' to do it",
    "No scientific basis, just enthusiasm",
    "Results fade away in a few days"
  ];

  const diptiPoints = [
    "Uses proven Clinical Psychology & NLP techniques",
    "Reprograms the root cause in the subconscious mind",
    "Scientific Neuro Mind Gym exercises",
    "Permanent, life long transformation"
  ];

  return (
    <section className={styles.section} id="why-dipti" ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className={`display-md ${styles.title}`}>
            Why Learn From <span className={styles.highlight}>Dipti Panhalkar?</span>
          </h2>
          <p className={styles.subtitle}>
            The difference between temporary motivation and permanent subconscious reprogramming.
          </p>
        </div>

        <div className={styles.comparisonContainer}>
          {/* Generic Side */}
          <div className={`${styles.card} ${styles.cardGeneric}`}>
            <h3 className={styles.cardTitle}>Generic Motivational Speakers</h3>
            <div className={styles.list}>
              {genericPoints.map((text, idx) => (
                <div key={idx} className={styles.listItem}>
                  <div className={styles.iconWrapper}>
                    <X size={20} color="var(--red-danger, #ef4444)" />
                  </div>
                  <span className={styles.textGeneric}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VS Badge */}
          <div className={styles.vsBadgeWrapper}>
            <div className={styles.vsBadge}>VS</div>
          </div>

          {/* Dipti's Side */}
          <div className={`${styles.card} ${styles.cardDipti}`}>
            <div className={styles.cardGlow}></div>
            <h3 className={styles.cardTitle}>Dipti's Scientific Approach</h3>
            <div className={styles.list}>
              {diptiPoints.map((text, idx) => (
                <div key={idx} className={styles.listItem}>
                  <div className={styles.iconWrapper}>
                    <Check size={22} color="var(--accent-blue, #60c8f5)" />
                  </div>
                  <span className={styles.textDipti}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
