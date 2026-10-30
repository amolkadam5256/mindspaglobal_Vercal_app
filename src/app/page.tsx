import Navbar from "@/components/Navbar";
import { Zap } from "lucide-react";
import Hero from "@/components/Hero";
import WhyAttend from "@/components/WhyAttend";
import SessionDetails from "@/components/SessionDetails";
import ComparisonTable from "@/components/ComparisonTable";
import HowItWorks from "@/components/HowItWorks";
import Transformations from "@/components/Transformations";
import VideoTestimonials from "@/components/VideoTestimonials";
import WhoIsThisFor from "@/components/WhoIsThisFor";

import ShortAboutCoach from "@/components/ShortAboutCoach";
import AboutCoach from "@/components/AboutCoach";
import Bonuses from "@/components/Bonuses";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import OnlineSuccessGallery from "@/components/OnlineSuccessGallery";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SocialProofToast from "@/components/SocialProofToast";
import SessionRegistrationForm from "@/components/SessionRegistrationForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <SocialProofToast />

      <Navbar />

      <main id="main-content">
        <Hero />
        <OnlineSuccessGallery />
        <WhyAttend />

        <WhoIsThisFor />
        <WhatYouWillLearn />
        <ShortAboutCoach />

        <div className="theme-dark">
          <VideoTestimonials />
          <Transformations />
          <Testimonials />
        </div>

        <HowItWorks />
        <ComparisonTable />

        <div style={{ background: '#f8fafc', padding: '2rem 0' }}>
          <AboutCoach />
          <Awards />
        </div>

        <SessionDetails />
        <Bonuses />
        <FAQ />

        <FinalCTA />
        <SessionRegistrationForm />
      </main>

      <Footer />

      {/* Sticky mobile CTA bar */}
      <div className="sticky-cta hide-desktop" role="complementary" aria-label="Book session">
        <a
          href="https://api.whatsapp.com/send/?phone=919325214189&text=Hi+Dipti%21+I+have+a+question+about+the+1%3A1+Neuro+Mind+Session.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-mobile-cta"
          className="btn btn-primary btn-pulse"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 800 }}
        >
          <Zap size={18} /> Book for <s style={{ opacity: 0.7, marginRight: '4px' }}>₹499</s>Free
        </a>
      </div>
    </>
  );
}
