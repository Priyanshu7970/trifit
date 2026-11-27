import React from 'react';
import logo from '../assets/logo.svg'

export const FooterSection: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050507] py-8 text-xs text-gray-500 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left sm:gap-6 lg:px-8">
        
        {/* Brand / Logo */}
        <div className="flex items-center space-x-2.5">
          <div className="w-14 h-14 mb-2 sm:w-17 sm:h-17 rounded-full overflow-hidden shrink-0 bg-[#141414] flex items-center justify-center">
            <img 
              src={logo} 
              alt="Trifit logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="text-lg font-black italic tracking-wider text-white uppercase sm:text-xl">
            TRI<span className="text-[#e1d400]">FIT</span>
          </span>
        </div>

        {/* Copyright Notice */}
        <p className="text-[11px] sm:text-xs">
          &copy; {new Date().getFullYear()} TRIFIT INC. ALL RIGHTS RESERVED.
        </p>

        {/* Legal / Navigation Links */}
        <div className="flex space-x-6 text-[11px] font-medium text-gray-400 sm:text-xs">
          <a href="#privacy" className="transition-colors hover:text-white">
            PRIVACY
          </a>
          <a href="#terms" className="transition-colors hover:text-white">
            TERMS
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            CONTACT
          </a>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;