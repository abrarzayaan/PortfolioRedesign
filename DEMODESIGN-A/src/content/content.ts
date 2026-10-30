/**
 * Strict Content Source of Truth: c:\Project\resume\PortfolioRedesign\README.md
 * Owner: Md. Shah Abrar Zahin — End-to-End Business Backend Architect
 * Zero invented metrics.
 */

export const PROFILE_META = {
  name: 'Md. Shah Abrar Zahin',
  shortName: 'Abrar Zahin',
  role: 'End-to-End Business Backend Architect',
  subRole: 'Backend Architect · Data-Driven Systems · Distributed Systems (in depth)',
  location: 'Dhaka, Bangladesh',
  experience: '3+ years in production',
  email: 'abrar.bauet@gmail.com',
  phone: '01334317864',
  github: 'https://github.com/abrarzayaan',
  linkedin: 'https://www.linkedin.com/in/mdshahabrarzayaan/',
  coreStack: ['Oracle', 'PostgreSQL', 'Python/Django', 'Redis', 'Celery', 'Power BI'],
  chain: [
    'Business Problem',
    'Data Model',
    'System Architecture',
    'API & Logic',
    'Performance',
    'Reliability',
    'Reporting',
    'Growth',
  ],
};

export const HERO_COPY = {
  eyebrow: 'DHAKA, BANGLADESH · 3+ YEARS IN ENTERPRISE PRODUCTION',
  h1Line1: 'I architect the systems',
  h1Line2Prefix: 'your business',
  h1Accent: 'grows',
  h1Line2Suffix: 'on.',
  subcopy:
    'End-to-end backend architecture, data, and distributed systems that turn business problems into measurable growth.',
  primaryCta: 'Let’s fix your bottleneck',
  secondaryCta: 'See the proof',
  quickStats: [
    { val: '45%', label: 'Faster SQL (<500 ms)' },
    { val: '99.9%', label: 'Production Uptime' },
    { val: '1M+', label: 'Daily Records Handled' },
    { val: '99.8%', label: 'Validated Data Accuracy' },
  ],
};

export const MANIFESTO_COPY = {
  kicker: '01 // IF YOU ONLY READ 30 SECONDS',
  scrubParagraph:
    'Most developers start with “Which framework should we use?” I start with a different question: “Where is this business losing time, money, or trust — and which part of the system causes it?” Slow reports, a database that dies on busy days, stock that goes negative, numbers that don’t match between two dashboards: these are not bugs. They are architecture problems wearing a bug costume, and they are what I fix.',
  advantageNote:
    'I spent three years living inside the data of real enterprise clients, where a wrong number has a cost. A system is only as valuable as the correctness, speed, and trustworthiness of the data it produces.',
  comparisons: [
    {
      dev: '“What endpoints do you need?”',
      architect: '“What decision should this system help you make faster?”',
    },
    {
      dev: '“Which database should we pick?”',
      architect: '“What happens to your data model when you have 10× the vendors, orders, or clients?”',
    },
    {
      dev: '“It works on my machine.”',
      architect: '“What happens at 2 a.m. on your busiest day when one component fails?”',
    },
    {
      dev: '“The report is ready.”',
      architect: '“Is the number in the report correct, and will it still be correct next year?”',
    },
    {
      dev: '“Ticket closed.”',
      architect: '“Did the business metric actually move?”',
    },
  ],
  principles: [
    {
      no: '01',
      title: 'Business first, technology second.',
      desc: 'Every technical decision must be traceable to a business outcome.',
    },
    {
      no: '02',
      title: 'Correctness before speed, speed before cleverness.',
      desc: 'A fast wrong answer is worse than a slow right one; an unmaintainable clever system is worse than both.',
    },
    {
      no: '03',
      title: 'Design for failure.',
      desc: 'Assume a component will break. Decide now what happens next.',
    },
    {
      no: '04',
      title: 'Measure everything.',
      desc: 'If I cannot show a before/after number, I have not finished the job.',
    },
    {
      no: '05',
      title: 'Simple until proven otherwise.',
      desc: 'Add distribution and complexity only when the problem demands it, never to look impressive.',
    },
  ],
};

