import { useState } from 'react';
import { FOCUS_SECTORS } from '../data/conferenceData';

export function SectorsSection() {
  const [activeId, setActiveId] = useState<string>(FOCUS_SECTORS[0].id);
  const activeSector = FOCUS_SECTORS.find((s) => s.id === activeId) ?? FOCUS_SECTORS[0];

  return (
    <section id="sectors" className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#14532D]">
            Continental Mandate & Action Pillars
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#141A15]">
            Six Priority Tracks Operationalizing Africa’s First Fuel
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Guided by the Africa Energy Efficiency Strategy and Action Plan (AfEES), the Alliance translates continental
            targets into binding product standards, grid modernization, and blended investment vehicles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Interactive Numbered Pillar Directory */}
          <div className="lg:col-span-5 divide-y divide-stone-200 border-t border-b border-stone-200">
            {FOCUS_SECTORS.map((sector) => {
              const isSelected = sector.id === activeSector.id;
              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setActiveId(sector.id)}
                  className={`w-full text-left py-4 px-4 transition-colors duration-150 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] ${
                    isSelected
                      ? 'bg-[#F2F5F1] text-[#141A15]'
                      : 'bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-[#14532D] tabular-nums">
                        {sector.number}.
                      </span>
                      <span className="text-sm sm:text-base font-semibold truncate">
                        {sector.title}
                      </span>
                    </div>
                    <p className="mt-1 pl-7 text-xs text-stone-500 truncate">{sector.leadAgency}</p>
                  </div>
                  <span className="font-mono text-xs font-medium text-stone-600 shrink-0 tabular-nums">
                    {sector.headlineMetric}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Pillar Detail & Efficiency Grade Reference */}
          <div className="lg:col-span-7 bg-[#FAFBF9] border border-stone-200 rounded-xl p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <p className="text-xs font-medium text-stone-500">
                  Pillar {activeSector.number} · {activeSector.leadAgency}
                </p>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-[#141A15]">
                  {activeSector.title}
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-3xl font-semibold text-[#14532D] tabular-nums">
                  {activeSector.headlineMetric}
                </p>
                <p className="text-xs text-stone-500 max-w-[210px]">{activeSector.metricContext}</p>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-stone-700">
              {activeSector.description}
            </p>

            {/* Policy Instruments */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 rounded-lg p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Core Policy & Technical Instruments
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm text-[#141A15]">
                  {activeSector.policyInstruments.map((inst) => (
                    <li key={inst} className="leading-snug flex items-start gap-2.5">
                      <span className="font-mono text-xs text-[#14532D] mt-0.5">—</span>
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Continental Efficiency Scale Selector Inspired by AfEEA Emblem */}
              <div className="bg-white border border-stone-200 rounded-lg p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    AfEEA Continental Sector Matrix
                  </h4>
                  <p className="mt-1 text-xs text-stone-500">
                    Select any efficiency band to inspect sectoral alignment:
                  </p>
                  <div className="mt-3 space-y-1.5" role="group" aria-label="Efficiency sector scale">
                    {FOCUS_SECTORS.map((s, idx) => {
                      const widthPct = 42 + idx * 11;
                      const isCurrent = s.id === activeSector.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setActiveId(s.id)}
                          className="w-full flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] rounded-sm"
                        >
                          <div
                            style={{
                              width: `${widthPct}%`,
                              backgroundColor: s.tierColor,
                              opacity: isCurrent ? 1 : 0.45
                            }}
                            className="h-4 rounded-r-sm transition-opacity duration-150 group-hover:opacity-90 flex items-center px-2"
                          >
                            <span className="text-[10px] font-mono font-semibold text-white truncate">
                              {s.number}
                            </span>
                          </div>
                          <span
                            className={`text-xs truncate ${
                              isCurrent ? 'font-semibold text-[#141A15]' : 'text-stone-500'
                            }`}
                          >
                            {s.shortLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100">
                  <p className="text-xs text-stone-500">2040 Horizon Objective</p>
                  <p className="mt-0.5 text-xs font-medium text-[#141A15] leading-relaxed">
                    {activeSector.target2040}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
