'use client';

import { useState } from 'react';
import { Clock, User } from 'lucide-react';

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type ClassCategory = 'All' | 'Strength' | 'Cardio' | 'HIIT' | 'Yoga';

interface ClassItem {
  id: string;
  name: string;
  time: string;
  day: DayOfWeek;
  category: ClassCategory | string;
  intensity: 'Maximum' | 'High' | 'Moderate';
  trainer: string;
  spotsLeft: number;
}

const DAYS: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const CATEGORIES: ClassCategory[] = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga'];

const SAMPLE_SCHEDULE: ClassItem[] = [
  {
    id: '1',
    name: 'Metabolic Inferno',
    time: '06:00 AM - 07:00 AM',
    day: 'Monday',
    category: 'HIIT',
    intensity: 'Maximum',
    trainer: 'Alex Vance',
    spotsLeft: 3,
  },
  {
    id: '2',
    name: 'Iron Foundation',
    time: '08:30 AM - 09:30 AM',
    day: 'Monday',
    category: 'Strength',
    intensity: 'High',
    trainer: 'Sarah Jenkins',
    spotsLeft: 0,
  },
  {
    id: '3',
    name: 'Power Vinyasa',
    time: '05:30 PM - 06:30 PM',
    day: 'Monday',
    category: 'Yoga',
    intensity: 'Moderate',
    trainer: 'Elena Rostova',
    spotsLeft: 5,
  },
  {
    id: '4',
    name: 'Sprint & Engine',
    time: '07:00 AM - 08:00 AM',
    day: 'Tuesday',
    category: 'Cardio',
    intensity: 'Maximum',
    trainer: 'Marcus Reed',
    spotsLeft: 2,
  },
  {
    id: '5',
    name: 'Hypertrophy Lab',
    time: '06:00 PM - 07:15 PM',
    day: 'Tuesday',
    category: 'Strength',
    intensity: 'High',
    trainer: 'Alex Vance',
    spotsLeft: 4,
  },
  // Add additional classes for other days as needed
];

