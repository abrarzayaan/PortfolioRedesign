import { PHYSICS_CHIPS, PhysicsChip } from '../content/content';
import { ScrollTrigger } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { journeySound } from '../core/sound';

export function renderToolkit(): string {
  const filters = [
    { key: 'ALL', label: 'Drop All' },
    { key: 'DATA', label: 'Data & DB' },
    { key: 'BACKEND', label: 'Backend & RBAC' },
    { key: 'ASYNC', label: 'Redis & Async' },
    { key: 'BI', label: 'Analytics & BI' },
    { key: 'DEVOPS', label: 'DevOps' },
  ];

  const filterBtns = filters
    .map(
      (f, idx) => `
      <button
        type="button"
        class="phys-filter-btn ${idx === 0 ? 'is-active' : ''}"
        data-phys-filter="${f.key}"
      >${f.label}</button>
    `
    )
    .join('');

  return `
    <section id="toolkit" class="stage-section stage-warehouse" aria-labelledby="warehouse-heading">
      <div class="container">
        <div class="stop-header-row split">
          <div>
            <span class="stop-pill lime">STOP 06 // TOOLKIT WAREHOUSE — MATTER.JS PHYSICS</span>
            <h2 id="warehouse-heading" class="stage-h2 light">
              Grab, throw, and inspect the stack.
            </h2>
          </div>

          <div class="warehouse-legend">
            <span><i class="leg-lime"></i>Production-Proven</span>
            <span><i class="leg-outline"></i>Working Knowledge</span>
          </div>
        </div>

        <div class="phys-toolbar" role="group" aria-label="Re-drop toolkit chips by layer">
          ${filterBtns}
        </div>

        <div class="warehouse-box" id="warehouse-box">
          <canvas
            id="physics-warehouse-canvas"
            aria-label="Interactive 2D physics warehouse of backend and data technologies"
          ></canvas>
          <div class="warehouse-inspector" id="warehouse-inspector">
            <span class="mono-kicker lime-txt">DRAG OR CLICK ANY TECH PILL</span>
            <p id="warehouse-tip-text">Chips drop with real rigid-body gravity when you enter the warehouse. Grab and throw any chip!</p>
          </div>
        </div>

        <!-- Screen-reader & keyboard accessible fallback list -->
        <ul class="sr-only" aria-label="Complete Architecture Toolkit List">
          ${PHYSICS_CHIPS.map((c) => `<li>${c.label} (${c.proven ? 'Production-proven' : 'Working knowledge'}): ${c.whereUsed}</li>`).join('')}
        </ul>
      </div>
    </section>
  `;
}

