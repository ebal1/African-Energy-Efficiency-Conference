export type ConferenceDay = 'day1' | 'day2' | 'day3' | 'day4';

export type SessionTrack =
  | 'Pre-Conference Training'
  | 'Ministerial & Plenary'
  | 'Technical & Standards'
  | 'Finance & Partnerships';

export interface ConferenceSession {
  id: string;
  day: ConferenceDay;
  dayLabel: string;
  dateISO: string;
  startTime: string;
  endTime: string;
  title: string;
  track: SessionTrack;
  room: string;
  leadOrg: string;
  summary: string;
  outcomes: string[];
  speakerIds: string[];
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  countryOrRegion: string;
  roleType: 'Ministerial Keynote' | 'Institutional Leadership' | 'Technical Chair';
  initials: string;
  bio: string;
  focusAreas: string[];
}

export interface FocusSector {
  number: string;
  id: string;
  title: string;
  shortLabel: string;
  tierColor: string;
  tierCode: string;
  headlineMetric: string;
  metricContext: string;
  leadAgency: string;
  description: string;
  policyInstruments: string[];
  target2040: string;
}

export interface PartnerOrg {
  name: string;
  acronym: string;
  category: 'Host & Convenors' | 'UN & Multilateral Partners' | 'Technical & Regional Centres';
  role: string;
  url: string;
}

export interface ConferenceBrief {
  id: string;
  code: string;
  title: string;
  category: string;
  pages: string;
  summary: string;
  keyTakeaways: string[];
}

export const OFFICIAL_PORTAL_URL = 'https://afeea.au-afrec.org/';
export const LOGO_PATH = '/assets/aistudio/logo_Afeea_ed7b3b27.png';

export const MANDATE_METRICS = [
  {
    value: '50%',
    label: 'Energy Productivity Gain by 2050',
    context: 'Continental AfEES benchmark across industry, buildings, and power'
  },
  {
    value: '70%',
    label: 'Energy Productivity Gain by 2063',
    context: 'Aligned with African Union Agenda 2063 long-term transformation'
  },
  {
    value: '175 TWh',
    label: 'Annual Appliance Savings by 2040',
    context: 'Projected demand reduction from harmonized MEPS in cooling and lighting'
  },
  {
    value: '55',
    label: 'AU Member States Engaged',
    context: 'Unified through regional power pools, ministries, and AfEEA partners'
  }
];