export interface BusinessProblemCard {
  no: string;
  tag: string;
  symptom: string;
  action: string;
  outcome: string;
  highlightMetric: string;
}

export const BUSINESS_PROBLEMS: BusinessProblemCard[] = [
  {
    no: '01',
    tag: 'QUERY & REPORT LATENCY',
    symptom: '“Our reports and dashboards are painfully slow.”',
    action: 'Audit execution plans, rework SQL queries, composite indexing, and data access patterns.',
    outcome: 'Cut query latency by 45% (under 500 ms) across 300+ queries and 5+ client systems.',
    highlightMetric: '45% FASTER · <500 ms',
  },
  {
    no: '02',
    tag: 'DATA INTEGRITY & RECONCILIATION',
    symptom: '“Our numbers don’t match between teams.”',
    action: 'Standardise canonical schemas, automate extraction/normalisation, and add automated SQL validation.',
    outcome: '100% schema consistency and 99.8% validated query and report accuracy.',
    highlightMetric: '99.8% ACCURACY',
  },
  {
    no: '03',
    tag: 'BOTTLENECK REMOVAL FOR SCALE',
    symptom: '“We’re growing and the system is starting to crack.”',
    action: 'Redesign the data model and data flow; introduce Redis caching, async queues, and safe concurrency.',
    outcome: 'A backend architecture that scales cleanly before growth turns into an emergency.',
    highlightMetric: '99.9% UPTIME',
  },
  {
    no: '04',
    tag: 'MULTI-VENDOR & LOGISTICS CORE',
    symptom: '“We run a marketplace / multi-vendor / delivery business.”',
    action: 'Design multi-tenant vendor schemas, row-level locked central/vendor stock sync, rider & payout logic.',
    outcome: 'Zero overselling, zero inventory race conditions, and clean financial ledgers.',
    highlightMetric: 'ZERO OVERSELLING',
  },
  {
    no: '05',
    tag: 'PIPELINE AUTOMATION',
    symptom: '“Everything runs on manual Excel and copy-paste.”',
    action: 'Build automated ETL data pipelines, scheduled normalisers, and self-updating reporting.',
    outcome: '20+ enterprise workflows automated with 35% faster report delivery.',
    highlightMetric: '20+ WORKFLOWS · 35% FASTER',
  },
  {
    no: '06',
    tag: 'DECISION BI & ANALYTICS',
    symptom: '“We can’t tell what’s really happening in the business.”',
    action: 'Build Power BI, Tableau, and custom DAX analytics layers directly on top of trustworthy data.',
    outcome: 'Executive decisions backed by numbers you can defend (supported +20% YoY sales volume).',
    highlightMetric: '+20% YoY SALES LIFT',
  },
  {
    no: '07',
    tag: 'ACCESS GOVERNANCE & RBAC',
    symptom: '“Different people see data they shouldn’t.”',
    action: 'Enforce JWT authentication, dynamic RBAC, and database privilege policies across environments.',
    outcome: '100% compliance with enterprise security and multi-environment audit standards.',
    highlightMetric: '100% COMPLIANCE',
  },
  {
    no: '08',
    tag: 'FAULT-TOLERANT ARCHITECTURE',
    symptom: '“We need to be ready for scale and failure.”',
    action: 'Evolve toward event-driven, decoupled queues, workers, and resilient data flows.',
    outcome: 'A business operation that keeps taking orders even when an individual component fails.',
    highlightMetric: 'RESILIENT BY DESIGN',
  },
];