export async function initPhysicsToolkit(): Promise<void> {
  const box = document.getElementById('warehouse-box');
  const canvas = document.getElementById('physics-warehouse-canvas') as HTMLCanvasElement | null;
  const tipEl = document.getElementById('warehouse-tip-text');
  const filterBtns = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-phys-filter]'));

  if (!box || !canvas) return;

  const Matter = await import('matter-js');
  const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Events } = Matter.default || Matter;

  const engine = Engine.create({ gravity: { x: 0, y: 1.05, scale: 0.001 } });
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  interface ChipEntity {
    body: Matter.Body;
    spec: PhysicsChip;
    w: number;
    h: number;
  }

  let chipEntities: ChipEntity[] = [];
  let walls: Matter.Body[] = [];
  let isVisible = false;
  let currentFilter = 'ALL';

  const getStageSize = () => ({
    w: Math.max(300, box.clientWidth),
    h: window.innerWidth <= 640 ? 370 : 430,
  });

  const rebuildWalls = () => {
    const { w, h } = getStageSize();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (walls.length > 0) {
      World.remove(engine.world, walls);
    }
    const thick = 60;
    walls = [
      Bodies.rectangle(w / 2, h + thick / 2 - 4, w + 200, thick, { isStatic: true }),
      Bodies.rectangle(-thick / 2, h / 2, thick, h * 3, { isStatic: true }),
      Bodies.rectangle(w + thick / 2, h / 2, thick, h * 3, { isStatic: true }),
      Bodies.rectangle(w / 2, -520, w + 200, thick, { isStatic: true }),
    ];
    World.add(engine.world, walls);
  };

  const spawnChips = (layerKey: string) => {
    if (chipEntities.length > 0) {
      World.remove(
        engine.world,
        chipEntities.map((c) => c.body)
      );
      chipEntities = [];
    }

    const q = qualityManager.getState();
    const { w, h } = getStageSize();
    const filtered = PHYSICS_CHIPS.filter((c) => layerKey === 'ALL' || c.layer === layerKey).slice(
      0,
      q.maxPhysicsChips
    );

    ctx.font = '600 13px "DM Mono", monospace';

    filtered.forEach((spec, idx) => {
      const textWidth = ctx.measureText(spec.label).width;
      const cw = Math.ceil(textWidth + 36);
      const ch = 40;
      const cols = Math.max(2, Math.floor((w - 60) / 145));
      const col = idx % cols;
      const row = Math.floor(idx / cols);

      const startX = 65 + col * ((w - 130) / Math.max(1, cols - 1)) + (Math.random() - 0.5) * 24;
      const startY = q.reducedMotion ? h - 40 - row * 46 : -40 - row * 62 - Math.random() * 30;

      const body = Bodies.rectangle(startX, startY, cw, ch, {
        chamfer: { radius: 19 },
        restitution: 0.46,
        friction: 0.18,
        frictionAir: 0.012,
        angle: q.reducedMotion ? 0 : (Math.random() - 0.5) * 0.35,
      });

      chipEntities.push({ body, spec, w: cw, h: ch });
    });

    World.add(
      engine.world,
      chipEntities.map((c) => c.body)
    );
  };

  rebuildWalls();

  // Mouse / Touch drag & throw constraint
  const mouse = Mouse.create(canvas);
  const dprInit = Math.min(window.devicePixelRatio || 1, 2);
  Mouse.setScale(mouse, { x: 1 / dprInit, y: 1 / dprInit });

  // Allow page wheel scrolling smoothly over the canvas
  const mouseAny = mouse as unknown as { mousewheel?: EventListener };
  if (mouseAny.mousewheel) {
    canvas.removeEventListener('mousewheel', mouseAny.mousewheel);
    canvas.removeEventListener('DOMMouseScroll', mouseAny.mousewheel);
    canvas.removeEventListener('wheel', mouseAny.mousewheel);
  }

  const mc = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.22,
      render: { visible: false },
    },
  });
  World.add(engine.world, mc);

  Events.on(mc, 'mousedown', () => {
    const b = mc.body;
    if (!b) return;
    const hit = chipEntities.find((c) => c.body.id === b.id);
    if (hit && tipEl) {
      journeySound.pop(680);
      tipEl.innerHTML = `<strong>${hit.spec.label}</strong> (${
        hit.spec.proven ? 'Production-Proven' : 'Working Knowledge'
      }) — ${hit.spec.whereUsed}`;
    }
  });

  // Spawn when scrolled into view
  let hasDropped = false;
  ScrollTrigger.create({
    trigger: box,
    start: 'top 82%',
    onEnter: () => {
      isVisible = true;
      if (!hasDropped) {
        hasDropped = true;
        spawnChips(currentFilter);
      }
    },
  });

  const io = new IntersectionObserver(
    (entries) => {
      isVisible = entries[0]?.isIntersecting ?? false;
    },
    { threshold: 0.02 }
  );
  io.observe(box);

  window.addEventListener('resize', () => {
    rebuildWalls();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    Mouse.setScale(mouse, { x: 1 / dpr, y: 1 / dpr });
    // Keep existing bodies inside bounds
    const { w, h } = getStageSize();
    chipEntities.forEach((c) => {
      if (c.body.position.x > w - 30) {
        Body.setPosition(c.body, { x: w - 50, y: Math.min(c.body.position.y, h - 40) });
      }
    });
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentFilter = btn.getAttribute('data-phys-filter') || 'ALL';
      journeySound.pop(580);
      filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
      spawnChips(currentFilter);
    });
  });

  // Physics + 2D Render Loop
  const renderStep = () => {
    if (isVisible && !document.hidden) {
      if (!qualityManager.getState().reducedMotion) {
        Engine.update(engine, 1000 / 60);
      }

      const { w, h } = getStageSize();
      ctx.clearRect(0, 0, w, h);

      // Subtle warehouse floor grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      for (let gx = 0; gx < w; gx += 48) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
        ctx.stroke();
      }

      ctx.font = '600 13px "DM Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const item of chipEntities) {
        const { x, y } = item.body.position;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(item.body.angle);

        const rw = item.w;
        const rh = item.h;
        ctx.beginPath();
        ctx.roundRect(-rw / 2, -rh / 2, rw, rh, 19);

        if (item.spec.proven) {
          ctx.fillStyle = '#C6FF3D';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#0B0B0F';
          ctx.stroke();
          ctx.fillStyle = '#0B0B0F';
        } else {
          ctx.fillStyle = '#171722';
          ctx.fill();
          ctx.lineWidth = 1.8;
          ctx.strokeStyle = '#9D85FF';
          ctx.stroke();
          ctx.fillStyle = '#F2EFE8';
        }

        ctx.fillText(item.spec.label, 0, 1);
        ctx.restore();
      }
    }
    requestAnimationFrame(renderStep);
  };

  requestAnimationFrame(renderStep);
}

