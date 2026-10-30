# TASK.md: Portfolio Website Build Spec

> **Owner:** Md. Shah Abrar Zahin: *End-to-end business backend architect*
> **Content source of truth:** `README.md` (copy, metrics, positioning). **Never invent metrics.**
> **Deliverable:** 3 fully distinct, award-level creative portfolio designs (A, B, C). Every visitor's reaction must be: *"What a design. What a portfolio."*

---

## 0. How to use this file

1. Put `README.md` and `TASK.md` in the project root (and the two resumes in `/docs`).
2. Give this file to an AI coding agent (Claude Code, Cursor, etc.) with the **Master Prompt** below.
3. Build **one design at a time**, in the order of section 9 (recommended: A → C → B), each in its own folder: `/design-a`, `/design-b`, `/design-c`.
4. After each design, run the **Definition of Done** checklist (section 10).

---

## 1. Master Prompt (copy-paste to the AI agent)

```
You are a senior creative developer (Awwwards / FWA level) and a UX writer.

Read README.md fully: it is the only source of copy and numbers. Then read TASK.md fully.

Build the portfolio website for a person who positions himself NOT as "a backend dev" but as an
END-TO-END BUSINESS BACKEND ARCHITECT: someone who uses technology to help a business grow, with
analytical, efficient, measurable solutions and a clear direction toward distributed systems.
The design itself must communicate this: systems thinking, precision, data, flow, resilience.

Implement Design [A | B | C] exactly as specified in TASK.md, section by section.

Rules:
- Stack and libraries exactly as in section 3. Use GSAP (+ ScrollTrigger, SplitText, Flip, DrawSVG,
  MotionPath, ScrambleText, CustomEase), Lenis, Three.js (+ postprocessing, custom GLSL shaders).
- 60 fps on a mid-range laptop. Respect the performance budget in section 3.4.
- Respect prefers-reduced-motion and provide a mobile fallback exactly as specified.
- Every section needs: layout, visuals, animation, interaction, mobile behaviour. Don't skip any.
- Use only metrics from README.md. Anything illustrative must be labelled "illustrative".
- Write clean, modular, commented code (one module per section, shared utils in /shared).
- After building, run the Definition of Done checklist and report what passes and what doesn't.

Work in this order: project setup → shared systems (smooth scroll, cursor, preloader, WebGL
scene manager) → sections top to bottom → polish → performance pass → accessibility pass.
Show me the file tree first, then implement.
```

---

## 2. Goals and creative north star

| Goal | How the design must show it |
|---|---|
| "Not just a backend dev" | The *business* is the hero. Tech visuals always serve a business outcome. |
| Architect mindset | Diagrams, systems, flow, structure, blueprints are the visual language. |
| Analytical and effective | Numbers are first-class visuals: big, animated, honest. |
| Distributed systems direction | Nodes, queues, replication, failure and recovery appear as interactions. |
| Memorable | Each design has **one signature interaction** people will talk about. |
| Credible | Real metrics, real projects, clear contact path. No fluff. |

**Three designs, three completely different personalities**

| | **A: The Kinetic Monograph** | **B: The Blueprint Atelier** | **C: The Request's Journey** |
|---|---|---|---|
| Metaphor | High-contrast kinetic typography & precision motion editorial | An architect's drawing table | One order travelling through the whole business |
| Mood | Ultra-clean Matte Obsidian & Warm Alabaster, zero 3D clutter | Light, precise, editorial | Bold, colourful, story-driven |
| Hero tech | GSAP Split-Text masks, proximity variable type & velocity marquee (`animmasterlib.dev` style) | SVG line-drawing + exploded 3D wireframe | GSAP MotionPath + liquid shader transitions |
| Signature interaction | **Typographic Failover Switchboard + Cursor Hover-Preview Index** | **"Business ⇄ Tech lens"**: cursor lens reveals the other layer | **"Ride the packet"**: scroll = the request's journey |
| Best for | Maximum text readability + next-level scroll & mouse motion feel | Maximum credibility and clarity | Maximum storytelling and emotion |

---

## 3. Global technical spec (shared by all designs)

### 3.1 Stack
- **Build:** Vite + TypeScript (vanilla; no React unless noted). Alternative: Next.js + React Three Fiber if you prefer React: keep all section specs identical.
- **Animation:** `gsap` (3.13+ : **all plugins are free**): `ScrollTrigger`, `SplitText`, `Flip`, `DrawSVGPlugin`, `MotionPathPlugin`, `ScrambleTextPlugin`, `CustomEase`, `Observer`. (Optional: `ScrollSmoother` *instead of* Lenis; do not use both.)
- **Smooth scroll:** `lenis`, synced to GSAP ticker (snippet in section 11).
- **3D / WebGL:** `three`, `postprocessing` (pmndrs: Bloom, ChromaticAberration, Noise, Vignette, DepthOfField), `vite-plugin-glsl`, `troika-three-text` (crisp SDF text in 3D), `d3-force-3d` (graph layout for nodes).
- **Physics (Design C):** `matter-js`.
- **Dev tools:** `tweakpane` (tune values live), `stats.js` (FPS), `lil-gui` optional.
- **Fonts:** self-host variable fonts (WOFF2, `font-display: swap`).
- **Optional audio:** `howler`: subtle UI sounds, **muted by default** with a visible toggle.
- **Deploy:** Vercel / Netlify / Cloudflare Pages.

