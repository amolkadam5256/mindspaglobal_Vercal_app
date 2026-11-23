'use client';

import { FormEvent, useEffect, useState } from 'react';
import styles from './SessionRegistrationForm.module.css';

export type SessionRegistrationData = {
  full_name: string;
  phone: string;
  profession: string;
  location: string;
  seriousness: string;
};

const professions = [
  'Business Owner', 'Working Professional', 'Trainer or Coach', 'Student',
  'Entrepreneur', 'Freelancer', 'Other',
];

const interestOptions = [
  { value: 'yes', title: 'Yes', detail: "I'm ready to book" },
  { value: 'no', title: 'No', detail: 'Just exploring' },
  { value: 'later', title: 'Other', detail: "I'll decide later" },
];

const whatsapp = 'https://wa.me/919325214189?text=Hi%20Dipti%21%20I%20have%20a%20question%20about%20the%201%3A1%20Neuro%20Mind%20Session.';
const group = 'https://chat.whatsapp.com/EjCpcY8EyGx3W92Yi8ZIjq?s=cl&p=a&mlu=4&ilr=4';

export default function SessionRegistrationForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDone, setModalDone] = useState(false);
  const [modalError, setModalError] = useState('');
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const scrollToForm = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href]');
      if (!(link instanceof HTMLAnchorElement) || link.closest('#registration-form')) return;
      const url = new URL(link.href, window.location.href);
      if (!(url.hostname.endsWith('whatsapp.com') || url.hostname === 'wa.me') || !url.searchParams.has('phone')) return;
      event.preventDefault();
      setModalDone(false);
      setModalError('');
      setModalOpen(true);
    };
    document.addEventListener('click', scrollToForm);
    return () => document.removeEventListener('click', scrollToForm);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => document.querySelector<HTMLElement>('#seat-registration input')?.focus(), 50);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  async function handleModalSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setModalError('');
    setBusy(true);
    const values = new FormData(event.currentTarget);
    const data = {
      full_name: String(values.get('full_name') ?? '').trim(),
      phone: `+91 ${String(values.get('phone') ?? '').trim()}`,
      email: String(values.get('email') ?? '').trim(),
      gender: String(values.get('gender') ?? ''),
    };
    try {
      const validation = await fetch('/api/registration', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
      });
      if (!validation.ok) throw new Error('Validation failed');
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error('Web3Forms is not configured');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: accessKey, subject: 'New seat reservation', from_name: 'Mind Spa Global Registration Form', ...data }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Submission failed');
      setModalDone(true);
    } catch {
      setModalError('We couldn’t submit your details just now. Please try again in a moment.');
    } finally {
      setBusy(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    const values = new FormData(form);
    const data: SessionRegistrationData = {
      full_name: String(values.get('full_name') ?? '').trim(),
      phone: String(values.get('phone') ?? '').trim(),
      profession: String(values.get('profession') ?? ''),
      location: String(values.get('location') ?? '').trim(),
      seriousness: String(values.get('seriousness') ?? ''),
    };

    const nextErrors: Record<string, string> = {};
    if (data.full_name.length < 2 || data.full_name.length > 120) nextErrors.full_name = 'Enter your full name.';
    if (!/^\+?[\d\s().-]{7,20}$/.test(data.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!professions.includes(data.profession)) nextErrors.profession = 'Select your profession.';
    if (!data.seriousness) nextErrors.seriousness = 'Choose one option.';
    if (data.location.length > 120) nextErrors.location = 'Location must be 120 characters or fewer.';
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      return;
    }

    setBusy(true);
    try {
      const validation = await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!validation.ok) throw new Error('Validation failed');

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error('Web3Forms is not configured');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New 1:1 Neuro Mind Session enquiry',
          from_name: 'Mind Spa Global Registration Form',
          ...data,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Web3Forms submission failed');
      setDone(true);
    } catch {
      setError('We couldn’t submit your details just now. Please try again in a moment.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
    {modalOpen && <div className={styles.overlay} onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
      <section className={styles.modal} id="seat-registration" role="dialog" aria-modal="true" aria-labelledby="seat-title">
        <button className={styles.close} type="button" aria-label="Close registration" onClick={() => setModalOpen(false)}>×</button>
        {modalDone ? <div className={styles.modalSuccess}><h2 id="seat-title">You’re <span>Registered!</span></h2><p>Thanks for reserving your seat. We’ll be in touch shortly.</p><button className={styles.modalSubmit} onClick={() => setModalOpen(false)}>CLOSE</button></div> : <>
          <h2 id="seat-title" className={styles.modalTitle}>Reserve Your <span>Seat Now</span></h2>
          <form className={styles.modalForm} onSubmit={handleModalSubmit}>
            <input name="full_name" type="text" placeholder="Full Name *" aria-label="Full Name" autoComplete="name" required minLength={2} maxLength={120} />
            <div className={styles.phoneInput}><span className={styles.countryCode}><span aria-hidden="true">🇮🇳</span> +91</span><input name="phone" type="tel" placeholder="Phone *" aria-label="Phone" autoComplete="tel-national" required pattern="[0-9\s().-]{7,15}" /></div>
            <input name="email" type="email" placeholder="Email *" aria-label="Email" autoComplete="email" required maxLength={254} />
            <fieldset className={styles.gender}><legend>Gender <b>*</b></legend><label><input type="radio" name="gender" value="Male" required /> Male</label><label><input type="radio" name="gender" value="Female" /> Female</label></fieldset>
            {modalError && <p className={styles.modalError} role="alert">{modalError}</p>}
            <button className={styles.modalSubmit} type="submit" disabled={busy}>{busy ? 'SUBMITTING…' : 'REGISTER NOW'}</button>
          </form>
        </>}
      </section>
    </div>}
    <section id="registration-form" className={styles.section} aria-labelledby="registration-title">
      <div className={styles.card}>
        {done ? (
          <div className={styles.thanks}>
            <p className={styles.session}>1:1 Neuro Mind Session</p>
            <h2>Thank You for Submitting This Form!</h2>
            <h3>Dr. Dipti Panhalkar</h3>
            <p>Thank you for your interest in a session with Dr. Dipti Panhalkar. Your details have been received. Connect with us on WhatsApp for further information and next steps.</p>
            <a className={styles.whatsapp} href={whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <div className={styles.groupCta}>
              <p>Join our WhatsApp group for session updates, guidance, and related information.</p>
              <a className={styles.groupButton} href={group} target="_blank" rel="noopener noreferrer">Join the Session Group</a>
            </div>
          </div>
        ) : (
          <>
            <p className={styles.session}>1:1 Neuro Mind Session</p>
            <h2 id="registration-title">Book Your First One-on-One Personal Mind Coaching Session with<br /><span>Dr. Dipti Panhalkar</span></h2>
            <p className={styles.doctorRole}>Psychologist &amp; Mind Coach</p>
            <p className={styles.meta}>Online via Zoom</p>
            <form onSubmit={handleSubmit} noValidate>
              <fieldset className={styles.details}>
                <legend>Your Details <span>* Required</span></legend>
                <div className={styles.grid}>
                  <label>Full Name <b aria-hidden="true">*</b>
                    <input name="full_name" type="text" placeholder="Enter your full name" autoComplete="name" required minLength={2} maxLength={120} aria-invalid={!!fieldErrors.full_name} aria-describedby={fieldErrors.full_name ? 'full-name-error' : undefined} />
                    {fieldErrors.full_name && <small id="full-name-error" className={styles.fieldError}>{fieldErrors.full_name}</small>}
                  </label>
                  <label>Phone No. <b aria-hidden="true">*</b>
                    <input name="phone" type="tel" placeholder="e.g. +91 98765 43210" autoComplete="tel" required pattern="\+?[0-9\s().-]{7,20}" aria-invalid={!!fieldErrors.phone} aria-describedby={fieldErrors.phone ? 'phone-error' : undefined} />
                    {fieldErrors.phone && <small id="phone-error" className={styles.fieldError}>{fieldErrors.phone}</small>}
                  </label>
                  <label>Select Your Profession <b aria-hidden="true">*</b>
                    <select name="profession" defaultValue="" required aria-invalid={!!fieldErrors.profession} aria-describedby={fieldErrors.profession ? 'profession-error' : undefined}>
                      <option value="" disabled>Select your profession</option>
                      {professions.map((profession) => <option key={profession}>{profession}</option>)}
                    </select>
                    {fieldErrors.profession && <small id="profession-error" className={styles.fieldError}>{fieldErrors.profession}</small>}
                  </label>
                  <label>Location
                    <input name="location" type="text" placeholder="Your city / location" autoComplete="address-level2" maxLength={120} aria-invalid={!!fieldErrors.location} aria-describedby={fieldErrors.location ? 'location-error' : undefined} />
                    {fieldErrors.location && <small id="location-error" className={styles.fieldError}>{fieldErrors.location}</small>}
                  </label>
                </div>
              </fieldset>
              <fieldset className={styles.interest}>
                <legend>How serious are you about joining the one-on-one session? <b aria-hidden="true">*</b></legend>
                <div className={styles.choices}>
                  {interestOptions.map((option) => (
                    <label className={styles.choice} key={option.value}>
                      <input type="radio" name="seriousness" value={option.value} required aria-invalid={!!fieldErrors.seriousness} aria-describedby={fieldErrors.seriousness ? 'seriousness-error' : undefined} />
                      <span><strong>{option.title}</strong><small>{option.detail}</small></span>
                    </label>
                  ))}
                </div>
                {fieldErrors.seriousness && <small id="seriousness-error" className={styles.fieldError} role="alert">{fieldErrors.seriousness}</small>}
              </fieldset>
              {error && <p className={styles.error} role="alert">{error}</p>}
              <button className={styles.submit} type="submit" disabled={busy}>{busy ? 'SUBMITTING…' : 'SUBMIT'}</button>
              <p className={styles.privacy}>By submitting this form, you agree to our <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and consent to being contacted regarding your session enquiry.</p>
            </form>
          </>
        )}
      </div>
    </section>
    </>
  );
}