export interface CaseStudyItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  roleAndPeriod: string;
  headlineKpi: string;
  previewCaption: string;
  clientTakeaway: string;
  metrics: { val: string; label: string }[];
  stack: string[];
  bullets: string[];
  beforeFlow: string[];
  afterFlow: string[];
  links?: { label: string; url: string }[];
}

export const SELECTED_CASES: CaseStudyItem[] = [
  {
    id: 'akt-enterprise',
    index: '01',
    title: 'Enterprise Reporting & Data Systems',
    subtitle: 'AKT Tobacco & AKT Leaf · Production Oracle & PostgreSQL',
    roleAndPeriod: 'System Engineer (Data Engineer), Suffix IT LTD. · Jun 2023 – Aug 2026',
    headlineKpi: '45% ↓ Latency (<500ms) · 99.9% Uptime',
    previewCaption: '1M+ daily records · 300+ refactored SQL queries across 5+ enterprise client systems.',
    clientTakeaway:
      'I’ve already operated in the environment where mistakes are expensive. I bring that discipline to your system from day one.',
    metrics: [
      { val: '99.9%', label: 'Production Uptime (1M+ daily rows)' },
      { val: '45% ↓', label: 'SQL Latency (<500 ms on 300+ queries)' },
      { val: '99.8%', label: 'Automated SQL Validation Accuracy' },
      { val: '35% ↑', label: 'Faster Delivery (20+ ETL workflows)' },
    ],
    stack: ['Oracle', 'PostgreSQL', 'Advanced SQL', 'Execution Plans', 'Indexing', 'ETL Automation', 'RBAC'],
    bullets: [
      'Kept production reporting alive for enterprise clients at 99.9% uptime across 1M+ daily records on Oracle & PostgreSQL.',
      'Refactored 300+ SQL queries across 5+ client systems and cut latency by 45% (runtime under 500 ms).',
      'Automated 20+ extraction and normalisation workflows: 100% schema consistency and 35% faster report delivery.',
      'Delivered analytics reports with 98%+ data accuracy, supporting a 20% YoY increase in sales volume.',
      'Built automated SQL validation scripts, raising accuracy to 99.8% across all deliverables.',
      'Configured role-based privileges across multi-environment databases with 100% security compliance.',
    ],
    beforeFlow: ['Raw Multi-Client Tables', 'Unindexed Heavy Joins', 'Manual Scripts', 'Slow / Mismatched Reports'],
    afterFlow: ['1M+ Daily Ingest', 'Normalised Canonical Schema', '99.8% SQL Validator', '<500ms Trusted BI'],
  },
  {
    id: 'pharmasys',
    index: '02',
    title: 'PharmaSys Marketplace & Rider Core',
    subtitle: 'Multi-Vendor Healthcare E-Commerce with Live Delivery & Stock Locking',
    roleAndPeriod: 'End-to-End System & Database Architecture',
    headlineKpi: 'Zero Overselling · ACID Row Locks + Redis',
    previewCaption: '4-role RBAC marketplace syncing central warehouse & multi-vendor inventory safely.',
    clientTakeaway: 'I can design the whole operational brain of a marketplace, not just its API.',
    metrics: [
      { val: '0', label: 'Inventory Oversell Race Conditions' },
      { val: '4 Roles', label: 'Vendor · Customer · Rider · Admin RBAC' },
      { val: 'N+1 → 0', label: 'ORM + Redis Hot Catalog Caching' },
      { val: 'Async', label: 'Celery + Redis Reconciliation & Invoicing' },
    ],
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'JWT', 'Dynamic RBAC'],
    bullets: [
      'System & DB architecture: relational schema covering multi-vendor inventories, central stock, order processing, and real-time delivery tracking.',
      'Inventory without overselling: vendor stock synced with central warehouse using database transactions and row-level locking, preventing race conditions.',
      'Rider logistics portal: order assignment, live status updates, and automated payout calculation.',
      'Performance: Redis caching for hot product catalogs; select_related / prefetch_related to eliminate N+1 queries.',
      'Security: JWT authentication with dynamic RBAC for Vendors, Customers, Riders, and Admins.',
      'Async processing: Celery + Redis for email notifications, daily stock reconciliation, and invoice generation.',
    ],
    beforeFlow: ['Concurrent Checkouts', 'Unlocked Stock Reads', 'Sync Invoice Blocking', 'Oversold Orders'],
    afterFlow: ['JWT + RBAC API', 'Redis Hot Cache', 'PG Row-Level Lock', 'Celery Async Ledger'],
  },
  {
    id: 'analytics-bi',
    index: '03',
    title: 'Decision Analytics & Forecasting Systems',
    subtitle: 'OneShop 1M+ ETL · Yearly Enterprise Sales DAX · Demographic Segmentation',
    roleAndPeriod: 'Power BI · Custom DAX · Python · Pandas · Excel Power Query',
    headlineKpi: '1M+ Rows Unified · 100% Data Integrity',
    previewCaption: 'Multi-source scraping, cleansing, and executive YoY forecasting dashboards.',
    clientTakeaway: 'Decisions based on data you can defend.',
    metrics: [
      { val: '1M+', label: 'Unstructured Transaction Rows Consolidated' },
      { val: '100%', label: 'Multi-Year Sales Data Integrity' },
      { val: 'DAX', label: 'Custom YoY & Seasonality Forecasting' },
      { val: '3 Repos', label: 'Open-Source Verifiable Case Studies' },
    ],
    stack: ['Power BI', 'DAX', 'Python', 'Pandas', 'Excel / Power Query', 'Multi-Source ETL'],
    bullets: [
      'E-Commerce OneShop Sales Analysis: scraping and multi-source ingestion consolidating 1M+ unstructured transaction records into clean datasets with ETL, forecasting, and revenue dashboards.',
      'Yearly Enterprise Sales Analysis: multi-year fragmented sales data unified with 100% data integrity and custom DAX for YoY growth and seasonality.',
      'Customer Bike Purchase Demographics: interactive Excel dashboard segmenting target customers by income, commute distance, and age.',
    ],
    beforeFlow: ['1M+ Messy Scraped Rows', 'Fragmented Yearly Sheets', 'Manual Formulas', 'Blind Forecasting'],
    afterFlow: ['Python / Pandas ETL', '100% Unified Star Schema', 'Custom DAX Engine', 'Executive Forecast UI'],
    links: [
      {
        label: 'OneShop Sales ETL (GitHub)',
        url: 'https://github.com/abrarzayaan/E-Commerce_OneShop_Sales_Analysis',
      },
      {
        label: 'Yearly Sales DAX (GitHub)',
        url: 'https://github.com/abrarzayaan/ShopYearly_sales_alalysis',
      },
      {
        label: 'Bike Demographics (GitHub)',
        url: 'https://github.com/abrarzayaan/customers_bike_purchase_analysis_dashboard',
      },
    ],
  },
];

