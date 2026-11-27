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
    badgeBg: 'bg-[#e1d400]',
    badgeTextColor: 'text-black',
    hoverBg: 'hover:bg-[#e1d400]',
    hoverTextColor: 'hover:text-black',
  },
  {
    id: 'iron-forge',
    title: 'IRON FORGE',
    category: 'STRENGTH',
    description:
      'Heavy barbell compounds, kettlebell circuits, and progressive overload tracking.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    badgeBg: 'bg-[#f2983a]',
    badgeTextColor: 'text-black',
    hoverBg: 'hover:bg-[#f2983a]',
    hoverTextColor: 'hover:text-black',
  },
  {
    id: 'shadow-boxing',
    title: 'SHADOW BOXING',
    category: 'COMBAT',
    description:
      'Heavy bag combinations, rhythm footwork, and core fight endurance.',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800',
    badgeBg: 'bg-red-500',
    badgeTextColor: 'text-white',
    hoverBg: 'hover:bg-red-500',
    hoverTextColor: 'hover:text-white',
  },
  {
    id: 'amber-flow',
    title: 'AMBER FLOW',
    category: 'RECOVERY',
    description:
      'Infrared heated mobility stretching followed by guided breathwork and cold plunge.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    badgeBg: 'bg-[#f2983a]/80',
    badgeTextColor: 'text-black',
    hoverBg: 'hover:bg-[#f2983a]',
    hoverTextColor: 'hover:text-black',
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
    <section id="classes" className="relative z-10 bg-[#0D0D12] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-16 sm:gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#f2983a]">
              DISCIPLINE MATRIX
            </span>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              DISCOVER YOUR WORKOUT
            </h2>
          </div>
          <p className="max-w-md text-xs text-gray-400 sm:text-sm">
            From metabolic conditioning to targeted hypertrophy, explore our signature studio class formats.
          </p>
        </div>

        {/* Classes Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative flex h-90 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6 sm:h-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10">
                <span
                  className={`mb-3 inline-block rounded-full ${item.badgeBg} ${item.badgeTextColor} px-3 py-1 text-[10px] font-black uppercase tracking-wider`}
                >
                  {item.category}
                </span>
                <h3 className="mb-1 text-2xl font-black uppercase">
                  {item.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-xs text-gray-300">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => handleBookSession(item.title)}
                  className={`w-full rounded-xl border border-white/20 bg-white/10 py-3 text-xs font-bold uppercase tracking-wider transition-all ${item.hoverBg} ${item.hoverTextColor}`}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#14141B] p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 text-gray-400 transition-colors hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <span className="text-xs font-black uppercase tracking-widest text-[#f2983a]">
              RESERVATION
            </span>
            <h3 className="mt-1 text-2xl font-black uppercase">
              BOOK {selectedClassType}
            </h3>
            <p className="mt-2 text-xs text-gray-400">
              Select your preferred slot to confirm your session in the discipline matrix.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); closeModal(); }} className="mt-6 flex flex-col gap-4">
              <input
                type="text"
                placeholder="FULL NAME"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs font-bold text-white placeholder-gray-500 focus:border-[#f2983a] focus:outline-none"
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs font-bold text-white placeholder-gray-500 focus:border-[#f2983a] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[#f2983a] py-3 text-xs font-black uppercase tracking-wider text-black transition-opacity hover:opacity-90"
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