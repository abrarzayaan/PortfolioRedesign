import { POSTER_CASES, PosterCaseStudy } from '../content/content';
import { fireConfetti } from '../core/confetti';
import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { setScrollLocked } from '../core/lenis';
import { qualityManager } from '../core/quality';
import { journeySound } from '../core/sound';

function renderPosterArt(idx: number): string {
  if (idx === 0) {
    // PharmaSys bold geometric art
    return `
      <svg viewBox="0 0 280 120" class="poster-geo-svg" aria-hidden="true">
        <rect x="12" y="24" width="64" height="72" rx="14" fill="#0B0B0F" />
        <circle cx="44" cy="60" r="14" fill="#FFC933" />
        <path d="M76 60 H 124" stroke="#0B0B0F" stroke-width="4" stroke-dasharray="6 5" />
        <polygon points="154,18 202,60 154,102 106,60" fill="#FF5A36" stroke="#0B0B0F" stroke-width="3" />
        <path d="M202 60 H 236" stroke="#0B0B0F" stroke-width="4" />
        <circle cx="250" cy="60" r="18" fill="#C6FF3D" stroke="#0B0B0F" stroke-width="3" />
      </svg>
    `;
  }
  if (idx === 1) {
    // AKT Enterprise Data bold geometric art
    return `
      <svg viewBox="0 0 280 120" class="poster-geo-svg" aria-hidden="true">
        <ellipse cx="64" cy="36" rx="42" ry="14" fill="#1D3BFF" stroke="#FFE9D6" stroke-width="2.5" />
        <path d="M22 36v48c0 8 19 14 42 14s42-6 42-14V36" fill="#1D3BFF" stroke="#FFE9D6" stroke-width="2.5" />
        <path d="M116 60 L 178 60" stroke="#C6FF3D" stroke-width="4" stroke-dasharray="8 6" />
        <rect x="184" y="24" width="76" height="72" rx="12" fill="#C6FF3D" />
        <text x="222" y="66" text-anchor="middle" font-family="DM Mono, monospace" font-weight="700" font-size="14" fill="#0B0B0F">&lt;500ms</text>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 280 120" class="poster-geo-svg" aria-hidden="true">
      <rect x="24" y="68" width="36" height="36" rx="6" fill="#0B0B0F" />
      <rect x="76" y="48" width="36" height="56" rx="6" fill="#7A4DFF" stroke="#0B0B0F" stroke-width="2.5" />
      <rect x="128" y="24" width="36" height="80" rx="6" fill="#FF5A36" stroke="#0B0B0F" stroke-width="2.5" />
      <path d="M182 88 L 218 52 L 256 26" fill="none" stroke="#0B0B0F" stroke-width="5" stroke-linecap="round" />
      <circle cx="256" cy="26" r="9" fill="#FFFFFF" stroke="#0B0B0F" stroke-width="3" />
    </svg>
  `;
}

export function renderWork(): string {
  const postersHtml = POSTER_CASES.map((cs, idx) => {
    const isWorkerDark = idx === 1;
    const flowHtml = cs.flowSteps
      .map(
        (step, i) => `
        <span class="flow-pill">${step}</span>${
          i < cs.flowSteps.length - 1 ? '<span class="flow-arrow">→</span>' : ''
        }
      `
      )
      .join('');

    const metricsHtml = cs.metrics
      .map(
        (m) => `
        <div class="poster-metric">
          <strong>${m.val}</strong>
          <span>${m.label}</span>
        </div>
      `
      )
      .join('');

    const chipsHtml = cs.stackChips.map((s) => `<span class="poster-stack-chip">${s}</span>`).join('');

    return `
      <article
        class="case-poster ${isWorkerDark ? 'is-worker-ink' : ''}"
        data-poster-idx="${idx}"
        tabindex="0"
        role="button"
        aria-label="Open full case study for ${cs.title}"
        data-cursor="OPEN CASE"
      >
        <div class="poster-top">
          <span class="poster-giant-num">${cs.num}</span>
          <div class="poster-tag-col">
            <span class="poster-stop-tag">${cs.stopTag}</span>
            <span class="poster-role">${cs.roleOrStack}</span>
          </div>
        </div>

        <h3 class="poster-title">${cs.title}</h3>
        <p class="poster-result">${cs.oneLineResult}</p>

        ${renderPosterArt(idx)}

        <div class="poster-mini-flow" aria-label="Operational pipeline steps">
          ${flowHtml}
        </div>

        <div class="poster-metrics-row">
          ${metricsHtml}
        </div>

        <div class="poster-chips-row">
          ${chipsHtml}
        </div>

        <div class="poster-cta-line">
          <span>Inspect full case architecture &amp; proof</span>
          <strong>EXPAND ↗</strong>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section id="work" class="stage-section stage-amber work-pin-section" aria-labelledby="queue-heading">
      <div class="work-pin-wrap" id="work-pin-wrap">
        <div class="container work-head-container">
          <div class="stop-header-row split">
            <div>
              <span class="stop-pill dark">STOP 03 &amp; 04 // QUEUE ➝ WORKER — PROOF, NOT PROMISES</span>
              <h2 id="queue-heading" class="stage-h2 dark">
                Processed in production.
              </h2>
            </div>

            <!-- Live Queue Packets Indicator -->
            <div class="queue-status-box" aria-label="Case study packet queue">
              <span class="mono-kicker">WORKER QUEUE:</span>
              <div class="queue-packets-row">
                <span class="q-pkt is-processed" data-q-pkt="0">JOB #01 ✔</span>
                <span class="q-pkt" data-q-pkt="1">JOB #02</span>
                <span class="q-pkt" data-q-pkt="2">JOB #03</span>
              </div>
            </div>
          </div>
        </div>

        <div class="posters-viewport">
          <div class="posters-track" id="posters-track">
            ${postersHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initWorkPosters(): void {
  const pinWrap = document.getElementById('work-pin-wrap');
  const track = document.getElementById('posters-track');
  const posters = Array.from(document.querySelectorAll<HTMLElement>('.case-poster'));
  const qPkts = Array.from(document.querySelectorAll<HTMLElement>('[data-q-pkt]'));
  const q = qualityManager.getState();

  if (!pinWrap || !track || posters.length === 0) return;

  let highestProcessed = 0;
  const markQueueProcessed = (idx: number) => {
    qPkts.forEach((el, i) => {
      const done = i <= idx;
      el.classList.toggle('is-processed', done);
      el.textContent = done ? `JOB #0${i + 1} ✔` : `JOB #0${i + 1}`;
    });
    if (idx > highestProcessed) {
      highestProcessed = idx;
      journeySound.pop(700);
      fireConfetti(0.78, 0.2, 20);
    }
  };

  posters.forEach((posterEl, idx) => {
    const open = () => {
      journeySound.pop(620);
      openCaseDrawer(POSTER_CASES[idx]);
    };
    posterEl.addEventListener('click', open);
    posterEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });

  bindCaseDrawerClose();

  if (q.reducedMotion) return;

  const mm = gsap.matchMedia();
  mm.add('(min-width: 980px)', () => {
    const getScrollDist = () => Math.max(0, track.scrollWidth - window.innerWidth + 100);

    const tween = gsap.to(track, {
      x: () => -getScrollDist(),
      ease: 'none',
      scrollTrigger: {
        trigger: pinWrap,
        start: 'top top',
        end: () => `+=${getScrollDist() + 260}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const active = Math.min(POSTER_CASES.length - 1, Math.floor(self.progress * POSTER_CASES.length));
          markQueueProcessed(active);
        },
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(track, { clearProps: 'transform' });
    };
  });

  mm.add('(max-width: 979px)', () => {
    const triggers = posters.map((el, idx) =>
      ScrollTrigger.create({
        trigger: el,
        start: 'top 70%',
        onEnter: () => markQueueProcessed(idx),
      })
    );
    return () => triggers.forEach((t) => t.kill());
  });
}

function openCaseDrawer(cs: PosterCaseStudy): void {
  const drawer = document.getElementById('case-drawer');
  const tagEl = document.getElementById('case-drawer-tag');
  const titleEl = document.getElementById('case-drawer-title');
  const stackEl = document.getElementById('case-drawer-stack');
  const metricsEl = document.getElementById('case-drawer-metrics');
  const bulletsEl = document.getElementById('case-drawer-bullets');
  const takeawayEl = document.getElementById('case-drawer-takeaway');
  const linksEl = document.getElementById('case-drawer-links');

  if (!drawer) return;
  if (tagEl) tagEl.textContent = cs.stopTag;
  if (titleEl) titleEl.textContent = cs.title;
  if (stackEl) stackEl.textContent = cs.roleOrStack;
  if (metricsEl) {
    metricsEl.innerHTML = cs.metrics
      .map((m) => `<div class="drawer-m-chip"><strong>${m.val}</strong><span>${m.label}</span></div>`)
      .join('');
  }
  if (bulletsEl) {
    bulletsEl.innerHTML = cs.bullets.map((b) => `<li>${b}</li>`).join('');
  }
  if (takeawayEl) {
    takeawayEl.textContent = `“${cs.takeaway}”`;
  }
  if (linksEl) {
    linksEl.innerHTML = (cs.links || [])
      .map(
        (l) =>
          `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="drawer-ext-link">${l.label} ↗</a>`
      )
      .join('');
  }

  drawer.hidden = false;
  requestAnimationFrame(() => drawer.classList.add('is-open'));
  setScrollLocked(true);
  drawer.querySelector<HTMLButtonElement>('.case-close-btn')?.focus();
}

let boundClose = false;
function bindCaseDrawerClose(): void {
  if (boundClose) return;
  boundClose = true;

  const close = () => {
    const drawer = document.getElementById('case-drawer');
    if (!drawer || (!drawer.classList.contains('is-open') && drawer.hidden)) return;
    drawer.classList.remove('is-open');
    setScrollLocked(false);
    window.setTimeout(() => {
      if (!drawer.classList.contains('is-open')) drawer.hidden = true;
    }, 240);
  };

  document.querySelectorAll('[data-close-case]').forEach((el) => {
    el.addEventListener('click', () => {
      journeySound.pop(420);
      close();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

