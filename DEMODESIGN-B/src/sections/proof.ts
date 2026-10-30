import { DIMENSION_SPECS } from '../content/content';
import { gsap, prepareStrokeDraw } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { wrapInSheet } from '../core/sheet-frame';

export function renderProof(): string {
  const dimsHtml = DIMENSION_SPECS.map(
    (d, idx) => `
      <article class="dimension-card" data-dim-idx="${idx}">
        <div class="dim-line-row" aria-hidden="true">
          <svg viewBox="0 0 140 24" class="dim-wing left-wing" preserveAspectRatio="none">
            <line x1="2" y1="3" x2="2" y2="21" stroke="#101010" stroke-width="1.5" />
            <line class="dim-extend" x1="138" y1="12" x2="8" y2="12" stroke="#101010" stroke-width="1.3" />
            <polygon class="dim-arrow" points="4,12 13,8 13,16" fill="#FF4D1C" />
          </svg>

          <div class="dim-number-wrap">
            <span
              class="dim-counter"
              data-target="${d.value}"
              data-decimals="${d.decimals}"
            >${d.value}</span><span class="dim-suffix">${d.suffix}</span>
          </div>

          <svg viewBox="0 0 140 24" class="dim-wing right-wing" preserveAspectRatio="none">
            <line x1="138" y1="3" x2="138" y2="21" stroke="#101010" stroke-width="1.5" />
            <line class="dim-extend" x1="2" y1="12" x2="132" y2="12" stroke="#101010" stroke-width="1.3" />
            <polygon class="dim-arrow" points="136,12 127,8 127,16" fill="#FF4D1C" />
          </svg>
        </div>

        <h3 class="dim-caption">${d.caption}</h3>
        <span class="dim-sub">${d.subcaption}</span>
        <p class="dim-method">${d.method}</p>
      </article>
    `
  ).join('');

  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Measured System Dimensions</h2>
        <p class="sheet-subtitle">
          Every dimension below is a verified production measurement from README.md — zero synthetic benchmarks.
        </p>
      </div>
    </div>

    <div class="dimensions-plan-grid">
      ${dimsHtml}
    </div>
  `;

  return wrapInSheet({
    id: 'numbers',
    sheetNo: 'SHEET 05 / 10',
    sectionTag: '§05 MEASURED DIMENSIONS & TOLERANCES',
    projectTitle: 'PRODUCTION SLA DIMENSIONS',
    scale: '1 : 1',
    bodyHtml,
  });
}

export function initProofSection(): void {
  const q = qualityManager.getState();
  const cards = document.querySelectorAll<HTMLElement>('.dimension-card');

  cards.forEach((card) => {
    const counter = card.querySelector<HTMLElement>('.dim-counter');
    const lines = card.querySelectorAll<SVGLineElement>('.dim-extend');
    const arrows = card.querySelectorAll<SVGPolygonElement>('.dim-arrow');
    if (!counter) return;

    const target = Number(counter.getAttribute('data-target') || '0');
    const decimals = Number(counter.getAttribute('data-decimals') || '0');

    if (q.reducedMotion) {
      counter.textContent = target.toFixed(decimals);
      return;
    }

    lines.forEach((l) => prepareStrokeDraw(l));
    counter.textContent = (0).toFixed(decimals);
    const proxy = { v: 0 };

    gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 86%',
        once: true,
      },
    })
      .to(lines, {
        strokeDashoffset: 0,
        duration: 0.75,
        ease: 'power3.out',
      })
      .to(
        proxy,
        {
          v: target,
          duration: 1.25,
          ease: 'power3.out',
          onUpdate: () => {
            counter.textContent = proxy.v.toFixed(decimals);
          },
        },
        0.05
      )
      .fromTo(
        arrows,
        { scale: 1.5, transformOrigin: 'center center' },
        { scale: 1, duration: 0.45, ease: 'back.out(2)' },
        0.55
      );
  });
}

