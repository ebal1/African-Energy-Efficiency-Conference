import { useEffect, useState } from 'react';
import { AgendaSection } from './components/AgendaSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PartnersAndDocsSection } from './components/PartnersAndDocsSection';
import { RegistrationSection } from './components/RegistrationSection';
import { SectorsSection } from './components/SectorsSection';
import { SpeakersSection } from './components/SpeakersSection';

const STORAGE_KEY = 'afeea_saved_sessions_v1';

export default function App() {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return ['d3-s1', 'd3-s3'];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : ['d3-s1', 'd3-s3'];
    } catch {
      return ['d3-s1', 'd3-s3'];
    }
  });

  const [selectedSpeakerId, setSelectedSpeakerId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // Ignore storage quota issues in private browsing contexts
    }
  }, [savedIds]);

  function handleToggleSave(sessionId: string) {
    setSavedIds((prev) =>
      prev.includes(sessionId) ? prev.filter((id) => id !== sessionId) : [...prev, sessionId]
    );
  }

  function scrollToRegistration() {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBF9] text-[#141A15]">
      <Navbar onRegisterClick={scrollToRegistration} />

      <main className="flex-1">
        <HeroSection onRegisterClick={scrollToRegistration} />
        <SectorsSection />
        <AgendaSection
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onSelectSpeakerId={(id) => setSelectedSpeakerId(id)}
        />
        <SpeakersSection
          selectedSpeakerId={selectedSpeakerId}
          onSelectSpeakerId={setSelectedSpeakerId}
        />
        <PartnersAndDocsSection />
        <RegistrationSection />
      </main>

      <Footer />
    </div>
  );
}
