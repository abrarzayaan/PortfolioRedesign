import { gsap, prepareStrokeDraw, scrambleTo } from './gsap-setup';
import { qualityManager } from './quality';

export function runDraftingPreloader(): Promise<void> {
  return new Promise((resolve) => {
    const preloader = document.getElementById('preloader');
    const rectEl = document.getElementById('preloader-rect') as SVGRectElement | null;
    const pctEl = document.getElementById('preloader-pct');
    const fillEl = document.getElementById('preloader-rule-fill');
    const sheetEl = document.getElementById('pre-sheet');
    const projEl = document.getElementById('pre-proj');
    const byEl = document.getElementById('pre-by');

    if (!preloader) {
      resolve();
      return;
    }

    const reduced = qualityManager.getState().reducedMotion;

    if (rectEl && !reduced) {
      prepareStrokeDraw(rectEl);
      gsap.to(rectEl, {
        strokeDashoffset: 0,
        duration: 0.95,
        ease: 'power2.inOut',
      });
    }

    scrambleTo(sheetEl, 'SHEET 00: INITIALISING', 0.85, 0.05);
    scrambleTo(projEl, 'BUSINESS SYSTEMS', 0.85, 0.15);
    scrambleTo(byEl, 'AZ // DHAKA, BD', 0.85, 0.25);

    const state = { v: 0 };
    gsap.to(state, {
      v: 100,
      duration: reduced ? 0.4 : 1.35,
      ease: 'power2.inOut',
      onUpdate: () => {
        const pct = Math.round(state.v);
        if (pctEl) pctEl.textContent = `${String(pct).padStart(3, '0')}%`;
        if (fillEl) fillEl.style.transform = `scaleX(${state.v / 100})`;
      },
      onComplete: () => {
        if (sheetEl) sheetEl.textContent = 'SHEET 01: READY';
        gsap.to(preloader, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: reduced ? 0.2 : 0.72,
          ease: 'expo.inOut',
          delay: 0.12,
          onComplete: () => {
            preloader.style.display = 'none';
            resolve();
          },
        });
      },
    });
  });
}

