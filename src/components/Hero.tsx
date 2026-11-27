import React, { useState } from 'react';
import { Sparkles, Flame, Calendar, Play, HeartPulse, Trophy } from 'lucide-react';

interface HeroSectionProps {
  onBookTrial?: () => void;
  memberCount?: number;
  calBurned?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookTrial,
  memberCount = 2450,
  calBurned = 780,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookTrial = () => {
    if (onBookTrial) {
      onBookTrial();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="relative pt-8 sm:pt-16 pb-16 sm:pb-28 md:pt-20 md:pb-32 overflow-hidden z-10 bg-[#090909] text-white">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F5D21B]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#EA8C1E]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#141414] border border-[#E5B822]/30 text-[10px] sm:text-xs font-bold tracking-widest text-[#F5D21B] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(245,210,27,0.12)]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse text-[#EA8C1E]" />
              <span>ALWAYS FIT • HYBRID ATHLETIC FACILITY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] italic">
              FORGE YOUR <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F5D21B] via-[#E5B822] to-[#EA8C1E] drop-shadow-[0_0_30px_rgba(234,140,30,0.3)]">
                ULTIMATE
              </span> <br />
              SELF.
            </h1>

            <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed px-2 sm:px-0">
              High-octane HIIT, elite strength conditioning, and infrared recovery protocols. Designed for those who demand peak physical output.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={handleBookTrial}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] text-[#090909] font-black text-xs sm:text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(234,140,30,0.4)] hover:shadow-[0_0_45px_rgba(245,210,27,0.65)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                Book A Free Trial
              </button>
              <a
                href="#schedule"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141414] hover:bg-[#1c1c1c] border border-[#E5B822]/25 hover:border-[#F5D21B]/60 text-white font-bold text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-[#EA8C1E] group-hover:scale-110 transition-transform" />
                View Class Schedule
              </a>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-[#E5B822]/20 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-2 sm:p-0">
                <div className="text-xl sm:text-3xl lg:text-4xl font-black text-white italic tracking-tight">
                  {memberCount.toLocaleString()}+
                </div>
                <div className="text-[10px] sm:text-xs uppercase text-neutral-400 font-semibold tracking-wider mt-0.5 sm:mt-1">
                  Active Athletes
                </div>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-xl sm:text-3xl lg:text-4xl font-black text-[#F5D21B] italic tracking-tight">
                  {calBurned} kcal
                </div>
                <div className="text-[10px] sm:text-xs uppercase text-neutral-400 font-semibold tracking-wider mt-0.5 sm:mt-1">
                  Avg Session Burn
                </div>
              </div>
              <div className="p-2 sm:p-0">
                <div className="text-xl sm:text-3xl lg:text-4xl font-black text-[#EA8C1E] italic tracking-tight">
                  99.4%
                </div>
                <div className="text-[10px] sm:text-xs uppercase text-neutral-400 font-semibold tracking-wider mt-0.5 sm:mt-1">
                  Goal Success
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] opacity-30 blur-xl animate-pulse" />

              <div className="relative rounded-3xl bg-[#121212] border border-[#E5B822]/25 p-4 sm:p-6 shadow-2xl overflow-hidden group">
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-linear-to-br from-[#181818] via-[#0e0e0e] to-[#090909] flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
                    alt="High energy athletic training session"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-[#090909]/30 to-transparent" />

                  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-[#F5D21B] to-[#EA8C1E] text-[#090909] flex items-center justify-center shadow-[0_0_25px_rgba(234,140,30,0.65)] cursor-pointer hover:scale-110 active:scale-95 transition-transform">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5 sm:ml-1" />
                  </div>

                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#090909]/75 backdrop-blur-md border border-[#E5B822]/30 text-[10px] sm:text-xs font-bold text-white">
                    <span className="w-2 h-2 rounded-full bg-[#EA8C1E] animate-ping" />
                    LIVE STUDIO FEED
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] sm:text-xs text-[#F5D21B] font-black uppercase tracking-widest">
                        CURRENT SESSION
                      </p>
                      <p className="text-base sm:text-lg font-black uppercase tracking-wide text-white">
                        HYPER-LOAD HIIT
                      </p>
                    </div>
                    <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded bg-[#090909]/80 border border-[#E5B822]/25 backdrop-blur-md text-[#F5D21B] font-mono">
                      45 MIN
                    </span>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#181818] border border-[#E5B822]/15 flex items-center gap-2.5 sm:gap-3">
                    <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5D21B] shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-bold text-white truncate">BIO-METRIC</div>
                      <div className="text-[9px] sm:text-[10px] text-neutral-400 truncate">Live Heart Analytics</div>
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#181818] border border-[#EA8C1E]/20 flex items-center gap-2.5 sm:gap-3">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA8C1E] shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] sm:text-xs font-bold text-white truncate">PRO COACHES</div>
                      <div className="text-[9px] sm:text-[10px] text-neutral-400 truncate">Olympic Standard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#141414] border border-[#E5B822]/30 p-6 text-white shadow-2xl">
            <h2 className="text-xl font-black uppercase tracking-wide text-[#F5D21B]">
              Book A Free Trial
            </h2>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Reserve your trial session at the facility. Our team will confirm your preferred slot.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#090909] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;