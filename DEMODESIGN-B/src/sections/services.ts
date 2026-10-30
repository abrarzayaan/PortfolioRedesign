import { SCHEDULE_ROWS, ScheduleRow } from '../content/content';
import { wrapInSheet } from '../core/sheet-frame';

function renderFixIcon(type: ScheduleRow['diagramType'], isBlueprint: boolean): string {
  const stroke = isBlueprint ? '#92B4FF' : '#101010';
  const accent = isBlueprint ? '#FFFFFF' : '#FF4D1C';

  switch (type) {
    case 'index':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><circle cx="44" cy="7" r="4" stroke="${accent}" fill="none" stroke-width="1.5"/><line x1="44" y1="11" x2="22" y2="28" stroke="${stroke}" stroke-width="1.2"/><line x1="44" y1="11" x2="66" y2="28" stroke="${stroke}" stroke-width="1.2"/><rect x="12" y="28" width="20" height="7" stroke="${accent}" fill="none"/><rect x="56" y="28" width="20" height="7" stroke="${stroke}" fill="none"/></svg>`;
    case 'schema':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><rect x="8" y="8" width="24" height="22" stroke="${stroke}" fill="none"/><rect x="56" y="8" width="24" height="22" stroke="${accent}" fill="none"/><path d="M32 19H56" stroke="${accent}" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`;
    case 'cache':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><polygon points="44,4 64,19 44,34 24,19" stroke="${accent}" fill="none" stroke-width="1.4"/><line x1="6" y1="19" x2="24" y2="19" stroke="${stroke}"/><line x1="64" y1="19" x2="82" y2="19" stroke="${stroke}"/></svg>`;
    case 'lock':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><rect x="28" y="16" width="32" height="18" stroke="${accent}" fill="none" stroke-width="1.5"/><path d="M35 16V11a9 9 0 0 1 18 0v5" stroke="${stroke}" fill="none" stroke-width="1.4"/></svg>`;
    case 'pipeline':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><circle cx="16" cy="19" r="6" stroke="${stroke}" fill="none"/><circle cx="44" cy="19" r="6" stroke="${accent}" fill="none"/><circle cx="72" cy="19" r="6" stroke="${stroke}" fill="none"/><line x1="22" y1="19" x2="38" y2="19" stroke="${accent}"/><line x1="50" y1="19" x2="66" y2="19" stroke="${accent}"/></svg>`;
    case 'bi':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><line x1="12" y1="33" x2="76" y2="33" stroke="${stroke}"/><rect x="18" y="21" width="10" height="12" stroke="${stroke}" fill="none"/><rect x="38" y="14" width="10" height="19" stroke="${stroke}" fill="none"/><rect x="58" y="6" width="10" height="27" stroke="${accent}" fill="none"/></svg>`;
    case 'rbac':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><path d="M44 4L64 11V21C64 29 54 34 44 36C34 34 24 29 24 21V11L44 4Z" stroke="${accent}" fill="none" stroke-width="1.5"/></svg>`;
    case 'queue':
      return `<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><rect x="14" y="11" width="14" height="16" stroke="${stroke}" fill="none"/><rect x="34" y="11" width="14" height="16" stroke="${accent}" fill="none"/><rect x="54" y="11" width="14" height="16" stroke="${stroke}" fill="none"/></svg>`;
  }
}

function buildScheduleRows(isTech: boolean): string {
  return SCHEDULE_ROWS.map(
    (r) => `
      <div class="sched-row">
        <div class="sched-col col-no">${r.no}</div>
        <div class="sched-col col-prob">${isTech ? r.techProblem : r.businessProblem}</div>
        <div class="sched-col col-act">${isTech ? r.techAction : r.businessAction}</div>
        <div class="sched-col col-out"><strong>${isTech ? r.techOutcome : r.businessOutcome}</strong></div>
        <div class="sched-col col-diag">${renderFixIcon(r.diagramType, isTech)}</div>
      </div>
    `
  ).join('');
}

export function renderServices(): string {
  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Schedule of Business Bottlenecks &amp; Fixes</h2>
        <p class="sheet-subtitle">
          Move your cursor across the schedule (or use arrow keys / switches) to X-ray plain business outcomes into technical database &amp; architecture specs.
        </p>
      </div>

      <div class="lens-mode-bar" role="group" aria-label="Schedule Lens Layer Mode">
        <button type="button" class="lens-switch-btn" data-lens-mode="business">Business</button>
        <button type="button" class="lens-switch-btn is-active hide-mobile-lens" data-lens-mode="lens">Cursor Lens</button>
        <button type="button" class="lens-switch-btn" data-lens-mode="tech">Blueprint Tech</button>
      </div>
    </div>

    <div
      class="lens-stage schedule-lens-stage"
      data-lens-radius="145"
      tabindex="0"
      aria-label="Architectural Problem Schedule with Business to Tech Lens"
    >
      <!-- Layer 1: Business View (Paper) -->
      <div class="business-layer">
        <div class="sched-table">
          <div class="sched-head">
            <span>NO.</span>
            <span>IF THIS SOUNDS LIKE YOUR BUSINESS</span>
            <span>WHAT I DO</span>
            <span>OUTCOME YOU SHOULD EXPECT</span>
            <span>SCHEMATIC</span>
          </div>
          ${buildScheduleRows(false)}
        </div>
      </div>

      <!-- Layer 2: Technical Blueprint View (Inside Circular Lens) -->
      <div class="tech-layer" aria-hidden="true">
        <div class="sched-table is-blueprint">
          <div class="sched-head">
            <span>NO.</span>
            <span>TECHNICAL ROOT CAUSE</span>
            <span>ARCHITECTURAL INTERVENTION</span>
            <span>PRODUCTION SLA / PROOF</span>
            <span>TOPOLOGY</span>
          </div>
          ${buildScheduleRows(true)}
        </div>
      </div>

      <div class="lens-reticle" aria-hidden="true">
        <span class="reticle-tag">TECH LENS // X-RAY</span>
      </div>
    </div>
  `;

  return wrapInSheet({
    id: 'services',
    sheetNo: 'SHEET 03 / 10',
    sectionTag: '§03 SCHEDULE OF INTERVENTIONS (LENS TEASER)',
    projectTitle: 'BOTTLENECK REMEDIATION SCHEDULE',
    scale: '1 : 50',
    bodyHtml,
  });
}

