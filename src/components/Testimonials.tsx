import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const reviews = [
  { name: "Avinash Raut", text: "Very wonderful session given to all personnel at 05 Bn NDRF, Sudumbare. Stress levels came down from high to ground level." },
  { name: "Sanjay Deoghare", text: "The session at NIPM was excellent. Will definitely try the techniques shared." },
  { name: "Inspector Rahul Raghuwansh", text: "Motivational speech and meditation session was very interesting. We felt very positive and relaxed." },
  { name: "Nitin Kenjale", text: "This session at NDRF Camp Sudumbare, Pune was very useful for stress reduction and mental relaxation." },
  { name: "Prakash Sakhare", text: "Very good information shared about leadership over stress during the 5th NDRF camp session." },
];

// Duplicate for seamless loop
const doubledReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`} aria-label="Google reviews and testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Star size={14} /> Social Proof</span>
          <h2 className={`display-lg ${styles.title}`}>
            Words From{" "}
            <span className="text-accent">Real People</span>
          </h2>
          <div className={styles.ratingRow}>
            <span className={styles.ratingNum}>4.9</span>
            <span className={styles.stars} style={{ display: 'flex', gap: '2px' }}>
              <Star size={20} fill="#facc15" color="#facc15" />
              <Star size={20} fill="#facc15" color="#facc15" />
              <Star size={20} fill="#facc15" color="#facc15" />
              <Star size={20} fill="#facc15" color="#facc15" />
              <Star size={20} fill="#facc15" color="#facc15" />
            </span>
            <span className={styles.ratingLabel}>Google Reviews · Rated by real participants</span>
          </div>
        </div>

        {/* Featured Video Testimonial */}
        <div style={{ maxWidth: '800px', margin: '3rem auto 2rem', textAlign: 'center' }}>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)' }}>
            <iframe
              src="https://www.youtube.com/embed/jw4AaGTsjyc"
              title="Wing Commander Kamalakar Gune Testimonial"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, padding: '0 1rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Wing Commander Kamalakar Gune</strong> shares his powerful transformation journey. Discover how these simple, scientific techniques helped him achieve lasting mental clarity and break free from stress.
          </p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className={`marquee-outer ${styles.marqueeOuter}`} role="region" aria-label="Scrolling testimonials">
        <div className="marquee-track" aria-live="off">
          {doubledReviews.map((r, i) => (
            <div key={`${r.name}-${i}`} className={`${styles.reviewCard}`}>
              <div className={styles.reviewStars} style={{ display: 'flex', gap: '2px' }}>
                <Star size={14} fill="#facc15" color="#facc15" />
                <Star size={14} fill="#facc15" color="#facc15" />
                <Star size={14} fill="#facc15" color="#facc15" />
                <Star size={14} fill="#facc15" color="#facc15" />
                <Star size={14} fill="#facc15" color="#facc15" />
              </div>
              <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.reviewFooter}>
                <div className={styles.reviewAvatar}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.reviewName}>{r.name}</p>
                  <p className={styles.reviewSource}>Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
