import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ClassItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badgeBg: string;
  badgeTextColor: string;
  hoverBg: string;
  hoverTextColor: string;
  cardBorderHover: string;
}

const CLASSES_DATA: ClassItem[] = [
  {
    id: 'hyper-hiit',
    title: 'HYPER HIIT',
    category: 'HIIT & CARDIO',
    description:
      'High-octane sprint intervals mixed with explosive bodyweight plyometrics.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    badgeBg: 'bg-[#F5D21B]',
    badgeTextColor: 'text-[#090909]',
    hoverBg: 'hover:bg-[#F5D21B] hover:border-[#F5D21B]',
    hoverTextColor: 'hover:text-[#090909]',
    cardBorderHover: 'hover:border-[#F5D21B]/60',
  },
  {
    id: 'iron-forge',
    title: 'IRON FORGE',
    category: 'STRENGTH',
    description:
      'Heavy barbell compounds, kettlebell circuits, and progressive overload tracking.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    badgeBg: 'bg-[#EA8C1E]',
    badgeTextColor: 'text-[#090909]',
    hoverBg: 'hover:bg-[#EA8C1E] hover:border-[#EA8C1E]',
    hoverTextColor: 'hover:text-[#090909]',
    cardBorderHover: 'hover:border-[#EA8C1E]/60',
  },
  {
    id: 'shadow-boxing',
    title: 'SHADOW BOXING',
    category: 'COMBAT',
    description:
      'Heavy bag combinations, rhythm footwork, and core fight endurance.',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800',
    badgeBg: 'bg-linear-to-r from-[#F5D21B] to-[#EA8C1E]',
    badgeTextColor: 'text-[#090909]',
    hoverBg: 'hover:bg-linear-to-r hover:from-[#F5D21B] hover:to-[#EA8C1E] hover:border-[#F5D21B]',
    hoverTextColor: 'hover:text-[#090909]',
    cardBorderHover: 'hover:border-[#E5B822]/60',
  },
  {
    id: 'amber-flow',
    title: 'AMBER FLOW',
    category: 'RECOVERY',
    description:
      'Infrared heated mobility stretching followed by guided breathwork and cold plunge.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    badgeBg: 'bg-[#E5B822]',
    badgeTextColor: 'text-[#090909]',
    hoverBg: 'hover:bg-[#E5B822] hover:border-[#E5B822]',
    hoverTextColor: 'hover:text-[#090909]',
    cardBorderHover: 'hover:border-[#E5B822]/60',
  },
];

export const ClassesSection: React.FC = () => {
  const [selectedClassType, setSelectedClassType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleBookSession = (classTitle: string) => {
    setSelectedClassType(classTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClassType(null);
  };

  return (
    <section id="classes" className="relative z-10 bg-[#090909] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-16 sm:gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#EA8C1E]">
              DISCIPLINE MATRIX
            </span>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-tight italic sm:text-5xl lg:text-6xl">
              DISCOVER YOUR{' '}
              <span className="bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] bg-clip-text text-transparent">
                WORKOUT
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs text-neutral-400 sm:text-sm">
            From metabolic conditioning to targeted hypertrophy, explore our signature studio class formats.
          </p>
        </div>

        {/* Classes Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES_DATA.map((item) => (
            <div
              key={item.id}
              className={`group relative flex h-90 flex-col justify-end overflow-hidden rounded-3xl border border-[#E5B822]/20 bg-[#121212] p-6 transition-all duration-300 sm:h-105 ${item.cardBorderHover}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#090909] via-[#090909]/45 to-transparent" />
              <div className="relative z-10">
                <span
                  className={`mb-3 inline-block rounded-full ${item.badgeBg} ${item.badgeTextColor} px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md`}
                >
                  {item.category}
                </span>
                <h3 className="mb-1 text-2xl font-black uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-xs text-neutral-300">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => handleBookSession(item.title)}
                  className={`w-full cursor-pointer rounded-xl border border-[#E5B822]/25 bg-[#121212]/80 py-3 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 ${item.hoverBg} ${item.hoverTextColor}`}
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl border border-[#E5B822]/30 bg-[#121212] p-6 shadow-[0_0_50px_rgba(234,140,30,0.18)] sm:p-8">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute right-5 top-5 cursor-pointer text-neutral-400 transition-colors hover:text-[#F5D21B]"
            >
              <X className="h-6 w-6" />
            </button>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#EA8C1E]">
              RESERVATION
            </span>
            <h3 className="mt-1 text-2xl font-black uppercase italic text-white">
              BOOK{' '}
              <span className="bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] bg-clip-text text-transparent">
                {selectedClassType}
              </span>
            </h3>
            <p className="mt-2 text-xs text-neutral-400">
              Select your preferred slot to confirm your session in the discipline matrix.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                closeModal();
              }}
              className="mt-6 flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="FULL NAME"
                required
                className="w-full rounded-xl border border-[#E5B822]/20 bg-[#090909] px-4 py-3 text-xs font-bold text-white placeholder-neutral-500 transition-colors focus:border-[#F5D21B] focus:outline-none"
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full rounded-xl border border-[#E5B822]/20 bg-[#090909] px-4 py-3 text-xs font-bold text-white placeholder-neutral-500 transition-colors focus:border-[#F5D21B] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-full cursor-pointer rounded-xl bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] py-3.5 text-xs font-black uppercase tracking-widest text-[#090909] shadow-[0_0_20px_rgba(234,140,30,0.35)] transition-all hover:shadow-[0_0_30px_rgba(245,210,27,0.55)]"
              >
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClassesSection;