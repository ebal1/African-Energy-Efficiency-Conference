import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { useState } from 'react';
import {
  CONFERENCE_BRIEFS,
  ConferenceBrief,
  OFFICIAL_PORTAL_URL,
  PARTNERS
} from '../data/conferenceData';
import { downloadBriefSummary } from '../utils/calendarExport';

const PARTNER_CATEGORIES = [
  'Host & Convenors',
  'UN & Multilateral Partners',
  'Technical & Regional Centres'
] as const;

export function PartnersAndDocsSection() {
  const [selectedBrief, setSelectedBrief] = useState<ConferenceBrief | null>(null);

  return (
    <section id="partners" className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAFBF9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16">
        {/* Institutional Partners Directory */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14532D]">
                African Energy Efficiency Alliance (AfEEA) Coalition
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#141A15]">
                Convenors & Strategic Institutional Partners
              </h2>
            </div>

            <a
              href={OFFICIAL_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              <span>Official AfEEA Alliance Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PARTNER_CATEGORIES.map((category) => {
              const items = PARTNERS.filter((p) => p.category === category);
              return (
                <div
                  key={category}
                  className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 pb-4 border-b border-stone-200">
                      {category}
                    </h3>
                    <ul className="divide-y divide-stone-100">
                      {items.map((partner) => (
                        <li key={partner.name} className="py-4 first:pt-4 last:pb-0">
                          <div className="flex items-baseline justify-between gap-2">
                            <a
                              href={partner.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-semibold text-[#141A15] hover:text-[#14532D] transition-colors"
                            >
                              {partner.name}
                            </a>
                            <span className="font-mono text-xs text-stone-500 shrink-0">
                              {partner.acronym}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-stone-600">
                            {partner.role}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conference Working Documents & Publications */}
        <div className="pt-12 border-t border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14532D]">
              Conference Documentation & Reference Briefs
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#141A15]">
              Foundational Frameworks & Technical Guides
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONFERENCE_BRIEFS.map((brief) => (
              <div
                key={brief.id}
                className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-xs text-stone-500">
                    {brief.code} · {brief.pages}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-[#141A15] leading-snug">
                    {brief.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600">{brief.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedBrief(brief)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14532D] hover:underline underline-offset-4 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Read Executive Brief</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => downloadBriefSummary(brief)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-[#141A15] bg-stone-100 hover:bg-stone-200/70 rounded-md transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brief Reader Modal */}
      {selectedBrief && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[1px] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brief-modal-title"
          onClick={() => setSelectedBrief(null)}
        >
          <div
            className="bg-white border border-stone-200 rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <p className="font-mono text-xs text-stone-500">
                  {selectedBrief.code} · {selectedBrief.category} · {selectedBrief.pages}
                </p>
                <h3 id="brief-modal-title" className="mt-1.5 font-serif text-2xl font-semibold text-[#141A15]">
                  {selectedBrief.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBrief(null)}
                aria-label="Close document brief"
                className="w-9 h-9 rounded-lg border border-stone-200 flex items-center justify-center text-stone-500 hover:text-[#141A15] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <p className="text-sm leading-relaxed text-stone-700">{selectedBrief.summary}</p>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Key Policy & Technical Takeaways
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm text-[#141A15]">
                  {selectedBrief.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="font-mono text-xs text-[#14532D] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => downloadBriefSummary(selectedBrief)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Summary (.txt)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
