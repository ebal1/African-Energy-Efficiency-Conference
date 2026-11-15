import { ArrowUpRight, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { SESSIONS, SPEAKERS, Speaker } from '../data/conferenceData';

interface SpeakersSectionProps {
  selectedSpeakerId: string | null;
  onSelectSpeakerId: (id: string | null) => void;
}

const ROLE_FILTERS: ('All' | Speaker['roleType'])[] = [
  'All',
  'Ministerial Keynote',
  'Institutional Leadership',
  'Technical Chair'
];

export function SpeakersSection({
  selectedSpeakerId,
  onSelectSpeakerId
}: SpeakersSectionProps) {
  const [roleFilter, setRoleFilter] = useState<'All' | Speaker['roleType']>('All');

  const filteredSpeakers = useMemo(() => {
    if (roleFilter === 'All') return SPEAKERS;
    return SPEAKERS.filter((s) => s.roleType === roleFilter);
  }, [roleFilter]);

  const activeSpeaker = useMemo(
    () => SPEAKERS.find((s) => s.id === selectedSpeakerId) ?? null,
    [selectedSpeakerId]
  );

  const speakerSessions = useMemo(() => {
    if (!activeSpeaker) return [];
    return SESSIONS.filter((sess) => sess.speakerIds.includes(activeSpeaker.id));
  }, [activeSpeaker]);

  return (
    <section id="speakers" className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14532D]">
              High-Level Leadership & Technical Chairs
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#141A15]">
              Ministerial Voices & Continental Energy Architects
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              Select any speaker profile to view their institutional mandate, policy focus areas, and assigned
              conference sessions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-lg shrink-0">
            {ROLE_FILTERS.map((role) => {
              const isSelected = roleFilter === role;
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setRoleFilter(role)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#141A15] shadow-sm'
                      : 'text-stone-600 hover:text-[#141A15]'
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSpeakers.map((speaker) => (
            <button
              key={speaker.id}
              type="button"
              onClick={() => onSelectSpeakerId(speaker.id)}
              className="group text-left bg-[#FAFBF9] hover:bg-white border border-stone-200 hover:border-[#14532D]/50 rounded-xl p-6 transition-colors duration-150 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="w-11 h-11 rounded-lg bg-[#14532D] text-white font-serif text-base font-semibold flex items-center justify-center shrink-0">
                    {speaker.initials}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#14532D] transition-colors shrink-0" />
                </div>

                <p className="mt-5 text-xs text-stone-500">
                  {speaker.roleType} · {speaker.countryOrRegion}
                </p>

                <h3 className="mt-1.5 text-base font-semibold text-[#141A15] group-hover:text-[#14532D] transition-colors">
                  {speaker.name}
                </h3>

                <p className="mt-1 text-sm text-stone-600 leading-snug">{speaker.title}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200/80">
                <p className="text-xs font-medium text-[#141A15]">{speaker.organization}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Speaker Dossier Modal */}
      {activeSpeaker && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[1px] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="speaker-modal-title"
          onClick={() => onSelectSpeakerId(null)}
        >
          <div
            className="bg-white border border-stone-200 rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-stone-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#14532D] text-white font-serif text-xl font-semibold flex items-center justify-center shrink-0">
                  {activeSpeaker.initials}
                </div>
                <div>
                  <p className="text-xs text-stone-500">
                    {activeSpeaker.roleType} · {activeSpeaker.countryOrRegion}
                  </p>
                  <h3 id="speaker-modal-title" className="mt-1 font-serif text-2xl font-semibold text-[#141A15]">
                    {activeSpeaker.name}
                  </h3>
                  <p className="text-sm text-stone-600">
                    {activeSpeaker.title}, {activeSpeaker.organization}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectSpeakerId(null)}
                aria-label="Close speaker dossier"
                className="w-9 h-9 rounded-lg border border-stone-200 flex items-center justify-center text-stone-500 hover:text-[#141A15] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Institutional Mandate
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">{activeSpeaker.bio}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Focus Areas
                </h4>
                <p className="mt-1.5 text-sm font-medium text-[#141A15]">
                  {activeSpeaker.focusAreas.join(' · ')}
                </p>
              </div>

              {speakerSessions.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Scheduled Conference Sessions
                  </h4>
                  <ul className="mt-2 divide-y divide-stone-100 border border-stone-200 rounded-lg">
                    {speakerSessions.map((sess) => (
                      <li key={sess.id} className="p-3.5 text-sm">
                        <p className="font-mono text-xs text-[#14532D] tabular-nums">
                          {sess.dayLabel} · {sess.startTime}–{sess.endTime} EAT · {sess.room}
                        </p>
                        <p className="mt-1 font-semibold text-[#141A15]">{sess.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
