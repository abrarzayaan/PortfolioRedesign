import { SCALE_DIRECTION } from '../content/content';
import { qualityManager } from '../core/quality';
import { journeySound } from '../core/sound';

export function renderDirection(): string {
  const pillarsHtml = SCALE_DIRECTION.pillars
    .map(
      (p, i) => `
      <article class="scale-pillar-card">
        <span class="pillar-idx">0${i + 1}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </article>
    `
    )
    .join('');

  return `
    <section id="direction" class="stage-section stage-scale" aria-labelledby="scale-heading">
      <div class="container">
        <div class="stop-header-row split">
          <div>
            <span class="stop-pill lime">STOP 08 // DISTRIBUTED SCALE — THE PACKET MULTIPLIES</span>
            <h2 id="scale-heading" class="stage-h2 light">
              ${SCALE_DIRECTION.headline}
            </h2>
          </div>

          <div class="arch-mode-toggle" role="group" aria-label="Architecture lane topology">
            <button type="button" class="lane-mode-btn" data-scale-mode="monolith">Monolith (1 Lane)</button>
            <button type="button" class="lane-mode-btn is-active" data-scale-mode="distributed">Distributed (3 Lanes)</button>
          </div>
        </div>

        <div class="scale-sim-card">
          <div class="scale-sim-controls">
            <label for="ops-slider" class="ops-label">
              <span>ORDERS PER SECOND (ILLUSTRATIVE SIMULATION):</span>
              <strong id="ops-readout" class="lime-txt">4,200 req/s</strong>
            </label>
            <input
              type="range"
              id="ops-slider"
              class="ops-slider"
              min="1"
              max="10000"
              value="4200"
            />
            <span id="scale-health-badge" class="scale-health-badge healthy">
              SMOOTH PARALLEL FLOW ✔
            </span>
          </div>

          <canvas
            id="scale-lanes-canvas"
            class="scale-lanes-canvas"
            aria-label="Illustrative multi-lane packet throughput simulation"
          ></canvas>
        </div>

        <div class="scale-pillars-grid">
          ${pillarsHtml}
        </div>

        <div class="scale-status-row">
          <div class="scale-status-box">
            <span class="mono-kicker lime-txt">ALREADY IN PRODUCTION</span>
            <p>${SCALE_DIRECTION.alreadyInProd}</p>
          </div>
          <div class="scale-status-box">
            <span class="mono-kicker">ACTIVELY DEEPENING</span>
            <p>${SCALE_DIRECTION.deepening}</p>
          </div>
        </div>

        <blockquote class="scale-honest-quote">
          <p>“${SCALE_DIRECTION.honestQuote}”</p>
        </blockquote>
      </div>
    </section>
  `;
}

export function initScaleSimulation(): void {
  const canvas = document.getElementById('scale-lanes-canvas') as HTMLCanvasElement | null;
  const slider = document.getElementById('ops-slider') as HTMLInputElement | null;
  const readout = document.getElementById('ops-readout');
  const healthBadge = document.getElementById('scale-health-badge');
  const modeBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-scale-mode]'));

  if (!canvas || !slider) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let mode: 'monolith' | 'distributed' = 'distributed';
  let ops = Number(slider.value);
  let isVisible = false;

  interface SimPacket {
    t: number;
    lane: number; // 0, 1, 2
    speed: number;
  }

  const pool: SimPacket[] = Array.from({ length: 120 }, (_, i) => ({
    t: (i / 120) % 1,
    lane: i % 3,
    speed: 0.35 + (i % 7) * 0.04,
  }));

  const syncHealthUi = () => {
    if (readout) readout.textContent = `${ops.toLocaleString()} req/s (illustrative)`;
    if (!healthBadge) return;
    const congested = mode === 'monolith' && ops > 3200;
    healthBadge.classList.toggle('congested', congested);
    healthBadge.classList.toggle('healthy', !congested);
    healthBadge.textContent = congested
      ? 'MONOLITH QUEUE CONGESTION ⚠'
      : mode === 'distributed'
        ? 'PARALLEL WORKER LANES SMOOTH ✔'
        : 'SINGLE LANE WITHIN CAPACITY ✔';
  };

  syncHealthUi();

  slider.addEventListener('input', () => {
    ops = Number(slider.value);
    syncHealthUi();
  });

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-scale-mode') as 'monolith' | 'distributed';
      if (!next) return;
      mode = next;
      journeySound.pop(mode === 'distributed' ? 720 : 420);
      modeBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      syncHealthUi();
    });
  });

  const resize = () => {
    const w = canvas.parentElement?.clientWidth ? canvas.parentElement.clientWidth - 40 : 680;
    const h = 210;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(280, w) * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${Math.max(280, w)}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  const io = new IntersectionObserver(
    (entries) => {
      isVisible = entries[0]?.isIntersecting ?? false;
    },
    { threshold: 0.05 }
  );
  io.observe(canvas);

  let prev = performance.now();
  const loop = (now: number) => {
    const dt = Math.min(0.05, (now - prev) / 1000);
    prev = now;

    if (isVisible && !document.hidden) {
      const w = parseFloat(canvas.style.width) || 680;
      const h = 210;
      ctx.clearRect(0, 0, w, h);

      const congested = mode === 'monolith' && ops > 3200;
      const activeCount = Math.max(8, Math.min(pool.length, Math.round((ops / 10000) * pool.length)));
      const laneYs = mode === 'distributed' ? [48, 105, 162] : [105];

      // Draw split / merge rails
      ctx.lineWidth = 3;
      laneYs.forEach((ly) => {
        ctx.strokeStyle = congested ? 'rgba(255,90,54,0.38)' : 'rgba(198,255,61,0.25)';
        ctx.beginPath();
        ctx.moveTo(28, 105);
        ctx.bezierCurveTo(w * 0.2, 105, w * 0.2, ly, w * 0.32, ly);
        ctx.lineTo(w * 0.68, ly);
        ctx.bezierCurveTo(w * 0.8, ly, w * 0.8, 105, w - 28, 105);
        ctx.stroke();
      });

      const reduced = qualityManager.getState().reducedMotion;

      for (let i = 0; i < activeCount; i++) {
        const pkt = pool[i];
        if (!reduced) {
          const factor = congested ? 0.24 : 1.0;
          pkt.t = (pkt.t + dt * pkt.speed * factor) % 1;
        }

        const ly = mode === 'distributed' ? laneYs[pkt.lane] : 105;
        const px = 28 + pkt.t * (w - 56);
        let py = ly;
        if (pkt.t < 0.28) {
          const u = pkt.t / 0.28;
          py = 105 + (ly - 105) * (u * u * (3 - 2 * u));
        } else if (pkt.t > 0.72) {
          const u = (pkt.t - 0.72) / 0.28;
          py = ly + (105 - ly) * (u * u * (3 - 2 * u));
        }

        ctx.beginPath();
        ctx.arc(px, py, congested ? 6.5 : 5.5, 0, Math.PI * 2);
        ctx.fillStyle = congested ? '#FF5A36' : '#FFFFFF';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#0B0B0F';
        ctx.stroke();
      }
    }

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
}

