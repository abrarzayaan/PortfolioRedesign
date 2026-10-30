/**
 * Single Source of Truth for Design C: The Request's Journey
 * Strictly sourced from README.md — Zero invented metrics.
 * Illustrative simulations are explicitly marked "illustrative".
 */

export interface StageStop {
  id: string;
  stopLabel: string;
  bgHex: string;
  trailHex: string;
}

export interface SwipeProblemCard {
  no: string;
  problem: string;
  action: string;
  outcome: string;
  badge: string;
}

export interface PosterCaseStudy {
  id: string;
  num: string;
  stopTag: string;
  title: string;
  oneLineResult: string;
  roleOrStack: string;
  metrics: { val: string; label: string }[];
  stackChips: string[];
  bullets: string[];
  takeaway: string;
  links?: { label: string; url: string }[];
  flowSteps: string[];
}

export interface PhysicsChip {
  label: string;
  layer: 'DATA' | 'BACKEND' | 'ASYNC' | 'BI' | 'DEVOPS';
  proven: boolean;
  whereUsed: string;
}

export const SITE_META = {
  name: 'Md. Shah Abrar Zahin',
  monogram: 'AZ',
  roleLine: 'End-to-End Business Backend Architect · Data & Distributed Systems',
  location: 'Dhaka, Bangladesh',
  experience: '3+ years in production',
  email: 'abrar.bauet@gmail.com',
  phone: '01334317864',
  github: 'https://github.com/abrarzayaan',
  linkedin: 'https://www.linkedin.com/in/mdshahabrarzayaan/',
  chain: [
    'Business problem',
    'Data model',
    'System architecture',
    'API & logic',
    'Performance',
    'Reliability',
    'Reporting',
    'Growth',
  ],
};

export const STAGE_STOPS: StageStop[] = [
  { id: 'hero', stopLabel: 'STOP 00 · CUSTOMER', bgHex: '#FFE9D6', trailHex: '#FF5A36' },
  { id: 'positioning', stopLabel: 'STOP 01 · EDGE', bgHex: '#FF5A36', trailHex: '#0B0B0F' },
  { id: 'services', stopLabel: 'STOP 02 · API', bgHex: '#1D3BFF', trailHex: '#FFC933' },
  { id: 'work', stopLabel: 'STOP 03–04 · QUEUE & WORKER', bgHex: '#FFC933', trailHex: '#0B0B0F' },
  { id: 'numbers', stopLabel: 'STOP 05 · DATABASE', bgHex: '#7A4DFF', trailHex: '#C6FF3D' },
  { id: 'toolkit', stopLabel: 'STOP 06 · WAREHOUSE', bgHex: '#0B0B0F', trailHex: '#C6FF3D' },
  { id: 'process', stopLabel: 'STOP 07 · REPORT & LOG', bgHex: '#EDEDE6', trailHex: '#7A4DFF' },
  { id: 'direction', stopLabel: 'STOP 08 · SCALE', bgHex: '#0B0B0F', trailHex: '#C6FF3D' },
  { id: 'contact', stopLabel: 'STOP 09 · GROWTH', bgHex: '#C6FF3D', trailHex: '#0B0B0F' },
];

export const POSITIONING_COPY = {
  headline: 'Most developers see an endpoint. I see the whole journey.',
  sub: 'Where is this business losing time, money, or trust — and which part of the system causes it? Slow reports, negative stock, and mismatched dashboards are architecture problems wearing a bug costume.',
  fastFacts: [
    { val: '3+ Years', label: 'Living inside enterprise production data' },
    { val: '1M+ Daily', label: 'Records processed across Oracle & PostgreSQL' },
    { val: '99.9% Uptime', label: 'Sustained across mission-critical reporting' },
  ],
  comparisons: [
    { dev: '“What endpoints do you need?”', me: '“What decision should this system help you make faster?”' },
    { dev: '“Which database?”', me: '“What happens when you have 10× the vendors, orders, or clients?”' },
    { dev: '“It works on my machine.”', me: '“What happens at 2 a.m. on your busiest day when one component fails?”' },
    { dev: '“The report is ready.”', me: '“Is the number correct, and will it still be correct next year?”' },
    { dev: '“Ticket closed.”', me: '“Did the business metric actually move?”' },
  ],
  principles: [
    '01. Business first, technology second.',
    '02. Correctness before speed, speed before cleverness.',
    '03. Design for failure — decide now what happens next.',
    '04. Measure everything with before/after proof.',
    '05. Simple until proven otherwise.',
  ],
};

