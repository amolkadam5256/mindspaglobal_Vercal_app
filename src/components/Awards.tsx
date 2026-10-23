'use client';
import Image from 'next/image';
import { Award } from 'lucide-react';
import styles from './Awards.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const awards = [
  {
    img: '/achievements/certificate.png',
    tag: 'Achievement',
    tagColor: '#22d3a0',
    title: 'Certified Mindfulness Coach',
  },
  {
    img: '/achievements/image.png',
    tag: 'Award',
    tagColor: '#60c8f5',
    title: 'Best Psychology Counselor In Maharashtra',
  },
  {
    img: '/achievements/image copy.png',
    tag: 'Recognition',
    tagColor: '#a78bfa',
    title: 'Wellness Training In Gharda Chemical Company',
  },
  {
    img: '/achievements/image copy 2.png',
    tag: 'Honour',
    tagColor: '#f59e0b',
    title: 'Mindfulness Training & Employee Course To 5000+',
  },
  {
    img: '/achievements/image copy 3.png',
    tag: 'Award',
    tagColor: '#60c8f5',
    title: 'Corporate Mindfulness Program In Italian Company',
  },
  {
    img: '/achievements/image copy 4.png',
    tag: 'Recognition',
    tagColor: '#a78bfa',
    title: 'Maharashtra Culture Club Organising Neuro Mind Program',
  },
];

export default function Awards() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation('.award-card-item');

  return (
    <section className={`section ${styles.section}`} aria-label="Awards and recognitions">
      <div className="container">
        <div className={`${styles.header} reveal`} ref={headerRef}>
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Award size={14} /> Credentials
          </span>
          <h2 className={`display-lg ${styles.title}`}>
            Awards &amp; <span className="text-accent">Recognitions</span> of Dipti Panhalkar, Founder: MindSpa Global
          </h2>
          <p className={styles.subtitle}>
            Excellence in Psychology Counseling &amp; Mindfulness
          </p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {awards.map((a, i) => (
            <div key={i} className={`${styles.card} award-card-item reveal-pop`}>
              <div className={styles.imgWrapper}>
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className={styles.tag}
                  style={{
                    background: a.tagColor,
                    color: '#000',
                    borderColor: a.tagColor,
                  }}
                >
                  {a.tag}
                </span>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.awardTitle}>{a.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