export const FOCUS_SECTORS: FocusSector[] = [
  {
    number: '01',
    id: 'meps-appliances',
    title: 'Minimum Energy Performance Standards (MEPS)',
    shortLabel: 'Appliances & MEPS',
    tierColor: '#15803D',
    tierCode: 'Tier A+',
    headlineMetric: '175 TWh',
    metricContext: 'Projected annual electricity savings across Africa by 2040',
    leadAgency: 'AFREC · UNIDO EELA · UNEP U4E',
    description:
      'Harmonizing Minimum Energy Performance Standards and comparative energy labelling across lighting, space cooling, refrigeration, industrial motors, and distribution transformers to eliminate inefficient product dumping.',
    policyInstruments: [
      'Regional MEPS Model Regulations & Verification Protocols',
      'Mandatory Comparative Energy Efficiency Labelling',
      'Market Surveillance & Accredited Testing Laboratories'
    ],
    target2040: '100% regional harmonization for residential cooling and lighting across all five AU regions'
  },
  {
    number: '02',
    id: 'power-grids-afsem',
    title: 'Power Grids & AfSEM Integration',
    shortLabel: 'Grids & AfSEM',
    tierColor: '#16A34A',
    tierCode: 'Tier A',
    headlineMetric: '< 10%',
    metricContext: 'Target technical distribution loss benchmark for utilities',
    leadAgency: 'AFREC · Regional Power Pools · AfSEM',
    description:
      'Integrating demand-side management and technical loss reduction directly into the Africa Single Electricity Market (AfSEM) and the Continental Power Systems Masterplan (CMP) to defer costly peak generation.',
    policyInstruments: [
      'Standardized Distribution Loss Auditing Methodology',
      'High-Efficiency Distribution Transformer Rollouts',
      'Cross-Border Grid Code Efficiency Provisions'
    ],
    target2040: 'Recover 40+ TWh of technical grid losses through utility modernization and smart metering'
  },
  {
    number: '03',
    id: 'bioclimatic-buildings',
    title: 'Bioclimatic Buildings & Urban Cooling',
    shortLabel: 'Buildings & Cooling',
    tierColor: '#65A30D',
    tierCode: 'Tier B',
    headlineMetric: '35%',
    metricContext: 'Building cooling load reduction via passive bioclimatic codes',
    leadAgency: 'PEEB · AU Member State Ministries',
    description:
      'Embedding passive architectural design, thermal envelope standards, and high-efficiency HVAC procurement into Africa’s rapidly expanding urban commercial and public building stock.',
    policyInstruments: [
      'Climate-Zone Adapted Green Building Codes',
      'Public Building Retrofit & Energy Audit Mandates',
      'Sustainable Cooling Action Plans for Rapidly Growing Cities'
    ],
    target2040: 'Mandate energy performance certification for all new public and commercial developments'
  },
  {
    number: '04',
    id: 'industrial-decarbonization',
    title: 'Industrial Productivity & SME Modernization',
    shortLabel: 'Industry & SMEs',
    tierColor: '#CA8A04',
    tierCode: 'Tier C',
    headlineMetric: '28%',
    metricContext: 'Average industrial energy intensity reduction potential',
    leadAgency: 'UNIDO · EELA Programme · National Centres',
    description:
      'Scaling ISO 50001 energy management systems, variable speed drives, waste heat recovery, and high-efficiency electric motors across agro-processing, cement, mining, and manufacturing SMEs.',
    policyInstruments: [
      'ISO 50001 Certification & Industrial Audit Incentives',
      'Motor & Compressed-Air System Upgrade Programs',
      'Certified Energy Manager Accreditation Schemes'
    ],
    target2040: 'Establish accredited industrial energy efficiency centers across all Regional Economic Communities'
  },
  {
    number: '05',
    id: 'clean-cooking-access',
    title: 'Clean Cooking & Equitable Energy Access',
    shortLabel: 'Clean Cooking',
    tierColor: '#EA580C',
    tierCode: 'Tier D',
    headlineMetric: '600M+',
    metricContext: 'Citizens prioritized for modern electricity and clean cooking access',
    leadAgency: 'AFREC · SEforALL · National Energy Agencies',
    description:
      'Treating efficiency as Africa’s "First Fuel" so every megawatt generated reaches more households—combining high-efficiency e-cooking, improved thermal stoves, and productive-use mini-grid appliances.',
    policyInstruments: [
      'National Clean Cooking Efficiency Standards',
      'Productive-Use Appliance Financing for Rural Mini-Grids',
      'Result-Based Carbon & Clean Cooking Credits'
    ],
    target2040: 'Universal access to tier-4 clean cooking solutions integrated with national electrification'
  },
  {
    number: '06',
    id: 'blended-finance',
    title: 'Blended Finance & The AfEE Facility',
    shortLabel: 'Finance & ESCOs',
    tierColor: '#DC2626',
    tierCode: 'Facility',
    headlineMetric: '$5B+',
    metricContext: 'Targeted mobilization via African Energy Efficiency Facility',
    leadAgency: 'AFREC · AfDB · AEEP · Development Banks',
    description:
      'Designing the dedicated African Energy Efficiency Facility alongside Energy Service Company (ESCO) contract templates, credit guarantees, and green bond taxonomies to unlock commercial capital.',
    policyInstruments: [
      'African Energy Efficiency Facility (AfEE Facility) Architecture',
      'Standardized Energy Performance Contracting (EPC) Frameworks',
      'First-Loss Credit Guarantees for Local Commercial Banks'
    ],
    target2040: 'Operationalize self-sustaining ESCO markets across at least 30 AU Member States'
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 'habtamu-itefa',
    name: 'H.E. Dr. Ing. Habtamu Itefa',
    title: 'Minister of Water and Energy',
    organization: 'Federal Democratic Republic of Ethiopia',
    countryOrRegion: 'Ethiopia (Host Nation)',
    roleType: 'Ministerial Keynote',
    initials: 'HI',
    bio: 'Leads Ethiopia’s national energy transition, clean power expansion, and continental cooperation on regional grid interconnectivity and demand-side efficiency standards.',
    focusAreas: ['National Energy Policy', 'Regional Power Interconnectors', 'Clean Cooking Transition']
  },
  {
    id: 'lerato-mataboge',
    name: 'H.E. Lerato D. Mataboge',
    title: 'Commissioner for Infrastructure and Energy',
    organization: 'African Union Commission',
    countryOrRegion: 'Continental · Addis Ababa',
    roleType: 'Institutional Leadership',
    initials: 'LM',
    bio: 'Spearheads continental infrastructure corridors, the Africa Single Electricity Market (AfSEM), and the institutional operationalization of the African Energy Efficiency Strategy and Action Plan (AfEES).',
    focusAreas: ['AU Agenda 2063', 'AfSEM & Continental Masterplan', 'AfEES Governance']
  },
  {
    id: 'rashid-abdallah',
    name: 'Rashid Ali Abdallah',
    title: 'Executive Director',
    organization: 'African Energy Commission (AFREC)',
    countryOrRegion: 'Continental · Algiers & Addis Ababa',
    roleType: 'Institutional Leadership',
    initials: 'RA',
    bio: 'Directs AFREC’s continental energy statistics, capacity building, and policy harmonization mandates, convening AU Member States to launch and operationalize the African Energy Efficiency Alliance (AfEEA).',
    focusAreas: ['AfEEA Operationalization', 'Continental Energy Data', 'Policy Harmonization']
  },
  {
    id: 'gerd-muller',
    name: 'Gerd Müller',
    title: 'Director General',
    organization: 'United Nations Industrial Development Organization (UNIDO)',
    countryOrRegion: 'Global · UN System',
    roleType: 'Institutional Leadership',
    initials: 'GM',
    bio: 'Champions sustainable industrial development across Africa through UNIDO’s EELA (Energy Efficiency for Sustainable Livelihoods in Africa) programme, supporting SMEs, motors, and testing labs.',
    focusAreas: ['Industrial Decarbonization', 'EELA Programme', 'SME Technical Capacity']
  },
  {
    id: 'fatma-chiboub',
    name: 'H.E. Fatma Thabet Chiboub',
    title: 'Minister of Industry, Mines and Energy',
    organization: 'Republic of Tunisia',
    countryOrRegion: 'North Africa',
    roleType: 'Ministerial Keynote',
    initials: 'FC',
    bio: 'Oversees Tunisia’s pioneering industrial energy management funds, solar-efficiency integration, and North African regulatory collaboration on building codes and appliance labelling.',
    focusAreas: ['Energy Transition Funds', 'Industrial Efficiency', 'Mediterranean & African Grids']
  },
  {
    id: 'damilola-ogunbiyi',
    name: 'Damilola Ogunbiyi',
    title: 'CEO & Special Representative of the UN Secretary-General',
    organization: 'Sustainable Energy for All (SEforALL)',
    countryOrRegion: 'Global & Africa',
    roleType: 'Institutional Leadership',
    initials: 'DO',
    bio: 'Leads global and African initiatives bridging electricity access, sustainable cooling, clean cooking, and energy efficiency as the fastest, lowest-cost lever for equitable energy transitions.',
    focusAreas: ['Energy Access & First Fuel', 'Sustainable Cooling', 'Blended Finance']
  },
  {
    id: 'samson-okon',
    name: 'Eng. Samson B. O. Okon',
    title: 'Lead Technical Chair, Grids & AfSEM Efficiency',
    organization: 'AFREC Technical Advisory Panel',
    countryOrRegion: 'West & Continental Africa',
    roleType: 'Technical Chair',
    initials: 'SO',
    bio: 'Coordinates technical loss benchmarks across African regional power pools and leads the pre-conference training curriculum on distribution network audits and AfREC energy efficiency questionnaires.',
    focusAreas: ['Distribution Grid Losses', 'Power Pool Integration', 'AFREC Data Standards']
  },
  {
    id: 'amina-benali',
    name: 'Dr. Amina Benali',
    title: 'Principal Advisor, Bioclimatic Buildings & Finance',
    organization: 'Partnership for Energy Efficiency in Buildings (PEEB)',
    countryOrRegion: 'North & Sub-Saharan Africa',
    roleType: 'Technical Chair',
    initials: 'AB',
    bio: 'Advises African ministries and municipal planners on bioclimatic architecture, thermal envelope codes, and structuring concessional finance for low-carbon public buildings.',
    focusAreas: ['Bioclimatic Design', 'Green Building Codes', 'Public Sector Retrofits']
  }
];