export const PROOF_NUMBERS = [
  {
    value: '45',
    suffix: '%',
    label: 'Faster SQL Queries',
    context: 'Runtime cut under 500 ms across 300+ refactored production queries.',
  },
  {
    value: '99.9',
    suffix: '%',
    label: 'Production Uptime',
    context: 'Sustained across 1M+ daily enterprise records on Oracle & PostgreSQL.',
  },
  {
    value: '1',
    suffix: 'M+',
    label: 'Daily Records',
    context: 'High-volume ingestion, normalisation, and reporting pipelines.',
  },
  {
    value: '300',
    suffix: '+',
    label: 'Queries Refactored',
    context: 'Execution-plan audited and indexed across 5+ client systems.',
  },
  {
    value: '20',
    suffix: '+',
    label: 'Workflows Automated',
    context: 'End-to-end extraction and canonical schema normalisation.',
  },
  {
    value: '35',
    suffix: '%',
    label: 'Faster Report Delivery',
    context: 'Eliminated manual bottlenecks; supported +20% YoY client sales lift.',
  },
  {
    value: '99.8',
    suffix: '%',
    label: 'Deliverable Accuracy',
    context: 'Verified via automated SQL validation scripts before release.',
  },
  {
    value: '100',
    suffix: '%',
    label: 'Security Compliance',
    context: 'Role-based privilege enforcement across multi-environment DBs.',
  },
];

