import { REVISION_HISTORY } from '../content/content';
import { gsap, prepareStrokeDraw, scrambleTo } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { wrapInSheet } from '../core/sheet-frame';

export function renderTimeline(): string {
  const rowsHtml = REVISION_HISTORY.map(
    (r) => `
      <div class="rev-row ${r.isLatest ? 'is-latest-rev' : ''}">
        ${
          r.isLatest
            ? `<svg class="rev-cloud-svg" viewBox="0 0 900 110" preserveAspectRatio="none" aria-hidden="true">
                <path
                  id="rev-cloud-path"
                  d="M12,24 Q35,4 65,18 Q98,2 132,18 Q168,2 204,18 Q242,2 280,18 Q318,2 356,18 Q394,2 432,18 Q470,2 508,18 Q546,2 584,18 Q622,2 660,18 Q698,2 736,18 Q774,2 812,18 Q852,2 886,22 Q898,55 884,88 Q850,106 812,92 Q774,106 736,92 Q698,106 660,92 Q622,106 584,92 Q546,106 508,92 Q470,106 432,92 Q394,106 356,92 Q318,106 280,92 Q242,106 204,92 Q168,106 132,92 Q98,106 65,92 Q30,106 12,86 Q2,55 12,24 Z"
                  fill="none"
                  stroke="#FF4D1C"
                  stroke-width="2"
                />
              </svg>`
            : ''
        }
        <div class="rev-col rev-code" data-rev-scramble="${r.rev}">${r.rev}</div>
        <div class="rev-col rev-date">${r.date}</div>
        <div class="rev-col rev-desc">
          <strong>${r.title} · <em>${r.org}</em></strong>
          <p>${r.description}</p>
        </div>
        <div class="rev-col rev-by">${r.by}</div>
      </div>
    `
  ).join('');

  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Revision History (Experience &amp; Education)</h2>
        <p class="sheet-subtitle">
          Career progression recorded as formal architectural drawing revisions — latest revision clouded in vermilion.
        </p>
      </div>
    </div>

    <div class="revision-schedule-table" id="revision-table">
      <div class="rev-head">
        <span>REV</span>
        <span>DATE</span>
        <span>DESCRIPTION &amp; PRODUCTION DELIVERABLES</span>
        <span>BY</span>
      </div>
      ${rowsHtml}
    </div>
  `;

  return wrapInSheet({
    id: 'journey',
    sheetNo: 'SHEET 08 / 10',
    sectionTag: '§08 REVISION LOG — EXPERIENCE & ACADEMIC THESIS',
    projectTitle: 'CAREER REVISION RECORD',
    scale: 'NTS',
    bodyHtml,
  });
}

export function initTimelineSection(): void {
  const q = qualityManager.getState();
  const cloud = document.getElementById('rev-cloud-path') as SVGPathElement | null;
  const revCodes = document.querySelectorAll<HTMLElement>('[data-rev-scramble]');

  if (q.reducedMotion) return;

  if (cloud) {
    prepareStrokeDraw(cloud);
    gsap.to(cloud, {
      strokeDashoffset: 0,
      duration: 1.35,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#revision-table',
        start: 'top 76%',
        once: true,
      },
    });
  }

  revCodes.forEach((el, idx) => {
    const txt = el.getAttribute('data-rev-scramble') || '';
    gsap.timeline({
      scrollTrigger: {
        trigger: '#revision-table',
        start: 'top 80%',
        once: true,
      },
    }).add(() => {
      scrambleTo(el, txt, 0.7, idx * 0.12);
    });
  });
}