export const CONFERENCE_DAYS: { id: ConferenceDay; label: string; date: string; subtitle: string }[] = [
  {
    id: 'day1',
    label: 'Day 01 · Dec 8',
    date: 'Monday, 8 December',
    subtitle: 'Pre-Conference Technical Trainings & MEPS Review'
  },
  {
    id: 'day2',
    label: 'Day 02 · Dec 9',
    date: 'Tuesday, 9 December',
    subtitle: 'Pre-Conference Trainings: Grids, Buildings & AfEE Facility'
  },
  {
    id: 'day3',
    label: 'Day 03 · Dec 10',
    date: 'Wednesday, 10 December',
    subtitle: 'Main Conference Opening, Ministerial Panels & AfEEA Launch'
  },
  {
    id: 'day4',
    label: 'Day 04 · Dec 11',
    date: 'Thursday, 11 December',
    subtitle: 'Sector Implementation, AfSEM Connectivity & Closing Communiqué'
  }
];

export const SESSIONS: ConferenceSession[] = [
  {
    id: 'd1-s1',
    day: 'day1',
    dayLabel: 'Dec 8',
    dateISO: '2025-12-08',
    startTime: '09:00',
    endTime: '12:30',
    title: 'MEPS Handbook Validation & Appliance Testing Workshop',
    track: 'Pre-Conference Training',
    room: 'Nelson Mandela Plenary Hall · AU HQ',
    leadOrg: 'AFREC & UNIDO EELA',
    summary:
      'Hands-on technical workshop reviewing the Continental Minimum Energy Performance Standards (MEPS) implementation handbook covering cooling, lighting, motors, and market surveillance.',
    outcomes: [
      'Validation of regional MEPS conformity checklists',
      'Peer exchange on customs enforcement and anti-dumping controls'
    ],
    speakerIds: ['rashid-abdallah', 'gerd-muller']
  },
  {
    id: 'd1-s2',
    day: 'day1',
    dayLabel: 'Dec 8',
    dateISO: '2025-12-08',
    startTime: '14:00',
    endTime: '17:30',
    title: 'Energy Efficiency Data Harmonization & AFREC Questionnaires',
    track: 'Technical & Standards',
    room: 'Caucus Room 02 · AU HQ',
    leadOrg: 'AFREC Statistics Division',
    summary:
      'Capacity-building training for National Focal Points on tracking energy intensity indicators, appliance stock turnover, and reporting standardized efficiency data into the African Energy Information System.',
    outcomes: [
      'Unified 2026 national energy efficiency reporting templates',
      'Methodology alignment with IEA global efficiency indicators'
    ],
    speakerIds: ['samson-okon']
  },
  {
    id: 'd2-s1',
    day: 'day2',
    dayLabel: 'Dec 9',
    dateISO: '2025-12-09',
    startTime: '09:00',
    endTime: '12:30',
    title: 'Determining Technical Losses in Distribution Grids',
    track: 'Pre-Conference Training',
    room: 'Caucus Room 01 · AU HQ',
    leadOrg: 'AFREC & Regional Power Pools',
    summary:
      'Engineering training for utility planners and regulators on isolating technical vs. non-technical distribution losses, transformer sizing, and feeder optimization.',
    outcomes: [
      'Standardized utility loss-reduction baseline protocol',
      'Integration roadmap with AfSEM grid reliability benchmarks'
    ],
    speakerIds: ['samson-okon']
  },
  {
    id: 'd2-s2',
    day: 'day2',
    dayLabel: 'Dec 9',
    dateISO: '2025-12-09',
    startTime: '13:30',
    endTime: '15:30',
    title: 'Bioclimatic Building Design & Urban Cooling Finance',
    track: 'Pre-Conference Training',
    room: 'Caucus Room 03 · AU HQ',
    leadOrg: 'Partnership for Energy Efficiency in Buildings (PEEB)',
    summary:
      'Applied design and financing clinic on passive cooling strategies, building energy codes, and structuring bankable public-building retrofit pipelines.',
    outcomes: [
      'Model municipal building energy code clauses',
      'PEEB technical assistance intake briefing for Member States'
    ],
    speakerIds: ['amina-benali']
  },
  {
    id: 'd2-s3',
    day: 'day2',
    dayLabel: 'Dec 9',
    dateISO: '2025-12-09',
    startTime: '16:00',
    endTime: '18:00',
    title: 'Designing the African Energy Efficiency Facility (AfEE Facility)',
    track: 'Finance & Partnerships',
    room: 'Medium Conference Hall · AU HQ',
    leadOrg: 'AFREC, AfDB & SEforALL',
    summary:
      'Expert consultative session structuring blended finance instruments, ESCO risk-sharing facilities, and clean cooking financing windows ahead of the ministerial launch.',
    outcomes: [
      'Draft governance and capital-stack term sheet for AfEE Facility',
      'Clean cooking & industrial SME credit window parameters'
    ],
    speakerIds: ['damilola-ogunbiyi', 'amina-benali']
  },
  {
    id: 'd3-s1',
    day: 'day3',
    dayLabel: 'Dec 10',
    dateISO: '2025-12-10',
    startTime: '09:00',
    endTime: '11:00',
    title: 'High-Level Opening Ceremony & Continental Mandate',
    track: 'Ministerial & Plenary',
    room: 'Nelson Mandela Plenary Hall · AU HQ',
    leadOrg: 'African Union Commission · AFREC · Government of Ethiopia',
    summary:
      'Official opening of the African Energy Efficiency Conference, framing energy efficiency as Africa’s "First Fuel" for energy security, industrial competitiveness, and Agenda 2063.',
    outcomes: [
      'Keynote addresses by AUC, Host Ministry, AFREC, and UNIDO leadership',
      'Adoption of the conference framework under AfEES milestones'
    ],
    speakerIds: ['habtamu-itefa', 'lerato-mataboge', 'rashid-abdallah', 'gerd-muller']
  },
  {
    id: 'd3-s2',
    day: 'day3',
    dayLabel: 'Dec 10',
    dateISO: '2025-12-10',
    startTime: '11:30',
    endTime: '13:30',
    title: 'Ministerial Roundtable: Scaling Investments & Clean Access',
    track: 'Ministerial & Plenary',
    room: 'Nelson Mandela Plenary Hall · AU HQ',
    leadOrg: 'AU Energy Ministers & Development Partners',
    summary:
      'Ministers and development bank principals examine policy reforms needed to bridge the 600M+ electricity access gap while unlocking 50% productivity gains by 2050.',
    outcomes: [
      'Joint ministerial commitments on national energy efficiency action plans',
      'Alignment of donor, EU, and multilateral climate finance pipelines'
    ],
    speakerIds: ['fatma-chiboub', 'habtamu-itefa', 'damilola-ogunbiyi']
  },
  {
    id: 'd3-s3',
    day: 'day3',
    dayLabel: 'Dec 10',
    dateISO: '2025-12-10',
    startTime: '15:00',
    endTime: '17:30',
    title: 'Official Launch of the African Energy Efficiency Alliance (AfEEA)',
    track: 'Finance & Partnerships',
    room: 'Nelson Mandela Plenary Hall · AU HQ',
    leadOrg: 'AFREC · AfEEA Founding Partners',
    summary:
      'Formal inauguration of the AfEEA multi-stakeholder coalition unifying AU Member States, regional centers, private sector ESCOs, and international agencies around shared continental targets.',
    outcomes: [
      'Signing of the AfEEA Founding Partnership Charter',
      'Announcement of 2026–2028 Alliance Working Groups'
    ],
    speakerIds: ['lerato-mataboge', 'rashid-abdallah', 'damilola-ogunbiyi']
  },
  {
    id: 'd4-s1',
    day: 'day4',
    dayLabel: 'Dec 11',
    dateISO: '2025-12-11',
    startTime: '09:30',
    endTime: '12:00',
    title: 'Transforming Appliance Markets: 175 TWh Savings by 2040',
    track: 'Technical & Standards',
    room: 'Medium Conference Hall · AU HQ',
    leadOrg: 'UNIDO EELA · UNEP · Regional Centres',
    summary:
      'Technical deep-dive into regional implementation of cooling, lighting, motor, and transformer standards across ECOWAS, EAC, SADC, North Africa, and Central Africa.',
    outcomes: [
      'Regional testing laboratory network sharing agreement',
      'Private-sector manufacturer transition roadmap'
    ],
    speakerIds: ['gerd-muller', 'fatma-chiboub']
  },
  {
    id: 'd4-s2',
    day: 'day4',
    dayLabel: 'Dec 11',
    dateISO: '2025-12-11',
    startTime: '13:30',
    endTime: '15:30',
    title: 'Grid Modernization, AfSEM & Private Capital Mobilization',
    track: 'Finance & Partnerships',
    room: 'Medium Conference Hall · AU HQ',
    leadOrg: 'AEEP · Regional Power Pools · AfDB',
    summary:
      'Connecting demand-side efficiency with Continental Power Systems Masterplan (CMP) corridors and establishing bankable ESCO frameworks for industrial and utility off-takers.',
    outcomes: [
      'AfSEM demand-side integration policy brief',
      'Commercial bank & ESCO co-investment matchmaking summary'
    ],
    speakerIds: ['samson-okon', 'amina-benali']
  },
  {
    id: 'd4-s3',
    day: 'day4',
    dayLabel: 'Dec 11',
    dateISO: '2025-12-11',
    startTime: '16:00',
    endTime: '17:30',
    title: 'Addis Ababa Communiqué & 2026–2030 Action Roadmap',
    track: 'Ministerial & Plenary',
    room: 'Nelson Mandela Plenary Hall · AU HQ',
    leadOrg: 'AFREC & African Union Commission',
    summary:
      'Adoption of the conference outcomes, endorsement of working-group deliverables, and formal closing remarks charting the path toward the next continental review.',
    outcomes: [
      'Adoption of the Addis Ababa AfEEA Action Communiqué',
      'Publication of Member State focal-point implementation calendar'
    ],
    speakerIds: ['rashid-abdallah', 'lerato-mataboge']
  }
];

