import { DIRECTION_DATA } from '../content/content';
import { scrambleDecode } from '../core/gsap-setup';
import { uiAudio } from '../core/sound';
import { showKineticToast } from '../core/toast';

export function renderDirection(): string {
  const modulesHtml = DIRECTION_DATA.modules
    .map(
      (mod, idx) => `
      <button
        type="button"
        class="sb-module spotlight-card"
        data-sb-idx="${idx}"
        aria-pressed="false"
        data-cursor="SIMULATE OUTAGE"
      >
        <div class="sb-mod-top">
          <span class="sb-code">${mod.code}</span>
          <span class="sb-led" aria-hidden="true"></span>
        </div>
        <strong class="sb-name">${mod.name}</strong>
        <p class="sb-desc">${mod.roleDesc}</p>
        <div class="sb-status-bar">
          <span class="sb-status-txt" data-sb-status>${mod.healthyStatus}</span>
        </div>
      </button>
    `
    )
    .join('');

  const pillarsHtml = DIRECTION_DATA.pillars
    .map(
      (p, i) => `
      <article class="dir-pillar spotlight-card">
        <span class="dir-pillar-no">0${i + 1}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </article>
    `
    )
    .join('');

  return `
    <section id="direction" class="k-section theme-dark" aria-labelledby="direction-heading">
      <div class="k-container">
        <div class="section-head-row split">
          <div>
            <span class="section-kicker lime">08 // DIRECTION: DISTRIBUTED SYSTEMS</span>
            <h2 id="direction-heading" class="section-display-h2 light" data-cursor-blend>
              Where I’m heading: systems that <em class="serif-accent">don’t stop.</em>
            </h2>
          </div>
          <p class="section-lead-note light-muted">
            ${DIRECTION_DATA.sub}
          </p>
        </div>

        <!-- Clean Typographic Failover Switchboard (Signature Zero-3D Interaction) -->
        <div class="switchboard-shell" id="switchboard-shell">
          <div class="sb-toolbar">
            <div class="sb-telemetry">
              <span class="sb-tel-pill ok" id="sb-cluster-badge">ALL 5 NODES HEALTHY</span>
              <span class="sb-tel-metric">REVENUE IMPACT: <strong>0</strong></span>
              <span class="sb-tel-metric" id="sb-route-readout">PRIMARY DATA PATHS ACTIVE</span>
            </div>

            <div class="sb-actions">
              <button type="button" id="sb-kill-random" class="sb-ctrl-btn warn" data-magnetic="0.2">
                <span>⚡ Simulate Random Outage</span>
              </button>
              <button type="button" id="sb-heal-all" class="sb-ctrl-btn" data-magnetic="0.2">
                <span>↺ Restore All</span>
              </button>
            </div>
          </div>

          <p class="sb-hint">
            Click any architectural block below to simulate a sudden production failure and watch automatic failover keep orders flowing:
          </p>

          <!-- Clean SVG Primary + Failover Bypass Bus -->
          <svg class="sb-bus-svg" viewBox="0 0 1000 54" preserveAspectRatio="none" aria-hidden="true">
            <line x1="60" y1="36" x2="940" y2="36" stroke="rgba(255,255,255,0.16)" stroke-width="2" />
            <path
              id="sb-primary-flow"
              d="M 60 36 L 940 36"
              fill="none"
              stroke="#C6FF3D"
              stroke-width="2.5"
              stroke-dasharray="10 8"
            />
            <path
              id="sb-failover-arc"
              d="M 60 36 C 260 4, 740 4, 940 36"
              fill="none"
              stroke="#C6FF3D"
              stroke-width="3"
              stroke-dasharray="8 6"
              opacity="0"
            />
          </svg>

          <div class="sb-modules-grid">
            ${modulesHtml}
          </div>
        </div>

        <!-- 4 Business Value Pillars -->
        <div class="dir-pillars-grid">
          ${pillarsHtml}
        </div>

        <!-- Production Today vs Actively Deepening -->
        <div class="dir-horizon-grid">
          <div class="dir-horizon-card">
            <span class="section-kicker lime">WHAT I ALREADY APPLY IN PRODUCTION</span>
            <p>${DIRECTION_DATA.alreadyInProd}</p>
          </div>
          <div class="dir-horizon-card">
            <span class="section-kicker">WHAT I AM ACTIVELY DEEPENING</span>
            <p>${DIRECTION_DATA.deepening}</p>
          </div>
        </div>

        <blockquote class="dir-honest-note">
          <p>“${DIRECTION_DATA.honestQuote}”</p>
        </blockquote>
      </div>
    </section>
  `;
}

export function initDirectionSwitchboard(): void {
  const modBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('.sb-module'));
  const badgeEl = document.getElementById('sb-cluster-badge');
  const routeEl = document.getElementById('sb-route-readout');
  const failoverArc = document.getElementById('sb-failover-arc');
  const randomBtn = document.getElementById('sb-kill-random');
  const healBtn = document.getElementById('sb-heal-all');

  const downSet = new Set<number>();

  const syncBoard = (toastMsg?: string) => {
    modBtns.forEach((btn, idx) => {
      const mod = DIRECTION_DATA.modules[idx];
      const isDown = downSet.has(idx);
      btn.classList.toggle('is-down', isDown);
      btn.setAttribute('aria-pressed', String(isDown));
      btn.setAttribute('data-cursor', isDown ? 'RESTORE NODE' : 'SIMULATE OUTAGE');

      const statusEl = btn.querySelector<HTMLElement>('[data-sb-status]');
      const targetStr = isDown ? `FAILOVER → ${mod.failoverAction}` : mod.healthyStatus;
      if (statusEl && statusEl.textContent !== targetStr) {
        scrambleDecode(statusEl, targetStr, 0.45);
      }
    });

    const downCount = downSet.size;
    if (failoverArc) {
      failoverArc.style.opacity = downCount > 0 ? '1' : '0';
    }

    if (badgeEl) {
      badgeEl.classList.toggle('rerouted', downCount > 0);
      badgeEl.classList.toggle('ok', downCount === 0);
      scrambleDecode(
        badgeEl,
        downCount > 0
          ? `${downCount} NODE${downCount > 1 ? 'S' : ''} DOWN · TRAFFIC REROUTED`
          : 'ALL 5 NODES HEALTHY',
        0.4
      );
    }

    if (routeEl) {
      routeEl.textContent =
        downCount > 0
          ? 'BACKUP FAILOVER BUS ENGAGED · DOWNTIME: 0s'
          : 'PRIMARY DATA PATHS ACTIVE';
    }

    if (toastMsg) {
      showKineticToast(toastMsg);
    }
  };

  modBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      if (downSet.has(idx)) {
        downSet.delete(idx);
        uiAudio.tick(680);
        syncBoard(`${DIRECTION_DATA.modules[idx].name} restored to primary pool.`);
      } else {
        downSet.add(idx);
        uiAudio.alertTone();
        syncBoard('Node down. Traffic rerouted. Business unaffected.');
      }
    });
  });

  randomBtn?.addEventListener('click', () => {
    const candidates = DIRECTION_DATA.modules.map((_, i) => i).filter((i) => !downSet.has(i));
    const pick =
      candidates.length > 0
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : Math.floor(Math.random() * DIRECTION_DATA.modules.length);

    downSet.add(pick);
    uiAudio.alertTone();
    syncBoard('Node down. Traffic rerouted. Business unaffected.');
  });

  healBtn?.addEventListener('click', () => {
    if (downSet.size === 0) return;
    downSet.clear();
    uiAudio.tick(720);
    syncBoard('All 5 architecture modules online.');
  });
}
