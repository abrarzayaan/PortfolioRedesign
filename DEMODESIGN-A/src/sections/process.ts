import { ENGAGEMENT_PHASES } from '../content/content';
import { gsap, scrambleDecode, ScrollTrigger } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';

export function renderProcess(): string {
  const stepsHtml = ENGAGEMENT_PHASES.map(
    (p, idx) => `
      <article class="process-phase-card ${idx === 0 ? 'is-active' : ''}" data-phase-idx="${idx}">
        <div class="ppc-head">
          <span class="ppc-no">${p.no}</span>
          <h3 class="ppc-title">${p.name}</h3>
        </div>
        <p class="ppc-happens">${p.happens}</p>
        <div class="ppc-deliverable">
          <span>WHAT YOU GET</span>
          <strong>${p.deliverable}</strong>
        </div>
      </article>
    `
  ).join('');

  return `
    <section id="process" class="k-section theme-dark" aria-labelledby="process-heading">
      <div class="k-container">
        <div class="process-split-grid" id="process-split-grid">
          <!-- Sticky Left Scroll-Spy Column -->
          <div class="process-sticky-col">
            <span class="section-kicker lime">06 // HOW AN ENGAGEMENT WORKS</span>
            <h2 id="process-heading" class="section-display-h2 light" data-cursor-blend>
              Six disciplined steps from <em class="serif-accent">pain</em> to proof.
            </h2>
            <p class="section-lead-note light-muted">
              No black-box engineering. Every phase ends with a tangible business artefact you can inspect and verify.
            </p>

            <div class="process-spy-hud" aria-hidden="true">
              <div class="spy-rail">
                <div class="spy-rail-fill" id="process-rail-fill"></div>
              </div>
              <div class="spy-readout">
                <span class="spy-num" id="process-spy-num">01 / 06</span>
                <strong class="spy-name" id="process-spy-name">DISCOVER</strong>
              </div>
            </div>
          </div>

          <!-- Scrolling Right Steps Column -->
          <div class="process-steps-col" id="process-steps-col">
            ${stepsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initProcessAnimations(): void {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.process-phase-card'));
  const railFill = document.getElementById('process-rail-fill');
  const spyNum = document.getElementById('process-spy-num');
  const spyName = document.getElementById('process-spy-name');
  const stepsCol = document.getElementById('process-steps-col');

  if (stepsCol && railFill && !motionPrefs.getState().reducedMotion) {
    gsap.to(railFill, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: stepsCol,
        start: 'top 65%',
        end: 'bottom 55%',
        scrub: 0.3,
      },
    });
  }

  cards.forEach((card, idx) => {
    const phase = ENGAGEMENT_PHASES[idx];
    ScrollTrigger.create({
      trigger: card,
      start: 'top 58%',
      end: 'bottom 45%',
      onEnter: () => activate(idx),
      onEnterBack: () => activate(idx),
    });

    function activate(activeIdx: number): void {
      cards.forEach((c, i) => c.classList.toggle('is-active', i === activeIdx));
      if (spyNum) spyNum.textContent = `${phase.no} / 06`;
      scrambleDecode(spyName, phase.name.toUpperCase(), 0.35);
    }
  });
}