export interface ToolkitItem {
  name: string;
  category: 'DATA' | 'BACKEND' | 'ASYNC' | 'BI' | 'DEVOPS';
  categoryLabel: string;
  tier: 'proven' | 'working';
  proof: string;
}

export const TOOLKIT_ITEMS: ToolkitItem[] = [
  { name: 'Oracle Database', category: 'DATA', categoryLabel: 'Data & DB', tier: 'proven', proof: '99.9% uptime across 1M+ daily enterprise rows at Suffix IT LTD.' },
  { name: 'PostgreSQL', category: 'DATA', categoryLabel: 'Data & DB', tier: 'proven', proof: 'Enterprise reporting & PharmaSys ACID row-level stock locking.' },
  { name: 'Advanced SQL & Tuning', category: 'DATA', categoryLabel: 'Data & DB', tier: 'proven', proof: '300+ queries refactored — 45% latency reduction (<500 ms).' },
  { name: 'Execution Plans & Indexing', category: 'DATA', categoryLabel: 'Data & DB', tier: 'proven', proof: 'Bottleneck diagnosis across 5+ enterprise client databases.' },
  { name: 'ETL Pipelines', category: 'DATA', categoryLabel: 'Data & DB', tier: 'proven', proof: '20+ automated extraction & normalisation workflows (100% consistency).' },
  { name: 'Row-Level Locking & ACID', category: 'DATA', categoryLabel: 'Data & DB', tier: 'proven', proof: 'Prevented multi-vendor overselling under concurrent checkouts.' },
  { name: 'Python', category: 'BACKEND', categoryLabel: 'Backend & APIs', tier: 'proven', proof: 'Primary language for Django REST, Celery tasks, and Pandas ETL.' },
  { name: 'Django & DRF', category: 'BACKEND', categoryLabel: 'Backend & APIs', tier: 'proven', proof: 'Multi-vendor marketplace core, ORM N+1 elimination & APIs.' },
  { name: 'JWT & Dynamic RBAC', category: 'BACKEND', categoryLabel: 'Backend & APIs', tier: 'proven', proof: '100% security compliance & 4-actor marketplace authorization.' },
  { name: 'Redis Caching', category: 'ASYNC', categoryLabel: 'Perf & Async', tier: 'proven', proof: 'Hot product catalog cache & broker in PharmaSys.' },
  { name: 'Celery Workers', category: 'ASYNC', categoryLabel: 'Perf & Async', tier: 'proven', proof: 'Background invoicing, email dispatch & daily stock reconciliation.' },
  { name: 'Power BI & Custom DAX', category: 'BI', categoryLabel: 'Analytics & BI', tier: 'proven', proof: 'Executive YoY & seasonality dashboards supporting +20% sales growth.' },
  { name: 'Pandas & Power Query', category: 'BI', categoryLabel: 'Analytics & BI', tier: 'proven', proof: 'Consolidated 1M+ unstructured e-commerce transaction records.' },
  { name: 'Git · GitHub · GitLab · Linux', category: 'DEVOPS', categoryLabel: 'DevOps & Tooling', tier: 'proven', proof: 'Daily multi-environment production workflows & Postman API verification.' },
  { name: 'MySQL · SQL Server · Supabase', category: 'DATA', categoryLabel: 'Data & DB', tier: 'working', proof: 'Working knowledge for cross-platform relational migrations.' },
  { name: 'FastAPI & Flask', category: 'BACKEND', categoryLabel: 'Backend & APIs', tier: 'working', proof: 'Working knowledge for lightweight Python microservices.' },
  { name: 'Apache Airflow', category: 'ASYNC', categoryLabel: 'Perf & Async', tier: 'working', proof: 'Working knowledge for scheduled DAG orchestration.' },
  { name: 'Tableau', category: 'BI', categoryLabel: 'Analytics & BI', tier: 'working', proof: 'Working knowledge for visual analytics storytelling.' },
  { name: 'Docker · Kubernetes · CI/CD', category: 'DEVOPS', categoryLabel: 'DevOps & Tooling', tier: 'working', proof: 'Working knowledge for containerised service deployment.' },
];

