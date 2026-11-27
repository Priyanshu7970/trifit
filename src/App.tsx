import React, { useState } from 'react';
import {  
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles

} from 'lucide-react';
import './App.css'

import type {BookingFormData} from './types'
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ClassesSection from './components/Category';
import ClassSchedule from './components/Schedule';
import TrainersSection from './components/Trainers';
import PricingSection from './components/Membership';
import FAQSection from './components/Faq';
import CtaSection from './components/CalltoAction';
import FooterSection from './components/FooterSection';

export default function App() {
  // Modal State for Free Trial
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalStep, setModalStep] = useState<number>(1);
  const [selectedClassType, setSelectedClassType] = useState<string>('HYPER HIIT');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('07:00 AM');
  const [formData, setFormData] = useState<BookingFormData>({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);


  const handleBookingSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetModal = (): void => {
    setIsModalOpen(false);
    setModalStep(1);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
  };

 

  return (
    <div className=" bg-[#08080A] text-white font-sans selection:bg-[#e1d400] selection:text-black">
      

      {/* NAVIGATION BAR */}


      <Navbar setIsModalOpen={setIsModalOpen} />
      {/* HERO SECTION */}
      <HeroSection/>

      {/* FEATURED EXPERIENCE HIGHLIGHTS - About Section */}
      <AboutSection/>

      {/* CLASS CATEGORY SHOWCASE */}
      <ClassesSection/>

      {/* INTERACTIVE CLASS SCHEDULE SECTION */}
      <ClassSchedule/>

      {/* TRAINERS SHOWCASE */}
      <TrainersSection/>

      {/* MEMBERSHIP PRICING TIERS */}
      <PricingSection/>

      {/* FREQUENTLY ASKED QUESTIONS */}
     <FAQSection/>

      {/* BOTTOM HIGH-ENERGY CTA BANNER */}
      <CtaSection/>

      {/* FOOTER */}
      <FooterSection/>

      {/* BOOKING MODAL DIALOG */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#121216] border border-white/20 rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden my-auto">
            
            {/* Modal Close Button */}
            <button 
              onClick={resetModal}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white active:scale-95 transition-transform"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase text-[#e1d400] tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  FREE TRIAL PASS
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-5 sm:mb-6">
                  {modalStep === 1 ? 'Select Workout & Time' : 'Athlete Details'}
                </h3>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  
                  {modalStep === 1 ? (
                    <>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Class Discipline</label>
                        <select 
                          value={selectedClassType}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedClassType(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-[#e1d400]"
                        >
                          <option value="HYPER HIIT" className="bg-black">HYPER HIIT (Cardio & Sprints)</option>
                          <option value="IRON FORGE" className="bg-black">IRON FORGE (Strength & Barbell)</option>
                          <option value="SHADOW BOXING" className="bg-black">SHADOW BOXING (Heavy Bag)</option>
                          <option value="AMBER FLOW" className="bg-black">AMBER FLOW (Recovery & Plunge)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2">Preferred Time Slot</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {['06:00 AM', '07:30 AM', '12:00 PM', '05:30 PM', '06:30 PM', '07:30 PM'].map((time: string) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTimeSlot(time)}
                              className={`py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                                selectedTimeSlot === time 
                                  ? 'bg-[#e1d400] text-black shadow-[0_0_15px_rgba(225,212,0,0.4)]'
                                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setModalStep(2)}
                        className="mt-6 w-full py-3.5 sm:py-4 rounded-xl bg-[#e1d400] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(225,212,0,0.4)] hover:shadow-[0_0_30px_rgba(225,212,0,0.6)] active:scale-98 transition-all flex items-center justify-center gap-2"
                      >
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Full Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Alex Mercer"
                          value={formData.name}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-[#e1d400]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          required
                          placeholder="alex@example.com"
                          value={formData.email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-[#e1d400]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Mobile Phone</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-[#e1d400]"
                        />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setModalStep(1)}
                          className="w-1/3 py-3.5 sm:py-4 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="w-2/3 py-3.5 sm:py-4 rounded-xl bg-[#e1d400] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(225,212,0,0.4)] hover:shadow-[0_0_30px_rgba(225,212,0,0.6)] active:scale-98 transition-all"
                        >
                          Confirm Pass
                        </button>
                      </div>
                    </>
                  )}

                </form>
              </div>
            ) : (
              <div className="text-center py-4 sm:py-6 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e1d400]/20 text-[#e1d400] border border-[#e1d400] rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(225,212,0,0.4)]">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">YOU'RE BOOKED!</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  We sent a confirmation pass for <span className="text-[#e1d400] font-bold">{selectedClassType}</span> at <span className="text-[#e1d400] font-bold">{selectedTimeSlot}</span> to <span className="text-white font-semibold">{formData.email}</span>.
                </p>
                <button
                  onClick={resetModal}
                  className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all"
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}