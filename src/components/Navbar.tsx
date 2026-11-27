import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import logo from "../assets/logo.svg";

interface NavbarProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setIsModalOpen }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'THE EXPERIENCE', href: '#about' },
    { name: 'CLASSES', href: '#classes' },
    { name: 'SCHEDULE', href: '#schedule' },
    { name: 'TRAINERS', href: '#trainers' },
    { name: 'MEMBERSHIP', href: '#pricing' },
  ];

  const mobileNavLinks = [
    { name: 'THE EXPERIENCE', href: '#about' },
    { name: 'DISCIPLINE CLASSES', href: '#classes' },
    { name: 'LIVE SCHEDULE', href: '#schedule' },
    { name: 'ELITE TRAINERS', href: '#trainers' },
    { name: 'MEMBERSHIPS', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-[#090909]/95 border-b border-[#E5B822]/20 transition-all duration-300">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
  <a
    href="/"
    aria-label="Trifit Home"
    className="flex items-center space-x-3 shrink-0 cursor-pointer group"
  >
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 bg-[#141414] ring-1 ring-[#E5B822]/30 group-hover:ring-[#F5D21B]/70 transition-all duration-300">
      <img
        src={logo}
        alt="Trifit logo"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col shrink-0">
      <span className="text-xl sm:text-2xl font-black tracking-wider uppercase italic leading-none text-white whitespace-nowrap">
        TRI
        <span className="pr-1 bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] bg-clip-text text-transparent">
          FIT
        </span>
      </span>
      <span className="text-[9px] font-bold tracking-[0.2em] text-[#E5B822] uppercase mt-1 leading-none whitespace-nowrap">
        Always Fit
      </span>
    </div>
  </a>

  <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs xl:text-sm font-bold tracking-wider text-neutral-300">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="relative py-1 whitespace-nowrap hover:text-[#F5D21B] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-[#F5D21B] after:to-[#EA8C1E] hover:after:w-full after:transition-all after:duration-300"
      >
        {link.name}
      </a>
    ))}
  </div>

  <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 shrink-0">
    <button
      onClick={() => setIsModalOpen(true)}
      className="relative group overflow-hidden px-5 xl:px-6 py-3 rounded-full bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] text-[#090909] font-black text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,140,30,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
    >
      <span className="relative z-10 flex items-center gap-1.5">
        Book Free Trial
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 bg-white/35 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  </div>

  <div className="lg:hidden shrink-0">
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-expanded={mobileMenuOpen}
      aria-label="Toggle Menu"
      className="p-2.5 rounded-xl bg-[#141414] border border-[#E5B822]/25 text-neutral-200 hover:text-[#F5D21B] hover:border-[#F5D21B]/50 active:scale-95 transition-all"
    >
      {mobileMenuOpen ? <X className="w-6 h-6 text-[#F5D21B]" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>
</div>

      {/* Responsive Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#090909]/98 backdrop-blur-2xl z-50 border-t border-[#E5B822]/20 flex flex-col justify-between p-6 sm:p-8 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="space-y-6 pt-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#EA8C1E]">
              NAVIGATION
            </span>
            <div className="space-y-4">
              {mobileNavLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-2xl font-black uppercase tracking-tight text-white hover:text-[#F5D21B] transition-colors py-1.5 border-b border-white/10"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#E5B822]/20 space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
              className="w-full py-4 rounded-2xl bg-linear-to-r from-[#F5D21B] to-[#EA8C1E] text-[#090909] font-black uppercase text-xs tracking-widest text-center shadow-[0_0_20px_rgba(234,140,30,0.4)] active:scale-98 transition-transform cursor-pointer"
            >
              Book Free Trial
            </button>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3.5 rounded-2xl bg-[#141414] border border-[#E5B822]/30 text-[#F5D21B] font-bold text-xs uppercase tracking-widest text-center hover:bg-[#1c1c1c] transition-colors"
            >
              Explore Full Schedule
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}