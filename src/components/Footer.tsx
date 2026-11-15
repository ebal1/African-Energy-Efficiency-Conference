import { ExternalLink } from 'lucide-react';
import { LOGO_PATH, OFFICIAL_PORTAL_URL } from '../data/conferenceData';

export function Footer() {
  return (
    <footer className="bg-[#FAFBF9] border-t border-stone-200 py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <img
              src={LOGO_PATH}
              alt="AfEEA Official Logo"
              referrerPolicy="no-referrer"
              className="h-14 w-auto object-contain bg-white p-1.5 rounded-md border border-stone-200"
            />
            <div>
              <p className="font-serif text-lg font-semibold text-[#141A15]">
                African Energy Efficiency Alliance (AfEEA)
              </p>
              <p className="text-xs sm:text-sm text-stone-600">
                Convened by the African Energy Commission (AFREC) · Specialized Agency of the African Union
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#overview" className="hover:text-[#14532D] transition-colors">
              Overview
            </a>
            <a href="#sectors" className="hover:text-[#14532D] transition-colors">
              Sectors
            </a>
            <a href="#agenda" className="hover:text-[#14532D] transition-colors">
              Agenda
            </a>
            <a href="#speakers" className="hover:text-[#14532D] transition-colors">
              Speakers
            </a>
            <a href="#partners" className="hover:text-[#14532D] transition-colors">
              Partners
            </a>
            <a
              href={OFFICIAL_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#14532D] hover:underline underline-offset-4"
            >
              <span>afeea.au-afrec.org</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500">
          <p>African Union Headquarters · Addis Ababa, Ethiopia · December 8–11</p>
          <p>African Energy Commission (AFREC) · Africa Energy Efficiency Strategy & Action Plan (AfEES)</p>
        </div>
      </div>
    </footer>
  );
}
