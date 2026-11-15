import { Bookmark, BookmarkCheck, Calendar, ChevronDown, ChevronUp, Download, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  CONFERENCE_DAYS,
  ConferenceDay,
  ConferenceSession,
  SESSIONS,
  SPEAKERS,
  SessionTrack
} from '../data/conferenceData';
import { downloadSessionICS } from '../utils/calendarExport';

interface AgendaSectionProps {
  savedIds: string[];
  onToggleSave: (sessionId: string) => void;
  onSelectSpeakerId: (speakerId: string) => void;
}

const TRACK_OPTIONS: ('All Tracks' | SessionTrack)[] = [
  'All Tracks',
  'Pre-Conference Training',
  'Ministerial & Plenary',
  'Technical & Standards',
  'Finance & Partnerships'
];

export function AgendaSection({
  savedIds,
  onToggleSave,
  onSelectSpeakerId
}: AgendaSectionProps) {
  const [activeDay, setActiveDay] = useState<ConferenceDay | 'all'>('day3');
  const [activeTrack, setActiveTrack] = useState<'All Tracks' | SessionTrack>('All Tracks');
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('d3-s1');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const speakerMap = useMemo(() => {
    const map = new Map(SPEAKERS.map((sp) => [sp.id, sp]));
    return map;
  }, []);

  const filteredSessions = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SESSIONS.filter((session) => {
      if (showSavedOnly && !savedIds.includes(session.id)) return false;
      if (!showSavedOnly && activeDay !== 'all' && session.day !== activeDay) return false;
      if (activeTrack !== 'All Tracks' && session.track !== activeTrack) return false;
      if (!q) return true;
      return (
        session.title.toLowerCase().includes(q) ||
        session.summary.toLowerCase().includes(q) ||
        session.leadOrg.toLowerCase().includes(q) ||
        session.room.toLowerCase().includes(q)
      );
    });
  }, [activeDay, activeTrack, query, savedIds, showSavedOnly]);

  const savedSessions = useMemo(
    () => SESSIONS.filter((s) => savedIds.includes(s.id)),
    [savedIds]
  );

  const activeDayMeta = CONFERENCE_DAYS.find((d) => d.id === activeDay);

  return (
    <section id="agenda" className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAFBF9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Heading & Personal Schedule Export */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14532D]">
              Official Conference Programme
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#141A15]">
              Four Days of Technical Trainings & Ministerial Plenaries
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              Filter sessions by day or thematic track, inspect expected technical outcomes, and export your personal
              delegate itinerary directly to your calendar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowSavedOnly((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                showSavedOnly
                  ? 'bg-[#14532D] text-white border-[#14532D]'
                  : 'bg-white text-[#141A15] border-stone-300 hover:bg-stone-50'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              <span className="tabular-nums">My Schedule ({savedIds.length})</span>
            </button>

            <button
              type="button"
              onClick={() =>
                downloadSessionICS(savedSessions.length > 0 ? savedSessions : filteredSessions)
              }
              disabled={savedSessions.length === 0 && filteredSessions.length === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#141A15] bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-40"
            >
              <Download className="w-4 h-4 text-stone-600" />
              <span>
                {savedSessions.length > 0 ? 'Export Saved (.ics)' : 'Export View (.ics)'}
              </span>
            </button>
          </div>
        </div>

        {/* Day Segmented Controls & Search Toolbar */}
        <div className="mt-10 bg-white border border-stone-200 rounded-xl p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Day Tabs */}
            <div
              role="tablist"
              aria-label="Conference Days"
              className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-lg"
            >
              {CONFERENCE_DAYS.map((day) => {
                const isSelected = !showSavedOnly && activeDay === day.id;
                return (
                  <button
                    key={day.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setShowSavedOnly(false);
                      setActiveDay(day.id);
                    }}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#141A15] shadow-sm'
                        : 'text-stone-600 hover:text-[#141A15]'
                    }`}
                  >
                    {day.label}
                  </button>
                );
              })}
              <button
                type="button"
                role="tab"
                aria-selected={!showSavedOnly && activeDay === 'all'}
                onClick={() => {
                  setShowSavedOnly(false);
                  setActiveDay('all');
                }}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !showSavedOnly && activeDay === 'all'
                    ? 'bg-white text-[#141A15] shadow-sm'
                    : 'text-stone-600 hover:text-[#141A15]'
                }`}
              >
                All 4 Days
              </button>
            </div>

            {/* Search Field */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sessions, leads, halls..."
                aria-label="Search conference sessions"
                className="w-full pl-9 pr-8 py-2 text-sm bg-[#FAFBF9] border border-stone-200 rounded-lg text-[#141A15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Track Filter Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-100">
            <div className="flex flex-wrap items-center gap-1.5">
              {TRACK_OPTIONS.map((track) => {
                const isSelected = activeTrack === track;
                return (
                  <button
                    key={track}
                    type="button"
                    onClick={() => setActiveTrack(track)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#14532D] text-white'
                        : 'bg-stone-100 text-stone-600 hover:text-[#141A15] hover:bg-stone-200/70'
                    }`}
                  >
                    {track}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-stone-500">
              {showSavedOnly
                ? `Showing ${filteredSessions.length} bookmarked session(s)`
                : activeDayMeta
                  ? `${activeDayMeta.date} · ${activeDayMeta.subtitle}`
                  : 'Complete 4-day Addis Ababa schedule'}
            </p>
          </div>
        </div>

        {/* Session List */}
        <div className="mt-6 bg-white border border-stone-200 rounded-xl divide-y divide-stone-200">
          {filteredSessions.length === 0 ? (
            <div className="p-10 text-center">
              <Calendar className="w-8 h-8 text-stone-400 mx-auto" />
              <p className="mt-3 text-base font-medium text-[#141A15]">
                No sessions match your current filters
              </p>
              <p className="mt-1 text-sm text-stone-500">
                Try clearing the search query or switching back to all tracks.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveTrack('All Tracks');
                  setShowSavedOnly(false);
                  setActiveDay('all');
                }}
                className="mt-4 px-4 py-2 text-sm font-medium text-[#14532D] border border-[#14532D]/30 rounded-lg hover:bg-[#F2F5F1] cursor-pointer"
              >
                Reset Programme Filters
              </button>
            </div>
          ) : (
            filteredSessions.map((session: ConferenceSession) => {
              const isExpanded = expandedId === session.id;
              const isSaved = savedIds.includes(session.id);

              return (
                <div key={session.id} className="p-5 sm:p-6 transition-colors hover:bg-[#FAFBF9]/60">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
                    {/* Time & Day Column */}
                    <div className="lg:col-span-3">
                      <p className="font-mono text-sm font-semibold text-[#141A15] tabular-nums">
                        {session.startTime} – {session.endTime} EAT
                      </p>
                      <p className="mt-1 text-xs text-stone-500">
                        {session.dayLabel} · {session.room}
                      </p>
                    </div>

                    {/* Title & Clean Unboxed Metadata */}
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span className="font-semibold text-[#14532D]">{session.track}</span>
                        <span aria-hidden="true">·</span>
                        <span>{session.leadOrg}</span>
                      </div>

                      <h3 className="mt-1.5 text-lg font-semibold text-[#141A15] leading-snug">
                        {session.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{session.summary}</p>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-stone-100 space-y-4">
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                              Expected Deliverables & Policy Outcomes
                            </h4>
                            <ul className="mt-2 space-y-1.5 text-sm text-stone-700">
                              {session.outcomes.map((outcome) => (
                                <li key={outcome} className="flex items-start gap-2">
                                  <span className="font-mono text-xs text-[#14532D] mt-0.5">—</span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {session.speakerIds.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                Featured Leadership & Chairs
                              </h4>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {session.speakerIds.map((spId) => {
                                  const sp = speakerMap.get(spId);
                                  if (!sp) return null;
                                  return (
                                    <button
                                      key={sp.id}
                                      type="button"
                                      onClick={() => onSelectSpeakerId(sp.id)}
                                      className="text-xs font-medium text-[#14532D] hover:underline underline-offset-4 bg-stone-100 hover:bg-stone-200/70 px-2.5 py-1.5 rounded-md transition-colors cursor-pointer"
                                    >
                                      {sp.name} ({sp.organization})
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Actions Column */}
                    <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onToggleSave(session.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isSaved
                            ? 'bg-[#14532D] text-white border-[#14532D]'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:text-[#141A15]'
                        }`}
                      >
                        {isSaved ? (
                          <>
                            <BookmarkCheck className="w-3.5 h-3.5" />
                            <span>Saved</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>Save</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : session.id)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-stone-600 hover:text-[#141A15] whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Brief' : 'Session Brief'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
