import { PROPOSED_DIRECTION } from '../content/content';
import { wrapInSheet } from '../core/sheet-frame';
import { draftingSound } from '../core/sound';

export function renderDirection(): string {
  const pillarsHtml = PROPOSED_DIRECTION.pillars
    .map(
      (p, i) => `
      <article class="prop-pillar">
        <span class="spec-code">EXT-0${i + 1}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </article>
    `
    )
    .join('');

  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Proposed Extension: Distributed &amp; Event-Driven Systems</h2>
        <p class="sheet-subtitle">
          Drag the architecture slider below between Solid Lines (Modular Monolith) and Proposed Dashed Lines (Distributed Event Mesh) to inspect the honest trade-offs.
        </p>
      </div>
    </div>

    <div class="morph-workbench">
      <div class="morph-controls-bar">
        <button type="button" class="morph-preset is-active" data-morph-val="0">0% Modular Monolith</button>
        <input
          type="range"
          id="arch-morph-slider"
          class="arch-morph-slider"
          min="0"
          max="100"
          value="35"
          aria-label="Morph architecture from Monolith to Distributed"
        />
        <button type="button" class="morph-preset" data-morph-val="100">100% Distributed Mesh</button>
      </div>

      <div class="morph-diagram-canvas">
        <svg viewBox="0 0 760 270" class="morph-svg" role="img" aria-label="Monolith versus Distributed Architecture Blueprint">
          <!-- Left Existing Solid Core -->
          <g id="morph-monolith-group">
            <rect x="44" y="48" width="230" height="174" fill="#F6F3EB" stroke="#101010" stroke-width="2" />
            <line x1="44" y1="78" x2="274" y2="78" stroke="#101010" stroke-width="1.2" />
            <text x="58" y="68" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="#101010">EXISTING SOLID // MODULAR CORE</text>
            <rect x="64" y="96" width="190" height="44" fill="#EDE9DF" stroke="#101010" stroke-width="1.4" />
            <text x="159" y="122" text-anchor="middle" font-family="Geist, sans-serif" font-size="12" font-weight="600" fill="#101010">Django / DRF Domain Logic</text>
            <rect x="64" y="156" width="190" height="46" fill="#EDE9DF" stroke="#101010" stroke-width="1.4" />
            <text x="159" y="183" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="#101010">Oracle / PostgreSQL ACID</text>
          </g>

          <!-- Animated Bridge -->
          <g id="morph-bridge-group">
            <line x1="274" y1="135" x2="366" y2="135" stroke="#FF4D1C" stroke-width="2.2" stroke-dasharray="7 5" class="proposed-dash" />
            <polygon points="366,135 356,130 356,140" fill="#FF4D1C" />
            <text x="320" y="123" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#FF4D1C">OUTBOX / EVENTS</text>
          </g>

          <!-- Right Proposed Distributed Services (Dashed) -->
          <g id="morph-distributed-group">
            <rect x="368" y="30" width="352" height="210" fill="rgba(27,63,209,0.04)" stroke="#1B3FD1" stroke-width="1.8" stroke-dasharray="8 5" class="proposed-dash" />
            <text x="384" y="52" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="#1B3FD1">PROPOSED EXTENSION // EVENT-DRIVEN SERVICES</text>

            <!-- Central Broker -->
            <rect x="392" y="104" width="118" height="68" fill="#EDE9DF" stroke="#FF4D1C" stroke-width="1.8" />
            <text x="451" y="134" text-anchor="middle" font-family="Geist, sans-serif" font-size="11.5" font-weight="600" fill="#101010">Event Broker</text>
            <text x="451" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#FF4D1C">Streams &amp; Queues</text>

            <!-- Decomposed Consumers -->
            <line x1="510" y1="120" x2="556" y2="82" stroke="#1B3FD1" stroke-width="1.5" stroke-dasharray="5 4" class="proposed-dash" />
            <line x1="510" y1="138" x2="556" y2="138" stroke="#1B3FD1" stroke-width="1.5" stroke-dasharray="5 4" class="proposed-dash" />
            <line x1="510" y1="156" x2="556" y2="194" stroke="#1B3FD1" stroke-width="1.5" stroke-dasharray="5 4" class="proposed-dash" />

            <rect x="556" y="60" width="144" height="42" fill="#F6F3EB" stroke="#1B3FD1" stroke-width="1.4" stroke-dasharray="5 3" />
            <text x="628" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#101010">Inventory &amp; Locks</text>

            <rect x="556" y="117" width="144" height="42" fill="#F6F3EB" stroke="#1B3FD1" stroke-width="1.4" stroke-dasharray="5 3" />
            <text x="628" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#101010">Rider &amp; Payout Svc</text>

            <rect x="556" y="174" width="144" height="42" fill="#F6F3EB" stroke="#1B3FD1" stroke-width="1.4" stroke-dasharray="5 3" />
            <text x="628" y="199" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#101010">Analytics &amp; Replicas</text>
          </g>
        </svg>
      </div>

      <div class="morph-tradeoff-panel">
        <div class="tradeoff-head">
          <span id="morph-stage-label" class="spec-badge vermilion">HYBRID ASYNC + READ REPLICA TOPOLOGY</span>
          <span id="morph-pct-readout" class="mono-tiny">DISTRIBUTION RATIO: 35% (ILLUSTRATIVE)</span>
        </div>
        <p id="morph-when" class="tradeoff-when"></p>
        <p id="morph-notes" class="tradeoff-notes"></p>
      </div>
    </div>

    <div class="prop-pillars-grid">
      ${pillarsHtml}
    </div>

    <div class="prop-status-pair">
      <div class="prop-status-card">
        <span class="mono-tiny vermilion">ALREADY APPLIED IN PRODUCTION</span>
        <p>${PROPOSED_DIRECTION.alreadyApplied}</p>
      </div>
      <div class="prop-status-card">
        <span class="mono-tiny blueprint-txt">ACTIVELY DEEPENING</span>
        <p>${PROPOSED_DIRECTION.deepeningNow}</p>
      </div>
    </div>

    <blockquote class="honest-spec-callout">
      <p>“${PROPOSED_DIRECTION.honestNote}”</p>
    </blockquote>
  `;

  return wrapInSheet({
    id: 'direction',
    sheetNo: 'SHEET 09 / 10',
    sectionTag: '§09 FUTURE WORKS (PROPOSED DISTRIBUTED EXTENSION)',
    projectTitle: 'DISTRIBUTED SYSTEMS DIRECTION',
    scale: '1 : 200',
    bodyHtml,
  });
}

export function initDirectionSection(): void {
  const slider = document.getElementById('arch-morph-slider') as HTMLInputElement | null;
  const presets = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-morph-val]'));
  const monoGroup = document.getElementById('morph-monolith-group');
  const bridgeGroup = document.getElementById('morph-bridge-group');
  const distGroup = document.getElementById('morph-distributed-group');

  const labelEl = document.getElementById('morph-stage-label');
  const pctEl = document.getElementById('morph-pct-readout');
  const whenEl = document.getElementById('morph-when');
  const notesEl = document.getElementById('morph-notes');

  if (!slider) return;

  const updateMorph = (val: number) => {
    const t = val / 100;
    if (monoGroup) {
      monoGroup.style.opacity = `${1 - t * 0.48}`;
      monoGroup.style.transform = `translateX(${(-t * 10).toFixed(1)}px)`;
    }
    if (bridgeGroup) {
      bridgeGroup.style.opacity = `${0.25 + t * 0.75}`;
    }
    if (distGroup) {
      distGroup.style.opacity = `${0.22 + t * 0.78}`;
      distGroup.style.transform = `translateX(${((1 - t) * 14).toFixed(1)}px)`;
    }

    const stages = PROPOSED_DIRECTION.stages;
    const chosen = val >= 75 ? stages[2] : val >= 30 ? stages[1] : stages[0];

    if (labelEl) labelEl.textContent = chosen.label;
    if (pctEl) pctEl.textContent = `DISTRIBUTION RATIO: ${val}% (ILLUSTRATIVE)`;
    if (whenEl) whenEl.textContent = `When appropriate: ${chosen.when}`;
    if (notesEl) notesEl.textContent = `Architect's trade-off note: ${chosen.tradeoff}`;

    presets.forEach((btn) => {
      const bVal = Number(btn.getAttribute('data-morph-val'));
      btn.classList.toggle('is-active', Math.abs(bVal - val) < 20);
    });
  };

  updateMorph(Number(slider.value));

  slider.addEventListener('input', () => {
    updateMorph(Number(slider.value));
  });

  presets.forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = Number(btn.getAttribute('data-morph-val') || '0');
      draftingSound.click();
      slider.value = String(v);
      updateMorph(v);
    });
  });
}