export const SWIPE_CARDS: SwipeProblemCard[] = [
  {
    no: 'CARD 01 / 08',
    problem: '“Our reports and dashboards are painfully slow.”',
    action: 'Audit execution plans, rework queries, indexing and data access patterns.',
    outcome: 'Cut query latency by 45% (under 500 ms) across 300+ queries / 5+ client systems.',
    badge: '45% FASTER (<500ms)',
  },
  {
    no: 'CARD 02 / 08',
    problem: '“Our numbers don’t match between teams.”',
    action: 'Standardise schemas, automate extraction & normalisation, add automated SQL validation.',
    outcome: '100% schema consistency and 99.8% query/report accuracy.',
    badge: '99.8% ACCURACY',
  },
  {
    no: 'CARD 03 / 08',
    problem: '“We’re growing and the system is starting to crack.”',
    action: 'Redesign the data model and flow; add Redis caching, async processing, safe concurrency.',
    outcome: 'A system that scales smoothly before growth becomes an emergency.',
    badge: 'PROACTIVE SCALE',
  },
  {
    no: 'CARD 04 / 08',
    problem: '“We run a marketplace / multi-vendor / delivery business.”',
    action: 'Design multi-vendor schemas, central & vendor stock sync, order, rider and payout logic.',
    outcome: 'No overselling, no race conditions, clean financial ledgers (proven in PharmaSys).',
    badge: 'ZERO OVERSELLING',
  },
  {
    no: 'CARD 05 / 08',
    problem: '“Everything runs on manual Excel and copy-paste.”',
    action: 'Automate data extraction pipelines and recurring operational reports.',
    outcome: '20+ workflows automated and 35% faster report delivery.',
    badge: '20+ AUTOMATED',
  },
  {
    no: 'CARD 06 / 08',
    problem: '“We can’t tell what’s really happening in the business.”',
    action: 'Build analytics layers and BI dashboards (Power BI, Tableau, DAX) on trustworthy data.',
    outcome: 'Defensible commercial decisions supporting +20% YoY sales volume.',
    badge: '+20% YoY SALES',
  },
  {
    no: 'CARD 07 / 08',
    problem: '“Different people see data they shouldn’t.”',
    action: 'Enforce role-based access control and privilege policies across environments.',
    outcome: '100% compliance with security standards across multi-environment databases.',
    badge: '100% RBAC COMPLIANCE',
  },
  {
    no: 'CARD 08 / 08',
    problem: '“We need to be ready for scale and failure.”',
    action: 'Move toward distributed, event-driven design: queues, workers, resilient data flows.',
    outcome: 'A business that keeps taking orders even when one component breaks.',
    badge: 'FAULT RESILIENT',
  },
];

