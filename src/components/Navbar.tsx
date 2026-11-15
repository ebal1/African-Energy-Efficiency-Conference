import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LOGO_PATH } from '../data/conferenceData';

interface NavbarProps {
  onRegisterClick: () => void;
}

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Partners', href: '#partners' }
];

export function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFBF9]/95 backdrop-blur-sm border-b border-stone-200/90">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Mark (Single-line, zero subtitle/badge clutter) */}
        <a
          href="#overview"
          className="flex items-center gap-2.5 shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] rounded-md"
        >
          <img
            src={LOGO_PATH}
            alt="AfEEA Logo"
            referrerPolicy="no-referrer"
            className="h-9 w-auto object-contain bg-white rounded-sm"
          />
          <span className="font-serif text-xl font-semibold tracking-tight text-[#141A15] whitespace-nowrap">
            AfEEA
          </span>
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 hover:text-[#14532D] hover:underline underline-offset-8 decoration-[#14532D]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] rounded-sm py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onRegisterClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14532D]"
          >
            Register Now
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-stone-700 hover:text-[#14532D] rounded-lg border border-stone-200 bg-white cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-[#14532D] hover:bg-stone-50 rounded-md"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onRegisterClick();
              }}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-lg cursor-pointer"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
