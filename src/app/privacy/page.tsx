import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../legal.module.css";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.content}>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>When you book a session, we collect basic personal information including your name, email address, phone number, and any background information you voluntarily provide during the booking process or the session itself.</p>

          <h2>2. How We Use Your Information</h2>
          <p>Your information is used strictly for:</p>
          <ul>
            <li>Scheduling and delivering the 1:1 session</li>
            <li>Communicating with you regarding your booking</li>
            <li>Improving our services</li>
            <li>Sending occasional updates (you may opt out at any time)</li>
          </ul>

          <h2>3. Confidentiality</h2>
          <p>We maintain 100% confidentiality. Everything discussed during your 1:1 session with Dipti Panhalkar remains strictly private and will not be shared with any third party without your explicit consent.</p>

          <h2>4. Payment Data</h2>
          <p>We do not store your credit card or sensitive payment details. All payments are processed securely via our trusted payment partner (Razorpay).</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to request access to or deletion of your personal data at any time by contacting us.</p>

          <h2>6. Contact Us</h2>
          <p>For any privacy-related concerns, please reach out to support@mindspaglobal.com.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