export const PARTNERS: PartnerOrg[] = [
  {
    name: 'African Energy Commission (AFREC)',
    acronym: 'AFREC',
    category: 'Host & Convenors',
    role: 'Specialized AU energy agency leading AfEES & AfEEA Secretariat',
    url: 'https://au-afrec.org/'
  },
  {
    name: 'African Union Commission (AUC)',
    acronym: 'AUC',
    category: 'Host & Convenors',
    role: 'Continental policy mandate, Agenda 2063 & AfSEM governance',
    url: 'https://au.int/'
  },
  {
    name: 'Ministry of Water and Energy, Ethiopia',
    acronym: 'MoWE',
    category: 'Host & Convenors',
    role: 'Host country ministerial partner in Addis Ababa',
    url: 'https://afeea.au-afrec.org/'
  },
  {
    name: 'United Nations Industrial Development Organization',
    acronym: 'UNIDO / EELA',
    category: 'UN & Multilateral Partners',
    role: 'Co-lead on industrial efficiency, motors, and EELA appliance standards',
    url: 'https://www.eela-project.org/'
  },
  {
    name: 'Sustainable Energy for All',
    acronym: 'SEforALL',
    category: 'UN & Multilateral Partners',
    role: 'Strategic partner on cooling, clean cooking, and energy access',
    url: 'https://www.seforall.org/'
  },
  {
    name: 'Africa-EU Energy Partnership',
    acronym: 'AEEP',
    category: 'UN & Multilateral Partners',
    role: 'Continental power system connectivity and AfSEM collaboration',
    url: 'https://africa-eu-energy-partnership.org/'
  },
  {
    name: 'Partnership for Energy Efficiency in Buildings',
    acronym: 'PEEB',
    category: 'Technical & Regional Centres',
    role: 'Bioclimatic building codes and urban building retrofit finance',
    url: 'https://www.peeb.build/'
  },
  {
    name: 'United Nations Environment Programme',
    acronym: 'UNEP U4E',
    category: 'Technical & Regional Centres',
    role: 'Model regulations for energy-efficient lighting and cooling markets',
    url: 'https://united4efficiency.org/'
  },
  {
    name: 'International Energy Agency & Regional Centres',
    acronym: 'IEA · ECREEE · EACREEE · SACREEE',
    category: 'Technical & Regional Centres',
    role: 'Energy statistics, MEPS harmonization, and regional capacity hubs',
    url: 'https://afeea.au-afrec.org/'
  }
];

