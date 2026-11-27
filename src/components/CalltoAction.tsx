import React, { useState } from 'react';
import { X } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative z-10 overflow-hidden border-t border-[#E58822]/20 bg-[#090806] bg-linear-to-r from-[#F5D01E]/10 via-[#090806] to-[#E58822]/15 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-black italic uppercase tracking-tight text-white sm:mb-6 sm:text-6xl lg:text-7xl">
          READY TO BREAK YOUR <span className="text-[#F5D01E]">LIMITS?</span>
        </h2>
        
        {/* Description */}
        <p className="mx-auto mb-6 max-w-xl px-2 text-xs text-stone-300 sm:mb-8 sm:text-base">
          Your first trial session is completely free. Experience the atmosphere, coaching, and strength floor at TriFit today.
        </p>
        
        {/* CTA Button */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="w-full transform rounded-full bg-linear-to-r from-[#F5D01E] via-[#ECA91E] to-[#E58822] px-8 py-4 text-xs font-black uppercase tracking-widest text-black shadow-[0_0_35px_rgba(245,208,30,0.4)] transition-all hover:scale-105 hover:brightness-110 hover:shadow-[0_0_50px_rgba(229,136,34,0.7)] active:scale-95 sm:w-auto sm:px-10 sm:py-5 sm:text-sm"
        >
          Claim Free Trial Pass Now
        </button>
      </div>

      {/* Free Trial Pass Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl border border-[#E58822]/40 bg-[#14120E] p-6 shadow-[0_0_50px_rgba(229,136,34,0.15)] sm:p-8">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-5 top-5 text-stone-400 transition-colors hover:text-[#F5D01E]"
            >
              <X className="h-6 w-6" />
            </button>
            <span className="text-xs font-black uppercase tracking-widest text-[#E58822]">
              ALWAYS FIT WITH TRIFIT
            </span>
            <h3 className="mt-1 text-2xl font-black uppercase text-white">
              CLAIM FREE TRIAL PASS
            </h3>
            <p className="mt-2 text-xs text-stone-400">
              Enter your details below to activate your free trial session pass instantly.
            </p>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Your TriFit free trial pass has been claimed! Check your email for details.');
                handleCloseModal(); 
              }} 
              className="mt-6 flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="FULL NAME"
                required
                className="w-full rounded-xl border border-[#E58822]/25 bg-black/60 px-4 py-3 text-xs font-bold text-white placeholder-stone-500 focus:border-[#F5D01E] focus:outline-none"
              />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full rounded-xl border border-[#E58822]/25 bg-black/60 px-4 py-3 text-xs font-bold text-white placeholder-stone-500 focus:border-[#F5D01E] focus:outline-none"
              />
              <input
                type="tel"
                placeholder="PHONE NUMBER"
                required
                className="w-full rounded-xl border border-[#E58822]/25 bg-black/60 px-4 py-3 text-xs font-bold text-white placeholder-stone-500 focus:border-[#F5D01E] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-linear-to-r from-[#F5D01E] to-[#E58822] py-3 text-xs font-black uppercase tracking-wider text-black transition-all hover:brightness-110"
              >
                GET MY FREE PASS
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CtaSection;