import { CONSTRUCTION_PHASES } from '../content/content';
import { gsap, prepareStrokeDraw, ScrollTrigger } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { wrapInSheet } from '../core/sheet-frame';
import { draftingSound } from '../core/sound';

export function renderProcess(): string {
  const stepsHtml = CONSTRUCTION_PHASES.map(
    (p, idx) => `
      <article
        class="const-phase-card ${idx === 0 ? 'is-active' : ''}"
        data-const-idx="${idx}"
        tabindex="0"
        role="button"
      >
        <div class="const-card-top">
          <span class="const-num">PHASE ${p.step}</span>
          <span class="const-tag">${p.stageTag}</span>
        </div>
        <h3>${p.name}</h3>
        <p class="const-happens">${p.happens}</p>
        <div class="const-deliv">
          <span>DELIVERABLE</span>
          <strong>${p.deliverable}</strong>
        </div>
      </article>
    `
  ).join('');

  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Six Construction Phases (Discover → Prove)</h2>
        <p class="sheet-subtitle">
          Scroll or select any phase to watch the architectural elevation progress from foundation survey (1/6) to verified sign-off (6/6).
        </p>
      </div>
      <div class="const-stage-indicator">
        <span>ELEVATION COMPLETION</span>
        <strong id="const-progress-label">STAGE 01 / 06 — DISCOVER</strong>
      </div>
    </div>

    <div class="construction-layout" id="construction-layout">
      <!-- Progressive Isometric Building Elevation -->
      <div class="const-elevation-box">
        <svg viewBox="0 0 420 340" class="const-iso-svg" role="img" aria-label="Progressive 6-stage isometric architecture construction">
          <!-- Stage 1: Foundation Grid & Base Pad -->
          <g class="iso-stage" data-stage="0">
            <polygon class="iso-draw" points="210,295 70,225 210,155 350,225" fill="#F5F1E8" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="140" y1="190" x2="280" y2="260" stroke="#101010" stroke-width="1" stroke-dasharray="4 3" />
            <line class="iso-draw" x1="280" y1="190" x2="140" y2="260" stroke="#101010" stroke-width="1" stroke-dasharray="4 3" />
          </g>

          <!-- Stage 2: Diagnostic Columns -->
          <g class="iso-stage" data-stage="1">
            <line class="iso-draw" x1="110" y1="225" x2="110" y2="120" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="210" y1="275" x2="210" y2="170" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="310" y1="225" x2="310" y2="120" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="210" y1="175" x2="210" y2="70" stroke="#101010" stroke-width="2" />
          </g>

          <!-- Stage 3: Master Data & API Deck -->
          <g class="iso-stage" data-stage="2">
            <polygon class="iso-draw" points="210,235 95,178 210,120 325,178" fill="rgba(237,233,223,0.88)" stroke="#101010" stroke-width="1.8" />
          </g>

          <!-- Stage 4: Core Service & Worker Superstructure -->
          <g class="iso-stage" data-stage="3">
            <polygon class="iso-draw" points="210,185 120,140 210,95 300,140" fill="rgba(246,243,235,0.94)" stroke="#101010" stroke-width="1.8" />
            <rect class="iso-draw" x="184" y="114" width="52" height="32" fill="none" stroke="#FF4D1C" stroke-width="1.6" />
          </g>

          <!-- Stage 5: Hardening Perimeter & Concurrency Truss -->
          <g class="iso-stage" data-stage="4">
            <polygon class="iso-draw" points="210,132 145,100 210,68 275,100" fill="#EDE9DF" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="110" y1="120" x2="210" y2="170" stroke="#FF4D1C" stroke-width="1.4" />
            <line class="iso-draw" x1="310" y1="120" x2="210" y2="170" stroke="#FF4D1C" stroke-width="1.4" />
          </g>

          <!-- Stage 6: Proven Metric Spire & Verification Banner -->
          <g class="iso-stage" data-stage="5">
            <line class="iso-draw" x1="210" y1="68" x2="210" y2="26" stroke="#FF4D1C" stroke-width="2.5" />
            <polygon class="iso-draw" points="210,26 266,38 210,50" fill="#FF4D1C" stroke="#FF4D1C" stroke-width="1" />
            <circle cx="210" cy="312" r="4" fill="#FF4D1C" />
          </g>
        </svg>

        <div class="const-elevation-caption">
          <span>ISOMETRIC PROGRESSIVE BUILD</span>
          <strong id="const-deliv-banner">Deliverable: Clear problem statement in business language.</strong>
        </div>
      </div>

      <!-- 6 Phase Cards -->
      <div class="const-phases-grid">
        ${stepsHtml}
      </div>
    </div>
  `;

  return wrapInSheet({
    id: 'process',
    sheetNo: 'SHEET 07 / 10',
    sectionTag: '§07 ENGAGEMENT & CONSTRUCTION PHASES',
    projectTitle: 'SIX-PHASE DELIVERY PROTOCOL',
    scale: '1 : 100',
    bodyHtml,
  });
}

export function initProcessSection(): void {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.const-phase-card'));
  const stages = Array.from(document.querySelectorAll<SVGGElement>('.iso-stage'));
  const labelEl = document.getElementById('const-progress-label');
  const delivEl = document.getElementById('const-deliv-banner');
  const q = qualityManager.getState();

  const applyStage = (maxIdx: number) => {
    const clamped = Math.max(0, Math.min(CONSTRUCTION_PHASES.length - 1, maxIdx));
    const phase = CONSTRUCTION_PHASES[clamped];

    cards.forEach((c, idx) => {
      c.classList.toggle('is-active', idx === clamped);
      c.classList.toggle('is-complete', idx < clamped);
    });

    stages.forEach((st, idx) => {
      const visible = idx <= clamped;
      st.style.opacity = visible ? '1' : '0.12';
      st.style.transform = visible ? 'translateY(0px)' : 'translateY(-8px)';
    });

    if (labelEl) labelEl.textContent = `STAGE 0${clamped + 1} / 06 — ${phase.name.toUpperCase()}`;
    if (delivEl) delivEl.textContent = `Deliverable: ${phase.deliverable}`;
  };

  applyStage(0);

  cards.forEach((card, idx) => {
    const onSelect = () => {
      draftingSound.click();
      applyStage(idx);
    };
    card.addEventListener('click', onSelect);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect();
      }
    });
  });

  if (!q.reducedMotion) {
    // Draw initial foundation strokes
    document.querySelectorAll<SVGGeometryElement>('.iso-stage[data-stage="0"] .iso-draw').forEach((el) => {
      prepareStrokeDraw(el);
      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#construction-layout',
          start: 'top 80%',
        },
      });
    });

    ScrollTrigger.create({
      trigger: '#construction-layout',
      start: 'top 68%',
      end: 'bottom 45%',
      scrub: 0.5,
      onUpdate: (self) => {
        const idx = Math.min(
          CONSTRUCTION_PHASES.length - 1,
          Math.floor(self.progress * CONSTRUCTION_PHASES.length)
        );
        applyStage(idx);
      },
    });
  }
}

