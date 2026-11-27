import React from 'react';
import { Flame, Activity, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: 'yellow' | 'orange';
  className?: string;
}

const features: Feature[] = [
  {
    id: 'atmospheric-energy',
    icon: Flame,
    title: 'ATMOSPHERIC ENERGY',
    description:
      'Custom soundscapes, state-of-the-art concert lighting, and high-intensity bio-feedback telemetry built to push past limits.',
    accentColor: 'yellow',
  },
  {
    id: 'data-driven-results',
    icon: Activity,
    title: 'DATA-DRIVEN RESULTS',
    description:
      'Track heart rate zones, caloric expenditure, and output metrics synced live to your phone after every sweat session.',
    accentColor: 'orange',
  },
  {
    id: 'infrared-recovery',
    icon: ShieldCheck,
    title: 'INFRARED RECOVERY',
    description:
      'Post-workout cold plunge pools, infrared saunas, and compression therapy pods to ensure rapid daily neuromuscular rebuild.',
    accentColor: 'yellow',
    className: 'sm:col-span-2 lg:col-span-1',
  },
];

const colorStyles = {
  yellow: {
    borderHover: 'hover:border-[#F5D21B]/60',
    shadowHover: 'hover:shadow-[0_10px_35px_rgba(245,210,27,0.12)]',
    iconBg: 'bg-[#F5D21B]/10',
    iconBorder: 'border-[#E5B822]/30',
    iconText: 'text-[#F5D21B]',
    iconHoverBg: 'group-hover:bg-[#F5D21B]',
    topGlow: 'from-transparent via-[#F5D21B]/60 to-transparent',
  },
  orange: {
    borderHover: 'hover:border-[#EA8C1E]/60',
    shadowHover: 'hover:shadow-[0_10px_35px_rgba(234,140,30,0.14)]',
    iconBg: 'bg-[#EA8C1E]/10',
    iconBorder: 'border-[#EA8C1E]/35',
    iconText: 'text-[#EA8C1E]',
    iconHoverBg: 'group-hover:bg-[#EA8C1E]',
    topGlow: 'from-transparent via-[#EA8C1E]/60 to-transparent',
  },
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative z-10 border-y border-[#E5B822]/20 bg-[#0d0d0d] py-16 text-white sm:py-20 overflow-hidden"
    >
      {/* Subtle Ambient Gold/Amber Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-xl h-72 rounded-full bg-[#EA8C1E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="mb-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#EA8C1E]">
            WHY TRIFIT
          </h2>
          <p className="text-2xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl italic">
            ENGINEERED FOR{' '}
            <span className="bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] bg-clip-text text-transparent">
              PEAK HUMAN
            </span>{' '}
            PERFORMANCE
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            const style = colorStyles[feature.accentColor];

            return (
              <div
                key={feature.id}
                className={`group relative overflow-hidden rounded-3xl border border-[#E5B822]/15 bg-[#090909] p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${style.borderHover} ${style.shadowHover} ${feature.className || ''}`}
              >
                {/* Top Edge Accent Line on Hover */}
                <div
                  className={`absolute inset-x-8 top-0 h-[1.5px] bg-linear-to-r ${style.topGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors duration-300 sm:mb-6 sm:h-14 sm:w-14 ${style.iconBg} ${style.iconBorder} ${style.iconText} ${style.iconHoverBg} group-hover:text-[#090909]`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="mb-2 text-lg font-extrabold uppercase tracking-wider text-white sm:mb-3 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-400 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;