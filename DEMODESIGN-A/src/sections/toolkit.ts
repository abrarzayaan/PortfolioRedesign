import { TOOLKIT_ITEMS } from '../content/content';
import { Flip, scrambleDecode, ScrollTrigger } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';
import { uiAudio } from '../core/sound';

export function renderToolkit(): string {
  const filters = [
    { key: 'ALL', label: 'All Layers' },
    { key: 'DATA', label: 'Data & Databases' },
    { key: 'BACKEND', label: 'Backend & RBAC' },
    { key: 'ASYNC', label: 'Perf, Cache & Async' },
    { key: 'BI', label: 'Analytics & BI' },
    { key: 'DEVOPS', label: 'DevOps & Tooling' },
  ];

  const tabsHtml = filters
    .map(
      (f, idx) => `
      <button
        type="button"
        class="tk-filter-tab ${idx === 0 ? 'is-active' : ''}"
        data-tk-filter="${f.key}"
        data-magnetic="0.18"
      >
        <span>${f.label}</span>
      </button>
    `
    )
    .join('');

  const pillsHtml = TOOLKIT_ITEMS.map(
    (item, idx) => `
      <button
        type="button"
        class="tk-chip ${item.tier === 'proven' ? 'is-proven' : 'is-working'}"
        data-tk-cat="${item.category}"
        data-tk-idx="${idx}"
        data-cursor="INSPECT"
      >
        <span class="tk-chip-dot" aria-hidden="true"></span>
        <strong class="tk-chip-name">${item.name}</strong>
        <small class="tk-chip-layer">${item.categoryLabel}</small>
      </button>
    `
  ).join('');

  return `
    <section id="toolkit" class="k-section theme-light" aria-labelledby="toolkit-heading">
      <div class="k-container">
        <div class="section-head-row split">
          <div>
            <span class="section-kicker dark">05 // ARCHITECTURE TOOLKIT BY LAYER</span>
            <h2 id="toolkit-heading" class="section-display-h2 dark" data-cursor-blend>
              Tools chosen for the <em class="serif-accent dark-serif">problem,</em> not hype.
            </h2>
          </div>

          <div class="tk-legend" aria-label="Proficiency tier legend">
            <span><i class="dot-proven"></i> Production-Proven</span>
            <span><i class="dot-working"></i> Working Knowledge</span>
          </div>
        </div>

        <div class="tk-filter-bar" role="tablist" aria-label="Filter toolkit by architectural layer">
          ${tabsHtml}
        </div>

        <div class="tk-flip-grid" id="tk-flip-grid">
          ${pillsHtml}
        </div>

        <!-- Live Production Proof Inspector Bar -->
        <div class="tk-inspector-bar" id="tk-inspector-bar" aria-live="polite">
          <div class="tki-left">
            <span class="tki-tag" id="tki-tag">PRODUCTION-PROVEN // DATA &amp; DB</span>
            <strong class="tki-title" id="tki-title">Oracle Database</strong>
          </div>
          <p class="tki-proof" id="tki-proof">
            99.9% uptime across 1M+ daily enterprise rows at Suffix IT LTD. (Hover or click any tool pill above.)
          </p>
        </div>
      </div>
    </section>
  `;
}

export function initToolkitAnimations(): void {
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-tk-filter]'));
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>('.tk-chip'));
  const tagEl = document.getElementById('tki-tag');
  const titleEl = document.getElementById('tki-title');
  const proofEl = document.getElementById('tki-proof');

  // Inspect tool proof on hover / focus / click
  chips.forEach((chip) => {
    const inspect = () => {
      const idx = Number(chip.getAttribute('data-tk-idx') || '0');
      const item = TOOLKIT_ITEMS[idx];
      if (!item) return;

      chips.forEach((c) => c.classList.toggle('is-selected', c === chip));
      const tierStr = item.tier === 'proven' ? 'PRODUCTION-PROVEN' : 'WORKING KNOWLEDGE';
      scrambleDecode(tagEl, `${tierStr} // ${item.categoryLabel.toUpperCase()}`, 0.42);
      if (titleEl) titleEl.textContent = item.name;
      if (proofEl) proofEl.textContent = item.proof;
    };

    chip.addEventListener('pointerenter', inspect);
    chip.addEventListener('focus', inspect);
    chip.addEventListener('click', () => {
      uiAudio.tick(620);
      inspect();
    });
  });

  // GSAP Flip layout morph on category filter
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filterKey = tab.getAttribute('data-tk-filter') || 'ALL';
      uiAudio.tick(560);
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));

      if (motionPrefs.getState().reducedMotion) {
        chips.forEach((chip) => {
          const match = filterKey === 'ALL' || chip.getAttribute('data-tk-cat') === filterKey;
          chip.classList.toggle('is-hidden-chip', !match);
        });
        ScrollTrigger.refresh();
        return;
      }

      const state = Flip.getState(chips);

      chips.forEach((chip) => {
        const match = filterKey === 'ALL' || chip.getAttribute('data-tk-cat') === filterKey;
        chip.classList.toggle('is-hidden-chip', !match);
      });

      Flip.from(state, {
        duration: 0.52,
        ease: 'kineticOut',
        scale: true,
        stagger: 0.012,
        onComplete: () => ScrollTrigger.refresh(),
      });
    });
  });
}
