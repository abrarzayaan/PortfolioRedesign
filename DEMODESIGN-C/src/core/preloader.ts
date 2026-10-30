import { gsap, prepareStrokeDraw } from './gsap-setup';
import { qualityManager } from './quality';

export function runPacketPreloader(): Promise<void> {
  return new Promise((resolve) => {
    const preloader = document.getElementById('preloader');
    const ring = document.getElementById('preloader-ring-circle') as SVGCircleElement | null;
    const pctEl = document.getElementById('preloader-pct');
    const txtEl = document.getElementById('preloader-order-txt');

    if (!preloader) {
      resolve();
      return;
    }

    const reduced = qualityManager.getState().reducedMotion;
    let totalLen = 314.16;

    if (ring) {
      totalLen = prepareStrokeDraw(ring);
    }

    const state = { v: 0 };
    gsap.to(state, {
      v: 100,
      duration: reduced ? 0.4 : 1.35,
      ease: 'power2.inOut',
      onUpdate: () => {
        const pct = Math.round(state.v);
        if (pctEl) pctEl.textContent = `${pct}%`;
        if (ring) ring.style.strokeDashoffset = `${totalLen * (1 - state.v / 100)}`;
        if (txtEl && pct > 65) {
          txtEl.textContent = 'Order #001 dispatched into pipeline…';
        }
      },
      onComplete: () => {
        // Packet expands as a circle revealing Hero in Cream (#FFE9D6)
        gsap.to(preloader, {
          clipPath: 'circle(0% at 50% 42%)',
          duration: reduced ? 0.2 : 0.72,
          ease: 'expo.inOut',
          delay: 0.1,
          onComplete: () => {
            preloader.style.display = 'none';
            resolve();
          },
        });
      },
    });
  });
}

