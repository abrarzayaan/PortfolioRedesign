import { RECEIPT_PHASES, TERMINAL_LOGS } from '../content/content';
import { gsap, scrambleTo } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';

export function renderProcessAndLogs(): string {
  const receiptRows = RECEIPT_PHASES.map(
    (p) => `
      <div class="receipt-item">
        <div class="r-line-top">
          <strong class="r-step" data-receipt-scramble="PHASE ${p.step} // ${p.name}">PHASE ${p.step} // ${p.name}</strong>
          <span class="r-dots"></span>
          <span class="r-ok">INCLUDED</span>
        </div>
        <p class="r-what">${p.what}</p>
        <p class="r-get">DELIVERABLE → <strong>${p.get}</strong></p>
      </div>
    `
  ).join('');

  const logsHtml = TERMINAL_LOGS.map(
    (l) => `
      <div class="term-log-row">
        <span class="log-ts">${l.ts}</span>
        <span class="log-lvl lvl-${l.level.toLowerCase()}">${l.level}</span>
        <div class="log-body">
          <strong>${l.msg}</strong>
          <p>${l.sub}</p>
        </div>
      </div>
    `
  ).join('');

  // Generate barcode bars
  const bars = [3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4, 2, 1, 3, 2, 1, 4, 2, 3]
    .map((w, i) => `<rect x="${12 + i * 11}" y="6" width="${w * 1.8}" height="38" fill="#0B0B0F" />`)
    .join('');

  return `
    <section id="process" class="stage-section stage-paper" aria-labelledby="receipt-heading">
      <div class="container">
        <div class="stop-header-row">
          <span class="stop-pill dark">STOP 07 // PRINTED REPORT &amp; SYSTEM LOG</span>
        </div>

        <div class="report-log-grid">
          <!-- Left: C-S7 Thermal Printed Engagement Receipt -->
          <div class="printer-assembly">
            <h2 id="receipt-heading" class="stage-h2 dark">
              How an engagement prints out.
            </h2>
            <div class="printer-slot" aria-hidden="true">
              <div class="printer-slot-lip"></div>
            </div>

            <div class="thermal-receipt" id="thermal-receipt">
              <div class="receipt-head">
                <strong>ABRAR ZAHIN // ARCHITECTURE RECEIPT</strong>
                <span>ORDER #001 · DHAKA, BD · 6-PHASE SLA</span>
              </div>

              <div class="receipt-items">
                ${receiptRows}
              </div>

              <div class="receipt-barcode-box">
                <svg viewBox="0 0 264 52" class="barcode-svg" aria-hidden="true">
                  ${bars}
                </svg>
                <span>VERIFIED BEFORE/AFTER EVIDENCE · 99.8% ACCURACY</span>
              </div>

              <!-- Jagged Sawtooth Thermal Tear Edge -->
              <svg class="receipt-jagged-edge" viewBox="0 0 400 16" preserveAspectRatio="none" aria-hidden="true">
                <polygon
                  fill="#FFFFFF"
                  points="0,0 16,16 32,0 48,16 64,0 80,16 96,0 112,16 128,0 144,16 160,0 176,16 192,0 208,16 224,0 240,16 256,0 272,16 288,0 304,16 320,0 336,16 352,0 368,16 384,0 400,16 400,0"
                />
              </svg>
            </div>
          </div>

          <!-- Right: C-S8 Terminal Experience & Education Log -->
          <div class="terminal-log-column" id="journey">
            <h2 class="stage-h2 dark">
              Production runtime log.
            </h2>

            <div class="terminal-window" role="region" aria-label="Experience and Education System Log">
              <div class="term-titlebar">
                <div class="term-dots" aria-hidden="true"><i></i><i></i><i></i></div>
                <span>az-kernel@dhaka:~/career.log</span>
              </div>

              <div class="term-console" id="term-console">
                ${logsHtml}
                <div class="term-prompt-line">
                  <span>$ status --current</span>
                  <strong class="term-ready">ONLINE · READY FOR ARCHITECTURE ENGAGEMENTS<i class="blink-cursor">_</i></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initProcessAndLogs(): void {
  const q = qualityManager.getState();
  const receipt = document.getElementById('thermal-receipt');
  const scrambles = document.querySelectorAll<HTMLElement>('[data-receipt-scramble]');
  const logRows = document.querySelectorAll<HTMLElement>('.term-log-row');

  if (q.reducedMotion) return;

  if (receipt) {
    gsap.from(receipt, {
      y: -48,
      autoAlpha: 0.2,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: receipt,
        start: 'top 82%',
      },
    });
  }

  scrambles.forEach((el, idx) => {
    const txt = el.getAttribute('data-receipt-scramble') || '';
    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 86%',
        once: true,
      },
    }).add(() => {
      scrambleTo(el, txt, 0.55, idx * 0.06);
    });
  });

  gsap.from(logRows, {
    x: -18,
    autoAlpha: 0,
    duration: 0.55,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#term-console',
      start: 'top 82%',
    },
  });
}