### 3.2 Folder structure (per design)
```
/design-x
  /src
    /core        → lenis.ts, gsap-setup.ts, cursor.ts, preloader.ts, scene-manager.ts, quality.ts
    /sections    → hero.ts, positioning.ts, services.ts, work.ts, proof.ts, toolkit.ts,
                   process.ts, timeline.ts, direction.ts, contact.ts
    /webgl       → scene.ts, nodes.ts, shaders/*.glsl, post.ts
    /content     → content.ts (all copy + numbers pulled from README.md)
    /styles      → tokens.css, base.css, sections.css
  index.html
```

### 3.3 Global systems (build first)
1. **Preloader:** unique per design (see each design). Real progress bar (asset loading), min 1.2 s, max 3 s.
2. **Smooth scroll:** Lenis + ScrollTrigger sync. Anchor navigation via `lenis.scrollTo`.
3. **Custom cursor:** per design. Hidden on touch devices.
4. **Scene manager (A, B, C):** one persistent `<canvas>` (fixed, `pointer-events: none` except where needed), one `requestAnimationFrame` loop driven by `gsap.ticker`.
5. **Quality manager:** detect GPU tier; set `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))` (1.5 on low tier); reduce node/particle counts on low tier; pause render when tab hidden or canvas off-screen.
6. **Reduced motion:** if `prefers-reduced-motion`, disable scrub animations, parallax and shaders' time-based motion; show static composed frames; keep content fully readable.
7. **Navigation:** minimal fixed nav: logo mark (monogram **AZ**), section index, `Contact` button, sound toggle, theme/quality toggle (Low/High).

### 3.4 Performance budget
- LCP < 2.5 s on 4G; initial JS < 300 KB gzip (lazy-load Three.js chunk after first paint of the hero text).
- 60 fps target; never below 30 fps on low tier (auto-downgrade).
- Max draw calls ≈ 100; use **InstancedMesh** and **BufferGeometry** for nodes/particles; no per-frame allocations.
- Textures ≤ 1 MB each (KTX2/WebP); no video > 3 MB.
- Lighthouse: Performance ≥ 85 (desktop), Accessibility ≥ 95, SEO ≥ 95.

### 3.5 Accessibility, SEO, responsiveness
- All content exists as real semantic HTML (`h1…h3`, `section`, `nav`, `ul`) *under* the canvas, so screen readers/SEO see everything.
- Visible focus states; keyboard-reachable interactions (A: nodes via Tab list; B: lens via arrow keys; C: skip-journey link).
- Colour contrast ≥ 4.5:1 for body text.
- `<title>`: *"Md. Shah Abrar Zahin: Business Backend Architect"*; meta description from README section 1; OG image generated from hero.
- JSON-LD `Person` schema (name, jobTitle, email, sameAs GitHub/LinkedIn, address Dhaka BD).
- **Mobile:** target 390 px. WebGL scenes get lighter variants (specified per design). Pinned/horizontal sections convert to vertical stacks. Touch replaces hover with tap.

### 3.6 Shared content blueprint (the 12 sections every design contains)

| # | Section | Content (from README.md) | Purpose |
|---|---|---|---|
| S0 | Preloader | Name + one-liner | Set mood |
| S1 | Hero | H1 positioning line, sub-line, CTA | "Who + what + why in 5 sec" |
| S2 | Positioning / Manifesto | README §1–2 ("not a backend dev") | Reframe identity |
| S3 | What I do for your business | README §3 (problem → action → outcome) | Convert visitors |
| S4 | Selected work | README §4: AKT, PharmaSys, Analytics systems | Proof |
| S5 | The numbers | 45%, 99.9%, 1M+, 300+, 20+, 35%, 99.8%, 100% | Credibility at a glance |
| S6 | Architecture toolkit | README §7 | Capability, by layer |
| S7 | How I work | README §6 (6 phases) | Reduce buyer risk |
| S8 | Journey / Experience | Suffix IT (Intern → System Engineer), education | Trust |
| S9 | Direction: distributed systems | README §8 | Vision / future value |
| S10 | Contact | README §12 + §10 (first-call questions) | Conversion |
| S11 | Footer | Links, © , "Built with Three.js + GSAP" | Polish |

**Hero copy options** (use A/B tested pairs per design):
- H1: *"I architect the systems your business grows on."*
- Sub: *"End-to-end backend architecture, data and distributed systems that turn business problems into measurable growth."*
- CTA: **"Let's fix your bottleneck"** → contact · secondary: **"See the proof"** → work

---

# DESIGN A: THE KINETIC MONOGRAPH

**Concept:** Zero 3D clutter, 100% distraction-free editorial readability powered by Awwwards-grade kinetic typography, scroll choreography, and tactile mouse interactions (referenced from `https://animmasterlib.dev/` + GSAP 3.13+ + Lenis). Because the portfolio carries rich business proof, case studies, and engineering reasoning from `README.md`, every section pairs crystal-clear typography with a distinct, purposeful GSAP text/scroll/mouse component.

