# AfEEA — African Energy Efficiency Conference Portal

Official web platform for the **African Energy Efficiency Alliance (AfEEA)** and the **African Energy Efficiency Conference & Pre-Conference Trainings**, convened by the **African Energy Commission (AFREC)** at the African Union Headquarters in Addis Ababa, Ethiopia.

- **Official Alliance Portal:** [https://afeea.au-afrec.org/](https://afeea.au-afrec.org/)
- **Host & Convenor:** African Energy Commission (AFREC), Specialized Agency of the African Union

---

## Core Capabilities

1. **Institutional Overview & Mandate Dossier (`HeroSection`)**
   - Displays the official AfEEA emblem, Addis Ababa AU Headquarters schedule (8–9 December Pre-Conference Trainings; 10–11 December Main Conference & Alliance Launch), and continental AfEES metrics (`+50%` energy productivity by 2050, `+70%` by 2063, `175 TWh` projected appliance savings by 2040, `55` AU Member States).
   - Provides one-click `.ics` full-summit calendar export.

2. **Strategic Action Pillars (`SectorsSection`)**
   - Interactive explorer across the 6 priority AfEEA / AfEES sectors:
     - `01.` Minimum Energy Performance Standards (MEPS)
     - `02.` Power Grids & AfSEM Integration
     - `03.` Bioclimatic Buildings & Urban Cooling
     - `04.` Industrial Productivity & SME Modernization
     - `05.` Clean Cooking & Equitable Energy Access
     - `06.` Blended Finance & The AfEE Facility

3. **Four-Day Programme Explorer (`AgendaSection`)**
   - Filterable by day (`Day 01`–`Day 04`), thematic track, and keyword search.
   - Expandable session briefs with deliverables, linked speaker dossiers, persistent `localStorage` schedule bookmarking (`My Schedule`), and `.ics` calendar export for saved or filtered sessions.

4. **Ministerial & Technical Speakers Roster (`SpeakersSection`)**
   - Filterable by leadership category (`Ministerial Keynote`, `Institutional Leadership`, `Technical Chair`).
   - Interactive speaker dossier modal detailing institutional mandate, focus areas, and assigned sessions.

5. **Partners Directory & Full Documentation Center (`PartnersAndDocsSection`)**
   - Categorized alliance directory (`Host & Convenors`, `UN & Multilateral Partners`, `Technical & Regional Centres`).
   - Searchable, category-filterable **Official Documentation Archive** (`DOC-AFEES-01` through `DOC-LOG-08`) with an editorial full-document reader modal, citation copy, print support, and `.md` download.

6. **Delegate Accreditation & Registration (`RegistrationSection`)**
   - Validated registration form supporting delegation tiers, pre-conference training track selection, and attendance format (`In-Person` or `Virtual`), generating a unique accreditation reference code (`AFEEA-XXXXXX`) and summit `.ics` download.

---

## Architecture & File Structure

```text
/
├── index.html                          # Entry HTML, Google Fonts (Fraunces, Plus Jakarta Sans, JetBrains Mono), defensive extension/fetch guard
├── metadata.json                       # Application metadata
├── public/assets/aistudio/
│   └── logo_Afeea_ed7b3b27.png         # Official shared AfEEA logo asset
├── src/
│   ├── App.tsx                         # Top-level layout, persistent schedule state, modal & scroll coordination
│   ├── index.css                       # Tailwind CSS v4 @theme font tokens & reduced-motion accessibility rules
│   ├── main.tsx                        # React 19 DOM entry point
│   ├── data/
│   │   ├── conferenceData.ts           # Mandate metrics, 6 sectors, 4-day sessions, speakers, and partners
│   │   └── documentationData.ts        # Full multi-section conference policy, MEPS, grid, finance, and protocol documents
│   ├── utils/
│   │   └── calendarExport.ts           # Client-side RFC-5545 .ics generator and Markdown/text document downloader
│   └── components/
│       ├── Navbar.tsx                  # Three-zone sticky top navigation bar
│       ├── HeroSection.tsx             # Hero statement, AfEEA emblem dossier, and 4-column mandate strip
│       ├── SectorsSection.tsx          # Interactive 6-pillar framework and efficiency scale selector
│       ├── AgendaSection.tsx           # 4-day interactive programme, search, and schedule builder
│       ├── SpeakersSection.tsx         # Speaker grid and dossier modal
│       ├── PartnersAndDocsSection.tsx  # Alliance partners directory, full document archive, and reader modal
│       ├── RegistrationSection.tsx     # Validated delegate accreditation form and pass confirmation
│       └── Footer.tsx                  # Institutional footer with AfEEA logo and AFREC portal link
```

---

## Development & Verification

### Install Dependencies
```bash
npm install
```

### Run Development Server (Port 3000)
```bash
npm run dev
```

### Typecheck & Production Build
```bash
npm run lint
npm run build
```

### Tech Stack
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** `lucide-react`
- **Typography:** `Fraunces` (Display), `Plus Jakarta Sans` (Body/UI), `JetBrains Mono` (Tabular numerals & document codes)
