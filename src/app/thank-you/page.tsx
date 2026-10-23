'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, Calendar, MessageCircle, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

/* ── Meta Pixel Purchase event ──────────────────────────────────────────────
   Fires ONCE when Razorpay redirects here after successful payment.
   sessionStorage flag prevents re-firing on page refresh.
   window.fbq is injected by the base pixel in layout.tsx.
────────────────────────────────────────────────────────────────────────── */
function useFirePurchaseEvent() {
  useEffect(() => {
    const FIRED_KEY = 'mp_purchase_fired';

    // Avoid duplicate fires on page refresh
    if (sessionStorage.getItem(FIRED_KEY)) return;

    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Purchase', {
        value: 49.00,
        currency: 'INR',
        content_name: '₹49 Mind Spa One-on-One Session',
        content_ids: ['mind-spa-49'],
        content_type: 'product',
        num_items: 1,
      });
      sessionStorage.setItem(FIRED_KEY, '1');
    }
  }, []);
}

export default function ThankYouPage() {
  useFirePurchaseEvent();

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      id="main-content"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1f3c 50%, #0a0a1a 100%)',
        padding: '2rem 1rem',
        fontFamily: 'var(--font-jakarta), sans-serif',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Glow background orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,200,245,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '560px',
          width: '100%',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(96,200,245,0.18)',
          borderRadius: '24px',
          padding: 'clamp(2rem, 6vw, 3.5rem)',
          textAlign: 'center',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 60px rgba(0,0,0,0.4)',
        }}
      >
        {/* Check icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 0 40px rgba(34,197,94,0.35)',
          }}
        >
          <CheckCircle size={42} color="#fff" strokeWidth={2.5} />
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
            color: '#ffffff',
            lineHeight: 1.25,
            margin: '0 0 0.75rem',
          }}
        >
          Payment Successful! 🎉
        </h1>

        <p style={{ color: '#60c8f5', fontWeight: 600, fontSize: '1.05rem', margin: '0 0 1.5rem' }}>
          Your ₹49 Mind Spa Session is Booked.
        </p>

        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.97rem', lineHeight: 1.7, margin: '0 0 2rem' }}>
          Congratulations on taking this powerful step! 🌟<br />
          Dipti will personally reach out to schedule your 1:1 session on{' '}
          <strong style={{ color: '#fff' }}>WhatsApp or Email</strong> within 24 hours.
        </p>

        {/* What's next cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem', textAlign: 'left' }}>
          {[
            { icon: <MessageCircle size={18} color="#60c8f5" />, text: "Check your WhatsApp — Dipti's team will message you soon." },
            { icon: <Calendar size={18} color="#60c8f5" />, text: 'Pick a time slot that suits you best.' },
            { icon: <Heart size={18} color="#60c8f5" />, text: 'Show up, open up, and transform — just 30 minutes.' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                background: 'rgba(96,200,245,0.06)',
                border: '1px solid rgba(96,200,245,0.12)',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
              }}
            >
              <span style={{ flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.93rem', lineHeight: 1.5 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Bonus reminder */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(96,200,245,0.1), rgba(139,92,246,0.1))',
            border: '1px solid rgba(96,200,245,0.2)',
            borderRadius: '14px',
            padding: '1rem 1.2rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <Sparkles size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', textAlign: 'left' }}>
            Your <strong style={{ color: '#fff' }}>FREE Bonuses</strong> (Manifestation Workbook + Neuro Relaxation Audio) will be shared after your session booking is confirmed.
          </p>
        </div>

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.88rem',
            textDecoration: 'none',
            borderBottom: '1px dashed rgba(255,255,255,0.2)',
            paddingBottom: '2px',
          }}
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