**Signature interactions:**
1. **Kinetic Hover-Preview Project Index (`A-S4`) + Sticky Scale-Stacking Cards (`A-S3`)**: Hovering project rows spawns a `gsap.quickTo` cursor-following preview card with live architecture schematics and key metrics; clicking smoothly expands the full proof sheet.
2. **Typographic Failover Switchboard (`A-S9`)**: A razor-sharp, zero-3D interactive 5-stage service board (`Gateway → API Core → Redis Cache → Primary/Replica DB → Celery Workers`). Clicking **"Simulate Outage"** on any block flips status badges with character scramble and reroutes clean SVG flow lines (`TRAFFIC REROUTED · DOWNTIME: 0s · REVENUE IMPACT: 0`).

**Palette:** Alternating high-contrast clean stages — Matte Obsidian `#09090B` · Surface `#111115` · Crisp Alabaster `#F7F6F2` · Pure White `#FFFFFF` · Deep Ink `#09090B` · Signal Lime `#C6FF3D` (primary accent) · Electric Cobalt `#2563EB` / Alert Coral `#FF4D4D` (failover states only) · Architectural hairlines `1px solid`.
**Type:** Display: *Syne* / *Instrument Serif* (italic emphasis) + *Plus Jakarta Sans* (variable weight `400..800` for proximity/kinetic headlines) · Body: *Plus Jakarta Sans* (generous line-height for effortless reading) · Data/labels/counters: *JetBrains Mono*.
**Motion & component refs:** `https://animmasterlib.dev/`, GSAP Showcase, Awwwards typographic SOTDs (Locomotive, Studio Freight, Zajno).

**Global Kinetic & Mouse Systems (`/core`)**
- **Blend-Mode Morphing Cursor:** Smooth `gsap.quickTo` follower dot that expands into a `mix-blend-mode: difference` spotlight disc over display typography, or morphs into a crisp action pill (`OPEN CASE ↗`, `SIMULATE OUTAGE`, `COPY EMAIL`) on interactive targets.
- **2-Layer Rolling Text + Magnetic Buttons:** Every CTA and nav item pulls magnetically toward the pointer while its inner text rolls vertically (`yPercent: 0 → -100`) to reveal a second twin layer from below.
- **Scroll-Velocity Kinetic Marquee:** Infinite horizontal text bands driven by `gsap.ticker` + `Lenis` scroll velocity — scrolling faster dynamically boosts speed and applies subtle `skewX` tilt, settling smoothly back to baseline.
- **Mouse Radial Spotlight Borders:** Bento and stacked cards track pointer coordinates (`--mx`, `--my`) to illuminate crisp radial border highlights under the cursor.

### Section-by-section

**A-S0 Preloader**
- Layout: Clean obsidian full-screen frame with giant monospace **Slot-Wheel Counter** (`00 → 100`), split-character reveal of *"Md. Shah Abrar Zahin — End-to-End Business Backend Architect"*, and live loading bar.
- Animation: Digits roll vertically; on `100`, a dual **Split-Shutter Curtain** (`clip-path` top/bottom panels) parts smoothly (`0.85s expo.inOut`) to reveal the clean Hero.

**A-S1 Hero**
- Layout: Distraction-free typographic stage. Top metadata bar (`DHAKA, BD · 3+ YEARS ENTERPRISE DATA & BACKEND · 99.9% UPTIME`). Huge H1: *"I architect the systems your business grows on."* (*"grows"* accented in italic Signal Lime), clean readable sub-headline, magnetic dual-rolling CTAs (**"Let's fix your bottleneck"** + **"See the proof"**), and a bottom **Scroll-Velocity Kinetic Marquee** (`API → Business Logic → Database → Pipelines → Dashboards → Decisions`).
- Animation & Mouse Effect: Line-by-line masked slide-up (`yPercent: 115 → 0`, `expo.out`) + **Mouse Proximity Character Response** (moving the cursor across the H1 smoothly interpolates character weight/lift/glow within a `160px` radius).
- Mobile: Clean stacked layout, touch-friendly CTAs, continuous smooth marquee.

**A-S2 Positioning / Manifesto**
- Layout: Light Warm Alabaster (`#F7F6F2`) editorial stage for maximum reading comfort. Giant **Scroll-Scrubbed Highlight Reading** paragraph (*"I'm not just a backend developer — I'm the architect between your business and your data..."* from `README.md` §1–2), followed by the 5 Core Principles strip and an **Interactive Hover-Curtain Comparison Table** (*"A typical backend developer"* vs *"How I work as your architect"*).
- Animation & Mouse Effect: Each word scrubs smoothly from `0.18` → `1.0` opacity as the visitor reads down; hovering any comparison row slides a full-width dark/lime curtain highlight across the row with micro-offset typography.

**A-S3 What I do for your business (8 Bottlenecks)**
- Layout: **Sticky Scale-Stacking Cards (`ScrollTrigger` Stack)** — all 8 business problems from `README.md` §3 (`Slow reports`, `Multi-vendor marketplace`, `Manual Excel`, `Overselling`, `Untrusted numbers`, `5× traffic fear`, `Compliance`, `Plain-English partner`) presented as generous, ultra-legible full-width horizontal editorial cards (`Problem` · `What I do` · `Measured Outcome` badge).
- Animation & Mouse Effect: As you scroll, each new card glides up and pins cleanly over the previous card while earlier cards scale down (`scale: 0.94`, subtle dim) creating tactile physical depth without horizontal-scroll fatigue. Cursor radial spotlight illuminates card borders.
- Mobile: Clean vertical cards with crisp scroll-reveal entrance.

