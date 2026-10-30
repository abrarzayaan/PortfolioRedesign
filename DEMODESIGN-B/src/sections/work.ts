import { ARCHITECTURAL_DRAWINGS, ArchitecturalDrawing } from '../content/content';
import { gsap } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { wrapInSheet } from '../core/sheet-frame';

function buildSchematicSvg(dwg: ArchitecturalDrawing, isTech: boolean): string {
  const strokeMain = isTech ? '#FFFFFF' : '#101010';
  const strokeAccent = isTech ? '#80B3FF' : '#FF4D1C';
  const boxFill = isTech ? '#1635B3' : '#F6F3EB';
  const subColor = isTech ? '#C5DCFF' : '#4A4945';

  const linesSvg = dwg.connectors
    .map(
      (c) => `
      <g>
        <line x1="${c.x1}" y1="${c.y1}" x2="${c.x2}" y2="${c.y2}" stroke="${strokeMain}" stroke-width="1.6" />
        <line x1="${c.x1}" y1="${c.y1}" x2="${c.x2}" y2="${c.y2}" stroke="${strokeAccent}" stroke-width="2.2" stroke-dasharray="6 26" class="dwg-packet-line" />
        <circle cx="${c.x2}" cy="${c.y2}" r="3" fill="${strokeAccent}" />
      </g>
    `
    )
    .join('');

  const boxesSvg = dwg.boxes
    .map((b) => {
      const title = isTech ? b.techLabel : b.businessLabel;
      const sub = isTech ? b.techSub : b.businessSub;
      return `
        <g transform="translate(${b.x}, ${b.y})">
          <!-- Isometric 3D offset shadow -->
          <rect x="5" y="5" width="${b.w}" height="${b.h}" fill="none" stroke="${strokeMain}" stroke-opacity="0.28" stroke-width="1" />
          <rect x="0" y="0" width="${b.w}" height="${b.h}" fill="${boxFill}" stroke="${strokeMain}" stroke-width="1.6" />
          <line x1="0" y1="22" x2="${b.w}" y2="22" stroke="${strokeMain}" stroke-opacity="0.25" stroke-width="1" />
          <text x="10" y="15" font-family="IBM Plex Mono, monospace" font-size="9" fill="${strokeAccent}" font-weight="600">${b.id.toUpperCase()} // ${isTech ? 'TECH SPEC' : 'BUSINESS FLOW'}</text>
          <text x="10" y="43" font-family="Geist, sans-serif" font-size="12" font-weight="600" fill="${strokeMain}">${title}</text>
          <text x="10" y="61" font-family="IBM Plex Mono, monospace" font-size="9.2" fill="${subColor}">${sub}</text>
        </g>
      `;
    })
    .join('');

  const calloutsSvg = dwg.callouts
    .map(
      (c) => `
      <g transform="translate(${c.x}, ${c.y})">
        <circle cx="0" cy="-42" r="9.5" fill="${strokeAccent}" />
        <text x="0" y="-38.5" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${isTech ? '#10257E' : '#FFFFFF'}">${c.code}</text>
      </g>
    `
    )
    .join('');

  return `
    <svg viewBox="0 0 610 296" class="dwg-svg" role="img" aria-label="${dwg.title} ${isTech ? 'Technical Blueprint' : 'Business'} Diagram">
      ${linesSvg}
      ${boxesSvg}
      ${calloutsSvg}
    </svg>
  `;
}

function buildCalloutsStrip(dwg: ArchitecturalDrawing, isTech: boolean): string {
  return dwg.callouts
    .map(
      (c) => `
      <div class="dwg-callout-note">
        <span class="callout-badge">${c.code}</span>
        <div>
          <strong>${isTech ? c.techTitle : c.businessTitle}</strong>
          <p>${isTech ? c.techNote : c.businessNote}</p>
        </div>
      </div>
    `
    )
    .join('');
}

