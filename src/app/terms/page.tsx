import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <div className={styles.content}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to Neuro Mind 1:1 Session with Dipti Panhalkar. By booking a session, accessing or using our services, you agree to be bound by these Terms and Conditions.</p>

          <h2>2. Services</h2>
          <p>We provide online 1:1 mental clarity coaching sessions. These sessions are designed to help with mindset, overthinking, and personal growth. They are not a substitute for professional medical, psychiatric, or clinical psychological diagnosis and treatment.</p>

          <h2>3. Booking and Payments</h2>
          <p>All bookings are made securely through our payment gateway (Razorpay). The promotional fee of ₹49 is subject to change at our discretion. Your slot is confirmed only upon successful payment.</p>

          <h2>4. User Responsibilities</h2>
          <p>You agree to attend the session on time. If you miss the session without prior notice, we reserve the right to forfeit the fee or reschedule at our sole discretion.</p>

          <h2>5. Intellectual Property</h2>
          <p>Any materials, exercises, or resources provided during or after the session are for your personal use only and may not be distributed or reproduced.</p>

          <h2>6. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at support@mindspaglobal.com.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