**A-S4 Selected work (AKT, PharmaSys, Analytics Systems)**
- Layout: `animmasterlib.dev`-inspired **Kinetic Hover-Preview Project Index + Smooth Expandable Case Sheet**. Three monumental typographic rows (`01 Enterprise Reporting — AKT Tobacco & AKT Leaf`, `02 PharmaSys — Multi-Vendor Healthcare Marketplace`, `03 Multi-Source Analytics & Forecasting BI`) with role, year, and headline metric (`45% ↓ <500ms`, `Zero Oversells`, `1M+ Unified Rows`).
- Interaction & Mouse Effect: Moving the pointer across any row spawns a **Floating Cursor-Follower Preview Card** (`gsap.quickTo` x/y + velocity tilt) displaying a clean 2D architecture schematic and key KPIs. Clicking any row smoothly expands (accordion `height: 0 → auto`) the complete case study: bullet proof from `README.md` §4, clean `Before ⇄ After` flow toggle, tech stack chips, and GitHub repo links.
- Mobile: Tap row to expand full case study + inline schematic card.

**A-S5 The numbers**
- Layout: Crisp `2×4` **Mouse-Spotlight Bento Grid**: `45% faster queries (<500ms)` · `99.9% production uptime` · `1M+ daily records` · `300+ queries refactored` · `20+ workflows automated` · `35% faster report delivery` · `99.8% deliverable accuracy` · `100% security compliance`.
- Animation & Mouse Effect: Digits animate via vertical **Odometer / Slot-Machine Reels** on scroll entry; moving the mouse across the grid projects a shared radial spotlight glow across adjacent card borders; hovering a card reveals the exact production context line.

**A-S6 Architecture toolkit**
- Layout: Clean layer filter bar (`All`, `Data & DB`, `Backend & APIs`, `Performance & Async`, `Analytics & BI`, `DevOps`) + crisp typographic tech pills (`Production-Proven` solid vs `Working Knowledge` outlined).
- Animation & Mouse Effect: Clicking any category tab triggers a **`GSAP Flip` Layout Morph** smoothly rearranging pills in place; hovering any pill scrambles its code tag (`ScrambleText`) and updates a clean bottom **Production Proof Inspector Bar** showing exactly where that tool delivered results in `README.md`.

**A-S7 How I work (6 Phases)**
- Layout: **Pinned Split-Screen Scroll-Spy** on crisp Alabaster paper. Left column stays pinned (`01 → 06` progress rail + live phase counter + headline); right column scrolls through large, breathable editorial blocks for `Discover`, `Diagnose`, `Architect`, `Build`, `Harden`, and `Prove` (with explicit **"What you get"** deliverable pill on each).
- Animation: Vertical progress bar fills via `ScrollTrigger` scrub; active phase card highlights with crisp border & number scale.
- Mobile: Unpinned clean vertical steps with left progress line.

**A-S8 Journey / Experience & Education**
- Layout: Clean editorial ledger (`Feb 2023 – May 2023 SQL Development Intern @ Suffix IT LTD.`, `Jun 2023 – Aug 2026 System Engineer (Data Engineer) @ Suffix IT LTD.`, `2026 – Now End-to-End Business Backend Architect`, plus `B.Sc. in CSE @ BAUET` & YOLOv3 vs YOLOv7 thesis).
- Animation & Mouse Effect: Hairline rules draw from `scaleX(0 → 1)` on scroll; date badges decode via `ScrambleText`; hovering a timeline row subtly shifts the title (`x: 10px`) and highlights key impact metrics.

**A-S9 Direction: Distributed Systems (Signature Clean Switchboard)**
- Layout: Headline *"Where I'm heading: systems that don't stop."* + **Interactive Typographic Failover Switchboard** — 5 clean architectural modules connected by crisp SVG data lines (`01 Edge Gateway` → `02 Django/API Core` → `03 Redis Cache & Lock` → `04 PostgreSQL/Oracle Primary + Replica` → `05 Celery Async Queue`).
- Interaction: Visitor clicks any module (or **"Simulate Random Outage"** / **"Heal All"**): the selected node flips to `OUTAGE SIMULATED`, SVG backup failover lines animate live around it, status scrambles to `FAILOVER ACTIVE · REPLICA PROMOTED · REVENUE IMPACT: 0`, and a clean toast confirms *"Node down. Traffic rerouted. Business unaffected."* Below sits the 4 value cards (`Resilience`, `Scale on demand`, `Independent growth`, `Trustworthy data`) and the honest note from `README.md` §8.

**A-S10 Contact**
- Layout: Monumental typographic close: *"Is your system slowing your business down?"*, giant interactive email button (`abrar.bauet@gmail.com`), direct magnetic links (`Phone +880 01334-317864`, `LinkedIn`, `GitHub`), **"Who I'm a great fit for / Not a fit for"** clean 2-column matrix, and an interactive **Accordion** of the 5 First-Call Questions (`README.md` §10).
- Animation & Mouse Effect: Hovering the giant email triggers a **Character-by-Character Wave / 3D Roll**; clicking copies to clipboard with a crisp toast.

**A-S11 Footer:** Clean typographic footer bar with `© 2026 Md. Shah Abrar Zahin · End-to-End Business Backend Architect`, live ticking `Dhaka, BD (GMT+6)` clock, motion/theme toggle, and magnetic `Back to Top ↑` button.

---

# DESIGN B: THE BLUEPRINT ATELIER

