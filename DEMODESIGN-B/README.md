# Design B — The Blueprint Atelier (`DEMODESIGN-B`)

**Md. Shah Abrar Zahin · End-to-End Business Backend Architect**

This standalone project implements **Design B: The Blueprint Atelier** from `../TASK.md`, using `../README.md` as the strict source of truth for copy and metrics.

## Quick Start

```bash
cd DEMODESIGN-B
npm install
npm run dev
```

*(Runs on `http://localhost:5174` by default so it can run side-by-side with `DEMODESIGN-A` on `5173`.)*

## Key Architecture & Features
- **Drafting Sheet Visual System**: Paper `#EDE9DF`, Ink `#101010`, 24px technical drafting grid, corner registration `+` marks, `DrawSVG` dimension arrows, and bottom-right architectural Title Blocks (`SHEET 01 / 10` … `SHEET 10 / 10`).
- **Hero Exploded 3D Isometric Wireframe (`Three.js`)**: 4 interactive structural slabs (*Clients → API & RBAC → Redis & Queues → Oracle/PostgreSQL Core*) that explode apart on scroll, draw callout leader lines, and support damped pointer rotation.
- **Signature Interaction — "Business ⇄ Tech Lens"**: Circular cursor X-ray lens (`clip-path: circle(...)` with keyboard arrow-key support + mobile `Business | Tech` switch) revealing `#1B3FD1` blueprint-blue technical internals right beneath the plain-spoken business story.
- **Interactive Spec Widgets**: GSAP `Flip` Schedule of Materials filter (`S06`), progressive 6-stage isometric construction drawing (`S07`), Revision Cloud table (`S08`), `Monolith ⇄ Distributed` architecture morph slider (`S09`), and RFI submittal sheet with vermilion `"RECEIVED"` rubber-stamp animation (`S10`).

