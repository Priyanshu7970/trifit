import React, { useState } from 'react';
import { X, Award } from 'lucide-react';

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio?: string;
  certifications?: string[];
  socials?: {
    instagram?: string;
    twitter?: string;
  };
}

const DEFAULT_TRAINERS: Trainer[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'HEAD OF PERFORMANCE',
    specialty: 'Metabolic Conditioning & High-Intensity Power',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800',
    bio: 'Former collegiate sprinter with 10+ years coaching professional athletes in metabolic threshold and explosive power development.',
    certifications: ['CSCS', 'EXOS Performance Specialist', 'USA Weightlifting Level 2'],
    socials: { instagram: '#', twitter: '#' },
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'STRENGTH DIRECTOR',
    specialty: 'Hypertrophy & Progressive Overload Mechanics',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    bio: 'Competitive powerlifter specializing in biomechanics, structural strength, and injury-prevention protocols.',
    certifications: ['NASM-CPT', 'FRC Mobility Specialist', 'Starting Strength Certified'],
    socials: { instagram: '#' },
  },
  {
    id: 'jaxson-reed',
    name: 'Jaxson Reed',
    role: 'COMBAT COACH',
    specialty: 'Striking Endurance & Tactical Conditioning',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    bio: 'Golden Gloves champion focusing on fluid footwork, high-output heavy bag combinations, and fight-ready cardiovascular grit.',
    certifications: ['USA Boxing Coach', 'ISSA Combat Fitness Specialist'],
    socials: { instagram: '#', twitter: '#' },
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'RECOVERY & MOBILITY',
    specialty: 'Infrared Flow, Breathwork & Myofascial Release',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    bio: 'Dedicated to optimizing recovery velocity using thermal movement therapy, targeted breath regulation, and neuromuscular reset techniques.',
    certifications: ['E-RYT 500', 'Wim Hof Method Certified', 'Functional Movement Screen (FMS)'],
    socials: { instagram: '#' },
  },
];

// Custom inline SVGs for Social Brands omitted from Lucide
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterXIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

interface TrainersSectionProps {
  trainersData?: Trainer[];
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({
  trainersData = DEFAULT_TRAINERS,
}) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section
      id="trainers"
      className="relative z-10 border-t border-[#E5B822]/20 bg-[#090909] py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#EA8C1E]">
            ELITE COACHING
          </span>
          <h2 className="mt-1 text-3xl font-black uppercase tracking-tight italic sm:text-5xl lg:text-6xl">
            MEET THE{' '}
            <span className="bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] bg-clip-text text-transparent">
              INSTRUCTORS
            </span>
          </h2>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#E5B822]/20 bg-[#121212] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F5D21B]/60 hover:shadow-[0_10px_35px_rgba(234,140,30,0.14)]"
            >
              <div className="relative h-72 overflow-hidden sm:h-80">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-[#121212]/25 to-transparent" />
              </div>
              
              <div className="relative -mt-10 p-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F5D21B]">
                  {trainer.role}
                </span>
                <h3 className="mt-1 text-xl font-black uppercase tracking-wide text-white transition-colors group-hover:text-[#F5D21B]">
                  {trainer.name}
                </h3>
                <p className="mt-2 text-xs text-neutral-400">
                  {trainer.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Detail Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#E5B822]/30 bg-[#121212] p-6 shadow-[0_0_50px_rgba(234,140,30,0.18)] sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedTrainer(null)}
              aria-label="Close trainer profile"
              className="absolute right-5 top-5 z-10 cursor-pointer rounded-full border border-[#E5B822]/20 bg-[#090909]/80 p-2 text-neutral-400 transition-colors hover:border-[#F5D21B]/50 hover:text-[#F5D21B]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <img
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                className="h-32 w-32 shrink-0 rounded-2xl border-2 border-[#E5B822]/40 object-cover shadow-[0_0_20px_rgba(245,210,27,0.15)]"
              />
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F5D21B]">
                  {selectedTrainer.role}
                </span>
                <h3 className="text-2xl font-black uppercase italic text-white">
                  {selectedTrainer.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-400">{selectedTrainer.specialty}</p>
              </div>
            </div>

            {selectedTrainer.bio && (
              <p className="mt-6 text-xs leading-relaxed text-neutral-300">
                {selectedTrainer.bio}
              </p>
            )}

            {selectedTrainer.certifications && selectedTrainer.certifications.length > 0 && (
              <div className="mt-6 border-t border-[#E5B822]/20 pt-4">
                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#EA8C1E]">
                  <Award className="h-3.5 w-3.5" /> CERTIFICATIONS & CREDENTIALS
                </span>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {selectedTrainer.certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="rounded-lg border border-[#E5B822]/20 bg-[#181818] px-2.5 py-1 text-[10px] font-semibold text-neutral-200"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex items-center justify-between border-t border-[#E5B822]/20 pt-4">
              <div className="flex items-center gap-3">
                {selectedTrainer.socials?.instagram && (
                  <a
                    href={selectedTrainer.socials.instagram}
                    className="rounded-lg border border-[#E5B822]/15 bg-[#181818] p-2 text-neutral-400 transition-colors hover:border-[#F5D21B]/50 hover:text-[#F5D21B]"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                )}
                {selectedTrainer.socials?.twitter && (
                  <a
                    href={selectedTrainer.socials.twitter}
                    className="rounded-lg border border-[#E5B822]/15 bg-[#181818] p-2 text-neutral-400 transition-colors hover:border-[#F5D21B]/50 hover:text-[#F5D21B]"
                    aria-label="Twitter"
                  >
                    <TwitterXIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedTrainer(null)}
                className="cursor-pointer rounded-xl bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#090909] shadow-[0_0_20px_rgba(234,140,30,0.35)] transition-all hover:shadow-[0_0_30px_rgba(245,210,27,0.55)]"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainersSection;