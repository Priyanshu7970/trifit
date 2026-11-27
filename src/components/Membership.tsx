import React, { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

const DEFAULT_PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'CORE PASS',
    description: 'Essential access to open gym floor and standard strength equipment.',
    price: '$99',
    period: '/ MONTH',
    features: [
      'Full open gym floor access',
      'Locker room & infrared sauna access',
      'Basic bio-metric app sync',
      '2 guest passes per month',
    ],
    ctaText: 'START CORE PASS',
  },
  {
    id: 'unlimited',
    name: 'TRIFIT ELITE',
    description: 'Unlimited access to all studio classes, recovery pods, and live telemetry.',
    price: '$189',
    period: '/ MONTH',
    features: [
      'Unlimited studio classes (HIIT, Iron, Combat)',
      'Unlimited infrared recovery & cold plunge',
      'Real-time heart rate zone telemetry',
      'Priority booking window (7 days early)',
      'Unlimited guest passes',
    ],
    isPopular: true,
    ctaText: 'CLAIM ELITE STATUS',
  },
  {
    id: 'vip',
    name: 'FOUNDER VIP',
    description: 'The ultimate bespoke performance experience with dedicated 1-on-1 coaching.',
    price: '$349',
    period: '/ MONTH',
    features: [
      'All TriFit Elite privileges',
      '2 monthly 1-on-1 sessions with Master Coach',
      'Custom macro & nutritional blueprint',
      'Dedicated locker & laundry service',
      'Exclusive VIP lounge access',
    ],
    ctaText: 'APPLY FOR VIP',
  },
];

interface PricingSectionProps {
  pricingTiers?: PricingTier[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  pricingTiers = DEFAULT_PRICING_TIERS,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const handleOpenCheckout = (tier: PricingTier) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTier(null);
  };

  return (
    <section id="pricing" className="relative z-10 border-t border-[#E58822]/20 bg-[#090806] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#F5D01E]">
            ALWAYS FIT WITH TRIFIT
          </span>
          <h2 className="mt-1 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            CHOOSE YOUR INTENSITY
          </h2>
          <p className="mt-2 text-xs text-stone-400 sm:mt-3 sm:text-sm">
            No long-term commitments. Cancel anytime with a 30-day notice.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col justify-between rounded-3xl bg-[#11100C] p-6 transition-all sm:p-8 ${
                tier.isPopular 
                  ? 'border-2 border-[#F5D01E] shadow-[0_0_45px_rgba(229,136,34,0.2)] md:-translate-y-2' 
                  : 'border border-[#E58822]/20 hover:border-[#E58822]/60'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-[#F5D01E] to-[#E58822] px-4 py-1 text-[9px] font-black uppercase tracking-widest text-black shadow-md sm:text-[10px]">
                  MOST POPULAR
                </div>
              )}
              
              <div>
                <h3 className="mb-2 mt-2 text-lg font-black uppercase tracking-wider text-white sm:mt-0 sm:text-xl">
                  {tier.name}
                </h3>
                <p className="mb-6 text-xs text-stone-400">{tier.description}</p>
                <div className="mb-6 flex items-baseline gap-1 sm:mb-8">
                  <span className={`text-3xl font-black sm:text-5xl ${tier.isPopular ? 'text-[#F5D01E]' : 'text-white'}`}>
                    {tier.price}
                  </span>
                  <span className="text-xs font-bold uppercase text-stone-500">{tier.period}</span>
                </div>
                <ul className="space-y-3 text-xs text-stone-300 sm:space-y-4">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <CheckCircle2 
                        className={`h-4 w-4 shrink-0 ${
                          tier.isPopular ? 'text-[#F5D01E]' : 'text-[#E58822]'
                        }`} 
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                type="button"
                onClick={() => handleOpenCheckout(tier)}
                className={`mt-6 w-full rounded-2xl py-3.5 text-xs font-black uppercase tracking-widest transition-all sm:mt-8 sm:py-4 ${
                  tier.isPopular 
                    ? 'bg-linear-to-r from-[#F5D01E] via-[#ECA91E] to-[#E58822] text-black shadow-[0_0_25px_rgba(245,208,30,0.35)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(229,136,34,0.6)]' 
                    : 'border border-[#E58822]/30 bg-[#1B1812] text-[#F5D01E] hover:border-[#F5D01E] hover:bg-[#E58822] hover:text-black'
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout / Registration Modal */}
      {isModalOpen && selectedTier && (
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
              MEMBERSHIP ACTIVATION
            </span>
            <h3 className="mt-1 text-2xl font-black uppercase text-white">
              {selectedTier.name}
            </h3>
            <p className="mt-1 font-mono text-xs font-bold text-[#F5D01E]">
              {selectedTier.price} {selectedTier.period}
            </p>
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert(`Successfully enrolled in ${selectedTier.name}! Always Fit With TriFit.`);
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
                type="text"
                placeholder="CARD INFORMATION"
                required
                className="w-full rounded-xl border border-[#E58822]/25 bg-black/60 px-4 py-3 text-xs font-bold text-white placeholder-stone-500 focus:border-[#F5D01E] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-linear-to-r from-[#F5D01E] to-[#E58822] py-3 text-xs font-black uppercase tracking-wider text-black transition-all hover:brightness-110"
              >
                CONFIRM MEMBERSHIP
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;