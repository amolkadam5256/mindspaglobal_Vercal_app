'use client';
import { useEffect, useState } from 'react';
import { UserCheck } from 'lucide-react';
import styles from './SocialProofToast.module.css';

const notifications = [
  { name: 'Priya S.', city: 'Mumbai', time: '2 min ago' },
  { name: 'Rahul M.', city: 'Pune', time: '4 min ago' },
  { name: 'Ananya K.', city: 'Bangalore', time: '6 min ago' },
  { name: 'Sneha T.', city: 'Delhi', time: '8 min ago' },
  { name: 'Vikram J.', city: 'Hyderabad', time: '10 min ago' },
  { name: 'Neha R.', city: 'Chennai', time: '12 min ago' },
  { name: 'Arjun P.', city: 'Ahmedabad', time: '14 min ago' },
  { name: 'Meera L.', city: 'Kolkata', time: '16 min ago' },
  { name: 'Suresh B.', city: 'Nagpur', time: '18 min ago' },
  { name: 'Kavitha N.', city: 'Coimbatore', time: '20 min ago' },
  { name: 'Rohan D.', city: 'Surat', time: '22 min ago' },
  { name: 'Pooja W.', city: 'Jaipur', time: '24 min ago' },
  { name: 'Amit C.', city: 'Lucknow', time: '26 min ago' },
  { name: 'Divya M.', city: 'Indore', time: '28 min ago' },
  { name: 'Kiran S.', city: 'Bhopal', time: '30 min ago' },
  { name: 'Ritu G.', city: 'Vadodara', time: '32 min ago' },
  { name: 'Nikhil V.', city: 'Nashik', time: '34 min ago' },
  { name: 'Shalini A.', city: 'Patna', time: '36 min ago' },
  { name: 'Deepak R.', city: 'Chandigarh', time: '38 min ago' },
  { name: 'Ankita B.', city: 'Bhubaneswar', time: '40 min ago' },
  { name: 'Manoj K.', city: 'Kochi', time: '42 min ago' },
  { name: 'Sunita P.', city: 'Thiruvananthapuram', time: '45 min ago' },
  { name: 'Gaurav T.', city: 'Amritsar', time: '47 min ago' },
  { name: 'Pallavi S.', city: 'Visakhapatnam', time: '49 min ago' },
  { name: 'Sanjay H.', city: 'Rajkot', time: '51 min ago' },
  { name: 'Preeti J.', city: 'Aurangabad', time: '53 min ago' },
  { name: 'Varun N.', city: 'Madurai', time: '55 min ago' },
  { name: 'Shweta M.', city: 'Mysore', time: '57 min ago' },
  { name: 'Aakash L.', city: 'Ranchi', time: '59 min ago' },
  { name: 'Tejal D.', city: 'Jodhpur', time: '61 min ago' },
];

export default function SocialProofToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);

  useEffect(() => {
    let index = 0;
    let initialDelay: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const show = () => {
      setCurrent(index % notifications.length);
      setVisible(true);
      // Hide after 5s
      setTimeout(() => setVisible(false), 5000);
      index++;
    };

    initialDelay = setTimeout(show, 8000);
    interval = setInterval(show, 20000);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const handleStart = (clientX: number) => {
    setTouchStartX(clientX);
    setTouchCurrentX(null);
  };

  const handleMove = (clientX: number) => {
    if (touchStartX === null) return;
    setTouchCurrentX(clientX);
  };

  const handleEnd = () => {
    if (touchStartX !== null && touchCurrentX !== null) {
      const deltaX = touchCurrentX - touchStartX;
      // If swiped left by more than 40px, dismiss
      if (deltaX < -40) {
        setVisible(false);
      }
    }
    setTouchStartX(null);
    setTouchCurrentX(null);
  };

  if (current === null) return null;
  const n = notifications[current];

  let transformStyle = {};
  if (touchStartX !== null && touchCurrentX !== null) {
    const deltaX = touchCurrentX - touchStartX;
    if (deltaX < 0) {
      // Apply translation immediately during drag
      transformStyle = { transform: `translateX(${deltaX}px)`, transition: 'none' };
    }
  }

  return (
    <div 
      className={`${styles.toast} ${visible ? styles.show : ''}`} 
      role="status" aria-live="polite" aria-atomic="true"
      onTouchStart={(e) => handleStart(e.targetTouches[0].clientX)}
      onTouchMove={(e) => handleMove(e.targetTouches[0].clientX)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      style={transformStyle}
    >
      <div className={styles.avatar}>
        <UserCheck size={20} color="#60c8f5" />
      </div>
      <div className={styles.content}>
        <p className={styles.title}><strong>{n.name}</strong> from {n.city} just booked!</p>
        <p className={styles.time}>🔥 {n.time}</p>
      </div>
    </div>
  );
}
