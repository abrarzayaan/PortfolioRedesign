import { gsap } from './gsap-setup';
import { qualityManager } from './quality';
import { draftingSound } from './sound';
import { showToast } from './toast';

/**
 * Signature Interaction Engine: "Business ⇄ Tech Lens"
 * Supports:
 * 1. Smooth circular cursor X-ray (`clip-path: circle(...)` via gsap.quickTo)
 * 2. Keyboard Arrow-key navigation (`← ↑ → ↓`) on focused `.lens-stage`
 * 3. Mobile / explicit `Business | Tech` crossfade mode
 * 4. Global header `LENS: CURSOR / FULL TECH` override
 */

type LensMode = 'lens' | 'business' | 'tech';

interface StageController {
  setMode: (mode: LensMode) => void;
}

const stageControllers: StageController[] = [];
let globalFullTech = false;

export function initLensStages(): void {
  const stages = Array.from(document.querySelectorAll<HTMLElement>('.lens-stage'));
  const isMobileInit = qualityManager.getState().isMobile;

  stages.forEach((stage) => {
    const techLayer = stage.querySelector<HTMLElement>('.tech-layer');
    const reticle = stage.querySelector<HTMLElement>('.lens-reticle');
    const modeButtons = Array.from(
      stage.parentElement?.querySelectorAll<HTMLButtonElement>('[data-lens-mode]') || []
    );

    if (!techLayer) return;

    const radiusVal = Number(stage.getAttribute('data-lens-radius') || '138');
    let mode: LensMode = isMobileInit ? 'business' : 'lens';
    let keyX = 240;
    let keyY = 140;

    const qx = gsap.quickTo(techLayer, '--lx', { duration: 0.22, ease: 'power3.out' });
    const qy = gsap.quickTo(techLayer, '--ly', { duration: 0.22, ease: 'power3.out' });
    const rx = reticle ? gsap.quickTo(reticle, 'x', { duration: 0.22, ease: 'power3.out' }) : null;
    const ry = reticle ? gsap.quickTo(reticle, 'y', { duration: 0.22, ease: 'power3.out' }) : null;

    const applyMode = (nextMode: LensMode) => {
      mode = nextMode;
      stage.setAttribute('data-active-mode', mode);
      modeButtons.forEach((btn) => {
        const m = btn.getAttribute('data-lens-mode');
        const active = m === mode;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });

      if (mode === 'tech') {
        techLayer.style.clipPath = 'none';
        techLayer.style.opacity = '1';
        if (reticle) reticle.style.opacity = '0';
      } else if (mode === 'business') {
        techLayer.style.clipPath = 'circle(0px at 50% 50%)';
        techLayer.style.opacity = '0';
        if (reticle) reticle.style.opacity = '0';
      } else {
        techLayer.style.clipPath = '';
        techLayer.style.opacity = '1';
        techLayer.style.setProperty('--lr', '0px');
      }
    };

    applyMode(mode);

    const moveLensTo = (localX: number, localY: number) => {
      if (mode !== 'lens') return;
      qx(localX);
      qy(localY);
      rx?.(localX);
      ry?.(localY);
      techLayer.style.setProperty('--lr', `${radiusVal}px`);
      if (reticle) {
        reticle.style.width = `${radiusVal * 2}px`;
        reticle.style.height = `${radiusVal * 2}px`;
        reticle.style.opacity = '1';
      }
    };

    stage.addEventListener('pointerenter', (e) => {
      if (qualityManager.getState().isMobile || mode !== 'lens') return;
      const rect = stage.getBoundingClientRect();
      moveLensTo(e.clientX - rect.left, e.clientY - rect.top);
    });

    stage.addEventListener('pointermove', (e) => {
      if (qualityManager.getState().isMobile || mode !== 'lens') return;
      const rect = stage.getBoundingClientRect();
      moveLensTo(e.clientX - rect.left, e.clientY - rect.top);
    });

    stage.addEventListener('pointerleave', () => {
      if (mode !== 'lens') return;
      techLayer.style.setProperty('--lr', '0px');
      if (reticle) reticle.style.opacity = '0';
    });

    // Keyboard accessibility: Arrow keys move the lens across focused stage (TASK.md §3.5)
    stage.addEventListener('focus', () => {
      if (mode !== 'lens') return;
      const rect = stage.getBoundingClientRect();
      keyX = rect.width * 0.5;
      keyY = rect.height * 0.5;
      moveLensTo(keyX, keyY);
    });

    stage.addEventListener('blur', () => {
      if (mode !== 'lens') return;
      techLayer.style.setProperty('--lr', '0px');
      if (reticle) reticle.style.opacity = '0';
    });

    stage.addEventListener('keydown', (e) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
      e.preventDefault();
      if (mode !== 'lens') applyMode('lens');
      const rect = stage.getBoundingClientRect();
      const step = 32;
      if (e.key === 'ArrowLeft') keyX = Math.max(24, keyX - step);
      if (e.key === 'ArrowRight') keyX = Math.min(rect.width - 24, keyX + step);
      if (e.key === 'ArrowUp') keyY = Math.max(24, keyY - step);
      if (e.key === 'ArrowDown') keyY = Math.min(rect.height - 24, keyY + step);
      moveLensTo(keyX, keyY);
    });

    // Bind local mode switch buttons (`Business | Lens | Tech`)
    modeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = btn.getAttribute('data-lens-mode') as LensMode;
        if (!next) return;
        draftingSound.click();
        applyMode(next);
      });
    });

    stageControllers.push({ setMode: applyMode });
  });

  // Global Header Lens Toggle
  const globalBtn = document.getElementById('global-lens-toggle');
  const globalLabel = document.getElementById('global-lens-label');

  globalBtn?.addEventListener('click', () => {
    draftingSound.click();
    globalFullTech = !globalFullTech;
    globalBtn.setAttribute('aria-pressed', String(globalFullTech));
    globalBtn.classList.toggle('is-blueprint', globalFullTech);

    const targetMode: LensMode = globalFullTech
      ? 'tech'
      : qualityManager.getState().isMobile
        ? 'business'
        : 'lens';

    if (globalLabel) {
      globalLabel.textContent = globalFullTech ? 'LENS: FULL TECH' : 'LENS: CURSOR';
    }

    stageControllers.forEach((c) => c.setMode(targetMode));
    showToast(
      globalFullTech
        ? 'Blueprint Tech Layer unlocked across all drawings'
        : 'Cursor X-Ray Lens restored (hover drawings to inspect)',
      globalFullTech ? 'blueprint' : 'vermilion'
    );
  });
}

