export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type ClassCategory = 'All' | 'HIIT' | 'Strength' | 'Boxing' | 'Recovery';
export type IntensityLevel = 'Maximum' | 'High' | 'Moderate' | 'Low';

export interface ClassItem {
  day: DayOfWeek;
  time: string;
  name: string;
  category: Exclude<ClassCategory, 'All'>;
  trainer: string;
  intensity: IntensityLevel;
  spotsLeft: number;
}

export interface Trainer {
  name: string;
  role: string;
  specialty: string;
  image: string;
  accentColor: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
}