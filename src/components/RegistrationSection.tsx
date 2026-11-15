import { CheckCircle2, CalendarCheck, RotateCcw } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { OFFICIAL_PORTAL_URL, SESSIONS } from '../data/conferenceData';
import { downloadSessionICS } from '../utils/calendarExport';

interface RegistrationData {
  fullName: string;
  email: string;
  organization: string;
  country: string;
  delegationTier: string;
  attendanceMode: 'In-Person (Addis Ababa AU HQ)' | 'Virtual Plenary Stream';
  trainingTrack: string;
}

const INITIAL_FORM: RegistrationData = {
  fullName: '',
  email: '',
  organization: '',
  country: '',
  delegationTier: 'AU Member State / Ministry Official',
  attendanceMode: 'In-Person (Addis Ababa AU HQ)',
  trainingTrack: 'MEPS Handbook & Appliance Standards (Dec 8)'
};

export function RegistrationSection() {
  const [form, setForm] = useState<RegistrationData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof RegistrationData, string>> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 3) {
      nextErrors.fullName = 'Please enter your full name (minimum 3 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid institutional or work email address.';
    }
    if (!form.organization.trim()) {
      nextErrors.organization = 'Please specify your ministry, agency, or organization.';
    }
    if (!form.country.trim()) {
      nextErrors.country = 'Please specify your country or regional delegation.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const code = `AFEEA-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(code);
  }

  return (
    <section id="register" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Protocol & Accreditation Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#14532D]">
                Delegate Accreditation & Protocol
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#141A15]">
                Register for the African Energy Efficiency Conference
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                Accreditation covers both the Pre-Conference Technical Trainings (8–9 December) and the High-Level
                Ministerial Conference & AfEEA Launch (10–11 December) at the African Union Headquarters.
              </p>
            </div>

            <div className="bg-[#FAFBF9] border border-stone-200 rounded-xl p-6 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Accreditation & Venue Notes
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="pb-3 border-b border-stone-200/80">
                  <dt className="font-semibold text-[#141A15]">Venue Access & Security</dt>
                  <dd className="mt-0.5 text-stone-600">
                    African Union Commission Compound, Roosevelt Street, Addis Ababa. Government-issued passport or AU
                    Laissez-Passer required for badge collection.
                  </dd>
                </div>
                <div className="pb-3 border-b border-stone-200/80">
                  <dt className="font-semibold text-[#141A15]">Delegate Fee</dt>
                  <dd className="mt-0.5 text-stone-600">
                    Complimentary accreditation for approved AU Member State representatives, utilities, partners, and
                    technical delegates.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#141A15]">Official Secretariat Portal</dt>
                  <dd className="mt-0.5 text-stone-600">
                    Synchronized with{' '}
                    <a
                      href={OFFICIAL_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#14532D] font-medium hover:underline underline-offset-4"
                    >
                      afeea.au-afrec.org
                    </a>
                    .
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Interactive Validated Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFBF9] border border-stone-200 rounded-xl p-6 sm:p-8">
              {submittedRef ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-3 pb-5 border-b border-stone-200">
                    <CheckCircle2 className="w-6 h-6 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                        Accreditation Request Recorded
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold text-[#141A15]">
                        Delegate Pass Reference: <span className="font-mono">{submittedRef}</span>
                      </h3>
                      <p className="mt-2 text-sm text-stone-600">
                        Confirmation details have been prepared for <strong>{form.fullName}</strong> ({form.email}).
                        Present this reference code at the African Union Accreditation Desk or join via the plenary
                        link.
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-white border border-stone-200 rounded-lg p-5">
                    <div>
                      <dt className="text-xs text-stone-500">Organization</dt>
                      <dd className="mt-0.5 font-medium text-[#141A15]">{form.organization}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-stone-500">Country / Region</dt>
                      <dd className="mt-0.5 font-medium text-[#141A15]">{form.country}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-stone-500">Delegation Category</dt>
                      <dd className="mt-0.5 font-medium text-[#141A15]">{form.delegationTier}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-stone-500">Participation Mode</dt>
                      <dd className="mt-0.5 font-medium text-[#141A15]">{form.attendanceMode}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-xs text-stone-500">Selected Pre-Conference Track</dt>
                      <dd className="mt-0.5 font-medium text-[#141A15]">{form.trainingTrack}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => downloadSessionICS(SESSIONS)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-lg cursor-pointer"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Download Summit Calendar (.ics)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setForm(INITIAL_FORM);
                        setErrors({});
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-50 rounded-lg cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Register Another Delegate</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-[#141A15]">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="e.g. Dr. Kwame Mensah"
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-[#141A15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#141A15]">
                        Institutional Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@ministry.gov"
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-[#141A15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-700">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-[#141A15]">
                        Ministry / Organization *
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        placeholder="Ministry of Energy / Utility / Partner"
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-[#141A15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent"
                      />
                      {errors.organization && (
                        <p className="mt-1 text-xs text-red-700">{errors.organization}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-[#141A15]">
                        Country / Region *
                      </label>
                      <input
                        id="country"
                        type="text"
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        placeholder="e.g. Ethiopia, Kenya, Tunisia"
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-[#141A15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#14532D] focus:border-transparent"
                      />
                      {errors.country && (
                        <p className="mt-1 text-xs text-red-700">{errors.country}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="delegationTier" className="block text-sm font-medium text-[#141A15]">
                        Delegation Category
                      </label>
                      <select
                        id="delegationTier"
                        value={form.delegationTier}
                        onChange={(e) => setForm({ ...form, delegationTier: e.target.value })}
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-[#141A15] focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                      >
                        <option>AU Member State / Ministry Official</option>
                        <option>Power Pool / Utility Engineer</option>
                        <option>Development Partner / Multilateral Bank</option>
                        <option>Private Sector / ESCO / Manufacturer</option>
                        <option>Research / Academia / Press</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="trainingTrack" className="block text-sm font-medium text-[#141A15]">
                        Pre-Conference Training Preference
                      </label>
                      <select
                        id="trainingTrack"
                        value={form.trainingTrack}
                        onChange={(e) => setForm({ ...form, trainingTrack: e.target.value })}
                        className="mt-1.5 w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-lg text-[#141A15] focus:outline-none focus:ring-2 focus:ring-[#14532D]"
                      >
                        <option>MEPS Handbook & Appliance Standards (Dec 8)</option>
                        <option>AFREC Energy Efficiency Statistics (Dec 8)</option>
                        <option>Distribution Grid Technical Losses (Dec 9)</option>
                        <option>Bioclimatic Buildings & PEEB Finance (Dec 9)</option>
                        <option>Main Conference Only (Dec 10–11)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-[#141A15]">
                      Participation Format
                    </span>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(
                        [
                          'In-Person (Addis Ababa AU HQ)',
                          'Virtual Plenary Stream'
                        ] as const
                      ).map((mode) => {
                        const active = form.attendanceMode === mode;
                        return (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setForm({ ...form, attendanceMode: mode })}
                            className={`px-4 py-2.5 text-sm font-medium rounded-lg border text-left transition-colors cursor-pointer ${
                              active
                                ? 'bg-[#14532D] text-white border-[#14532D]'
                                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                            }`}
                          >
                            {mode}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#14532D]"
                    >
                      Submit Accreditation Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
