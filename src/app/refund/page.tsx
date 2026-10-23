import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Refund and Cancellation Policy</h1>
        <div className={styles.content}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Cancellation Policy</h2>
          <p>We understand that emergencies happen. If you need to cancel or reschedule your 1:1 session, we request that you notify us at least 24 hours in advance.</p>
          
          <h2>2. Refund Eligibility</h2>
          <p>The ₹49 booking fee is generally non-refundable due to the highly discounted nature of the session and the limited slots available. However, refunds may be considered on a case-by-case basis in the event of:</p>
          <ul>
            <li>Technical failures on our end preventing the session from taking place.</li>
            <li>Cancellation initiated by the coach.</li>
          </ul>

          <h2>3. No-Shows</h2>
          <p>If you fail to attend the scheduled session without prior notice (no-show), the booking fee will be forfeited and no refund will be issued.</p>

          <h2>4. Rescheduling</h2>
          <p>If you inform us at least 24 hours prior to your session, we will gladly help you reschedule your slot for another available time without any additional charges.</p>

          <h2>5. Refund Process</h2>
          <p>If a refund is approved, it will be initiated back to your original payment method within 5-7 business days.</p>

          <h2>6. Contact Us</h2>
          <p>To request a reschedule or discuss a refund, please contact us immediately at support@mindspaglobal.com.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