export const ENGAGEMENT_PHASES = [
  {
    no: '01',
    name: 'Discover',
    happens: 'I learn your business flow, operational pain points, and the exact metrics leadership cares about.',
    deliverable: 'A clear problem statement written in plain business language',
  },
  {
    no: '02',
    name: 'Diagnose',
    happens: 'Deep audit of your relational schema, slow SQL queries, execution plans, data flows, and failure points.',
    deliverable: 'Prioritised findings: what hurts most vs what is fastest to fix',
  },
  {
    no: '03',
    name: 'Architect',
    happens: 'Data model and backend topology designed cleanly around your next stage of business growth.',
    deliverable: 'Architecture blueprint + explicit engineering trade-off notes',
  },
  {
    no: '04',
    name: 'Build',
    happens: 'Clean implementation of APIs, domain logic, ETL pipelines, and automated validation workflows.',
    deliverable: 'Working, tested, documented system ready for production',
  },
  {
    no: '05',
    name: 'Harden',
    happens: 'Row-level locking, Redis caching, Celery async queues, RBAC security, and integrity checks.',
    deliverable: 'A resilient system that survives real-world peak-day load',
  },
  {
    no: '06',
    name: 'Prove',
    happens: 'Before/after latency benchmarks, SQL validation checks, and executive BI dashboards.',
    deliverable: 'Defensible numerical evidence that the business actually improved',
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    period: '2026 — PRESENT',
    role: 'End-to-End Business Backend Architect',
    org: 'Independent Architecture · Data & Distributed Systems',
    summary:
      'Partnering with marketplaces, distribution, and data-intensive businesses to turn slow databases, fragile pipelines, and concurrency bugs into resilient growth engines.',
    highlights: ['End-to-End Ownership', 'Marketplace & Ledger Core', 'Distributed Resilience'],
  },
  {
    period: 'JUN 2023 — AUG 2026',
    role: 'System Engineer (Data Engineer)',
    org: 'Suffix IT LTD. · Enterprise Clients (AKT Tobacco & AKT Leaf)',
    summary:
      'Owned mission-critical enterprise reporting and database performance across 1M+ daily records on Oracle and PostgreSQL at 99.9% uptime.',
    highlights: ['300+ Queries (-45%, <500ms)', '20+ Workflows Automated', '99.8% SQL Validation', '100% RBAC Compliance'],
  },
  {
    period: 'FEB 2023 — MAY 2023',
    role: 'SQL Development Intern',
    org: 'Suffix IT LTD. · Dhaka, Bangladesh',
    summary:
      'Built strong production foundations in relational schema normalisation, complex analytical joins, and enterprise reporting verification.',
    highlights: ['Promoted in 4 Months', 'Schema Normalisation', 'Enterprise SQL'],
  },
  {
    period: '2018 — 2022',
    role: 'B.Sc. in Computer Science & Engineering',
    org: 'Bangladesh Army University of Engineering and Technology (BAUET)',
    summary:
      'Undergraduate Thesis: “Object Detection: Comparative Study of YOLOv3 vs YOLOv7” — benchmarking accuracy-latency trade-offs quantitatively.',
    highlights: ['B.Sc. CSE', 'YOLOv3 vs YOLOv7 Thesis'],
  },
];

