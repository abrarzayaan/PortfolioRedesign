import { POSITIONING_COPY } from '../content/content';
import { gsap } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';

export function renderPositioning(): string {
  const factsHtml = POSITIONING_COPY.fastFacts
    .map(
      (f) => `
      <div class="fast-fact-card">
        <strong>${f.val}</strong>
        <span>${f.label}</span>
      </div>
    `
    )
    .join('');

  const compareHtml = POSITIONING_COPY.comparisons
    .map(
      (c) => `
      <div class="edge-compare-card">
        <div class="ec-dev">
          <span>ENDPOINT THINKING</span>
          <p>${c.dev}</p>
        </div>
        <div class="ec-me">
          <span>JOURNEY ARCHITECT THINKING</span>
          <p>${c.me}</p>
        </div>
      </div>
    `
    )
    .join('');

  const principlesHtml = POSITIONING_COPY.principles
    .map((p) => `<li class="edge-principle-pill">${p}</li>`)
    .join('');

  return `
    <section id="positioning" class="stage-section stage-tomato" aria-labelledby="edge-heading">
      <div class="container">
        <div class="stop-header-row centered">
          <span class="stop-pill dark">STOP 01 // EDGE GATEWAY — IDENTITY</span>
        </div>

        <h2 id="edge-heading" class="edge-giant-h2">
          ${POSITIONING_COPY.headline}
        </h2>
        <p class="edge-subcopy">${POSITIONING_COPY.sub}</p>

        <div class="fast-facts-grid">
          ${factsHtml}
        </div>

        <div class="edge-compare-grid">
          ${compareHtml}
        </div>

        <ul class="edge-principles-bar" aria-label="Five Engineering Principles">
          ${principlesHtml}
        </ul>
      </div>
    </section>
  `;
}

export function initPositioningAnimations(): void {
  if (qualityManager.getState().reducedMotion) return;

  gsap.from('.fast-fact-card', {
    y: 32,
    autoAlpha: 0,
    duration: 0.65,
    stagger: 0.1,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: '.fast-facts-grid',
      start: 'top 84%',
    },
  });

  gsap.from('.edge-compare-card', {
    x: (i) => (i % 2 === 0 ? -32 : 32),
    autoAlpha: 0,
    duration: 0.65,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.edge-compare-grid',
      start: 'top 84%',
    },
  });
}