export const CONFERENCE_BRIEFS: ConferenceBrief[] = [
  {
    id: 'brief-afees',
    code: 'DOC-AFEES-01',
    title: 'African Energy Efficiency Strategy and Action Plan (AfEES)',
    category: 'Continental Framework',
    pages: '42 pp. Executive Brief',
    summary:
      'Establishes the continental roadmap to increase energy productivity across Africa by 50% by 2050 and 70% by 2063 across power, industry, buildings, transport, and agriculture.',
    keyTakeaways: [
      'Positions energy efficiency as Africa’s "First Fuel" to strengthen energy security and lower system costs.',
      'Establishes national monitoring indicators synchronized with AFREC’s African Energy Information System.',
      'Mandates cross-sectoral coordination between ministries of energy, industry, housing, and finance.'
    ]
  },
  {
    id: 'brief-meps',
    code: 'DOC-MEPS-02',
    title: 'Continental MEPS Implementation & Appliance Labelling Guide',
    category: 'Technical Standard',
    pages: '28 pp. Technical Handbook',
    summary:
      'Provides actionable legal templates, testing specifications, and customs verification protocols for Member States adopting harmonized Minimum Energy Performance Standards.',
    keyTakeaways: [
      'Prioritizes four high-impact product groups: air conditioners, refrigerators, LED lighting, and industrial motors.',
      'Projects up to 175 TWh of annual electricity savings continent-wide by 2040.',
      'Outlines shared regional testing infrastructure via ECREEE, EACREEE, SACREEE, and North/Central hubs.'
    ]
  },
  {
    id: 'brief-facility',
    code: 'DOC-FIN-03',
    title: 'African Energy Efficiency Facility (AfEE Facility) Concept Note',
    category: 'Investment Architecture',
    pages: '19 pp. Financing Blueprint',
    summary:
      'Details the blended-finance vehicle designed to de-risk Energy Service Company (ESCO) contracts, municipal building retrofits, and industrial motor replacement lines.',
    keyTakeaways: [
      'Combines concessional first-loss guarantees with local commercial bank credit lines.',
      'Standardizes Energy Performance Contracting (EPC) templates for public hospitals, schools, and utilities.',
      'Establishes a dedicated project preparation window for bankable regional efficiency portfolios.'
    ]
  }
];
