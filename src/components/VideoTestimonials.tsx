import styles from './VideoTestimonials.module.css';
import { Sparkles, Flower2, Leaf, Sun, Moon, Brain, MonitorPlay } from "lucide-react";

const testimonials = [
  {
    id: "1228539558",
    title: "Vaishnavi Shende",
    icon: Sun,
    desc: "Pharma professional Vaishnavi overcame severe overthinking about the past and future through customized neuro-meditation and hypnosis with Deepti. She successfully replaced her negative thoughts with positive affirmations and now feels confident and present."
  },
  {
    id: "1228492858",
    title: "Chaitali",
    icon: Sparkles,
    desc: "IT professional Chaitali struggled with intense personal issues that heavily impacted her mental health. After just one month of following Deepti's tailored exercises, she experienced an 80% positive transformation and feels significantly better."
  },
  {
    id: "1228895338",
    title: "Nitin Pathak",
    icon: Brain,
    desc: "As an HR Manager at DSM India, Nitin organized corporate stress management sessions with Deepti for their female employees and spouses. The interactive Mind Gym activities were highly successful in helping participants manage both work and daily life stress, and he strongly recommends her programs for corporate wellness."
  },
  {
    id: "1228527731",
    title: "Dr. Smita Lele",
    icon: Leaf,
    desc: "Respected scientist Dr. Lele attended the program and discovered that you are never too old to learn how to care for your mind. She learned new techniques and highly encourages young people to proactively prioritize their mental well-being."
  },
  {
    id: "1228527798",
    title: "Rohini",
    icon: Sparkles,
    desc: "Despite a successful IT career, Rohini felt stuck, depressed, and overwhelmed by overthinking. Through Deepti's breathing techniques and hypnosis, she released past negativity and advises anyone feeling stuck to seek this guidance to find themselves again."
  },
  {
    id: "1228539559",
    title: "Kiran Bharti",
    icon: Moon,
    desc: "Kiran, representing Ognibene India, invited Deepti to lead a special Women's Day training session on mental empowerment. Deepti's interactive workshop successfully taught their female employees how to control their thinking, delete negativity, and stay self-motivated, which the entire team thoroughly enjoyed."
  },
];

export default function VideoTestimonials() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="video-testimonials-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <MonitorPlay size={14} /> Real Stories, Real Results
          </span>
          <h2 id="video-testimonials-heading" className={`display-lg ${styles.title}`}>
            Real people, real clarity,<br />
            <span className="text-accent">real results.</span>
          </h2>
          <p className={styles.subtitle}>
            Don't just take our word for it, watch their transformations.
          </p>
        </div>

        {/* Horizontal Videos Grid */}
        <div className={styles.videoGrid}>
          {testimonials.map((t, index) => (
            <div key={`vimeo-${t.id}-${index}`} className={styles.testimonialCard}>
              <div className={styles.videoWrapperVertical}>
                <iframe
                  src={`https://player.vimeo.com/video/${t.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  title={t.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {t.title} <t.icon className={styles.cardIcon} size={18} />
                </h3>
                <p className={styles.cardDesc}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
