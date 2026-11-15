export type DocumentCategory =
  | 'Policy & Governance'
  | 'Technical Standards'
  | 'Finance & Markets'
  | 'Delegate Protocol';

export interface DocumentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ConferenceDocument {
  id: string;
  code: string;
  title: string;
  category: DocumentCategory;
  authoringBody: string;
  version: string;
  publishedDate: string;
  pages: string;
  summary: string;
  keyTakeaways: string[];
  sections: DocumentSection[];
}

export const DOCUMENT_CATEGORIES: ('All Documents' | DocumentCategory)[] = [
  'All Documents',
  'Policy & Governance',
  'Technical Standards',
  'Finance & Markets',
  'Delegate Protocol'
];

export const FULL_DOCUMENTS: ConferenceDocument[] = [
  {
    id: 'doc-afees',
    code: 'DOC-AFEES-01',
    title: 'African Energy Efficiency Strategy and Action Plan (AfEES)',
    category: 'Policy & Governance',
    authoringBody: 'African Energy Commission (AFREC) · African Union Commission',
    version: 'Edition 2.0 · Continental Mandate',
    publishedDate: 'December 2025',
    pages: '42 pp. Executive & Policy Framework',
    summary:
      'Establishes the overarching continental roadmap to increase energy productivity across Africa by 50% by 2050 and 70% by 2063 across power generation, industry, buildings, transport, and agriculture.',
    keyTakeaways: [
      'Positions energy efficiency as Africa’s "First Fuel" to strengthen energy security and defer costly peak generation.',
      'Sets binding continental benchmarks: +50% energy productivity by 2050 and +70% by 2063 under AU Agenda 2063.',
      'Establishes National Energy Efficiency Focal Points synchronized with AFREC’s African Energy Information System.'
    ],
    sections: [
      {
        heading: '1. Strategic Rationale: Energy Efficiency as Africa’s First Fuel',
        paragraphs: [
          'Across African Union Member States, rapid urbanization, industrialization, and electrification are driving steep growth in electricity and thermal energy demand. Without decisive demand-side measures, utilities face escalating peak deficits and unsustainable capital requirements for new generation capacity.',
          'The African Energy Efficiency Strategy and Action Plan (AfEES) establishes efficiency as the continent’s lowest-cost, fastest-deploying energy resource. Every unit of energy saved frees existing generation and grid capacity to expand access to the more than 600 million citizens still lacking reliable electricity.'
        ],
        bullets: [
          'Continental Energy Productivity Target 2050: 50% improvement relative to baseline GDP energy intensity.',
          'AU Agenda 2063 Horizon Target: 70% improvement in continental energy productivity by 2063.',
          'Cross-sectoral scope: Power systems, industrial manufacturing, commercial and public buildings, appliances, transport, and clean cooking.'
        ]
      },
      {
        heading: '2. Institutional Governance & Member State Alignment',
        paragraphs: [
          'AFREC serves as the continental Secretariat responsible for coordinating Member State implementation, harmonizing regulatory templates through Regional Economic Communities (RECs), and tracking progress via annual energy balance reporting.',
          'Member States are invited to adopt or update National Energy Efficiency Action Plans (NEEAPs) with measurable sectoral targets, designated enforcement agencies, and dedicated fiscal incentives.'
        ],
        bullets: [
          'Designate National Energy Efficiency Focal Points across Ministries of Energy, Industry, and Housing.',
          'Integrate AfEES indicators into Nationally Determined Contributions (NDCs) and energy transition investment plans.',
          'Submit annual efficiency progress datasets to the African Energy Information System (AEIS).'
        ]
      }
    ]
  },
  {
    id: 'doc-charter',
    code: 'DOC-AFEEA-02',
    title: 'African Energy Efficiency Alliance (AfEEA) Founding Charter & Governance',
    category: 'Policy & Governance',
    authoringBody: 'AFREC · AfEEA Founding Coalition',
    version: 'Charter v1.0',
    publishedDate: 'December 2025',
    pages: '24 pp. Governance Charter',
    summary:
      'Defines the mandate, membership architecture, and thematic working groups of the African Energy Efficiency Alliance (AfEEA) launched at the African Union Headquarters in Addis Ababa.',
    keyTakeaways: [
      'Unifies AU Member States, regional power pools, development banks, UN agencies, and private ESCOs under one operational platform.',
      'Establishes four permanent technical Working Groups to accelerate standards, grid efficiency, buildings, and finance.',
      'Creates a peer-review mechanism for sharing regulatory templates and bankable project pipelines.'
    ],
    sections: [
      {
        heading: '1. Purpose and Founding Mandate',
        paragraphs: [
          'Catalyzed through continental ministerial consultations and endorsed by African Heads of State and Government, the African Energy Efficiency Alliance (AfEEA) bridges the gap between continental policy ambition and on-the-ground project delivery.',
          'The Alliance operates under the coordination of AFREC in close partnership with UNIDO, SEforALL, the Africa-EU Energy Partnership (AEEP), PEEB, UNEP, and Regional Centres for Renewable Energy and Energy Efficiency.'
        ]
      },
      {
        heading: '2. Thematic Working Groups (2026–2028)',
        paragraphs: [
          'Alliance members collaborate through four structured Working Groups that convene quarterly and report annually at the African Energy Efficiency Conference:'
        ],
        bullets: [
          'Working Group I: Harmonized MEPS, Labelling, and Market Surveillance.',
          'Working Group II: Grid Modernization, Technical Loss Reduction, and AfSEM Demand-Side Integration.',
          'Working Group III: Bioclimatic Building Codes, Sustainable Urban Cooling, and Public Retrofits.',
          'Working Group IV: Blended Finance, AfEE Facility Architecture, and ESCO Market Acceleration.'
        ]
      }
    ]
  },
  {
    id: 'doc-meps',
    code: 'DOC-MEPS-03',
    title: 'Continental MEPS Implementation & Appliance Labelling Handbook',
    category: 'Technical Standards',
    authoringBody: 'AFREC · UNIDO EELA · UNEP U4E',
    version: 'Technical Handbook Rev. 1',
    publishedDate: 'December 2025',
    pages: '36 pp. Technical Standard',
    summary:
      'Provides actionable model regulations, testing specifications, and customs verification protocols for Member States adopting Minimum Energy Performance Standards (MEPS) across cooling, lighting, motors, and transformers.',
    keyTakeaways: [
      'Harmonized appliance standards are projected to save up to 175 TWh of electricity annually across Africa by 2040.',
      'Prioritizes four high-impact equipment classes: room air conditioners, refrigerators, LED lighting, and industrial electric motors.',
      'Prevents cross-border dumping of obsolete, low-efficiency appliances through shared customs enforcement.'
    ],
    sections: [
      {
        heading: '1. Priority Equipment Categories & Efficiency Tiers',
        paragraphs: [
          'Rapid growth in residential cooling and industrial motor loads makes appliance standards one of the highest-return policy interventions available to African regulators. By phasing out incandescent lighting and inefficient fixed-speed compressors, countries can cut peak evening demand substantially.',
          'This handbook aligns regional technical committees (ECOWAS/ECREEE, EAC/EACREEE, SADC/SACREEE, North Africa, and Central Africa) around unified ISO/IEC testing procedures and an intuitive 7-tier comparative energy efficiency label.'
        ],
        bullets: [
          'Lighting: Mandatory phase-out of low-efficacy lamps in favor of minimum 100 lm/W LED benchmarks.',
          'Space Cooling & Refrigeration: Seasonal Energy Efficiency Ratio (SEER) floors paired with low-GWP refrigerants.',
          'Industrial Motors: Minimum IE2 transitioning to IE3 efficiency classes for 0.75 kW–375 kW three-phase induction motors.',
          'Distribution Transformers: Maximum no-load and load loss thresholds for utility procurement.'
        ]
      },
      {
        heading: '2. Testing Laboratories & Market Surveillance',
        paragraphs: [
          'Effective enforcement relies on mutual recognition of accredited regional testing laboratories so manufacturers and importers face consistent requirements across borders without redundant certification costs.'
        ],
        bullets: [
          'Pre-shipment conformity verification linked to national customs HS-code registries.',
          'Annual check-testing sampling protocols funded through modest registration levies.',
          'Public online product registries enabling consumers and procurement officers to verify certified models.'
        ]
      }
    ]
  },
  {
    id: 'doc-grid',
    code: 'DOC-GRID-04',
    title: 'Distribution Grid Technical Loss Assessment & AfSEM Integration Manual',
    category: 'Technical Standards',
    authoringBody: 'AFREC Technical Advisory Panel · Regional Power Pools',
    version: 'Training Compendium v1.2',
    publishedDate: 'December 2025',
    pages: '31 pp. Engineering Guide',
    summary:
      'Engineering methodology for utilities and energy regulators to isolate technical distribution losses, modernize transformer fleets, and embed demand-side efficiency into the Africa Single Electricity Market (AfSEM).',
    keyTakeaways: [
      'Establishes a uniform engineering baseline to separate technical I²R and core losses from commercial metering losses.',
      'Targets below-10% technical distribution loss benchmarks across regional utility feeders.',
      'Links demand-side flexibility directly with the Continental Power Systems Masterplan (CMP).'
    ],
    sections: [
      {
        heading: '1. Isolating Technical vs. Commercial Losses',
        paragraphs: [
          'High aggregate distribution losses remain a primary driver of utility financial distress across the continent. Without accurate disaggregation between technical conductor/transformer losses and commercial billing losses, capital investments are frequently misallocated.',
          'The manual outlines a step-by-step feeder load-flow auditing method using smart substation metering, phase-balance diagnostics, and transformer core-loss profiling.'
        ],
        bullets: [
          'Feeder balancing and conductor reconductoring prioritization on overloaded urban radial lines.',
          'Amorphous-core high-efficiency transformer procurement specifications for utilities.',
          'Automated capacitor bank placement to maintain ≥ 0.95 power factor at distribution substations.'
        ]
      },
      {
        heading: '2. Demand-Side Integration in AfSEM',
        paragraphs: [
          'As cross-border interconnectors expand under the Continental Power Systems Masterplan, synchronized demand-side efficiency reduces transmission congestion and lowers marginal wholesale clearing prices across regional power pools.'
        ]
      }
    ]
  },
  {
    id: 'doc-buildings',
    code: 'DOC-BLDG-05',
    title: 'Bioclimatic Building Design & Urban Cooling Code Compendium',
    category: 'Technical Standards',
    authoringBody: 'Partnership for Energy Efficiency in Buildings (PEEB) · AFREC',
    version: 'Technical Brief v1.0',
    publishedDate: 'December 2025',
    pages: '29 pp. Architectural & Policy Guide',
    summary:
      'Operational guidance on passive bioclimatic architecture, solar-heat-gain reduction, and energy performance certification for Africa’s rapidly expanding commercial, residential, and public building stock.',
    keyTakeaways: [
      'Bioclimatic envelope design cuts building cooling demand by up to 35% before mechanical HVAC sizing.',
      'Provides climate-zone specific thermal transmittance (U-value) and shading guidelines across five African climate belts.',
      'Outlines public-sector retrofit procurement models for hospitals, universities, and ministries.'
    ],
    sections: [
      {
        heading: '1. Passive-First Principles for African Climate Zones',
        paragraphs: [
          'A large share of Africa’s 2050 urban building floor area has yet to be constructed. Embedding bioclimatic building codes today locks in multi-decade energy savings at minimal incremental construction cost.',
          'Guidelines differentiate between hot-arid Sahelian zones, humid equatorial coastal corridors, and temperate highland cities such as Addis Ababa and Nairobi.'
        ],
        bullets: [
          'Building orientation, cross-ventilation corridors, and exterior solar shading ratios.',
          'High-albedo cool roofs and locally sourced low-embodied-carbon thermal insulation.',
          'Daylighting optimization paired with occupancy-controlled LED luminaires.'
        ]
      }
    ]
  },
  {
    id: 'doc-finance',
    code: 'DOC-FIN-06',
    title: 'African Energy Efficiency Facility (AfEE Facility) Financing Blueprint',
    category: 'Finance & Markets',
    authoringBody: 'AFREC · Development Finance Partners · SEforALL',
    version: 'Concept & Term Sheet v1.1',
    publishedDate: 'December 2025',
    pages: '22 pp. Investment Architecture',
    summary:
      'Details the proposed blended-finance facility designed to de-risk Energy Service Company (ESCO) contracts, local commercial bank credit lines, and clean cooking efficiency portfolios.',
    keyTakeaways: [
      'Targets $5B+ in cumulative public-private capital mobilization for bankable efficiency pipelines.',
      'Combines concessional first-loss guarantees with technical assistance for project preparation.',
      'Standardizes Energy Performance Contracting (EPC) and Measurement & Verification (M&V) templates.'
    ],
    sections: [
      {
        heading: '1. Addressing Commercial Bank Risk Perceptions',
        paragraphs: [
          'Energy efficiency investments frequently generate strong internal rates of return (18%–35%), yet struggle to secure debt financing because local commercial banks treat future energy savings as intangible collateral.',
          'The AfEE Facility resolves this bottleneck through three coordinated financial windows backed by multilateral development banks and climate funds.'
        ],
        bullets: [
          'Window A — Credit Guarantee & Risk-Sharing Facility: Partial risk guarantees (up to 70%) for local bank loans to SMEs and ESCOs.',
          'Window B — Public & Municipal Retrofit Revolving Fund: Monetizing verified utility bill savings in public hospitals and ministries.',
          'Window C — Technical Assistance & Project Preparation: Grant funding for investment-grade energy audits and IPMVP-compliant M&V.'
        ]
      }
    ]
  },
  {
    id: 'doc-stat',
    code: 'DOC-STAT-07',
    title: 'AFREC Energy Efficiency Indicators & National Questionnaire Guide',
    category: 'Technical Standards',
    authoringBody: 'AFREC Energy Statistics Division',
    version: '2025–2026 Reporting Cycle',
    publishedDate: 'December 2025',
    pages: '26 pp. Statistical Manual',
    summary:
      'Standardizes national data collection methodologies for energy intensity, end-use consumption, and appliance stock turnover within the African Energy Information System (AEIS).',
    keyTakeaways: [
      'Provides harmonized definitions aligned with UN International Recommendations for Energy Statistics (IRES) and IEA templates.',
      'Covers residential, commercial, industrial sub-sectors, transport fleets, and utility transformation losses.',
      'Guides National Focal Points through annual quality assurance and time-series validation.'
    ],
    sections: [
      {
        heading: '1. Core Efficiency Metrics & Data Architecture',
        paragraphs: [
          'Credible efficiency policy depends on granular end-use data rather than aggregate national supply balances alone. AFREC’s Energy Efficiency Questionnaire captures activity indicators alongside physical energy consumption to track true structural efficiency gains.'
        ],
        bullets: [
          'Macro indicator: Primary and final energy intensity per unit of PPP-adjusted GDP.',
          'Residential indicators: kWh per household, cooling degree-day adjustments, and clean cooking fuel shares.',
          'Industrial indicators: Specific energy consumption (SEC) per tonne of cement, steel, sugar, and textiles.'
        ]
      }
    ]
  },
  {
    id: 'doc-protocol',
    code: 'DOC-LOG-08',
    title: 'Addis Ababa Delegate Protocol, AU Compound Access & Logistics Guide',
    category: 'Delegate Protocol',
    authoringBody: 'AFREC Conference Secretariat · Host Country Committee',
    version: 'Final Delegate Circular',
    publishedDate: 'December 2025',
    pages: '14 pp. Protocol & Logistics',
    summary:
      'Essential operational guide for accredited delegates attending the African Union Headquarters in Addis Ababa, covering badge collection, security screening, visa protocols, and interpretation services.',
    keyTakeaways: [
      'Badge pickup opens daily at 07:30 EAT at the AU Commission Main Gate Accreditation Pavilion (Roosevelt Street).',
      'Simultaneous interpretation is provided in English, French, Arabic, and Portuguese across plenary sessions.',
      'Government passport holders and AU Laissez-Passer delegates receive expedited conference visa facilitation at Bole International Airport.'
    ],
    sections: [
      {
        heading: '1. Venue Access & Accreditation Hours',
        paragraphs: [
          'All pre-conference technical trainings (8–9 December) and main plenary sessions (10–11 December) take place inside the African Union Headquarters complex (Nelson Mandela Plenary Hall, Medium Conference Hall, and Caucus Rooms 01–03).',
          'Delegates must carry their original passport or diplomatic ID alongside their AFEEA accreditation reference code to collect conference badges.'
        ],
        bullets: [
          'Accreditation Desk Hours: 07:30 – 17:30 EAT (December 7–11).',
          'Plenary Interpretation Languages: English, French, Arabic, Portuguese.',
          'Secretariat Support & Media Desk: Located adjacent to Nelson Mandela Plenary Hall Foyer.'
        ]
      }
    ]
  }
];
