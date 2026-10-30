import { DATABASE_METRICS } from '../content/content';
import { fireConfetti } from '../core/confetti';
import { gsap } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { journeySound } from '../core/sound';

export function renderProof(): string {
  const metricsHtml = DATABASE_METRICS.map(
    (m) => `
      <article class="db-metric-card">
        <div class="db-num-line">
          <span class="db-counter" data-target="${m.val}" data-dec="${m.dec}">${m.val}</span><span class="db-suf">${m.suf}</span>
        </div>
        <h3>${m.label}</h3>
        <p>${m.detail}</p>
      </article>
    `
  ).join('');

  return `
    <section id="numbers" class="stage-section stage-violet" aria-labelledby="db-heading">
      <div class="container">
        <div class="stop-header-row">
          <span class="stop-pill light">STOP 05 // DATABASE — NUMBERS &amp; LIVE QUERY RACE</span>
        </div>

        <h2 id="db-heading" class="stage-h2 light">
          Numbers you can defend. Speed you can feel.
        </h2>

        <div class="db-split-layout">
          <!-- Left: 8 Real Production Metrics -->
          <div class="db-metrics-grid">
            ${metricsHtml}
          </div>

          <!-- Right: Interactive Query Race (Explicitly marked ILLUSTRATIVE) -->
          <div class="query-race-card" id="query-race-card">
            <div class="race-header">
              <div>
                <span class="race-tag">INTERACTIVE BENCHMARK // ILLUSTRATIVE</span>
                <h3>SQL Execution Race: Before vs After</h3>
              </div>
              <button type="button" id="run-race-btn" class="race-run-btn" data-cursor="START RACE">
                ▶ RUN QUERY
              </button>
            </div>

            <p class="race-honesty-note">
              Illustrative race visualising the real <strong>45% latency reduction (under 500 ms)</strong> achieved across 300+ refactored production queries.
            </p>

            <div class="race-lanes">
              <div class="race-lane">
                <div class="lane-meta">
                  <span>BEFORE (Unindexed Full Scan — Illustrative)</span>
                  <strong id="race-before-ms">0 ms</strong>
                </div>
                <div class="lane-track">
                  <div id="race-before-bar" class="lane-bar before-bar"></div>
                </div>
              </div>

              <div class="race-lane">
                <div class="lane-meta">
                  <span class="lime-txt">AFTER (Tuned Execution Plan + Composite Index)</span>
                  <strong id="race-after-ms" class="lime-txt">0 ms</strong>
                </div>
                <div class="lane-track">
                  <div id="race-after-bar" class="lane-bar after-bar"></div>
                </div>
              </div>
            </div>

            <div class="race-result-banner" id="race-result-banner">
              Press <strong>▶ RUN QUERY</strong> to race both execution plans.
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initProofAndRace(): void {
  const q = qualityManager.getState();

  // Animate production metric counters on scroll
  document.querySelectorAll<HTMLElement>('.db-counter').forEach((el) => {
    const target = Number(el.getAttribute('data-target') || '0');
    const dec = Number(el.getAttribute('data-dec') || '0');
    if (q.reducedMotion) {
      el.textContent = target.toFixed(dec);
      return;
    }

    const proxy = { v: 0 };
    el.textContent = (0).toFixed(dec);
    gsap.to(proxy, {
      v: target,
      duration: 1.25,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 86%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = proxy.v.toFixed(dec);
      },
    });
  });

  // Interactive Query Race logic
  const runBtn = document.getElementById('run-race-btn') as HTMLButtonElement | null;
  const beforeBar = document.getElementById('race-before-bar');
  const afterBar = document.getElementById('race-after-bar');
  const beforeMs = document.getElementById('race-before-ms');
  const afterMs = document.getElementById('race-after-ms');
  const banner = document.getElementById('race-result-banner');
  const card = document.getElementById('query-race-card');

  let running = false;

  runBtn?.addEventListener('click', () => {
    if (running || !beforeBar || !afterBar || !beforeMs || !afterMs || !banner) return;
    running = true;
    runBtn.disabled = true;
    journeySound.pop(540);

    // 480ms is 45.1% faster than 875ms (strictly matching "45% faster, under 500ms")
    const afterTargetMs = 480;
    const beforeTargetMs = 875;

    gsap.set([beforeBar, afterBar], { scaleX: 0 });
    beforeMs.textContent = '0 ms';
    afterMs.textContent = '0 ms';
    banner.textContent = 'Executing query plans against 1M+ records…';

    const stateAfter = { p: 0 };
    const stateBefore = { p: 0 };

    gsap.to(stateAfter, {
      p: 1,
      duration: q.reducedMotion ? 0.2 : 0.95,
      ease: 'power2.out',
      onUpdate: () => {
        afterBar.style.transform = `scaleX(${stateAfter.p})`;
        afterMs.textContent = `${Math.round(stateAfter.p * afterTargetMs)} ms (<500 ms ✔)`;
      },
      onComplete: () => {
        journeySound.win();
        fireConfetti(0.72, 0.55, 42);
        if (card && !q.reducedMotion) {
          gsap.fromTo(card, { x: -5 }, { x: 0, duration: 0.3, ease: 'elastic.out(1.4, 0.3)' });
        }
      },
    });

    gsap.to(stateBefore, {
      p: 1,
      duration: q.reducedMotion ? 0.35 : 1.72,
      ease: 'power1.inOut',
      onUpdate: () => {
        beforeBar.style.transform = `scaleX(${stateBefore.p})`;
        beforeMs.textContent = `${Math.round(stateBefore.p * beforeTargetMs)} ms`;
      },
      onComplete: () => {
        banner.innerHTML =
          '<strong>AFTER WINS BY 45% (<500 ms)!</strong> Illustrative race based on 300+ refactored production queries.';
        running = false;
        runBtn.disabled = false;
        runBtn.textContent = '↻ RACE AGAIN';
      },
    });
  });
}

