'use client';
import React, { useEffect, useRef } from 'react';
import { 
  AlertCircle, 
  Activity, 
  CloudRain, 
  HeartCrack, 
  UserMinus, 
  ShieldAlert, 
  Users, 
  TrendingDown,
  Brain
} from 'lucide-react';
import styles from './WhyAttend.module.css';

const painPoints = [
  {
    icon: <Activity size={24} />,
    text: "I feel anxious before important meetings, client calls, and big decisions.",
    color: "blue"
  },
  {
    icon: <CloudRain size={24} />,
    text: "I often feel overwhelmed with emotional ups and downs.",
    color: "red"
  },
  {
    icon: <AlertCircle size={24} />,
    text: "I have lost my mental peace and clarity completely.",
    color: "blue"
  },
  {
    icon: <HeartCrack size={24} />,
    text: "I struggle with a lot of relationship issues.",
    color: "red"
  },
  {
    icon: <UserMinus size={24} />,
    text: "Repeated failed relationships or marriage breakdowns.",
    color: "blue"
  },
  {
    icon: <ShieldAlert size={24} />,
    text: "Attracting narcissistic or emotionally abusive partners again and again.",
    color: "red"
  },
  {
    icon: <Users size={24} />,
    text: "Attracting people who hurt you.",
    color: "blue"
  },
  {
    icon: <TrendingDown size={24} />,
    text: "Business losses, financial blocks, and feeling stuck no matter how hard you try.",
    color: "red"
  },
  {
    icon: <Brain size={24} />,
    text: "Constant self doubt and the feeling that no matter what you do, you are simply not enough.",
    color: "blue"
  }
];

export default function WhyAttend() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="why-attend">
      <div className={`container ${styles.container}`}>
        <div className={`text-center reveal ${styles.header}`}>
          <span className="section-badge">Are You Experiencing This?</span>
          <h2 className="display-lg" style={{ marginBottom: '1rem', whiteSpace: 'nowrap', fontSize: 'clamp(1.2rem, 5.5vw, 3.2rem)' }}>
            Why Attend This <span className="text-accent">Clarity Session?</span>
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            If any of these sound familiar, you are in the right place. It's time to break these patterns.
          </p>
        </div>

        <div className={styles.grid}>
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${point.color === 'blue' ? styles.cardBlue : styles.cardRed} reveal-scale`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={styles.iconWrapper}>
                {point.icon}
              </div>
              <p className={styles.text}>{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
