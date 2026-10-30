/**
 * Content Source of Truth for Design B: The Blueprint Atelier
 * Strictly derived from README.md — Zero invented metrics.
 * Dual-layer copy powers the signature "Business ⇄ Tech Lens".
 */

export interface ScheduleRow {
  no: string;
  businessProblem: string;
  businessAction: string;
  businessOutcome: string;
  techProblem: string;
  techAction: string;
  techOutcome: string;
  diagramType: 'index' | 'schema' | 'cache' | 'lock' | 'pipeline' | 'bi' | 'rbac' | 'queue';
}

export interface DrawingCallout {
  code: string;
  x: number;
  y: number;
  businessTitle: string;
  businessNote: string;
  techTitle: string;
  techNote: string;
}

export interface ArchitecturalDrawing {
  id: string;
  dwgNo: string;
  scale: string;
  title: string;
  roleOrStack: string;
  period: string;
  businessSummary: string;
  techSummary: string;
  outcomeHeadline: string;
  metrics: { val: string; label: string }[];
  bullets: string[];
  clientTakeaway: string;
  links?: { label: string; url: string }[];
  callouts: DrawingCallout[];
  boxes: {
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
    businessLabel: string;
    businessSub: string;
    techLabel: string;
    techSub: string;
  }[];
  connectors: { x1: number; y1: number; x2: number; y2: number }[];
}

export interface DimensionSpec {
  value: number;
  decimals: number;
  prefix?: string;
  suffix: string;
  caption: string;
  subcaption: string;
  method: string;
}

export interface MaterialItem {
  code: string;
  name: string;
  category: 'DATA' | 'BACKEND' | 'PERF_ASYNC' | 'CONCURRENCY' | 'BI' | 'DEVOPS';
  categoryLabel: string;
  status: 'PRODUCTION' | 'WORKING';
  specNote: string;
}

export interface ConstructionPhase {
  step: string;
  stageTag: string;
  name: string;
  happens: string;
  deliverable: string;
}

export interface RevisionRow {
  rev: string;
  date: string;
  title: string;
  org: string;
  description: string;
  by: string;
  isLatest?: boolean;
}

