import { EXPERIENCE_TIMELINE } from '../content/content';
import { gsap, scrambleDecode } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';

export function renderTimeline(): string {
  const rowsHtml = EXPERIENCE_TIMELINE.map(
    (item) => `
      <article class="ledger-row">
        <div class="ledger-hairline"></div>
        <div class="ledger-grid">
          <div class="ledger-left">
            <span class="ledger-period" data-period="${item.period}">${item.period}</span>
            <span class="ledger-org">${item.org}</span>
          </div>

          <div class="ledger-right">
            <h3 class="ledger-role">${item.role}</h3>
            <p class="ledger-summary">${item.summary}</p>
            <div class="ledger-badges">
              ${item.highlights.map((h) => `<span class="ledger-chip">${h}</span>`).join('')}
            </div>
          </div>
        </div>
      </article>
    `
  ).join('');

  return `
    <section id="journey" class="k-section theme-light" aria-labelledby="journey-heading">
      <div class="k-container">
        <div class="section-head-row split">
          <div>
            <span class="section-kicker dark">07 // EXPERIENCE &amp; EDUCATION</span>
            <h2 id="journey-heading" class="section-display-h2 dark" data-cursor-blend>
              Built inside real <em class="serif-accent dark-serif">enterprise</em> data.
            </h2>
          </div>
          <p class="section-lead-note">
            Three years operating where inaccurate numbers have a direct business cost — from SQL intern to System Engineer.
          </p>
        </div>

        <div class="ledger-list">
          ${rowsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initTimelineAnimations(): void {
  if (motionPrefs.getState().reducedMotion) return;

  gsap.from('.ledger-hairline', {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 0.9,
    stagger: 0.1,
    ease: 'kineticOut',
    scrollTrigger: {
      trigger: '.ledger-list',
      start: 'top 82%',
    },
  });

  document.querySelectorAll<HTMLElement>('.ledger-period').forEach((el) => {
    const finalTxt = el.getAttribute('data-period') || '';
    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 86%',
        once: true,
      },
    }).add(() => scrambleDecode(el, finalTxt, 0.55));
  });
}
