import { BUSINESS_PROBLEMS } from '../content/content';
import { gsap } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';

export function renderServices(): string {
  const cardsHtml = BUSINESS_PROBLEMS.map(
    (item, idx) => `
      <article
        class="stack-problem-card spotlight-card"
        style="--stack-index: ${idx};"
        aria-label="Problem ${item.no}: ${item.symptom}"
      >
        <div class="spc-top">
          <div class="spc-id-group">
            <span class="spc-no">PROBLEM ${item.no} / 08</span>
            <span class="spc-tag">${item.tag}</span>
          </div>
          <span class="spc-kpi-pill">${item.highlightMetric}</span>
        </div>

        <h3 class="spc-symptom" data-cursor-blend>${item.symptom}</h3>

        <div class="spc-columns">
          <div class="spc-col">
            <span class="spc-col-label">WHAT I DO</span>
            <p>${item.action}</p>
          </div>
          <div class="spc-col outcome-col">
            <span class="spc-col-label">OUTCOME YOU SHOULD EXPECT</span>
            <p>${item.outcome}</p>
          </div>
        </div>
      </article>
    `
  ).join('');

  return `
    <section id="services" class="k-section theme-dark" aria-labelledby="services-heading">
      <div class="k-container">
        <div class="section-head-row split">
          <div>
            <span class="section-kicker lime">02 // WHAT I DO FOR YOUR BUSINESS</span>
            <h2 id="services-heading" class="section-display-h2 light" data-cursor-blend>
              Eight bottlenecks I turn into <em class="serif-accent">growth.</em>
            </h2>
          </div>
          <p class="section-lead-note light-muted">
            Architecture problems often wear a “bug” costume. Scroll through how I diagnose and eliminate each one end-to-end.
          </p>
        </div>

        <div class="stack-cards-deck" id="stack-cards-deck">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initServicesAnimations(): void {
  if (motionPrefs.getState().reducedMotion) return;

  const cards = Array.from(document.querySelectorAll<HTMLElement>('.stack-problem-card'));
  const mm = gsap.matchMedia();

  // Desktop sticky scale-stacking depth (smooth damped scrub + GPU force3D)
  mm.add('(min-width: 860px) and (min-height: 640px)', () => {
    const tweens = cards.slice(0, -1).map((card, i) => {
      const nextCard = cards[i + 1];
      return gsap.to(card, {
        scale: 0.955,
        opacity: 0.54,
        force3D: true,
        ease: 'none',
        scrollTrigger: {
          trigger: nextCard,
          start: 'top 82%',
          end: 'top 22%',
          scrub: 0.35,
        },
      });
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
      gsap.set(cards, { clearProps: 'transform,opacity' });
    };
  });

  // Mobile & short-viewport clean entrance reveal
  mm.add('(max-width: 859px), (max-height: 639px)', () => {
    const tweens = cards.map((card) =>
      gsap.from(card, {
        y: 26,
        autoAlpha: 0,
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      })
    );

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  });
}