export const SITE_META = {
  name: 'Md. Shah Abrar Zahin',
  monogram: 'AZ',
  roleLine: 'Backend Architect · Data-Driven Systems · Distributed Systems (in depth)',
  location: 'Dhaka, Bangladesh',
  experience: '3+ years in production',
  coreTech: 'Oracle · PostgreSQL · Python/Django · Redis · Celery',
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

export const HERO_SPEC = {
  sheetNo: 'SHEET 01 / 10',
  sub: 'End-to-end backend architecture, data and distributed systems that turn business problems into measurable growth.',
  primaryCta: { label: "Let's fix your bottleneck", href: '#contact' },
  secondaryCta: { label: 'See the proof drawings', href: '#work' },
  layers: [
    {
      code: '01',
      name: 'CLIENT & ACTOR LAYER',
      spec: 'Customers · Vendors · Riders · Exec Dashboards',
    },
    {
      code: '02',
      name: 'API & RBAC GATEWAY',
      spec: 'Django REST Framework · JWT · Dynamic Role Policies',
    },
    {
      code: '03',
      name: 'CACHE & ASYNC QUEUES',
      spec: 'Redis Hot Catalog · Celery Workers · ETL Schedulers',
    },
    {
      code: '04',
      name: 'DATA & INTEGRITY CORE',
      spec: 'Oracle · PostgreSQL · Row-Level Locks · <500ms Plans',
    },
  ],
};

export const POSITIONING_SPEC = {
  leadTypical: 'Most developers start with: “Which framework should we use?”',
  leadArchitect:
    'I start with: “Where is this business losing time, money, or trust, and which part of the system causes it?”',
  manifestoBody:
    'Slow reports, a database that dies on busy days, stock that goes negative, numbers that do not match between two dashboards, a system that works for 10 vendors but breaks at 100. These are not bugs. They are architecture problems wearing a bug costume — and they are what I fix.',
  enterpriseAdvantage:
    'I spent three years living inside the data of real enterprise clients, where a wrong number has a cost. A system is only as valuable as the correctness, speed, and trustworthiness of the data it produces.',
  comparisons: [
    {
      dev: '“What endpoints do you need?”',
      arch: '“What decision should this system help you make faster?”',
    },
    {
      dev: '“Which database?”',
      arch: '“What happens to your data model when you have 10× the vendors, orders, or clients?”',
    },
    {
      dev: '“It works on my machine.”',
      arch: '“What happens at 2 a.m. on your busiest day when one component fails?”',
    },
    {
      dev: '“The report is ready.”',
      arch: '“Is the number in the report correct, and will it still be correct next year?”',
    },
    {
      dev: '“Ticket closed.”',
      arch: '“Did the business metric actually move?”',
    },
  ],
  principles: [
    {
      no: 'P-01',
      title: 'Business first, technology second.',
      body: 'Every technical decision must be traceable to a business outcome.',
    },
    {
      no: 'P-02',
      title: 'Correctness before speed, speed before cleverness.',
      body: 'A fast wrong answer is worse than a slow right one; an unmaintainable clever system is worse than both.',
    },
    {
      no: 'P-03',
      title: 'Design for failure.',
      body: 'Assume a component will break. Decide now what happens next.',
    },
    {
      no: 'P-04',
      title: 'Measure everything.',
      body: "If I can't show a before/after number, I haven't finished the job.",
    },
    {
      no: 'P-05',
      title: 'Simple until proven otherwise.',
      body: 'Add distribution and complexity only when the problem demands it, never to look impressive.',
    },
  ],
};

export const SCHEDULE_ROWS: ScheduleRow[] = [
  {
    no: '01',
    businessProblem: '“Our reports and dashboards are painfully slow.”',
    businessAction: 'Rework slow database queries and data access so teams stop waiting.',
    businessOutcome: '45% faster queries (under 500 ms) across 300+ queries / 5+ client systems.',
    techProblem: 'Full-table scans, unselective joins, high-cost Oracle/PG execution plans.',
    techAction: 'EXPLAIN ANALYZE audit, composite B-tree indexing, SARGable predicates & join refactoring.',
    techOutcome: 'p95 query runtime < 500 ms (-45% latency) across 300+ production SQL queries.',
    diagramType: 'index',
  },
  {
    no: '02',
    businessProblem: '“Our numbers don’t match between teams.”',
    businessAction: 'Unify definitions and validate every report automatically before release.',
    businessOutcome: '100% schema consistency & 99.8% report accuracy.',
    techProblem: 'Divergent ad-hoc SQL extracts, unnormalized tables, silent ETL truncation.',
    techAction: 'Canonical relational schemas + automated SQL assertion & reconciliation scripts.',
    techOutcome: '100% multi-system schema parity; deliverable accuracy verified at 99.8%.',
    diagramType: 'schema',
  },
  {
    no: '03',
    businessProblem: '“We’re growing and the system is starting to crack.”',
    businessAction: 'Re-architect bottlenecks before busy-day traffic turns into downtime.',
    businessOutcome: 'A system that scales smoothly ahead of demand.',
    techProblem: 'Synchronous request blocking, N+1 ORM storms, lock contention on hot tables.',
    techAction: 'Redis read-through caching, select_related/prefetch_related, async worker offload.',
    techOutcome: 'Bounded DB connection pool load & predictable throughput under peak spikes.',
    diagramType: 'cache',
  },
  {
    no: '04',
    businessProblem: '“We run a marketplace / multi-vendor / delivery business.”',
    businessAction: 'Keep vendor stock, central warehouse, rider delivery, and payouts in lockstep.',
    businessOutcome: 'Zero overselling, zero race conditions, clean financial ledgers.',
    techProblem: 'Concurrent checkout race conditions & desynchronised vendor/warehouse stock.',
    techAction: 'ACID transactions + PostgreSQL SELECT ... FOR UPDATE row-level locking & state machines.',
    techOutcome: 'Strict serializability on SKU stock mutations + auditable rider payout ledgers.',
    diagramType: 'lock',
  },
  {
    no: '05',
    businessProblem: '“Everything runs on manual Excel and copy-paste.”',
    businessAction: 'Replace fragile manual spreadsheets with automated data pipelines.',
    businessOutcome: '20+ workflows automated · 35% faster report delivery.',
    techProblem: 'Manual CSV exports, human re-keying errors, unscheduled batch transformations.',
    techAction: 'Automated SQL/Python ETL extraction, type normalisation, and scheduled delivery.',
    techOutcome: '20+ deterministic ETL pipelines cutting end-to-end SLA time by 35%.',
    diagramType: 'pipeline',
  },
  {
    no: '06',
    businessProblem: '“We can’t tell what’s really happening in the business.”',
    businessAction: 'Build executive dashboards on top of clean, defensible operational data.',
    businessOutcome: '98%+ analytics accuracy supporting a 20% YoY sales volume increase.',
    techProblem: '1M+ fragmented raw logs with no dimensional model or time-intelligence layer.',
    techAction: 'Star-schema modelling + semantic DAX measures in Power BI, Excel Power Query & Tableau.',
    techOutcome: '98%+ -> 99.8% validated BI layer powering YoY & seasonality decisions.',
    diagramType: 'bi',
  },
  {
    no: '07',
    businessProblem: '“Different people see data they shouldn’t.”',
    businessAction: 'Lock down who can view, edit, or approve data across every role.',
    businessOutcome: '100% compliance with enterprise security standards.',
    techProblem: 'Over-privileged shared DB credentials & coarse API endpoint permissions.',
    techAction: 'Multi-environment DB privilege grants + stateless JWT & dynamic role-based RBAC.',
    techOutcome: '100% security audit compliance across Dev, Staging, and Production.',
    diagramType: 'rbac',
  },
  {
    no: '08',
    businessProblem: '“We need to be ready for scale and failure.”',
    businessAction: 'Design resilient workflows so one component hiccup never stops sales.',
    businessOutcome: 'A business that keeps operating when individual parts fail.',
    techProblem: 'Tightly coupled monolith side-effects where email/invoice stalls kill checkout.',
    techAction: 'Event-driven decoupling with Celery + Redis queues, retries & reconciliation jobs.',
    techOutcome: 'Isolated fault domains & idempotent background recovery.',
    diagramType: 'queue',
  },
];

export const ARCHITECTURAL_DRAWINGS: ArchitecturalDrawing[] = [
  {
    id: 'dwg-pharmasys',
    dwgNo: 'DWG-01 // MARKETPLACE CORE',
    scale: '1 : 100',
    title: 'PharmaSys: Multi-Vendor E-Commerce & Rider Logistics',
    roleOrStack: 'Python · Django REST Framework · PostgreSQL · Redis · Celery · JWT · RBAC',
    period: 'Production Architecture Case',
    businessSummary:
      'Business View: Vendors, central warehouse, customers, and delivery riders operate on one truthful inventory and order brain — zero overselling on busy days.',
    techSummary:
      'Blueprint Tech View: DRF API with select_related/prefetch_related, Redis hot-catalog cache, PostgreSQL row-level locking (SELECT FOR UPDATE), and Celery + Redis workers.',
    outcomeHeadline: 'ZERO OVERSELLING · FULL MARKETPLACE BRAIN',
    metrics: [
      { val: '0', label: 'Stock Race Conditions' },
      { val: '4 Actors', label: 'Vendor · Customer · Rider · Admin' },
      { val: 'Async', label: 'Celery Recon & Invoices' },
    ],
    bullets: [
      'Relational schema unifying multi-vendor stock, central warehouse inventory, orders, and real-time rider tracking.',
      'Database transactions + row-level locking prevent concurrent checkouts from driving stock negative.',
      'Redis caches hot product catalogs while ORM query tuning eliminates N+1 bottlenecks.',
      'Celery + Redis handles non-blocking email alerts, invoice PDF generation, and daily stock reconciliation.',
    ],
    clientTakeaway: 'I can design the whole operational brain of a marketplace, not just its API.',
    boxes: [
      {
        id: 'b1',
        x: 34,
        y: 88,
        w: 138,
        h: 84,
        businessLabel: '4 Business Portals',
        businessSub: 'Customers, Vendors, Riders, Admins',
        techLabel: 'JWT + Dynamic RBAC',
        techSub: 'Scoped role permissions & guards',
      },
      {
        id: 'b2',
        x: 218,
        y: 88,
        w: 148,
        h: 84,
        businessLabel: 'Order & Catalog Engine',
        businessSub: 'Fast browsing & checkout rules',
        techLabel: 'DRF + ORM Optimised',
        techSub: 'select_related / prefetch_related',
      },
      {
        id: 'b3',
        x: 414,
        y: 26,
        w: 162,
        h: 72,
        businessLabel: 'Instant Product Shelf',
        businessSub: 'Zero lag on popular items',
        techLabel: 'Redis Cache + Broker',
        techSub: 'Hot catalog TTL + queue transport',
      },
      {
        id: 'b4',
        x: 414,
        y: 118,
        w: 162,
        h: 78,
        businessLabel: 'Synced Warehouse Ledger',
        businessSub: 'Never sells out-of-stock items',
        techLabel: 'PostgreSQL ACID Core',
        techSub: 'SELECT ... FOR UPDATE row locks',
      },
      {
        id: 'b5',
        x: 414,
        y: 214,
        w: 162,
        h: 64,
        businessLabel: 'Rider & Back-Office Ops',
        businessSub: 'Live delivery payouts & invoices',
        techLabel: 'Celery Async Workers',
        techSub: 'Daily stock recon, emails & PDFs',
      },
    ],
    connectors: [
      { x1: 172, y1: 130, x2: 218, y2: 130 },
      { x1: 366, y1: 112, x2: 414, y2: 62 },
      { x1: 366, y1: 132, x2: 414, y2: 156 },
      { x1: 366, y1: 152, x2: 414, y2: 244 },
      { x1: 495, y1: 98, x2: 495, y2: 118 },
    ],
    callouts: [
      {
        code: 'A',
        x: 495,
        y: 156,
        businessTitle: 'No Overselling',
        businessNote: 'Vendor & warehouse counts stay exact.',
        techTitle: 'Row-Level Locking',
        techNote: 'Transactional SKU lock prevents race conditions.',
      },
      {
        code: 'B',
        x: 495,
        y: 62,
        businessTitle: 'Fast Catalog',
        businessNote: 'Instant search on busy days.',
        techTitle: 'Redis Hot Layer',
        techNote: 'Cached read path + N+1 elimination.',
      },
      {
        code: 'C',
        x: 103,
        y: 130,
        businessTitle: 'Role Separation',
        businessNote: 'Each actor sees only their workflow.',
        techTitle: 'Dynamic RBAC',
        techNote: 'Token claims + object-level permissions.',
      },
    ],
  },
  {
    id: 'dwg-akt',
    dwgNo: 'DWG-02 // ENTERPRISE DATA',
    scale: '1 : 500',
    title: 'Enterprise Reporting & Data Systems (AKT Tobacco & AKT Leaf)',
    roleOrStack: 'System Engineer (Data Engineer), Suffix IT LTD.',
    period: 'Jun 2023 – Aug 2026',
    businessSummary:
      'Business View: Kept daily operational reporting running at 99.9% uptime across 5+ enterprise client systems, delivering trusted numbers 35% faster to support +20% YoY sales growth.',
    techSummary:
      'Blueprint Tech View: Oracle & PostgreSQL across 1M+ daily rows; 300+ refactored SQL plans (<500ms), 20+ automated normalisation ETL workflows, 99.8% SQL validation scripts.',
    outcomeHeadline: '45% FASTER (<500ms) · 99.9% UPTIME',
    metrics: [
      { val: '99.9%', label: 'Uptime (1M+ daily rows)' },
      { val: '45% ↓', label: 'Query Latency (<500 ms)' },
      { val: '99.8%', label: 'Validated Accuracy' },
    ],
    bullets: [
      'Maintained 99.9% production availability across 1M+ daily records on Oracle and PostgreSQL.',
      'Refactored 300+ SQL queries across 5+ client systems, cutting execution time by 45% (under 500 ms).',
      'Automated 20+ extraction and normalisation workflows for 100% schema consistency and 35% faster delivery.',
      'Added automated SQL validation scripts (99.8% accuracy) and multi-environment RBAC (100% security compliance).',
    ],
    clientTakeaway:
      "I've already operated in the environment where mistakes are expensive. I bring that discipline to your system from day one.",
    boxes: [
      {
        id: 'a1',
        x: 32,
        y: 98,
        w: 136,
        h: 82,
        businessLabel: '5+ Client Operations',
        businessSub: '1M+ daily business records',
        techLabel: 'Multi-Env Sources',
        techSub: '1M+ daily rows · RBAC enforced',
      },
      {
        id: 'a2',
        x: 212,
        y: 44,
        w: 158,
        h: 76,
        businessLabel: 'Automated Clean-Up',
        businessSub: 'No manual copy-paste delays',
        techLabel: '20+ ETL Workflows',
        techSub: '100% canonical schema parity',
      },
      {
        id: 'a3',
        x: 212,
        y: 154,
        w: 158,
        h: 80,
        businessLabel: 'High-Speed Warehouse',
        businessSub: 'Always-on 99.9% availability',
        techLabel: 'Oracle & PostgreSQL',
        techSub: '300+ tuned plans · <500ms runtime',
      },
      {
        id: 'a4',
        x: 416,
        y: 98,
        w: 162,
        h: 86,
        businessLabel: 'Executive Growth Reports',
        businessSub: '35% faster · +20% YoY sales',
        techLabel: 'SQL Validation Gate',
        techSub: 'Automated checks -> 99.8% accuracy',
      },
    ],
    connectors: [
      { x1: 168, y1: 124, x2: 212, y2: 82 },
      { x1: 168, y1: 152, x2: 212, y2: 194 },
      { x1: 370, y1: 82, x2: 416, y2: 126 },
      { x1: 370, y1: 194, x2: 416, y2: 156 },
      { x1: 291, y1: 120, x2: 291, y2: 154 },
    ],
    callouts: [
      {
        code: 'A',
        x: 291,
        y: 194,
        businessTitle: '45% Faster',
        businessNote: 'Dashboards load in under half a second.',
        techTitle: '<500ms SQL Plans',
        techNote: '300+ queries refactored with composite indexes.',
      },
      {
        code: 'B',
        x: 497,
        y: 141,
        businessTitle: 'Defensible Numbers',
        businessNote: 'Teams stop arguing over mismatched totals.',
        techTitle: '99.8% Validation',
        techNote: 'Automated SQL assertions pre-release.',
      },
    ],
  },
  {
    id: 'dwg-analytics',
    dwgNo: 'DWG-03 // DECISION BI',
    scale: '1 : 200',
    title: 'Analytics Systems: Multi-Source Ingestion & Forecasting BI',
    roleOrStack: 'Power BI · DAX · Python · Pandas · Excel / Power Query',
    period: 'Open-Source Case Portfolio',
    businessSummary:
      'Business View: Consolidated over a million messy e-commerce and multi-year retail records into revenue forecasts, seasonality insights, and customer demographic segments.',
    techSummary:
      'Blueprint Tech View: Python/Pandas scraping & multi-source ETL ingestion -> 100% integrity dimensional models -> custom DAX YoY/seasonality measures & Power Query pipelines.',
    outcomeHeadline: '1M+ ROWS UNIFIED · 100% INTEGRITY',
    metrics: [
      { val: '1M+', label: 'Unstructured Records Ingested' },
      { val: '100%', label: 'Historical Data Integrity' },
      { val: 'DAX', label: 'YoY & Seasonality Forecasting' },
    ],
    bullets: [
      'E-Commerce OneShop Sales Analysis: consolidated 1M+ unstructured scraped records into clean ETL & revenue forecasting dashboards.',
      'Yearly Enterprise Sales Analysis: unified multi-year fragmented sales sheets with 100% data integrity and custom DAX.',
      'Customer Bike Purchase Demographics: segmented target customers by income, commute distance, and age.',
    ],
    clientTakeaway: 'Decisions based on data you can defend.',
    links: [
      {
        label: 'OneShop Sales (GitHub)',
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
    boxes: [
      {
        id: 'c1',
        x: 34,
        y: 98,
        w: 142,
        h: 82,
        businessLabel: 'Messy Raw Channels',
        businessSub: 'Scraped logs & multi-year sheets',
        techLabel: '1M+ Unstructured Rows',
        techSub: 'Scrapers + multi-file ingestion',
      },
      {
        id: 'c2',
        x: 222,
        y: 98,
        w: 152,
        h: 82,
        businessLabel: 'Single Source of Truth',
        businessSub: '100% clean historical records',
        techLabel: 'Python / Pandas ETL',
        techSub: 'Deduplication & star-schema model',
      },
      {
        id: 'c3',
        x: 420,
        y: 52,
        w: 158,
        h: 74,
        businessLabel: 'Revenue Forecasting',
        businessSub: 'YoY trends & peak seasons',
        techLabel: 'Power BI + Custom DAX',
        techSub: 'Time-intelligence & YoY measures',
      },
      {
        id: 'c4',
        x: 420,
        y: 152,
        w: 158,
        h: 74,
        businessLabel: 'Buyer Segmentation',
        businessSub: 'Income, commute & age slices',
        techLabel: 'Power Query Models',
        techSub: 'Interactive demographic cohorts',
      },
    ],
    connectors: [
      { x1: 176, y1: 139, x2: 222, y2: 139 },
      { x1: 374, y1: 122, x2: 420, y2: 89 },
      { x1: 374, y1: 156, x2: 420, y2: 189 },
    ],
    callouts: [
      {
        code: 'A',
        x: 298,
        y: 139,
        businessTitle: 'Clean History',
        businessNote: 'Years of fragmented sales unified.',
        techTitle: '100% Integrity ETL',
        techNote: 'Strict key normalisation & null handling.',
      },
    ],
  },
];

export const DIMENSION_SPECS: DimensionSpec[] = [
  {
    value: 45,
    decimals: 0,
    suffix: '%',
    caption: 'QUERY LATENCY REDUCTION',
    subcaption: 'Runtime cut to <500 ms',
    method: 'Execution-plan audits & indexing across 300+ production SQL queries.',
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: '%',
    caption: 'ENTERPRISE REPORTING UPTIME',
    subcaption: 'Oracle & PostgreSQL production',
    method: 'Sustained across AKT Tobacco & AKT Leaf operational reporting.',
  },
  {
    value: 1,
    decimals: 0,
    suffix: 'M+',
    caption: 'DAILY RECORDS PROCESSED',
    subcaption: 'High-volume relational & ETL flows',
    method: '1M+ daily enterprise DB records and 1M+ consolidated e-commerce rows.',
  },
  {
    value: 300,
    decimals: 0,
    suffix: '+',
    caption: 'SQL QUERIES REFACTORED',
    subcaption: 'Across 5+ client systems',
    method: 'Eliminated full scans, tuned joins, and standardised data access.',
  },
  {
    value: 20,
    decimals: 0,
    suffix: '+',
    caption: 'WORKFLOWS AUTOMATED',
    subcaption: 'Extraction & normalisation',
    method: 'Replaced manual SQL/Excel copy-paste with deterministic pipelines.',
  },
  {
    value: 35,
    decimals: 0,
    suffix: '%',
    caption: 'FASTER REPORT DELIVERY',
    subcaption: 'Supported +20% YoY sales volume',
    method: 'Automated recurring pipelines for commercial decision-makers.',
  },
  {
    value: 99.8,
    decimals: 1,
    suffix: '%',
    caption: 'VALIDATED DELIVERABLE ACCURACY',
    subcaption: 'Raised from 98%+ baseline',
    method: 'Automated SQL validation scripts verifying every release.',
  },
  {
    value: 100,
    decimals: 0,
    suffix: '%',
    caption: 'SCHEMA & SECURITY COMPLIANCE',
    subcaption: 'Multi-environment RBAC',
    method: 'Role-based DB privileges and 100% canonical schema consistency.',
  },
];

export const MATERIALS_SCHEDULE: MaterialItem[] = [
  { code: 'MAT-01', name: 'Oracle Database', category: 'DATA', categoryLabel: 'Data & DB', status: 'PRODUCTION', specNote: '1M+ daily rows, execution plans, partitioning' },
  { code: 'MAT-02', name: 'PostgreSQL', category: 'DATA', categoryLabel: 'Data & DB', status: 'PRODUCTION', specNote: 'ACID schemas, row-level locks, indexing' },
  { code: 'MAT-03', name: 'Advanced SQL & ETL', category: 'DATA', categoryLabel: 'Data & DB', status: 'PRODUCTION', specNote: '300+ queries tuned (<500ms), validation scripts' },
  { code: 'MAT-04', name: 'MySQL / SQL Server / Supabase', category: 'DATA', categoryLabel: 'Data & DB', status: 'WORKING', specNote: 'Cross-engine relational compatibility' },
  { code: 'MAT-05', name: 'Python', category: 'BACKEND', categoryLabel: 'Backend', status: 'PRODUCTION', specNote: 'Core backend services, ETL & automation' },
  { code: 'MAT-06', name: 'Django & DRF', category: 'BACKEND', categoryLabel: 'Backend', status: 'PRODUCTION', specNote: 'REST APIs, domain logic, ORM optimisation' },
  { code: 'MAT-07', name: 'JWT & Dynamic RBAC', category: 'BACKEND', categoryLabel: 'Backend', status: 'PRODUCTION', specNote: 'Multi-actor security & 100% DB compliance' },
  { code: 'MAT-08', name: 'FastAPI / Flask / C / C++', category: 'BACKEND', categoryLabel: 'Backend', status: 'WORKING', specNote: 'Lightweight microservices & systems foundation' },
  { code: 'MAT-09', name: 'Redis Caching', category: 'PERF_ASYNC', categoryLabel: 'Perf & Async', status: 'PRODUCTION', specNote: 'Hot catalog caching & low-latency lookups' },
  { code: 'MAT-10', name: 'Celery + Redis', category: 'PERF_ASYNC', categoryLabel: 'Perf & Async', status: 'PRODUCTION', specNote: 'Async workers, reconciliations, invoicing' },
  { code: 'MAT-11', name: 'Apache Airflow', category: 'PERF_ASYNC', categoryLabel: 'Perf & Async', status: 'WORKING', specNote: 'DAG-based workflow orchestration' },
  { code: 'MAT-12', name: 'DB Transactions & Row Locks', category: 'CONCURRENCY', categoryLabel: 'Concurrency', status: 'PRODUCTION', specNote: 'Zero-overselling stock sync under load' },
  { code: 'MAT-13', name: 'Power BI & DAX', category: 'BI', categoryLabel: 'Analytics & BI', status: 'PRODUCTION', specNote: 'Executive dashboards, YoY & seasonality' },
  { code: 'MAT-14', name: 'Excel / Power Query / Pandas', category: 'BI', categoryLabel: 'Analytics & BI', status: 'PRODUCTION', specNote: 'Data wrangling & cohort segmentation' },
  { code: 'MAT-15', name: 'Tableau', category: 'BI', categoryLabel: 'Analytics & BI', status: 'WORKING', specNote: 'Visual analytics & executive storytelling' },
  { code: 'MAT-16', name: 'Git / Linux / Postman', category: 'DEVOPS', categoryLabel: 'DevOps', status: 'PRODUCTION', specNote: 'Production operations & API verification' },
  { code: 'MAT-17', name: 'Docker / Kubernetes / CI-CD', category: 'DEVOPS', categoryLabel: 'DevOps', status: 'WORKING', specNote: 'Containerised deployments & pipelines' },
];

export const CONSTRUCTION_PHASES: ConstructionPhase[] = [
  {
    step: '01',
    stageTag: 'SURVEY & BRIEF',
    name: 'Discover',
    happens: 'I learn your business flow, pain points and the metrics you care about.',
    deliverable: 'A clear problem statement in business language.',
  },
  {
    step: '02',
    stageTag: 'STRUCTURAL AUDIT',
    name: 'Diagnose',
    happens: 'Audit of schema, queries, data flow and failure points.',
    deliverable: "Prioritised findings: what hurts most, what's cheapest to fix.",
  },
  {
    step: '03',
    stageTag: 'MASTER BLUEPRINT',
    name: 'Architect',
    happens: 'Data model and system design aligned to your growth plan.',
    deliverable: 'Architecture diagram + explicit trade-off notes.',
  },
  {
    step: '04',
    stageTag: 'CORE ERECTION',
    name: 'Build',
    happens: 'APIs, business logic, pipelines, automation.',
    deliverable: 'Working, tested, documented system.',
  },
  {
    step: '05',
    stageTag: 'LOAD REINFORCEMENT',
    name: 'Harden',
    happens: 'Concurrency safety, caching, async processing, access control, validation.',
    deliverable: 'A system that survives real-world load.',
  },
  {
    step: '06',
    stageTag: 'SIGN-OFF & METRICS',
    name: 'Prove',
    happens: 'Before/after metrics, dashboards and reports.',
    deliverable: 'Evidence the business actually improved.',
  },
];

export const REVISION_HISTORY: RevisionRow[] = [
  {
    rev: 'REV 0',
    date: '2018 – 2022',
    title: 'B.Sc. in Computer Science & Engineering',
    org: 'Bangladesh Army University of Engineering and Technology (BAUET)',
    description: 'Academic foundation in algorithms, systems, and computer vision. Thesis: Object Detection: Comparative Study of YOLOv3 vs YOLOv7.',
    by: 'AZ',
  },
  {
    rev: 'REV A',
    date: 'Feb 2023',
    title: 'SQL Development Intern',
    org: 'Suffix IT LTD.',
    description: 'Established production relational query discipline, schema normalisation, and enterprise SQL reporting practices.',
    by: 'AZ',
  },
  {
    rev: 'REV B',
    date: 'Jun 2023 – Aug 2026',
    title: 'System Engineer (Data Engineer)',
    org: 'Suffix IT LTD. (AKT Tobacco & AKT Leaf)',
    description: '99.9% uptime across 1M+ daily records on Oracle & PostgreSQL; refactored 300+ queries (-45% latency, <500ms); automated 20+ workflows (35% faster); 99.8% SQL validation accuracy.',
    by: 'AZ',
  },
  {
    rev: 'REV C',
    date: 'Aug 2026 – Now',
    title: 'End-to-End Business Backend Architect (Active)',
    org: 'Independent · Data-Driven & Distributed Systems',
    description: 'Designing scalable marketplace cores (PharmaSys), high-integrity data pipelines, and resilient event-driven backends aligned to business growth.',
    by: 'AZ',
    isLatest: true,
  },
];

export const PROPOSED_DIRECTION = {
  honestNote:
    "I'll tell you honestly when your business does not need distribution yet. The best architecture is the simplest one that survives your next stage of growth.",
  alreadyApplied:
    'Queues and workers (Celery + Redis), caching layers, transactional safety under concurrency, and multi-environment data governance.',
  deepeningNow:
    'Message brokers and event streaming, service decomposition, replication and partitioning, consistency models, observability.',
  stages: [
    {
      threshold: 0,
      label: 'WELL-STRUCTURED MODULAR MONOLITH (SOLID LINES)',
      when: 'Early to mid-stage growth · Clear domain boundaries · Single primary DB + Redis + Celery.',
      tradeoff: 'Lowest operational overhead, strict ACID simplicity, fastest iteration speed. Do not distribute prematurely.',
    },
    {
      threshold: 50,
      label: 'HYBRID ASYNC + READ REPLICA TOPOLOGY',
      when: 'High read-to-write ratio · Heavy reporting + background reconciliation · Multi-vendor stock spikes.',
      tradeoff: 'Isolates slow analytics & side-effects via queues and replicas while preserving transactional core locks.',
    },
    {
      threshold: 85,
      label: 'DISTRIBUTED EVENT-DRIVEN SERVICES (PROPOSED DASHED)',
      when: 'Festival-day 10× spikes · Independent domain teams · Strict fault isolation so one failure never stops sales.',
      tradeoff: 'Requires idempotent consumers, outbox/consistency strategies, and observability — justified when uptime & scale demand it.',
    },
  ],
  pillars: [
    { title: 'Resilience', desc: 'One failure should not stop sales.' },
    { title: 'Scale on demand', desc: 'Handle festival-day spikes without over-paying the other 360 days.' },
    { title: 'Independent growth', desc: 'Teams and services evolve without breaking each other.' },
    { title: 'Trustworthy data across services', desc: 'Consistency strategies that keep money and stock numbers exact.' },
  ],
};

export const CONTACT_SPEC = {
  firstCallQuestions: [
    'What does your business do when it is running perfectly, and what is the first thing that breaks when it grows 5×?',
    'Which report or number do you trust least?',
    'Where do people still copy-paste, re-key or reconcile by hand?',
    'What happens today if your database or main service goes down for an hour?',
    'What single metric would make you say “this was worth it”?',
  ],
  greatFit: [
    'Startups and scale-ups whose database or reporting is becoming the bottleneck',
    'Marketplaces, logistics, retail, pharma, manufacturing and distribution businesses',
    'Teams that want one person who understands both the business and the data layer',
    'Companies that need accuracy, auditability and security, not just “it works”',
  ],
  notFit: [
    'Pure front-end or design-only projects',
    '“Build it as cheap and fast as possible, quality doesn’t matter” projects',
  ],
};