export const POSTER_CASES: PosterCaseStudy[] = [
  {
    id: 'case-pharmasys',
    num: '01',
    stopTag: 'QUEUE JOB #01 // MARKETPLACE BRAIN',
    title: 'PharmaSys: Multi-Vendor E-Commerce & Rider Logistics',
    oneLineResult: 'Zero-overselling stock sync, live rider logistics, and async background reconciliation.',
    roleOrStack: 'Python · Django REST Framework · PostgreSQL · Redis · Celery · JWT · RBAC',
    metrics: [
      { val: '0', label: 'Overselling Race Conditions' },
      { val: '4 Roles', label: 'Vendor · Customer · Rider · Admin' },
      { val: 'Async', label: 'Celery Recon & Invoices' },
    ],
    stackChips: ['Python', 'Django REST', 'PostgreSQL', 'Row-Level Locks', 'Redis', 'Celery', 'JWT + RBAC'],
    bullets: [
      'Relational schema covering multi-vendor inventories, central stock, orders, and real-time delivery tracking.',
      'Vendor stock synced with central warehouse via database transactions and row-level locking — zero race conditions.',
      'Rider logistics portal handling order assignment, live delivery status updates, and payout calculation.',
      'Redis caching for hot catalogs + select_related/prefetch_related to eliminate N+1 queries.',
      'Celery + Redis workers for email notifications, daily stock reconciliation, and invoice generation.',
    ],
    takeaway: 'I can design the whole operational brain of a marketplace, not just its API.',
    flowSteps: ['Order Placed', 'Lock SKU Stock', 'Assign Rider', 'Deliver & Settle'],
  },
  {
    id: 'case-akt',
    num: '02',
    stopTag: 'QUEUE JOB #02 // ENTERPRISE DATA',
    title: 'Enterprise Reporting & Data Systems (AKT Tobacco & AKT Leaf)',
    oneLineResult: '99.9% uptime across 1M+ daily records and 45% faster SQL (<500 ms) across 5+ client systems.',
    roleOrStack: 'System Engineer (Data Engineer), Suffix IT LTD. · Jun 2023 – Aug 2026',
    metrics: [
      { val: '45% ↓', label: 'Latency (<500 ms)' },
      { val: '99.9%', label: 'Production Uptime' },
      { val: '99.8%', label: 'SQL Validated Accuracy' },
    ],
    stackChips: ['Oracle', 'PostgreSQL', 'Execution Plans', 'Indexing', '20+ ETL Workflows', 'SQL Validation', 'RBAC'],
    bullets: [
      'Kept production reporting alive at 99.9% uptime across 1M+ daily records on Oracle and PostgreSQL.',
      'Refactored 300+ SQL queries across 5+ client systems, cutting latency by 45% (under 500 ms).',
      'Automated 20+ extraction/normalisation workflows for 100% schema consistency and 35% faster delivery.',
      'Built automated SQL validation scripts raising accuracy from 98%+ to 99.8%, supporting +20% YoY sales volume.',
      'Configured multi-environment role-based privileges with 100% security compliance.',
    ],
    takeaway: "I've already operated where mistakes are expensive. I bring that discipline to your system from day one.",
    flowSteps: ['Ingest 1M+ Rows', 'Normalise Schema', 'Validate 99.8%', 'Publish <500ms'],
  },
  {
    id: 'case-analytics',
    num: '03',
    stopTag: 'QUEUE JOB #03 // DECISION BI',
    title: 'Analytics Systems: Multi-Source ETL & Forecasting BI',
    oneLineResult: '1M+ unstructured commercial records consolidated into 100%-integrity forecasting dashboards.',
    roleOrStack: 'Power BI · DAX · Python · Pandas · Excel / Power Query',
    metrics: [
      { val: '1M+', label: 'Unstructured Rows Unified' },
      { val: '100%', label: 'Multi-Year Data Integrity' },
      { val: '3', label: 'Open-Source BI Repos' },
    ],
    stackChips: ['Power BI', 'Custom DAX', 'Python', 'Pandas', 'Excel Power Query', 'ETL'],
    bullets: [
      'E-Commerce OneShop Sales Analysis: consolidated 1M+ scraped unstructured records into clean ETL & revenue forecasts.',
      'Yearly Enterprise Sales Analysis: unified multi-year fragmented sales data with 100% integrity and custom DAX.',
      'Customer Bike Purchase Demographics: interactive segmentation slicing buyers by income, commute, and age.',
    ],
    takeaway: 'Decisions based on data you can defend.',
    links: [
      { label: 'OneShop Sales (GitHub)', url: 'https://github.com/abrarzayaan/E-Commerce_OneShop_Sales_Analysis' },
      { label: 'Yearly Sales (GitHub)', url: 'https://github.com/abrarzayaan/ShopYearly_sales_alalysis' },
      { label: 'Bike Demographics (GitHub)', url: 'https://github.com/abrarzayaan/customers_bike_purchase_analysis_dashboard' },
    ],
    flowSteps: ['Scrape & Ingest', 'Pandas Cleanse', 'Star Schema', 'DAX Forecast'],
  },
];

