import { gsap } from './gsap-setup';
import { motionPrefs } from './quality';

/**
 * A-S0: Slot-Counter + Split-Shutter Curtain Reveal
 */
export function runShutterPreloader(): Promise<void> {
  return new Promise((resolve) => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('preloader-content');
    const numEl = document.getElementById('preloader-num');
    const barFill = document.getElementById('preloader-bar-fill');
    const topShutter = preloader?.querySelector<HTMLElement>('.shutter-top');
    const bottomShutter = preloader?.querySelector<HTMLElement>('.shutter-bottom');

    if (!preloader) {
      resolve();
      return;
    }

    const reduced = motionPrefs.getState().reducedMotion;
    const state = { v: 0 };

    gsap.to(state, {
      v: 100,
      duration: reduced ? 0.35 : 1.25,
      ease: 'kineticOut',
      onUpdate: () => {
        const rounded = Math.round(state.v);
        if (numEl) numEl.textContent = String(rounded).padStart(2, '0');
        if (barFill) barFill.style.transform = `scaleX(${(state.v / 100).toFixed(3)})`;
      },
      onComplete: () => {
        if (reduced) {
          preloader.style.display = 'none';
          resolve();
          return;
        }

        const tl = gsap.timeline({
          onComplete: () => {
            preloader.style.display = 'none';
            resolve();
          },
        });

        tl.to(content, {
          y: -24,
          autoAlpha: 0,
          duration: 0.28,
          ease: 'power2.in',
        })
          .to(
            topShutter || preloader,
            {
              yPercent: -101,
              duration: 0.78,
              ease: 'expo.inOut',
            },
            0.18
          )
          .to(
            bottomShutter || preloader,
            {
              yPercent: 101,
              duration: 0.78,
              ease: 'expo.inOut',
            },
            0.18
          );
      },
    });
  });
}
