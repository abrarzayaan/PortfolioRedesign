import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { motionPrefs } from './quality';

gsap.registerPlugin(ScrollTrigger, Flip, SplitText, ScrambleTextPlugin, CustomEase);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

CustomEase.create('kineticOut', 'M0,0 C0.19,1 0.22,1 1,1');

export { gsap, ScrollTrigger, Flip, SplitText };

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%<>/_';

export function scrambleDecode(el: HTMLElement | null, finalStr: string, duration = 0.5): void {
  if (!el) return;
  if (motionPrefs.getState().reducedMotion) {
    el.textContent = finalStr;
    return;
  }

  gsap.killTweensOf(el);
  gsap.to(el, {
    duration,
    scrambleText: {
      text: finalStr,
      chars: GLYPHS,
      speed: 0.6,
      revealDelay: 0.06,
    },
    ease: 'none',
  });
}

/**
 * Zero-layout-thrash Magnetic Pull (`rect` cached on `pointerenter`, updated on RAF)
 */
export function initMagneticTargets(root: ParentNode = document): void {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  root.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    if (el.dataset.magBound === '1') return;
    el.dataset.magBound = '1';

    const strength = Number(el.getAttribute('data-magnetic') || '0.24');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.42, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.42, ease: 'power3.out' });

    let cachedRect: DOMRect | null = null;

    el.addEventListener('pointerenter', () => {
      cachedRect = el.getBoundingClientRect();
    });

    el.addEventListener(
      'pointermove',
      (e) => {
        if (motionPrefs.getState().reducedMotion || !cachedRect) return;
        const dx = e.clientX - (cachedRect.left + cachedRect.width / 2);
        const dy = e.clientY - (cachedRect.top + cachedRect.height / 2);
        xTo(dx * strength);
        yTo(dy * strength);
      },
      { passive: true }
    );

    el.addEventListener('pointerleave', () => {
      cachedRect = null;
      xTo(0);
      yTo(0);
    });
  });
}

/**
 * RAF-batched Radial Mouse Spotlight (`rect` cached on `pointerenter` — zero reflow per mouse tick)
 */
export function initSpotlightCards(root: ParentNode = document): void {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  root.querySelectorAll<HTMLElement>('.spotlight-card').forEach((card) => {
    if (card.dataset.spotBound === '1') return;
    card.dataset.spotBound = '1';

    let rect: DOMRect | null = null;
    let pending = false;
    let mx = 0;
    let my = 0;

    card.addEventListener('pointerenter', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener(
      'pointermove',
      (e) => {
        if (!rect) rect = card.getBoundingClientRect();
        mx = e.clientX - rect.left;
        my = e.clientY - rect.top;
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => {
          pending = false;
          card.style.setProperty('--mx', `${mx.toFixed(1)}px`);
          card.style.setProperty('--my', `${my.toFixed(1)}px`);
        });
      },
      { passive: true }
    );

    card.addEventListener('pointerleave', () => {
      rect = null;
    });
  });
}
