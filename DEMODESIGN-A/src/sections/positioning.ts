import { MANIFESTO_COPY } from '../content/content';
import { gsap, SplitText } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';
import { uiAudio } from '../core/sound';

export function renderPositioning(): string {
  const compareRows = MANIFESTO_COPY.comparisons
    .map(
      (row, idx) => `
      <div class="compare-curtain-row" tabindex="0">
        <span class="compare-row-bg" aria-hidden="true"></span>
        <span class="compare-idx">0${idx + 1}</span>
        <div class="compare-col dev-col">
          <small>TYPICAL BACKEND DEV ASKS</small>
          <p>${row.dev}</p>
        </div>
        <div class="compare-col arch-col">
          <small>I ASK AS YOUR ARCHITECT</small>
          <p>${row.architect}</p>
        </div>
      </div>
    `
    )
    .join('');

  const principlesHtml = MANIFESTO_COPY.principles
    .map(
      (p) => `
      <article class="principle-cell">
        <div class="principle-rule"></div>
        <span class="principle-no">${p.no}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </article>
    `
    )
    .join('');

  return `
    <section id="positioning" class="k-section theme-light" aria-labelledby="pos-heading">
      <div class="k-container">
        <div class="section-head-row">
          <span class="section-kicker dark">${MANIFESTO_COPY.kicker}</span>
          <span class="section-subkicker">WHY “BACKEND DEVELOPER” IS THE WRONG LABEL</span>
        </div>

        <h2 id="pos-heading" class="sr-only">Positioning and Engineering Manifesto</h2>

        <!-- Scroll-Scrubbed Highlight Reading (animmasterlib.dev signature) -->
        <p class="scrub-manifesto-text" id="scrub-manifesto" data-cursor-blend>
          ${MANIFESTO_COPY.scrubParagraph}
        </p>

        <blockquote class="advantage-callout">
          <p>${MANIFESTO_COPY.advantageNote}</p>
        </blockquote>

        <!-- Interactive Hover-Curtain Comparison Table -->
        <div class="compare-table-wrap" aria-label="Backend Developer versus Business Backend Architect">
          <div class="compare-table-head">
            <span>#</span>
            <span>SHORT-TERM TICKET THINKING</span>
            <span>END-TO-END BUSINESS ARCHITECTURE</span>
          </div>
          <div class="compare-rows-list">
            ${compareRows}
          </div>
        </div>

        <!-- Five Core Principles -->
        <div class="principles-block">
          <div class="principles-header">
            <span class="section-kicker dark">HOW I THINK // FIVE PRINCIPLES</span>
          </div>
          <div class="principles-grid">
            ${principlesHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initPositioningAnimations(): void {
  const reduced = motionPrefs.getState().reducedMotion;
  const manifestoEl = document.getElementById('scrub-manifesto');

  document.querySelectorAll<HTMLElement>('.compare-curtain-row').forEach((row) => {
    row.addEventListener('pointerenter', () => uiAudio.tick(490));
  });

  if (reduced) return;

  if (manifestoEl) {
    const split = new SplitText(manifestoEl, { type: 'words' });
    gsap.set(split.words, { opacity: 0.18, willChange: 'opacity' });

    gsap.to(split.words, {
      opacity: 1,
      stagger: 0.04,
      ease: 'none',
      scrollTrigger: {
        trigger: manifestoEl,
        start: 'top 82%',
        end: 'bottom 48%',
        scrub: 0.4,
      },
    });
  }

  gsap.from('.principle-rule', {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 0.85,
    stagger: 0.09,
    ease: 'kineticOut',
    scrollTrigger: {
      trigger: '.principles-grid',
      start: 'top 82%',
    },
  });

  gsap.from('.principle-cell', {
    y: 26,
    autoAlpha: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.principles-grid',
      start: 'top 82%',
    },
  });
}
