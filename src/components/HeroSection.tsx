import { ArrowRight, ExternalLink, CalendarCheck } from 'lucide-react';
import { LOGO_PATH, MANDATE_METRICS, OFFICIAL_PORTAL_URL, SESSIONS } from '../data/conferenceData';
import { downloadSessionICS } from '../utils/calendarExport';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
    <section id="overview" className="border-b border-stone-200 bg-[#FAFBF9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Commanding Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#14532D] mb-4">
                African Energy Commission (AFREC) · African Union · Addis Ababa
              </p>

              <h1 className="font-serif text-[clamp(2.25rem,4vw,3.6rem)] leading-[1.08] font-semibold tracking-tight text-[#141A15] max-w-2xl">
                Advancing Africa’s Energy Efficiency Agenda Through Strategic Partnerships
              </h1>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-stone-600 max-w-2xl">
                The African Energy Efficiency Conference and Pre-Conference Trainings convene Member State ministers,
                regional power pools, technical regulators, and multilateral financiers at the African Union Headquarters
                to operationalize the African Energy Efficiency Alliance (AfEEA) and scale energy efficiency as Africa’s
                “First Fuel.”
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRegisterClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14532D]"
              >
                <span>Register as Delegate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={OFFICIAL_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#141A15] bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D]"
              >
                <span>Visit afeea.au-afrec.org</span>
                <ExternalLink className="w-4 h-4 text-stone-500" />
              </a>

              <button
                type="button"
                onClick={() => downloadSessionICS(SESSIONS)}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Add Full Summit (.ics)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Institutional Emblem & Summit Dossier */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-white border border-stone-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="flex flex-col items-center text-center pb-6 border-b border-stone-200">
                <div className="p-4 bg-white rounded-lg border border-stone-100">
                  <img
                    src={LOGO_PATH}
                    alt="African Energy Efficiency Alliance (AfEEA) Official Logo"
                    referrerPolicy="no-referrer"
                    className="h-32 w-auto object-contain mx-auto"
                  />
                </div>
                <p className="mt-4 text-xs font-medium tracking-wider uppercase text-stone-500">
                  African Energy Efficiency Alliance
                </p>
                <p className="mt-1 text-sm font-semibold text-[#141A15]">
                  Official Continental Initiative · AFREC / AU
                </p>
              </div>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-stone-100">
                  <dt className="text-stone-500 shrink-0">Pre-Conference</dt>
                  <dd className="font-mono text-xs sm:text-sm font-medium text-[#141A15] text-right tabular-nums">
                    8–9 December · Technical Trainings
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-stone-100">
                  <dt className="text-stone-500 shrink-0">Main Conference</dt>
                  <dd className="font-mono text-xs sm:text-sm font-medium text-[#141A15] text-right tabular-nums">
                    10–11 December · Ministerial & Launch
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-stone-100">
                  <dt className="text-stone-500 shrink-0">Venue</dt>
                  <dd className="font-medium text-[#141A15] text-right">
                    African Union Headquarters, Addis Ababa
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-stone-500 shrink-0">Mandate Anchor</dt>
                  <dd className="font-medium text-[#141A15] text-right">
                    AfEES Strategy & AU Agenda 2063
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Mandate Strip (Claim-to-Proof Adjacent) */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {MANDATE_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1.5">
              <p className="font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-[#14532D] tabular-nums">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-[#141A15]">{metric.label}</p>
              <p className="text-xs leading-relaxed text-stone-500">{metric.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