export const DATABASE_METRICS = [
  { val: 45, dec: 0, suf: '%', label: 'Faster SQL Queries', detail: 'Under 500 ms across 300+ queries' },
  { val: 99.9, dec: 1, suf: '%', label: 'Production Uptime', detail: '1M+ daily enterprise DB records' },
  { val: 1, dec: 0, suf: 'M+', label: 'Daily Records', detail: 'Oracle, PostgreSQL & ETL pipelines' },
  { val: 300, dec: 0, suf: '+', label: 'Queries Refactored', detail: 'Across 5+ enterprise client systems' },
  { val: 20, dec: 0, suf: '+', label: 'Workflows Automated', detail: '100% canonical schema consistency' },
  { val: 35, dec: 0, suf: '%', label: 'Faster Report Delivery', detail: 'Supported +20% YoY sales growth' },
  { val: 99.8, dec: 1, suf: '%', label: 'Deliverable Accuracy', detail: 'Automated SQL validation scripts' },
  { val: 100, dec: 0, suf: '%', label: 'Security Compliance', detail: 'Multi-environment RBAC privileges' },
];

export const PHYSICS_CHIPS: PhysicsChip[] = [
  { label: 'Oracle DB', layer: 'DATA', proven: true, whereUsed: '1M+ daily rows & 300+ tuned queries at Suffix IT (AKT).' },
  { label: 'PostgreSQL', layer: 'DATA', proven: true, whereUsed: 'Enterprise reporting & PharmaSys ACID row-level locking.' },
  { label: 'Advanced SQL', layer: 'DATA', proven: true, whereUsed: '45% latency cut (<500ms) & 99.8% SQL validation scripts.' },
  { label: 'Execution Plans', layer: 'DATA', proven: true, whereUsed: 'Audited & indexed across 5+ enterprise client databases.' },
  { label: 'Python', layer: 'BACKEND', proven: true, whereUsed: 'Core language for PharmaSys API, Celery tasks & Pandas ETL.' },
  { label: 'Django', layer: 'BACKEND', proven: true, whereUsed: 'Multi-vendor marketplace backend & ORM optimisation.' },
  { label: 'Django REST', layer: 'BACKEND', proven: true, whereUsed: 'JWT + dynamic RBAC APIs for Vendors, Riders & Customers.' },
  { label: 'JWT + RBAC', layer: 'BACKEND', proven: true, whereUsed: '100% security compliance across multi-environment systems.' },
  { label: 'Redis Cache', layer: 'ASYNC', proven: true, whereUsed: 'Hot product catalog caching & message broker in PharmaSys.' },
  { label: 'Celery Workers', layer: 'ASYNC', proven: true, whereUsed: 'Async emails, invoice generation & daily stock reconciliation.' },
  { label: 'Row-Level Locks', layer: 'DATA', proven: true, whereUsed: 'Eliminated overselling race conditions under concurrency.' },
  { label: 'ETL Pipelines', layer: 'ASYNC', proven: true, whereUsed: '20+ automated extraction & normalisation workflows.' },
  { label: 'Power BI', layer: 'BI', proven: true, whereUsed: 'Executive sales, YoY & seasonality dashboards (98%+ accuracy).' },
  { label: 'DAX', layer: 'BI', proven: true, whereUsed: 'Custom time-intelligence & YoY measures on unified schemas.' },
  { label: 'Pandas', layer: 'BI', proven: true, whereUsed: 'Consolidated 1M+ unstructured e-commerce records.' },
  { label: 'Excel / PQ', layer: 'BI', proven: true, whereUsed: 'Interactive demographic customer segmentation.' },
  { label: 'Linux & Git', layer: 'DEVOPS', proven: true, whereUsed: 'Daily production environment operations & version control.' },
  { label: 'FastAPI', layer: 'BACKEND', proven: false, whereUsed: 'Working knowledge for high-speed async Python endpoints.' },
  { label: 'Apache Airflow', layer: 'ASYNC', proven: false, whereUsed: 'Working knowledge for DAG workflow scheduling.' },
  { label: 'Docker', layer: 'DEVOPS', proven: false, whereUsed: 'Working knowledge for reproducible service containers.' },
  { label: 'Kubernetes', layer: 'DEVOPS', proven: false, whereUsed: 'Working knowledge for container orchestration.' },
  { label: 'Tableau', layer: 'BI', proven: false, whereUsed: 'Working knowledge for visual BI exploration.' },
];