export interface SwitchboardModule {
  id: string;
  code: string;
  name: string;
  healthyStatus: string;
  failoverAction: string;
  roleDesc: string;
}

export const DIRECTION_DATA = {
  headline: 'Where I’m heading: systems that don’t stop.',
  sub: 'My direction is deliberate: distributed systems and event-driven architecture — applied for business survival, never for CV buzzwords.',
  honestQuote:
    'I’ll tell you honestly when your business does not need distribution yet. The best architecture is the simplest one that survives your next stage of growth.',
  alreadyInProd:
    'Queues and workers (Celery + Redis), caching layers, transactional safety under concurrency, and multi-environment data governance.',
  deepening:
    'Message brokers and event streaming, service decomposition, replication and partitioning, consistency models, observability.',
  pillars: [
    { title: 'Resilience', desc: 'One component failure should never stop customer sales.' },
    { title: 'Scale on demand', desc: 'Handle the festival-day spike without over-paying the other 360 days.' },
    { title: 'Independent growth', desc: 'Teams and services evolve without breaking each other.' },
    { title: 'Trustworthy data', desc: 'Consistency strategies that keep money and stock numbers exact.' },
  ],
  modules: [
    {
      id: 'mod-gateway',
      code: 'NODE 01',
      name: 'Edge & Rate Gateway',
      healthyStatus: 'ONLINE · ROUTING',
      failoverAction: 'SECONDARY INGRESS ACTIVE',
      roleDesc: 'Absorbs traffic spikes & routes authenticated requests cleanly.',
    },
    {
      id: 'mod-api',
      code: 'NODE 02',
      name: 'Stateless API Core',
      healthyStatus: 'ONLINE · <500ms',
      failoverAction: 'REPLICA WORKER POOL LIVE',
      roleDesc: 'Django REST + RBAC domain rules with zero local session lock-in.',
    },
    {
      id: 'mod-cache',
      code: 'NODE 03',
      name: 'Redis Cache & Broker',
      healthyStatus: 'HIT RATIO HIGH',
      failoverAction: 'SAFE DB READ FALLBACK',
      roleDesc: 'Serves hot catalogs fast and buffers async task bursts.',
    },
    {
      id: 'mod-db',
      code: 'NODE 04',
      name: 'Primary + Replica DB',
      healthyStatus: 'ACID LOCKED · 99.9%',
      failoverAction: 'STANDBY REPLICA PROMOTED',
      roleDesc: 'Row-level inventory locking & validated 99.8% ledger integrity.',
    },
    {
      id: 'mod-workers',
      code: 'NODE 05',
      name: 'Celery Async Workers',
      healthyStatus: 'QUEUE DRAINING',
      failoverAction: 'RETRY QUEUE BUFFERED',
      roleDesc: 'Decouples invoicing, emails & ETL so checkouts never block.',
    },
  ] as SwitchboardModule[],
};

export const CONTACT_DATA = {
  headline: 'Is your system slowing your business down?',
  sub: 'Or can you see the next 5× stage of growth and don’t trust your current database or backend to carry it? Let’s talk.',
  greatFit: [
    'Startups and scale-ups whose database or reporting is becoming the bottleneck',
    'Marketplaces, logistics, retail, pharma, manufacturing, and distribution businesses',
    'Teams that want one person who understands both the business and the data layer',
    'Companies that need accuracy, auditability, and security — not just “it works”',
  ],
  notFit: [
    'Pure front-end or visual-design-only projects',
    '“Build it as cheap and fast as possible, quality doesn’t matter” projects',
  ],
  firstCallQuestions: [
    'What does your business do when it’s running perfectly, and what is the first thing that breaks when it grows 5×?',
    'Which report or number do you trust least right now?',
    'Where do people on your team still copy-paste, re-key, or reconcile by hand?',
    'What happens today if your database or main service goes down for an hour?',
    'What single metric would make you look back and say “this engagement was worth it”?',
  ],
};
