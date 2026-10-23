'use client';
import Image from 'next/image';
import { Target, CheckCircle2 } from "lucide-react";
import styles from "./WhoShouldJoin.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const audiences = [
  { img: '/is_this_for_you/working_prof.png',    title: "Working Professionals",          desc: "Career growth, promotions, confidence & work life balance." },
  { img: '/is_this_for_you/entrepreneur.png',    title: "Business Owners & Entrepreneurs", desc: "Attract growth, financial stability & make the right decisions." },
  { img: '/is_this_for_you/homemaker.png',       title: "Homemakers",                     desc: "Build confidence and create a peaceful, positive environment at home." },
  { img: '/is_this_for_you/students.png',        title: "Students",                       desc: "Gain focus, confidence and career clarity for your future." },
  { img: '/is_this_for_you/relation_seeker.png', title: "Relationship Seekers",            desc: "Enhance understanding, love and emotional bonding in relationships." },
  { img: '/is_this_for_you/financial.png',       title: "Financial Difficulties",          desc: "Remove money related obstacles and attract prosperity." },
  { img: '/is_this_for_you/burnout.png',         title: "Stress & Burnout",               desc: "Break free from stress, anxiety, and overthinking permanently." },
  { img: '/is_this_for_you/inner_peace.png',     title: "Seekers of Inner Peace",          desc: "Experience peace of mind, positive energy & true happiness." },
];

export default function WhoShouldJoin() {
  const headerRef = useScrollAnimation();
  const gridRef   = useScrollAnimation('.audience-card');

  return (
    <section className={`section ${styles.section}`} aria-label="Who should join">
      <div className="container">

        <div className={`${styles.header} reveal`} ref={headerRef}>
          <span className="section-badge" style={{ display:'inline-flex', alignItems:'center', gap:'6px' }}>
            <Target size={14} /> Is This For You?
          </span>
          <h2 className={`display-lg ${styles.title}`}>
            Who Should Join This{' '}
            <span className="text-accent">1:1 Session?</span>
          </h2>
          <p className={styles.subtitle}>
            If any of these resonate with you this session was made for you.
          </p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {audiences.map((a) => (
            <div key={a.title} className={`${styles.card} audience-card`}>
              
              {/* Overlapping circular avatar */}
              <div className={styles.imgRing}>
                <div className={styles.imgCircle}>
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className={styles.cardImg}
                    sizes="90px"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDesc}>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaLabel}>This is designed for you. Don&apos;t wait.</p>
          <a
            href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
            target="_blank"
            rel="noopener noreferrer"
            id="who-should-join-cta"
            className="btn btn-primary btn-lg btn-pulse"
            style={{ display:'flex', alignItems:'center', gap:'8px' }}
          >
            <CheckCircle2 size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
          </a>
        </div>

      </div>
    </section>
  );
}