export const RECEIPT_PHASES = [
  { step: '01', name: 'DISCOVER', what: 'Learn business flow, pain points & target metrics.', get: 'Problem statement in plain business language' },
  { step: '02', name: 'DIAGNOSE', what: 'Audit schema, slow queries, data flow & failure modes.', get: 'Prioritised findings: highest pain vs fastest ROI' },
  { step: '03', name: 'ARCHITECT', what: 'Design data model & system topology for growth.', get: 'Architecture blueprint + explicit trade-off notes' },
  { step: '04', name: 'BUILD', what: 'Implement APIs, domain logic, pipelines & automation.', get: 'Working, tested, documented production system' },
  { step: '05', name: 'HARDEN', what: 'Add row locks, Redis cache, Celery async & RBAC.', get: 'A system that survives real-world busy-day load' },
  { step: '06', name: 'PROVE', what: 'Measure before/after latency, accuracy & business lift.', get: 'Hard evidence the business metric actually moved' },
];

export const TERMINAL_LOGS = [
  {
    ts: '2018–2022',
    level: 'ARCHIVE',
    msg: 'B.Sc. in Computer Science & Engineering @ BAUET',
    sub: 'Thesis: Object Detection: Comparative Study of YOLOv3 vs YOLOv7',
  },
  {
    ts: '2023-02',
    level: 'INFO',
    msg: 'Joined Suffix IT LTD. → SQL Development Intern',
    sub: 'Built relational schema normalisation & enterprise reporting SQL foundations.',
  },
  {
    ts: '2023-06',
    level: 'PROMOTED',
    msg: 'System Engineer (Data Engineer) @ Suffix IT LTD. (thru Aug 2026)',
    sub: 'AKT Tobacco & AKT Leaf: 99.9% uptime · 1M+ daily rows · 300+ queries tuned (-45%, <500ms) · 99.8% accuracy.',
  },
  {
    ts: '2026-NOW',
    level: 'READY',
    msg: 'End-to-End Business Backend Architect (Data & Distributed Systems)',
    sub: 'Architecting scalable marketplace cores (PharmaSys), resilient pipelines & event-driven systems.',
  },
];

export const SCALE_DIRECTION = {
  headline: 'One order today. A million tomorrow.',
  honestQuote:
    "I'll tell you honestly when your business does not need distribution yet. The best architecture is the simplest one that survives your next stage of growth.",
  alreadyInProd:
    'Queues and workers (Celery + Redis), caching layers, transactional safety under concurrency, and multi-environment data governance.',
  deepening:
    'Message brokers and event streaming, service decomposition, replication and partitioning, consistency models, observability.',
  pillars: [
    { title: 'Resilience', desc: 'One component failure never stops customer sales.' },
    { title: 'Scale on demand', desc: 'Absorb festival-day spikes without over-paying the other 360 days.' },
    { title: 'Independent growth', desc: 'Teams and vendor modules evolve without breaking each other.' },
    { title: 'Trustworthy data', desc: 'Consistency strategies that keep money and stock ledgers exact.' },
  ],
};

export const GROWTH_CONTACT = {
  headline: 'Let’s make your growth curve look like this.',
  sub: "If your database or reporting is slowing your business down — or you don't trust your current backend to carry the next 5× stage — let's talk.",
  questions: [
    'What does your business do when running perfectly, and what breaks first at 5×?',
    'Which report or number do you trust least?',
    'Where do people still copy-paste, re-key or reconcile by hand?',
    'What happens today if your database or main service goes down for an hour?',
    'What single metric would make you say “this was worth it”?',
  ],
  greatFit: [
    'Startups & scale-ups whose database or reporting is becoming the bottleneck',
    'Marketplaces, logistics, retail, pharma, manufacturing & distribution businesses',
    'Teams wanting one person who understands both business logic and the data layer',
    'Companies requiring accuracy, auditability, and security — not just “it works”',
  ],
  notFit: [
    'Pure front-end or visual-design-only projects',
    '“Build it as cheap and fast as possible, quality doesn’t matter” projects',
  ],
};

