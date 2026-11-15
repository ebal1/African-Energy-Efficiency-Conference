import { Check, Copy, Download, ExternalLink, FileText, Printer, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { OFFICIAL_PORTAL_URL, PARTNERS } from '../data/conferenceData';
import {
  ConferenceDocument,
  DOCUMENT_CATEGORIES,
  DocumentCategory,
  FULL_DOCUMENTS
} from '../data/documentationData';
import { downloadFullDocument } from '../utils/calendarExport';

const PARTNER_CATEGORIES = [
  'Host & Convenors',
  'UN & Multilateral Partners',
  'Technical & Regional Centres'
] as const;

export function PartnersAndDocsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'All Documents' | DocumentCategory>(
    'All Documents'
  );
  const [docQuery, setDocQuery] = useState('');
  const [activeDoc, setActiveDoc] = useState<ConferenceDocument | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredDocuments = useMemo(() => {
    const q = docQuery.trim().toLowerCase();
    return FULL_DOCUMENTS.filter((doc) => {
      if (selectedCategory !== 'All Documents' && doc.category !== selectedCategory) return false;
      if (!q) return true;
      return (
        doc.code.toLowerCase().includes(q) ||
        doc.title.toLowerCase().includes(q) ||
        doc.summary.toLowerCase().includes(q) ||
        doc.authoringBody.toLowerCase().includes(q)
      );
    });
  }, [docQuery, selectedCategory]);

  async function handleCopyCitation(doc: ConferenceDocument) {
    const citation = `${doc.authoringBody} (${doc.publishedDate}). "${doc.title}" [${doc.code}]. African Energy Efficiency Alliance (AfEEA), Addis Ababa. ${OFFICIAL_PORTAL_URL}`;
    try {
      await navigator.clipboard.writeText(citation);
      setCopiedCode(doc.code);
      window.setTimeout(() => setCopiedCode(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  }

  return (
    <section id="partners" className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAFBF9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-20">
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

        {/* Full Conference Documentation Repository */}
        <div id="documents" className="pt-14 border-t border-stone-200">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14532D]">
                Official Documentation & Technical Archive
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#141A15]">
                Complete Policy Frameworks, Standards & Delegate Guides
              </h2>
              <p className="mt-3 text-base leading-relaxed text-stone-600">
                Inspect full conference frameworks, MEPS technical handbooks, grid loss manuals, financing blueprints,
                and Addis Ababa protocol circulars directly in the reader or download Markdown briefs.
              </p>
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={docQuery}
                onChange={(e) => setDocQuery(e.target.value)}
                placeholder="Search document code or title..."
                aria-label="Search conference documentation"
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-white border border-stone-200 rounded-lg text-[#141A15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#14532D]"
              />
              {docQuery && (
                <button
                  type="button"
                  onClick={() => setDocQuery('')}
                  aria-label="Clear document search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Documentation Categories"
              className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-lg"
            >
              {DOCUMENT_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-white text-[#141A15] shadow-sm'
                        : 'text-stone-600 hover:text-[#141A15]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <p className="font-mono text-xs text-stone-500 tabular-nums">
              {filteredDocuments.length} of {FULL_DOCUMENTS.length} documents
            </p>
          </div>

          {/* Document Archive Grid */}
          {filteredDocuments.length === 0 ? (
            <div className="mt-6 bg-white border border-stone-200 rounded-xl p-10 text-center">
              <FileText className="w-8 h-8 text-stone-400 mx-auto" />
              <p className="mt-3 text-base font-medium text-[#141A15]">
                No conference documents match your query
              </p>
              <button
                type="button"
                onClick={() => {
                  setDocQuery('');
                  setSelectedCategory('All Documents');
                }}
                className="mt-4 px-4 py-2 text-sm font-medium text-[#14532D] border border-[#14532D]/30 rounded-lg hover:bg-[#F2F5F1] cursor-pointer"
              >
                Show All Documents
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocuments.map((doc) => (
                <article
                  key={doc.id}
                  className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between transition-colors hover:border-[#14532D]/40"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                      <span className="font-mono font-semibold text-[#14532D] tabular-nums">
                        {doc.code}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{doc.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{doc.pages}</span>
                    </div>

                    <h3 className="mt-2 font-serif text-xl font-semibold text-[#141A15] leading-snug">
                      {doc.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-stone-500">
                      {doc.authoringBody} · {doc.version}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600">{doc.summary}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveDoc(doc)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14532D] hover:underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Read Full Document</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => downloadFullDocument(doc)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-[#141A15] bg-stone-100 hover:bg-stone-200/70 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download (.md)</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Full Document Reader Modal */}
      {activeDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="doc-reader-title"
          onClick={() => setActiveDoc(null)}
        >
          <div
            className="bg-white border border-stone-200 rounded-xl max-w-3xl w-full shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-5 sm:px-8 border-b border-stone-200 flex items-start justify-between gap-4 bg-[#FAFBF9]">
              <div>
                <p className="font-mono text-xs text-stone-500">
                  {activeDoc.code} · {activeDoc.category} · {activeDoc.version} ·{' '}
                  {activeDoc.publishedDate}
                </p>
                <h3
                  id="doc-reader-title"
                  className="mt-1.5 font-serif text-2xl font-semibold text-[#141A15] leading-snug"
                >
                  {activeDoc.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-stone-600">
                  Issued by: {activeDoc.authoringBody}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                aria-label="Close document reader"
                className="w-9 h-9 rounded-lg border border-stone-200 bg-white flex items-center justify-center text-stone-500 hover:text-[#141A15] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Document Body */}
            <div className="px-6 py-6 sm:px-8 overflow-y-auto space-y-7">
              <div className="bg-[#FAFBF9] border border-stone-200 rounded-lg p-5 max-w-2xl">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Executive Abstract & Key Takeaways
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">{activeDoc.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#141A15]">
                  {activeDoc.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="font-mono text-xs text-[#14532D] mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-7 max-w-2xl">
                {activeDoc.sections.map((section) => (
                  <section key={section.heading} className="space-y-3">
                    <h4 className="font-serif text-lg font-semibold text-[#141A15]">
                      {section.heading}
                    </h4>
                    {section.paragraphs.map((para) => (
                      <p key={para} className="text-sm sm:text-base leading-relaxed text-stone-700">
                        {para}
                      </p>
                    ))}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="pt-1 space-y-2 text-sm leading-relaxed text-stone-700">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5">
                            <span className="font-mono text-xs text-[#14532D] mt-1">—</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="px-6 py-4 sm:px-8 border-t border-stone-200 bg-[#FAFBF9] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyCitation(activeDoc)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 rounded-lg cursor-pointer"
                >
                  {copiedCode === activeDoc.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#14532D]" />
                      <span>Citation Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 rounded-lg cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => downloadFullDocument(activeDoc)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Full Document (.md)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
