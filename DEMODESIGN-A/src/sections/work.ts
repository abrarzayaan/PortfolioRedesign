import { CaseStudyItem, SELECTED_CASES } from '../content/content';
import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';
import { uiAudio } from '../core/sound';

function renderPreviewSvg(idx: number): string {
  if (idx === 0) {
    return `
      <svg viewBox="0 0 280 96" class="whp-svg" aria-hidden="true">
        <rect x="8" y="24" width="66" height="48" rx="8" fill="#18181F" stroke="#3F3F4E" />
        <text x="41" y="45" text-anchor="middle" fill="#A1A1AA" font-size="8" font-family="JetBrains Mono">1M+ ROWS</text>
        <text x="41" y="58" text-anchor="middle" fill="#FAFAFA" font-size="9" font-family="JetBrains Mono">ORA / PG</text>
        <path d="M74 48 H 106" stroke="#C6FF3D" stroke-width="2" stroke-dasharray="4 3" />
        <rect x="106" y="24" width="68" height="48" rx="8" fill="#18181F" stroke="#C6FF3D" />
        <text x="140" y="45" text-anchor="middle" fill="#C6FF3D" font-size="8" font-family="JetBrains Mono">99.8% SQL</text>
        <text x="140" y="58" text-anchor="middle" fill="#FAFAFA" font-size="9" font-family="JetBrains Mono">VALIDATOR</text>
        <path d="M174 48 H 206" stroke="#C6FF3D" stroke-width="2" />
        <rect x="206" y="24" width="66" height="48" rx="8" fill="#C6FF3D" />
        <text x="239" y="46" text-anchor="middle" fill="#09090B" font-weight="700" font-size="10" font-family="JetBrains Mono">&lt;500ms</text>
        <text x="239" y="60" text-anchor="middle" fill="#09090B" font-size="8" font-family="JetBrains Mono">45% FASTER</text>
      </svg>
    `;
  }
  if (idx === 1) {
    return `
      <svg viewBox="0 0 280 96" class="whp-svg" aria-hidden="true">
        <rect x="8" y="18" width="64" height="60" rx="8" fill="#18181F" stroke="#3F3F4E" />
        <text x="40" y="44" text-anchor="middle" fill="#FAFAFA" font-size="8.5" font-family="JetBrains Mono">4-ROLE</text>
        <text x="40" y="57" text-anchor="middle" fill="#C6FF3D" font-size="8.5" font-family="JetBrains Mono">JWT+RBAC</text>
        <path d="M72 48 H 104" stroke="#C6FF3D" stroke-width="2" />
        <rect x="104" y="18" width="72" height="60" rx="8" fill="#18181F" stroke="#C6FF3D" />
        <text x="140" y="44" text-anchor="middle" fill="#C6FF3D" font-size="8.5" font-family="JetBrains Mono">ROW LOCK</text>
        <text x="140" y="58" text-anchor="middle" fill="#FAFAFA" font-size="8" font-family="JetBrains Mono">0 OVERSELL</text>
        <path d="M176 48 H 206" stroke="#C6FF3D" stroke-width="2" stroke-dasharray="4 3" />
        <rect x="206" y="18" width="66" height="60" rx="8" fill="#18181F" stroke="#3F3F4E" />
        <text x="239" y="44" text-anchor="middle" fill="#FAFAFA" font-size="8.5" font-family="JetBrains Mono">CELERY</text>
        <text x="239" y="58" text-anchor="middle" fill="#A1A1AA" font-size="8" font-family="JetBrains Mono">+ REDIS</text>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 280 96" class="whp-svg" aria-hidden="true">
      <rect x="12" y="56" width="28" height="26" rx="4" fill="#272732" />
      <rect x="52" y="42" width="28" height="40" rx="4" fill="#3F3F50" />
      <rect x="92" y="24" width="28" height="58" rx="4" fill="#C6FF3D" />
      <path d="M140 68 C 175 62, 205 38, 258 20" fill="none" stroke="#C6FF3D" stroke-width="3" stroke-linecap="round" />
      <circle cx="258" cy="20" r="5" fill="#C6FF3D" />
      <text x="205" y="74" text-anchor="middle" fill="#FAFAFA" font-size="9" font-family="JetBrains Mono">100% INTEGRITY</text>
    </svg>
  `;
}

function renderFlowSteps(steps: string[], isAfter: boolean): string {
  return steps
    .map(
      (s, i) => `
      <span class="case-flow-chip ${isAfter ? 'after' : 'before'}">${s}</span>${
        i < steps.length - 1 ? '<span class="case-flow-arrow">→</span>' : ''
      }
    `
    )
    .join('');
}

function renderCaseRow(cs: CaseStudyItem, idx: number): string {
  const isOpen = idx === 0;
  const metricsHtml = cs.metrics
    .map(
      (m) => `
      <div class="case-metric-box">
        <strong>${m.val}</strong>
        <span>${m.label}</span>
      </div>
    `
    )
    .join('');

  const bulletsHtml = cs.bullets.map((b) => `<li>${b}</li>`).join('');
  const stackHtml = cs.stack.map((t) => `<span class="case-stack-pill">${t}</span>`).join('');
  const linksHtml = (cs.links || [])
    .map(
      (l) =>
        `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="case-ext-btn" data-magnetic="0.18">${l.label} ↗</a>`
    )
    .join('');

  return `
    <article class="case-index-item ${isOpen ? 'is-expanded' : ''}" data-case-idx="${idx}">
      <button
        type="button"
        class="case-index-trigger"
        aria-expanded="${isOpen}"
        aria-controls="case-panel-${cs.id}"
        data-cursor="TOGGLE PROOF"
      >
        <span class="case-row-num">${cs.index}</span>
        <div class="case-row-titles">
          <h3 class="case-row-h3">${cs.title}</h3>
          <span class="case-row-sub">${cs.subtitle}</span>
        </div>
        <div class="case-row-right">
          <span class="case-row-kpi">${cs.headlineKpi}</span>
          <span class="case-toggle-icon" aria-hidden="true">+</span>
        </div>
      </button>

      <div
        id="case-panel-${cs.id}"
        class="case-expand-panel"
        style="${isOpen ? 'height: auto; opacity: 1;' : 'height: 0px; opacity: 0;'}"
      >
        <div class="case-panel-inner">
          <p class="case-role-meta">${cs.roleAndPeriod}</p>

          <!-- Inline Schematic for Tablet & Mobile (<1024px) -->
          <div class="case-inline-schematic">
            ${renderPreviewSvg(idx)}
          </div>

          <div class="case-metrics-strip">
            ${metricsHtml}
          </div>

          <!-- Interactive Before vs After Data-Flow Toggle -->
          <div class="case-flow-switcher" data-flow-box>
            <div class="cfs-header">
              <span class="cfs-label">SYSTEM DATA PATH</span>
              <div class="cfs-tabs" role="group" aria-label="Before and after architecture flow">
                <button type="button" class="cfs-btn" data-flow-mode="before">Before (Fragile)</button>
                <button type="button" class="cfs-btn is-active" data-flow-mode="after">After (Architected)</button>
              </div>
            </div>
            <div class="cfs-track" data-flow-before hidden>
              ${renderFlowSteps(cs.beforeFlow, false)}
            </div>
            <div class="cfs-track" data-flow-after>
              ${renderFlowSteps(cs.afterFlow, true)}
            </div>
          </div>

          <ul class="case-bullet-list">
            ${bulletsHtml}
          </ul>

          <blockquote class="case-takeaway-box">
            <span>WHAT THIS MEANS FOR YOUR BUSINESS</span>
            <p>“${cs.clientTakeaway}”</p>
          </blockquote>

          <div class="case-bottom-bar">
            <div class="case-stack-wrap">${stackHtml}</div>
            ${linksHtml ? `<div class="case-links-wrap">${linksHtml}</div>` : ''}
          </div>
        </div>
      </div>
    </article>
  `;
}

export function renderWork(): string {
  return `
    <section id="work" class="k-section theme-light" aria-labelledby="work-heading">
      <div class="k-container">
        <div class="section-head-row split">
          <div>
            <span class="section-kicker dark">03 // PROOF, NOT PROMISES</span>
            <h2 id="work-heading" class="section-display-h2 dark" data-cursor-blend>
              Selected production <em class="serif-accent dark-serif">systems.</em>
            </h2>
          </div>
          <p class="section-lead-note">
            Hover any row to preview its architecture schematic, or click to read the full verified case proof.
          </p>
        </div>

        <div class="case-index-list" id="case-index-list">
          ${SELECTED_CASES.map((cs, i) => renderCaseRow(cs, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initWorkInteractions(): void {
  const items = Array.from(document.querySelectorAll<HTMLElement>('.case-index-item'));
  const previewCard = document.getElementById('work-hover-preview');
  const whpIndex = document.getElementById('whp-index');
  const whpKpi = document.getElementById('whp-kpi');
  const whpDiagram = document.getElementById('whp-diagram');
  const whpCaption = document.getElementById('whp-caption');
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  // Viewport-clamped 120fps Floating Hover Preview Card (desktop >=1024px)
  if (previewCard && !isCoarse) {
    const xTo = gsap.quickTo(previewCard, 'x', { duration: 0.28, ease: 'power3.out' });
    const yTo = gsap.quickTo(previewCard, 'y', { duration: 0.28, ease: 'power3.out' });
    const rotTo = gsap.quickTo(previewCard, 'rotation', { duration: 0.32, ease: 'power3.out' });
    let lastX = 0;

    const hidePreview = () => {
      previewCard.classList.remove('is-active');
      rotTo(0);
    };

    window.addEventListener('scroll', hidePreview, { passive: true });

    items.forEach((item, idx) => {
      const trigger = item.querySelector<HTMLElement>('.case-index-trigger');
      if (!trigger) return;

      trigger.addEventListener('pointerenter', (e) => {
        if (motionPrefs.getState().reducedMotion || window.innerWidth < 1024) return;
        const cs = SELECTED_CASES[idx];
        if (whpIndex) whpIndex.textContent = `CASE ${cs.index}`;
        if (whpKpi) whpKpi.textContent = cs.headlineKpi;
        if (whpDiagram) whpDiagram.innerHTML = renderPreviewSvg(idx);
        if (whpCaption) whpCaption.textContent = cs.previewCaption;

        const clampedX = Math.min(window.innerWidth - 336, Math.max(16, e.clientX + 26));
        const clampedY = Math.min(window.innerHeight - 230, Math.max(76, e.clientY - 88));
        gsap.set(previewCard, { x: clampedX, y: clampedY });
        previewCard.classList.add('is-active');
      });

      trigger.addEventListener(
        'pointermove',
        (e) => {
          if (motionPrefs.getState().reducedMotion || window.innerWidth < 1024) return;
          const vx = e.clientX - lastX;
          lastX = e.clientX;
          const clampedX = Math.min(window.innerWidth - 336, Math.max(16, e.clientX + 26));
          const clampedY = Math.min(window.innerHeight - 230, Math.max(76, e.clientY - 88));
          xTo(clampedX);
          yTo(clampedY);
          rotTo(gsap.utils.clamp(-4, 4, vx * 0.14));
          if (!previewCard.classList.contains('is-active')) {
            previewCard.classList.add('is-active');
          }
        },
        { passive: true }
      );

      trigger.addEventListener('pointerleave', hidePreview);
    });
  }

  // Interruption-safe Smooth Accordion Expand / Collapse
  items.forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>('.case-index-trigger');
    const panel = item.querySelector<HTMLElement>('.case-expand-panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      uiAudio.tick(580);
      const isOpen = item.classList.contains('is-expanded');
      const reduced = motionPrefs.getState().reducedMotion;
      gsap.killTweensOf(panel);

      if (isOpen) {
        item.classList.remove('is-expanded');
        btn.setAttribute('aria-expanded', 'false');
        if (reduced) {
          panel.style.height = '0px';
          panel.style.opacity = '0';
          ScrollTrigger.refresh();
        } else {
          gsap.fromTo(
            panel,
            { height: panel.offsetHeight, opacity: 1 },
            {
              height: 0,
              opacity: 0,
              duration: 0.42,
              ease: 'kineticOut',
              onComplete: () => ScrollTrigger.refresh(),
            }
          );
        }
      } else {
        item.classList.add('is-expanded');
        btn.setAttribute('aria-expanded', 'true');
        if (reduced) {
          panel.style.height = 'auto';
          panel.style.opacity = '1';
          ScrollTrigger.refresh();
        } else {
          const targetH = panel.scrollHeight;
          gsap.fromTo(
            panel,
            { height: panel.offsetHeight, opacity: 0.25 },
            {
              height: targetH,
              opacity: 1,
              duration: 0.48,
              ease: 'kineticOut',
              onComplete: () => {
                panel.style.height = 'auto';
                ScrollTrigger.refresh();
              },
            }
          );
        }
      }
    });
  });

  // Before / After flow toggle inside each case
  document.querySelectorAll<HTMLElement>('[data-flow-box]').forEach((box) => {
    const btns = Array.from(box.querySelectorAll<HTMLButtonElement>('[data-flow-mode]'));
    const beforeTrack = box.querySelector<HTMLElement>('[data-flow-before]');
    const afterTrack = box.querySelector<HTMLElement>('[data-flow-after]');

    btns.forEach((b) => {
      b.addEventListener('click', () => {
        uiAudio.tick(640);
        const mode = b.getAttribute('data-flow-mode');
        btns.forEach((x) => x.classList.toggle('is-active', x === b));
        if (beforeTrack && afterTrack) {
          beforeTrack.hidden = mode !== 'before';
          afterTrack.hidden = mode !== 'after';
          ScrollTrigger.refresh();
        }
      });
    });
  });
}