**Concept:** He is an *architect*. The portfolio is a set of drawing **sheets** on a drafting table: precise lines, dimension annotations, title blocks, an exploded 3D wireframe of a system. Calm, premium, very credible. Contrasts with A's darkness.

**Signature interaction: "Business ⇄ Tech Lens".** A circular lens follows the cursor. Outside the lens you see the *business view* (revenue, orders, growth in plain words). Inside the lens you see the *technical view* of the same drawing (tables, queues, indexes). Same diagram, two truths: exactly his positioning.

**Palette:** paper `#EDE9DF` · ink `#101010` · grid line `rgba(16,16,16,.08)` · accent vermilion `#FF4D1C` · secondary blueprint `#1B3FD1` (used only inside the Tech lens).
**Type:** Display: *Fraunces* (soft, optical size 144, high contrast) or *PP Editorial New* · UI: *Geist* · Annotations/dimensions: *IBM Plex Mono*.
**Mood refs:** architectural drawings, Teenage Engineering manuals, editorial Swiss layouts, Awwwards "technical-editorial" sites.

**Global visual language**
- Every section is a numbered **Sheet** (`SHEET 03 / 10`) with a **title block** in the bottom-right corner (Project: *Business Systems*, Scale, Drawn by AZ, Date).
- Faint 24 px grid on the background (CSS), with registration marks `+` at the corners.
- **Dimension lines** with arrows and values (`45%`, `<500 ms`) that draw themselves (DrawSVG) around key elements.
- Cursor: crosshair with live coordinates `x: 412  y: 188` in mono.

### Section-by-section

**B-S0 Preloader**
- Layout: blank paper; a pencil-line draws a rectangle (the sheet border), then the title block fills in: *"SHEET 00: INITIALISING"*.
- Animation: DrawSVG border (1 s), ScrambleText fills fields, then the sheet "slides up" revealing hero (clip-path inset animation).
- Mobile: same.

**B-S1 Hero**
- Layout: giant H1 in Fraunces across 3 lines, one word (*"architect"*) in vermilion with an underline that draws and a dimension line beneath it labelled `BUSINESS ➝ SYSTEM`. Right side: **Three.js exploded isometric wireframe** (4 slabs: *Clients → API → Services → Data*) slowly rotating.
- Visual: wireframe slabs in ink lines (`LineSegments` + `EdgesGeometry`), no fill; faint vermilion packet moves vertically through the layers.
- Animation: SplitText mask reveal; wireframe layers *explode apart* as you scroll the first 100 vh (scrub `y` offsets), then are annotated by callouts (`01 API layer`, `04 Data layer`) via DrawSVG leader lines.
- Interaction: drag to rotate the wireframe (limited orbit, damped); hover layer → highlights, shows label.
- Mobile: wireframe sits below H1, auto-rotates, no drag.

**B-S2 Positioning / Manifesto**
- Layout: editorial two-column: left, sticky small label `§02 POSITIONING`; right, large paragraph.
- Visual: the phrase *"not a backend developer"* has a hand-drawn strike-through (DrawSVG) and the correction *"a business backend architect"* is written in vermilion beside it (handwritten-style SVG path).
- Animation: SplitText lines fade with ScrollTrigger; strike-through draws on scroll; paragraph words highlight (ink → vermilion) as you read (scrub).
- Mobile: single column.

**B-S3 What I do for your business**
- Layout: 8 problem/solution rows as an **architectural schedule table** (like a door schedule on a drawing): columns `NO. · PROBLEM · ACTION · OUTCOME`. Rows separated by thin ink lines.
- Visual: hovering a row reveals a small line diagram (SVG) of the fix (e.g., index icon, cache icon, queue icon) to the right.
- Animation: rows draw their borders in sequence (DrawSVG stagger); numbers in OUTCOME count up; row hover: background wipes vermilion at 8% opacity with GSAP `scaleX`.
- Interaction: **Lens** is active here as a teaser: move the lens over the row to swap plain-language text for technical terms.
- Mobile: rows become stacked cards; tap to reveal diagram.

**B-S4 Selected work: "Drawings"**
- Layout: each project is a large drawing sheet: central diagram, dimension callouts around it, title block with role/stack, and a vertical caption strip with the outcome.
- Visual (PharmaSys): isometric SVG diagram: Customer / Vendor / Rider / Admin → API → Redis → PostgreSQL → Celery. Callout lines point to details: `A. Row-level locking`, `B. Redis cache`, `C. RBAC`.
- **Lens in full:** outside lens = business story (*"No more overselling. Vendors and warehouse stay in sync."*), inside lens = tech detail (isolation level, lock strategy, cache keys). Implement with two stacked layers + CSS `clip-path: circle()` driven by cursor position (GSAP `quickTo`), the inner layer in blueprint-blue.
- Animation: sheet enters via clip-path wipe; diagram lines DrawSVG sequentially; callouts pop with `back.out`.
- Mobile: no lens → **toggle switch** `Business | Tech`; the diagram crossfades.

**B-S5 The numbers: "Dimensions"**
- Layout: metrics displayed like **dimension annotations** on a drawing: big number centered on a line with arrow ends, caption beneath (e.g., `<500 ms ◄──────► QUERY RUNTIME`).
- Visual: an abstract plan-view drawing where dimension lines measure parts of it.
- Animation: DrawSVG lines extend left/right from the number; number counts; arrows pulse once.
- Mobile: stacked dimension rows.

