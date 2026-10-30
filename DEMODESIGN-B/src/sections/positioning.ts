import { POSITIONING_SPEC } from '../content/content';
import { gsap, prepareStrokeDraw } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { wrapInSheet } from '../core/sheet-frame';

export function renderPositioning(): string {
  const rowsHtml = POSITIONING_SPEC.comparisons
    .map(
      (c, idx) => `
      <div class="pos-compare-row">
        <span class="row-idx">0${idx + 1}</span>
        <div class="pos-dev-col">
          <span class="mono-tiny">A BACKEND DEVELOPER USUALLY ASKS</span>
          <p>${c.dev}</p>
        </div>
        <div class="pos-arch-col">
          <span class="mono-tiny vermilion">I ASK</span>
          <p>${c.arch}</p>
        </div>
      </div>
    `
    )
    .join('');

  const principlesHtml = POSITIONING_SPEC.principles
    .map(
      (p) => `
      <article class="principle-spec-box">
        <span class="spec-code">${p.no}</span>
        <h3>${p.title}</h3>
        <p>${p.body}</p>
      </article>
    `
    )
    .join('');

  const bodyHtml = `
    <div class="pos-editorial-layout">
      <aside class="pos-sticky-col">
        <span class="sticky-sec-no">§02</span>
        <h2 class="sticky-sec-title">Positioning &amp; Five Principles</h2>
        <p class="sticky-sec-note">
          Why “backend developer” is the wrong specification label for the work I deliver.
        </p>
      </aside>

      <div class="pos-main-col">
        <div class="strikethrough-headline">
          <span class="struck-wrap">
            not just a backend developer
            <svg class="strike-svg" viewBox="0 0 420 22" preserveAspectRatio="none" aria-hidden="true">
              <path id="pos-strike-path" d="M4 15 Q 210 6, 416 13" fill="none" stroke="#FF4D1C" stroke-width="3.5" stroke-linecap="round" />
            </svg>
          </span>
          <span class="handwritten-correction" id="pos-correction">
            → an end-to-end business backend architect.
          </span>
        </div>

        <div class="lead-contrast-pair">
          <p class="lead-typical">${POSITIONING_SPEC.leadTypical}</p>
          <p class="lead-architect">${POSITIONING_SPEC.leadArchitect}</p>
        </div>

        <p class="pos-editorial-para" id="pos-scrub-para">
          ${POSITIONING_SPEC.manifestoBody}
        </p>

        <blockquote class="pos-enterprise-callout">
          <span class="mono-tiny vermilion">THREE YEARS IN ENTERPRISE PRODUCTION DATA</span>
          <p>${POSITIONING_SPEC.enterpriseAdvantage}</p>
        </blockquote>

        <div class="pos-compare-table" role="region" aria-label="Mindset Comparison">
          ${rowsHtml}
        </div>

        <div class="principles-section">
          <div class="principles-head">
            <span class="mono-tiny">ARCHITECTURAL AXIOMS // 01–05</span>
            <strong>Five non-negotiable engineering principles</strong>
          </div>
          <div class="principles-spec-grid">
            ${principlesHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  return wrapInSheet({
    id: 'positioning',
    sheetNo: 'SHEET 02 / 10',
    sectionTag: '§02 IDENTITY & ARCHITECTURAL PRINCIPLES',
    projectTitle: 'SYSTEMS THINKING SPECIFICATION',
    scale: 'NTS',
    bodyHtml,
  });
}

export function initPositioningSection(): void {
  const q = qualityManager.getState();
  const strikePath = document.getElementById('pos-strike-path') as SVGPathElement | null;
  const correction = document.getElementById('pos-correction');

  if (q.reducedMotion) return;

  if (strikePath) {
    prepareStrokeDraw(strikePath);
    gsap.to(strikePath, {
      strokeDashoffset: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.strikethrough-headline',
        start: 'top 78%',
      },
    });
  }

  if (correction) {
    gsap.from(correction, {
      y: 12,
      autoAlpha: 0,
      duration: 0.7,
      delay: 0.25,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.strikethrough-headline',
        start: 'top 78%',
      },
    });
  }

  gsap.from('.pos-compare-row', {
    y: 20,
    autoAlpha: 0,
    duration: 0.55,
    stagger: 0.07,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.pos-compare-table',
      start: 'top 82%',
    },
  });
}