export default function ClassSchedule() {
  const [activeDay, setActiveDay] = useState<DayOfWeek>('Monday');
  const [activeCategory, setActiveCategory] = useState<ClassCategory>('All');
  
  const [selectedClassType, setSelectedClassType] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Filter schedule based on selected day and category
  const filteredSchedule = SAMPLE_SCHEDULE.filter((item) => {
    const matchesDay = item.day === activeDay;
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <section
      id="schedule"
      className="relative z-10 border-t border-[#E5B822]/20 bg-[#0d0d0d] py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#EA8C1E]">
            LIVE TIMETABLE
          </span>
          <h2 className="mt-1 text-3xl font-black uppercase tracking-tight italic sm:text-5xl lg:text-6xl">
            CLASS{' '}
            <span className="bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] bg-clip-text text-transparent">
              SCHEDULE
            </span>
          </h2>
          <p className="mt-2 text-xs text-neutral-400 sm:mt-3 sm:text-sm">
            Filter by day and workout type to secure your spot.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="mb-8 space-y-4 sm:mb-10 sm:space-y-6">
          
          {/* Day Selector Tabs */}
          <div className="scrollbar-none flex items-center justify-start gap-2 overflow-x-auto px-1 pb-2 sm:justify-center">
            {DAYS.map((day: DayOfWeek) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`cursor-pointer whitespace-nowrap rounded-2xl px-4 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 sm:px-5 sm:py-3 sm:text-xs ${
                  activeDay === day
                    ? 'scale-105 bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] text-[#090909] shadow-[0_0_20px_rgba(234,140,30,0.4)]'
                    : 'border border-[#E5B822]/15 bg-[#141414] text-neutral-400 hover:border-[#E5B822]/40 hover:bg-[#1a1a1a] hover:text-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat: ClassCategory) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-full px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider transition-all sm:text-[11px] ${
                  activeCategory === cat
                    ? 'bg-[#F5D21B] text-[#090909] shadow-[0_0_12px_rgba(245,210,27,0.3)]'
                    : 'border border-[#E5B822]/15 bg-[#141414] text-neutral-400 hover:border-[#E5B822]/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Schedule List Cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3.5 sm:gap-4">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((item: ClassItem) => (
              <div 
                key={item.id}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-[#E5B822]/15 bg-[#090909] p-4 transition-all duration-300 hover:border-[#F5D21B]/50 hover:shadow-[0_6px_28px_rgba(234,140,30,0.12)] sm:flex-row sm:items-center sm:p-5"
              >
                <div className="flex items-start gap-3.5 sm:items-center sm:gap-4">
                  <div className="flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E5B822]/20 bg-[#141414] p-2.5 font-mono text-xs font-bold text-[#F5D21B] sm:gap-2 sm:p-3 sm:text-sm">
                    <Clock className="h-3.5 w-3.5 text-[#EA8C1E] sm:h-4 sm:w-4" />
                    {item.time}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="truncate text-base font-black uppercase tracking-wide text-white transition-colors group-hover:text-[#F5D21B] sm:text-lg">
                        {item.name}
                      </h4>
                      <span
                        className={`shrink-0 rounded px-2 py-0.5 text-[9px] font-extrabold uppercase sm:text-[10px] ${
                          item.intensity === 'Maximum'
                            ? 'border border-[#EA8C1E]/40 bg-[#EA8C1E]/20 text-[#EA8C1E]'
                            : item.intensity === 'High'
                            ? 'border border-[#F5D21B]/35 bg-[#F5D21B]/15 text-[#F5D21B]'
                            : 'border border-neutral-600/40 bg-neutral-800/80 text-neutral-300'
                        }`}
                      >
                        {item.intensity}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1 truncate">
                        <User className="h-3 w-3 shrink-0 text-[#E5B822]/70" />
                        {item.trainer}
                      </span>
                      <span className="text-neutral-600">•</span>
                      <span className="text-neutral-300">{item.category}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[#E5B822]/15 pt-3 sm:justify-end sm:border-t-0 sm:pt-0">
                  <div className="font-mono text-xs text-neutral-400">
                    {item.spotsLeft > 0 ? (
                      <span className="font-bold text-[#F5D21B]">{item.spotsLeft} SPOTS LEFT</span>
                    ) : (
                      <span className="font-bold text-neutral-500">FULL</span>
                    )}
                  </div>

                  <button
                    disabled={item.spotsLeft === 0}
                    onClick={() => {
                      setSelectedClassType(item.name);
                      setSelectedTimeSlot(item.time);
                      setIsModalOpen(true);
                    }}
                    className={`rounded-xl px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all ${
                      item.spotsLeft === 0
                        ? 'cursor-not-allowed border border-neutral-800 bg-[#141414] text-neutral-600'
                        : 'cursor-pointer bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] text-[#090909] hover:shadow-[0_0_20px_rgba(234,140,30,0.45)] active:scale-95'
                    }`}
                  >
                    {item.spotsLeft === 0 ? 'Waitlist' : 'Reserve'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-[#E5B822]/25 bg-[#090909] py-12 text-center text-xs text-neutral-400 sm:text-sm">
              No classes matching selected filter for {activeDay}.
            </div>
          )}
        </div>

      </div>

      {/* Reservation Modal Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="w-full max-w-md space-y-4 rounded-3xl border border-[#E5B822]/30 bg-[#121212] p-6 shadow-[0_0_50px_rgba(234,140,30,0.18)]">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#EA8C1E]">
              TRIFIT BOOKING
            </span>
            <h3 className="text-xl font-black uppercase tracking-wide italic text-white">
              Confirm{' '}
              <span className="bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] bg-clip-text text-transparent">
                Reservation
              </span>
            </h3>
            <p className="text-sm text-neutral-300">
              You are about to reserve <strong className="text-white">{selectedClassType}</strong> at{' '}
              <strong className="text-[#F5D21B]">{selectedTimeSlot}</strong> on {activeDay}.
            </p>
            <div className="flex gap-3 pt-2">
              <button 
                onClick={() => {
                  alert('Spot successfully reserved!');
                  setIsModalOpen(false);
                }}
                className="flex-1 cursor-pointer rounded-xl bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] py-2.5 text-xs font-black uppercase tracking-wider text-[#090909] shadow-[0_0_15px_rgba(234,140,30,0.35)] transition-all hover:shadow-[0_0_25px_rgba(245,210,27,0.5)]"
              >
                Confirm Spot
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 cursor-pointer rounded-xl border border-[#E5B822]/25 bg-[#181818] py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-200 transition-colors hover:border-[#F5D21B]/50 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}