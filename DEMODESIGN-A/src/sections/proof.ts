import { PROOF_NUMBERS } from '../content/content';
import { gsap } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';

function buildOdometerMarkup(valueStr: string): string {
  return Array.from(valueStr)
    .map((ch) => {
      if (ch < '0' || ch > '9') {
        return `<span class="odo-static">${ch}</span>`;
      }
      const targetDigit = Number(ch);
      const stack = Array.from({ length: 10 }, (_, d) => `<span>${d}</span>`).join('');
      return `
        <span class="odo-digit-window" data-target-digit="${targetDigit}">
          <span class="odo-digit-ribbon">${stack}</span>
        </span>
      `;
    })
    .join('');
}

export function renderProof(): string {
  const cellsHtml = PROOF_NUMBERS.map(
    (m, idx) => `
      <article class="metric-bento-card spotlight-card" aria-label="${m.value}${m.suffix} ${m.label}">
        <div class="mbc-header">
          <span class="mbc-idx">METRIC 0${idx + 1}</span>
          <span class="mbc-dot" aria-hidden="true"></span>
        </div>

        <div class="mbc-number-row" aria-hidden="true">
          <span class="odo-group">${buildOdometerMarkup(m.value)}</span><span class="odo-suffix">${m.suffix}</span>
        </div>

        <h3 class="mbc-label">${m.label}</h3>
        <p class="mbc-context">${m.context}</p>
        <div class="mbc-accent-line"></div>
      </article>
    `
  ).join('');

  return `
    <section id="numbers" class="k-section theme-dark" aria-labelledby="numbers-heading">
      <div class="k-container">
        <div class="section-head-row split">
          <div>
            <span class="section-kicker lime">04 // THE NUMBERS</span>
            <h2 id="numbers-heading" class="section-display-h2 light" data-cursor-blend>
              Measured in production, <em class="serif-accent">never</em> invented.
            </h2>
          </div>
          <p class="section-lead-note light-muted">
            Every figure below comes directly from enterprise databases, automated workflows, and verified deliverables.
          </p>
        </div>

        <div class="metrics-bento-grid" id="metrics-bento-grid">
          ${cellsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initProofAnimations(): void {
  const windows = Array.from(document.querySelectorAll<HTMLElement>('.odo-digit-window'));
  const lines = document.querySelectorAll<HTMLElement>('.mbc-accent-line');
  const reduced = motionPrefs.getState().reducedMotion;

  if (reduced) {
    windows.forEach((win) => {
      const target = Number(win.getAttribute('data-target-digit') || '0');
      const ribbon = win.querySelector<HTMLElement>('.odo-digit-ribbon');
      if (ribbon) ribbon.style.transform = `translateY(-${target * 10}%)`;
    });
    return;
  }

  windows.forEach((win, i) => {
    const target = Number(win.getAttribute('data-target-digit') || '0');
    const ribbon = win.querySelector<HTMLElement>('.odo-digit-ribbon');
    if (!ribbon) return;

    gsap.set(ribbon, { yPercent: 0 });
    gsap.to(ribbon, {
      yPercent: -target * 10,
      duration: 1.15 + (i % 4) * 0.12,
      ease: 'kineticOut',
      scrollTrigger: {
        trigger: win.closest('.metric-bento-card') || win,
        start: 'top 86%',
        once: true,
      },
    });
  });

  gsap.from(lines, {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 0.85,
    stagger: 0.06,
    ease: 'kineticOut',
    scrollTrigger: {
      trigger: '#metrics-bento-grid',
      start: 'top 82%',
    },
  });
}