export function renderWork(): string {
  const drawingsHtml = ARCHITECTURAL_DRAWINGS.map((dwg) => {
    const metricsHtml = dwg.metrics
      .map(
        (m) => `
        <div class="dwg-metric">
          <strong>${m.val}</strong>
          <span>${m.label}</span>
        </div>
      `
      )
      .join('');

    const bulletsHtml = dwg.bullets.map((b) => `<li>${b}</li>`).join('');
    const linksHtml = dwg.links
      ? `<div class="dwg-ext-links">
          ${dwg.links
            .map(
              (l) =>
                `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="dwg-link">${l.label} ↗</a>`
            )
            .join('')}
        </div>`
      : '';

    return `
      <article id="${dwg.id}" class="drawing-plate">
        <div class="plate-header">
          <div>
            <span class="plate-dwg-no">${dwg.dwgNo} · SCALE ${dwg.scale} · ${dwg.period}</span>
            <h3 class="plate-title">${dwg.title}</h3>
            <p class="plate-stack">${dwg.roleOrStack}</p>
          </div>

          <div class="lens-mode-bar" role="group" aria-label="${dwg.title} Lens Toggle">
            <button type="button" class="lens-switch-btn" data-lens-mode="business">Business</button>
            <button type="button" class="lens-switch-btn is-active hide-mobile-lens" data-lens-mode="lens">Cursor Lens</button>
            <button type="button" class="lens-switch-btn" data-lens-mode="tech">Blueprint Tech</button>
          </div>
        </div>

        <!-- Dual-Layer Signature Lens Drawing -->
        <div
          class="lens-stage drawing-lens-stage"
          data-lens-radius="150"
          tabindex="0"
          aria-label="${dwg.title} Dual-Layer Drawing. Hover cursor or use arrow keys to inspect technical layer."
        >
          <!-- Outside Lens: Business Story on Warm Paper -->
          <div class="business-layer">
            <div class="dwg-layer-banner">
              <span>LAYER 01 // BUSINESS OUTCOME VIEW</span>
              <strong>${dwg.outcomeHeadline}</strong>
            </div>
            <p class="dwg-layer-desc">${dwg.businessSummary}</p>
            ${buildSchematicSvg(dwg, false)}
            <div class="dwg-callouts-row">
              ${buildCalloutsStrip(dwg, false)}
            </div>
          </div>

          <!-- Inside Lens: Technical Blueprint View (#1B3FD1) -->
          <div class="tech-layer" aria-hidden="true">
            <div class="dwg-layer-banner blueprint-banner">
              <span>LAYER 02 // BLUEPRINT TECHNICAL INTERNALS</span>
              <strong>ISOLATION · INDEXES · QUEUES · RBAC</strong>
            </div>
            <p class="dwg-layer-desc">${dwg.techSummary}</p>
            ${buildSchematicSvg(dwg, true)}
            <div class="dwg-callouts-row">
              ${buildCalloutsStrip(dwg, true)}
            </div>
          </div>

          <div class="lens-reticle" aria-hidden="true">
            <span class="reticle-tag">BUSINESS ⇄ TECH LENS</span>
          </div>
        </div>

        <!-- Proof Notes & Takeaway -->
        <div class="plate-footer-grid">
          <div class="plate-bullets-col">
            <div class="dwg-metrics-strip">${metricsHtml}</div>
            <ul class="plate-bullets">${bulletsHtml}</ul>
            ${linksHtml}
          </div>

          <aside class="plate-caption-strip">
            <span class="mono-tiny vermilion">ARCHITECT’S NOTE FOR THE CLIENT</span>
            <p>“${dwg.clientTakeaway}”</p>
          </aside>
        </div>
      </article>
    `;
  }).join('');

  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Selected Architectural Drawings (Proof, Not Promises)</h2>
        <p class="sheet-subtitle">
          Same diagram, two truths. Sweep the circular lens over any drawing to inspect the database locks, execution plans, and queues behind the business outcome.
        </p>
      </div>
    </div>

    <div class="drawings-stack">
      ${drawingsHtml}
    </div>
  `;

  return wrapInSheet({
    id: 'work',
    sheetNo: 'SHEET 04 / 10',
    sectionTag: '§04 ARCHITECTURAL DRAWINGS — SIGNATURE BUSINESS ⇄ TECH LENS',
    projectTitle: 'PRODUCTION CASE DRAWINGS',
    scale: 'AS NOTED',
    bodyHtml,
  });
}

export function initWorkSection(): void {
  if (qualityManager.getState().reducedMotion) return;

  gsap.from('.drawing-plate', {
    y: 34,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.14,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.drawings-stack',
      start: 'top 82%',
    },
  });
}