**B-S6 Architecture toolkit: "Legend / Schedule of Materials"**
- Layout: grid like an architect's *material legend*: each tech in a bordered cell with an icon (custom SVG), name, level tag (`PRODUCTION` / `WORKING`).
- Visual: 3D optional: the exploded wireframe from the hero returns, with layers matching toolkit categories.
- Animation: cells fill in a wave (stagger from center); filtering chips (*Data / Backend / Async / BI / DevOps*) use **GSAP Flip** to rearrange the grid.
- Mobile: 2-col grid, filter chips scroll horizontally.

**B-S7 How I work: "Construction Phases"**
- Layout: horizontal pinned timeline of 6 phases as **construction stages** (foundation → frame → structure …), each with a small isometric building drawn progressively.
- Visual: the same building is drawn further each phase (DrawSVG progress 1/6 → 6/6) → completed building at "Prove".
- Animation: ScrollTrigger pin + scrub controlling DrawSVG progress; phase labels slide in.
- Mobile: vertical, each phase shows its drawing stage.

**B-S8 Journey / Experience: "Revision History"**
- Layout: a **revision table** like those on drawings: `REV · DATE · DESCRIPTION · BY`. *REV A Feb 2023: SQL Development Intern; REV B Jun 2023: System Engineer (Data Engineer); REV C 2026: Business Backend Architect (in progress)*.
- Visual: revision "clouds" (hand-drawn cloud shapes) around the latest revision.
- Animation: rows type in with ScrambleText; cloud draws on enter.
- Mobile: stacked rows.

**B-S9 Direction: distributed systems: "Future Works (Proposed)"**
- Layout: sheet titled *"PROPOSED EXTENSION: DISTRIBUTED"*, dashed lines (proposed) vs solid lines (existing). Left: existing monolith box (solid); right: decomposed services around a message broker (dashed).
- Visual: dashed lines animate (stroke-dashoffset) to imply "in progress".
- Interaction: **slider "Monolith ⇄ Distributed"** morphs the diagram (GSAP MorphSVG / Flip) between the two architectures; caption updates with the trade-offs (honest: "Not always needed").
- Mobile: slider kept; diagram simplified.

**B-S10 Contact: "Request for Information (RFI)"**
- Layout: styled as an **RFI form**: fields look like a drawing form (`PROJECT`, `YOUR BOTTLENECK`, `CONTACT`). Submit uses `mailto:` or Formspree. Beside it: email, phone, LinkedIn, GitHub, and the 5 first-call questions.
- Visual: stamp animation on submit: vermilion **"RECEIVED"** rubber-stamp (scale 3 → 1 with rotation, slight shake).
- Mobile: full-width form.

**B-S11 Footer:** a final title block: `DRAWN BY: AZ · CHECKED BY: Coffee · SCALE: 1:1 · SHEET 10/10`.

---

# DESIGN C: THE REQUEST'S JOURNEY

**Concept:** One customer order is a glowing **packet**. The site is its journey through a business: *Customer → Edge → API → Queue → Worker → Database → Report → Growth*. Every stop explains what he does there. Each stop has its own bold background color. It ends with the packet becoming a **rising growth line**, the emotional payoff: *tech → business growth*.

**Signature interaction: "Ride the Packet".** A packet follows a long SVG path (GSAP MotionPath) as the visitor scrolls; the packet leaves a colored trail, and the background color and shader transition change at every stop.

**Palette (stage colours):** Customer `#FFE9D6` cream · Edge `#FF5A36` tomato · API `#1D3BFF` cobalt · Queue `#FFC933` amber · Worker `#0B0B0F` ink (text cream) · Database `#7A4DFF` violet · Report `#EDEDE6` paper · Growth `#C6FF3D` lime. Packet is always **white with a black outline + glow**.
**Type:** Display: *Bricolage Grotesque* (variable, width + weight animation on scroll) · Body: *DM Sans* · Data: *DM Mono*.
**Mood refs:** playful-bold storytelling sites, Locomotive/Immersive Garden-style journeys, Stripe Sessions microsites.

**WebGL core**
- Fullscreen shader quad behind content: **liquid-distortion transition** between stage colors (noise-driven displacement, `uProgress` 0→1 per stage) plus a cursor ripple trail (ping-pong render targets or a lightweight ripple texture).
- Packet trail: `THREE.Line2`/tube or GSAP-drawn SVG glow; combine with Bloom.
- Halftone/grain overlay shader for tactile feel.
- Matter.js canvas (2D, overlay) for the toolkit "drop" physics.

### Section-by-section

**C-S0 Preloader**
- Layout: centered white packet (circle) pulsing; text *"Order #001 placed…"*.
- Animation: packet grows to fill the screen (clip-path circle expansion) → reveals hero in cream. Progress as a ring around the packet.
- Mobile: same.

**C-S1 Hero: Stop 0 "Customer"** (cream)
- Layout: massive H1 (variable-font width animates from condensed to wide on scroll), the word **"grows"** in tomato with a hand-drawn underline. A small packet sits at the end of the headline, waiting. Scroll hint: *"Follow the order →"*.
- Animation: SplitText char stagger with slight rotation; Bricolage `wdth` axis scroll-linked; packet bobs.
- Interaction: cursor leaves a soft liquid ripple (shader) in tomato.
- Mobile: H1 shortened; ripple off.

