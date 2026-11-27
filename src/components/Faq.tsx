import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

const DEFAULT_FAQ_DATA: FAQItem[] = [
  {
    q: 'WHAT DO I NEED TO BRING TO MY FIRST SESSION?',
    a: 'Please bring a valid photo ID, comfortable workout attire, supportive training shoes, and a water bottle. We provide fresh sweat towels, locker rooms with premium toiletries, and complimentary filtered hydration stations.',
  },
  {
    q: 'HOW DO THE BIO-METRIC TELEMETRY BANDS WORK?',
    a: 'Our wearable heart rate and exertion trackers sync live with studio display monitors and your personal smartphone app. You will receive an automated performance breakdown tracking heart rate zones, caloric burn, and output points immediately following your workout.',
  },
  {
    q: 'CAN I FREEZE OR CANCEL MY MEMBERSHIP?',
    a: 'Yes. You can freeze your membership for up to 3 months per calendar year for medical or travel reasons. Cancellations require a standard 30-day notice with zero cancellation fees on open-ended monthly passes.',
  },
  {
    q: 'WHAT IS INCLUDED IN THE INFRARED RECOVERY SUITE?',
    a: 'The recovery suite features full-spectrum infrared saunas, cold plunge immersion pools, and pneumatic compression therapy boots designed to drastically accelerate neuromuscular repair and flush lactic acid.',
  },
  {
    q: 'HOW FAR IN ADVANCE CAN I BOOK STUDIO CLASSES?',
    a: 'Kinetic Elite and VIP members enjoy a 7-day priority booking window. Core Pass members can reserve classes up to 4 days in advance through our live timetable matrix or mobile app.',
  },
];

interface FAQSectionProps {
  faqData?: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqData = DEFAULT_FAQ_DATA,
}) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0); // First item open by default

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <section className="relative z-10 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#f2983a]">
            QUESTIONS
          </span>
          <h2 className="mt-1 text-3xl font-black uppercase tracking-tight sm:text-5xl">
            FAQ
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = expandedFaq === idx;

            return (
              <div 
                key={idx} 
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D12] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left text-xs font-bold uppercase tracking-wide sm:p-6 sm:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    className={`h-4 w-4 shrink-0 text-[#e1d400] transition-transform duration-300 sm:h-5 sm:w-5 ${
                      isOpen ? 'rotate-180 transform' : ''
                    }`} 
                  />
                </button>
                
                {isOpen && (
                  <div className="border-t border-white/5 px-4 pb-4 pt-3 text-xs leading-relaxed text-gray-400 sm:px-6 sm:pb-6 sm:pt-4 sm:text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;