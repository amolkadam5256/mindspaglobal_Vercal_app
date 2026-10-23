import { Target } from "lucide-react";
import styles from "./Testimonials.module.css";

const onlineImages = [
  "/online/WhatsApp Image 2026-09-20 at 13.30.05 (1).jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.05.jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.06 (1).jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.06 (2).jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.06.jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.07 (1).jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.07 (2).jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.07 (3).jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.07.jpeg",
  "/online/WhatsApp Image 2026-09-20 at 13.30.08.jpeg"
];

export default function OnlineSuccessGallery() {
  return (
    <section className={`section ${styles.section}`} style={{ paddingTop: '2rem', paddingBottom: '2rem' }} aria-label="Online success gallery">
      <div className={`container ${styles.gallerySection}`}>
        <div className={styles.galleryHeader}>
          <h3 className={`display-md ${styles.title}`}>
            Real success stories through <span className="text-accent">online 1:1</span> mind coaching
          </h3>
          <p className={styles.galleryDesc}>
            Transformations that happen everywhere, anytime. Real results from our dedicated online sessions.
          </p>
        </div>
        <div className={styles.galleryGrid}>
          {onlineImages.map((src, idx) => (
            <div key={idx} className={styles.galleryItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={encodeURI(src)} alt={`Online Coaching Success ${idx + 1}`} loading="lazy" className={styles.galleryImg} />
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.ctaRow} style={{ marginTop: '2rem' }}>
        <a
          href="https://rzp.io/rzp/6kG6tUA?callback_url=https%3A%2F%2Fmindspaglobal.netlify.app%2Fthank-you"
          target="_blank"
          rel="noopener noreferrer"
          id="testimonials-cta-button"
          className="btn btn-primary btn-lg btn-pulse"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          <Target size={20} style={{ flexShrink: 0 }} /> <span style={{ whiteSpace: 'nowrap' }}>Yes, I want to heal only at <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>₹49</span>
        </a>
      </div>
    </section>
  );
}