**C-S2 Positioning: Stop 1 "Edge"** (tomato)
- Layout: *"Most developers see an endpoint. I see the whole journey."* centered; below, 3 fast-cut facts (*3+ years · 1M+ daily records · 99.9% uptime*).
- Visual: liquid shader wipes cream → tomato as the packet passes; packet now leaves a tomato trail.
- Animation: SplitText words slide from alternating sides; facts stagger; shader `uProgress` scrub.
- Mobile: facts vertical.

**C-S3 What I do: Stop 2 "API"** (cobalt)
- Layout: 8 problems as **stacked swipe cards** (like a card deck); active card centered, others peeking behind. Card: problem, action, outcome.
- Animation: GSAP Observer/ScrollTrigger-driven: scroll flips the top card (rotate + translate, 3D) to the bottom of the deck (Flip). Outcome numbers pop with `elastic.out`.
- Interaction: drag cards (Draggable) to browse; click to expand.
- Mobile: swipe deck (touch drag).

**C-S4 Selected work: Stop 3 "Queue"** (amber) + Stop 4 "Worker" (ink)
- Layout: horizontal pinned track; each project is a huge poster-like panel (AKT, PharmaSys, Analytics): giant project number `01`, title, one-line business result, 3 metric chips, stack chips. A *queue* visual: small packets lined up waiting; when you reach a project, the front packet is "processed" (pops with confetti dots).
- Visual: panels have bold geometric illustration (CSS/SVG shapes) per project, not screenshots; PharmaSys panel shows a mini flow *Order → Lock stock → Assign rider → Deliver* animating.
- Animation: ScrollTrigger pin + horizontal scrub; parallax between layers (text, shape, number at different speeds); chips stagger.
- Interaction: hover panel → shape morphs (MorphSVG); click → fullscreen case drawer (Flip expand).
- Mobile: vertical stack of panels, no pin.

**C-S5 Numbers + Query Race: Stop 5 "Database"** (violet)
- Layout: left: giant metrics; right: **interactive "Query Race"**: two horizontal bars, *Before* vs *After*, press **RUN** and they race; After finishes ~45% faster and the label shows `<500 ms`.
- Honesty: the Before value is derived from the real "45% faster" claim; mark the whole visual **"illustrative"**.
- Animation: GSAP timeline race with easing; screen shake + confetti on finish; counters for other metrics.
- Mobile: bars stack vertically; same RUN button.

**C-S6 Toolkit: "Drop zone"** (ink → violet)
- Layout: empty "warehouse" floor; tech chips (Oracle, PostgreSQL, Django, Redis, Celery, Airflow, Power BI, Docker, K8s…) **fall with real physics** (Matter.js) and pile up. Production-proven chips are lime; working-knowledge chips are outlined.
- Interaction: drag/throw chips; hover chip → tooltip with where it was used; filter buttons by layer re-drop the chips.
- Animation: chips drop when section enters; gravity toggled with tilt on mobile (DeviceOrientation, with permission).
- Mobile: physics kept (≤ 24 bodies), no tilt fallback.

**C-S7 How I work: Stop 6 "Report"** (paper)
- Layout: 6 phases as a **receipt / printed report** that prints out line by line from a slot at the top (like a thermal receipt), with a jagged bottom edge.
- Animation: scrub moves the receipt downward (translateY) while each line types in (ScrambleText); a barcode at the bottom animates.
- Mobile: same, full width.

**C-S8 Journey: Stop 7 mini "Log"** (paper)
- Layout: experience as a **terminal-style log** in DM Mono: `2023-02 INFO  Joined Suffix IT as SQL Development Intern` → `2023-06 INFO  Promoted: System Engineer (Data Engineer)` → `2026-08 INFO  Next: Business Backend Architect`. Education as `ARCHIVE`.
- Animation: lines print sequentially (typed), cursor blinks; key metrics highlighted lime.
- Mobile: same.

**C-S9 Direction: distributed systems: "Scale" (the packet multiplies)**
- Layout: the single packet **splits into dozens** that flow through parallel lanes (workers) and merge again; headline *"One order today. A million tomorrow."*
- Visual: Three.js instanced packets flowing through 3 lanes; a slider **"Orders per second"** (1 → 10,000, illustrative) increases packets; at high load the single-lane (monolith) shows red congestion while the multi-lane (distributed) stays smooth.
- Interaction: toggle **Monolith / Distributed**.
- Mobile: reduced instance count.

**C-S10 Contact: Stop 8 "Growth"** (lime)
- Layout: the packet transforms into a **rising line chart** that draws across the screen, ending in an arrow; headline *"Let's make your growth curve look like this."*; email as giant link; CTA buttons.
- Animation: DrawSVG chart line (scrub), area fill fades; confetti burst at the end (canvas-confetti); background lime via shader.
- Mobile: chart scaled, buttons stacked.

**C-S11 Footer:** `ORDER #001 DELIVERED ✔`, small links, back-to-top (packet flies up the page).

---

## 9. Choosing and building order

| Priority | Design | Why |
|---|---|---|
| 1 | **A: Kinetic Monograph** | Zero 3D clutter, razor-sharp readability, `animmasterlib.dev` + GSAP text/scroll/mouse polish |
| 2 | **C: Request's Journey** | Most memorable storytelling and emotional close |
| 3 | **B: Blueprint Atelier** | Most credible/professional; architectural drafting aesthetic and Business ⇄ Tech lens |

