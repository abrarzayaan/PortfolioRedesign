import { MATERIALS_SCHEDULE, MaterialItem } from '../content/content';
import { Flip, gsap } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { wrapInSheet } from '../core/sheet-frame';
import { draftingSound } from '../core/sound';

function renderMaterialMark(cat: MaterialItem['category']): string {
  switch (cat) {
    case 'DATA':
      return `<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><ellipse cx="16" cy="8" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`;
    case 'BACKEND':
      return `<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><polygon points="16,3 28,10 28,22 16,29 4,22 4,10" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="16" r="4" fill="none" stroke="#FF4D1C" stroke-width="1.5"/></svg>`;
    case 'PERF_ASYNC':
      return `<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><path d="M18 3L7 18h8l-1 11 11-15h-8l1-11z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`;
    case 'CONCURRENCY':
      return `<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><rect x="7" y="14" width="18" height="13" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11 14v-4a5 5 0 0 1 10 0v4" fill="none" stroke="#FF4D1C" stroke-width="1.5"/></svg>`;
    case 'BI':
      return `<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><line x1="4" y1="27" x2="28" y2="27" stroke="currentColor" stroke-width="1.5"/><rect x="7" y="17" width="4" height="10" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="14" y="12" width="4" height="15" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="21" y="6" width="4" height="21" fill="none" stroke="#FF4D1C" stroke-width="1.4"/></svg>`;
    case 'DEVOPS':
      return `<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 13l4 3-4 3M16 19h6" fill="none" stroke="#FF4D1C" stroke-width="1.5"/></svg>`;
  }
}

export function renderToolkit(): string {
  const filters = [
    { key: 'ALL', label: 'All Layers (17)' },
    { key: 'DATA', label: 'Data & DB' },
    { key: 'BACKEND', label: 'Backend & Security' },
    { key: 'PERF_ASYNC', label: 'Perf & Async' },
    { key: 'CONCURRENCY', label: 'Concurrency' },
    { key: 'BI', label: 'Analytics & BI' },
    { key: 'DEVOPS', label: 'DevOps' },
  ];

  const filterHtml = filters
    .map(
      (f, idx) => `
      <button
        type="button"
        class="mat-filter-btn ${idx === 0 ? 'is-active' : ''}"
        data-mat-filter="${f.key}"
      >${f.label}</button>
    `
    )
    .join('');

  const cellsHtml = MATERIALS_SCHEDULE.map(
    (m) => `
      <article class="mat-cell" data-mat-cat="${m.category}">
        <div class="mat-cell-top">
          <span class="mat-code">${m.code} // ${m.categoryLabel}</span>
          <span class="mat-badge ${m.status === 'PRODUCTION' ? 'is-prod' : 'is-work'}">${m.status}</span>
        </div>

        <div class="mat-icon-title">
          ${renderMaterialMark(m.category)}
          <h3>${m.name}</h3>
        </div>

        <p class="mat-note">${m.specNote}</p>
      </article>
    `
  ).join('');

  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Schedule of Architectural Materials</h2>
        <p class="sheet-subtitle">
          Production-proven technologies marked in vermilion; working-knowledge capabilities marked in ink outline. Filter layers with GSAP Flip layout transitions.
        </p>
      </div>
    </div>

    <div class="mat-filter-bar" role="tablist" aria-label="Filter toolkit by architectural layer">
      ${filterHtml}
    </div>

    <div class="materials-grid" id="materials-grid">
      ${cellsHtml}
    </div>
  `;

  return wrapInSheet({
    id: 'toolkit',
    sheetNo: 'SHEET 06 / 10',
    sectionTag: '§06 LEGEND & SCHEDULE OF MATERIALS',
    projectTitle: 'TECHNOLOGY SPECIFICATION',
    scale: '1 : 1',
    bodyHtml,
  });
}

export function initToolkitSection(): void {
  const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-mat-filter]'));
  const cells = Array.from(document.querySelectorAll<HTMLElement>('.mat-cell'));
  const q = qualityManager.getState();

  if (!q.reducedMotion) {
    gsap.from(cells, {
      scale: 0.96,
      autoAlpha: 0,
      duration: 0.5,
      stagger: { amount: 0.45, from: 'center' },
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#materials-grid',
        start: 'top 84%',
      },
    });
  }

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-mat-filter') || 'ALL';
      draftingSound.click();
      btns.forEach((b) => b.classList.toggle('is-active', b === btn));

      const state = !q.reducedMotion ? Flip.getState(cells) : null;

      cells.forEach((cell) => {
        const match = cat === 'ALL' || cell.getAttribute('data-mat-cat') === cat;
        cell.style.display = match ? '' : 'none';
      });

      if (state) {
        Flip.from(state, {
          duration: 0.48,
          ease: 'power3.out',
          scale: true,
          onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 0.32 }),
          onLeave: (els) => gsap.to(els, { autoAlpha: 0, scale: 0.92, duration: 0.22 }),
        });
      }
    });
  });
}

