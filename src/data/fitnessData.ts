import type { ClassItem,Trainer,FAQItem,PricingTier } from '../types/index'
export const CLASSES_DATA: ClassItem[] = [
  { day: 'Monday', time: '06:00 AM', name: 'HYPER HIIT', category: 'HIIT', trainer: 'Alex Vance', intensity: 'Maximum', spotsLeft: 3 },
  { day: 'Monday', time: '07:30 AM', name: 'IRON PUMP', category: 'Strength', trainer: 'Marcus Steel', intensity: 'High', spotsLeft: 5 },
  { day: 'Monday', time: '12:00 PM', name: 'SHADOW BOXING', category: 'Boxing', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 2 },
  { day: 'Monday', time: '05:30 PM', name: 'THERMAL FLOW', category: 'Recovery', trainer: 'Maya Lin', intensity: 'Low', spotsLeft: 8 },

  { day: 'Tuesday', time: '06:30 AM', name: 'METABOLIC BLAST', category: 'HIIT', trainer: 'Alex Vance', intensity: 'Maximum', spotsLeft: 4 },
  { day: 'Tuesday', time: '09:00 AM', name: 'HEAVY COMPOUND', category: 'Strength', trainer: 'Marcus Steel', intensity: 'Maximum', spotsLeft: 1 },
  { day: 'Tuesday', time: '05:00 PM', name: 'KNOCKOUT ROUNDS', category: 'Boxing', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 6 },
  { day: 'Tuesday', time: '06:30 PM', name: 'DEEP TISSUE MOBILITY', category: 'Recovery', trainer: 'Maya Lin', intensity: 'Low', spotsLeft: 10 },

  { day: 'Wednesday', time: '06:00 AM', name: 'TABATA SHOCK', category: 'HIIT', trainer: 'Alex Vance', intensity: 'Maximum', spotsLeft: 2 },
  { day: 'Wednesday', time: '08:00 AM', name: 'POWER & HYPERTROPHY', category: 'Strength', trainer: 'Marcus Steel', intensity: 'High', spotsLeft: 4 },
  { day: 'Wednesday', time: '05:30 PM', name: 'FIGHT CLUB DRILLS', category: 'Boxing', trainer: 'Elena Rostova', intensity: 'Maximum', spotsLeft: 0 },
  { day: 'Wednesday', time: '07:00 PM', name: 'AMBER INFRARED YOGA', category: 'Recovery', trainer: 'Maya Lin', intensity: 'Low', spotsLeft: 6 },

  { day: 'Thursday', time: '06:30 AM', name: 'VO2 MAX SPRINT', category: 'HIIT', trainer: 'Alex Vance', intensity: 'Maximum', spotsLeft: 5 },
  { day: 'Thursday', time: '09:30 AM', name: 'SCULPT & LOAD', category: 'Strength', trainer: 'Marcus Steel', intensity: 'High', spotsLeft: 3 },
  { day: 'Thursday', time: '06:00 PM', name: 'PRO MITT WORK', category: 'Boxing', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 4 },

  { day: 'Friday', time: '06:00 AM', name: 'FRIDAY FINISHER', category: 'HIIT', trainer: 'Alex Vance', intensity: 'Maximum', spotsLeft: 1 },
  { day: 'Friday', time: '08:00 AM', name: 'DEADLIFT & OLYMPIC', category: 'Strength', trainer: 'Marcus Steel', intensity: 'Maximum', spotsLeft: 2 },
  { day: 'Friday', time: '05:00 PM', name: 'PULSE BOXING', category: 'Boxing', trainer: 'Elena Rostova', intensity: 'High', spotsLeft: 7 },

  { day: 'Saturday', time: '08:00 AM', name: 'WEEKEND WARRIOR', category: 'HIIT', trainer: 'Alex Vance', intensity: 'Maximum', spotsLeft: 2 },
  { day: 'Saturday', time: '10:00 AM', name: 'FULL BODY FORGE', category: 'Strength', trainer: 'Marcus Steel', intensity: 'High', spotsLeft: 6 },

  { day: 'Sunday', time: '09:00 AM', name: 'SUNDAY RESET HIIT', category: 'HIIT', trainer: 'Alex Vance', intensity: 'Moderate', spotsLeft: 8 },
  { day: 'Sunday', time: '11:00 AM', name: 'ACTIVE RECOVERY', category: 'Recovery', trainer: 'Maya Lin', intensity: 'Low', spotsLeft: 12 },
];

export const TRAINERS_DATA: Trainer[] = [
  {
    name: 'ALEX VANCE',
    role: 'HEAD COACH',
    specialty: 'Ex-Olympic Sprinter specializing in VO2 max expansion & HIIT.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800',
    accentColor: '#e1d400'
  },
  {
    name: 'ELENA ROSTOVA',
    role: 'COMBAT & CONDITIONING',
    specialty: 'Golden Gloves Champion specializing in heavy bag fight drills.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    accentColor: '#f2983a'
  },
  {
    name: 'MARCUS STEEL',
    role: 'STRENGTH DIRECTOR',
    specialty: 'Powerlifting specialist focused on posture, form, and raw force.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    accentColor: '#e1d400'
  },
  {
    name: 'MAYA LIN',
    role: 'RECOVERY LEAD',
    specialty: 'Physiotherapist specializing in thermal therapy and breathwork.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    accentColor: '#f2983a'
  }
];

export const PRICING_DATA: PricingTier[] = [
  {
    name: 'DROP-IN PASS',
    price: '$35',
    period: '/ Class',
    description: 'Perfect for visiting athletes or flexible schedules.',
    features: [
      'Access to any 1 Studio Session',
      'Complimentary Towel & Locker Service',
      'Heart Rate Monitor Rental'
    ],
    ctaText: 'Buy Drop-In'
  },
  {
    name: 'UNLIMITED VIP',
    price: '$229',
    period: '/ Month',
    description: 'Full access to classes, bio-metrics, and recovery suite.',
    features: [
      'Unlimited Studio Classes',
      'Unlimited Cryo & Infrared Recovery',
      'Priority 14-Day Advance Class Booking',
      '2 Free Guest Passes / Month'
    ],
    isPopular: true,
    ctaText: 'Claim VIP Pass'
  },
  {
    name: '10-CLASS PACK',
    price: '$280',
    period: '/ Pack',
    description: 'Flexible bundle valid across all disciplines for 3 months.',
    features: [
      '10 Class Credits',
      'Full Locker Room Access',
      'Valid for 90 Days'
    ],
    ctaText: 'Buy Class Pack'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    q: "What should I bring to my first trial session?",
    a: "Just wear comfortable athletic attire and indoor training sneakers. We provide heart rate bands, sweat towels, and chilled alkaline water."
  },
  {
    q: "I'm a beginner. Are these classes too intense for me?",
    a: "Not at all. Every class is designed with scalable weight loads and low-impact modifications guided by our coaches in real time."
  },
  {
    q: "How early should I arrive before my scheduled class?",
    a: "Please arrive 15 minutes prior to your first class for a brief studio tour and bio-metric band setup."
  },
  {
    q: "What is your class cancellation policy?",
    a: "You can cancel up to 12 hours before class start time without forfeiting your credit or incurring a late fee."
  }
];