Suggested timeline (solo with AI agent): shared systems (1–2 days) → Design A (4–5 days) → Design C (5–7 days) → Design B (4–6 days) → polish/perf (2–3 days).
You can ship **A** or **B** as the main site and keep the others as `/v2`, `/v3` alternates.

---

## 10. Definition of Done (per design)

- [ ] All 12 sections (S0–S11) implemented exactly as specified, desktop + mobile.
- [ ] Signature interaction works flawlessly (A: hover-preview index + clean failover switchboard · B: lens + mobile toggle · C: ride the packet).
- [ ] All copy and numbers match `README.md`; illustrative visuals are labelled.
- [ ] 60 fps on a mid-range laptop; auto-downgrade works on low tier; no layout shift.
- [ ] `prefers-reduced-motion` handled; keyboard navigation works; contrast ≥ 4.5:1.
- [ ] Lighthouse: Perf ≥ 85, A11y ≥ 95, SEO ≥ 95.
- [ ] No console errors; WebGL context loss handled (fallback to static image).
- [ ] No memory leaks: geometries/materials/textures disposed on teardown; ScrollTriggers killed on resize/re-init.
- [ ] Contact paths work (email, phone, LinkedIn, GitHub) and OG image is correct.
- [ ] Tested: Chrome, Safari (iOS + macOS), Firefox, Android Chrome.

---

## 11. Code recipes (reference for the agent)

**Lenis + GSAP ScrollTrigger sync**
```ts
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
```

**Mouse proximity character response (Design A — `animmasterlib.dev` style)**
```ts
window.addEventListener('pointermove', (e) => {
  chars.forEach((ch) => {
    const r = ch.getBoundingClientRect();
    const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    const t = Math.max(0, 1 - d / 160);
    ch.style.fontVariationSettings = `'wght' ${Math.round(520 + t * 280)}`;
    ch.style.transform = `translate3d(0, ${(-t * 6).toFixed(1)}px, 0)`;
  });
});
```

**Scroll-velocity kinetic marquee (Design A)**
```ts
let xPercent = 0;
let direction = -1;
gsap.ticker.add((_, dt) => {
  const vel = lenis ? lenis.velocity : 0;
  if (Math.abs(vel) > 0.2) direction = vel > 0 ? -1 : 1;
  xPercent += (0.04 + Math.min(0.35, Math.abs(vel) * 0.015)) * direction * (dt / 16.67);
  if (xPercent <= -100) xPercent = 0;
  if (xPercent > 0) xPercent = -100;
  gsap.set(track, { xPercent, skewX: gsap.utils.clamp(-8, 8, vel * 0.18) });
});
```

**Sticky scale-stacking problem cards (Design A)**
```ts
cards.forEach((card, i) => {
  if (i === cards.length - 1) return;
  gsap.to(card, {
    scale: 0.94,
    opacity: 0.55,
    scrollTrigger: { trigger: cards[i + 1], start: 'top 78%', end: 'top 18%', scrub: true },
  });
});
```

**Mask text reveal**
```ts
const split = SplitText.create('.h1', { type: 'lines', mask: 'lines' });
gsap.from(split.lines, { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.08 });
```

**Packet on a path (Design C)**
```ts
gsap.to('#packet', {
  motionPath: { path: '#journey', align: '#journey', alignOrigin: [0.5, 0.5], autoRotate: false },
  ease: 'none',
  scrollTrigger: { trigger: '#journey-wrap', start: 'top top', end: 'bottom bottom', scrub: 1 },
});
```

**Lens (Design B)**
```ts
const lens = document.querySelector('.tech-layer');
const setX = gsap.quickTo(lens, '--x', { duration: 0.25, ease: 'power3' });
const setY = gsap.quickTo(lens, '--y', { duration: 0.25, ease: 'power3' });
window.addEventListener('pointermove', e => { setX(e.clientX); setY(e.clientY); });
// CSS: .tech-layer { clip-path: circle(120px at calc(var(--x) * 1px) calc(var(--y) * 1px)); }
```

---

## 12. Iteration prompts (use after the first build)

- *"Polish pass on Section [X]: improve easing, timing and micro-interactions. Make it feel like an Awwwards Site of the Day. Don't change the content."*
- *"Performance pass: profile, reduce draw calls, add GPU-tier fallback, lazy-load Three.js, and show me before/after FPS."*
- *"Mobile pass at 390 px: fix every overflow, convert pinned sections, and verify touch interactions."*
- *"Accessibility pass: semantic HTML under the canvas, focus states, reduced-motion variants, contrast fixes."*
- *"Copy pass: tighten every line to be plain-spoken, business-first, metric-led. Keep only README.md facts."*
- *"Merge pass: take Design A's cluster as the global background and Design B's Business⇄Tech lens as the case-study component."*

---

## 13. Assets to prepare (owner checklist)

- [ ] Professional headshot (optional; the designs work without one) + a short 20–30 s intro video (optional)
- [ ] Monogram **AZ** logo (SVG)
- [ ] Permission to show client names (AKT Tobacco / AKT Leaf) or an anonymised version
- [ ] Architecture diagrams for PharmaSys (can be sketched; the agent will redraw)
- [ ] Confirm availability status, preferred contact, timezone
- [ ] Domain name (e.g., `abrarzahin.dev`)
