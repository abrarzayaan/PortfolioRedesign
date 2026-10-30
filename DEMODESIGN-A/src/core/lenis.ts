import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap-setup';
import { motionPrefs } from './quality';

let lenisInstance: Lenis | null = null;
let smoothedVelocity = 0;
let rawVelocity = 0;
let scrollLocked = false;

export function initSmoothScroll(): Lenis | null {
  const progressBar = document.getElementById('scroll-progress-bar');

  const updateFallbackProgress = () => {
    if (!progressBar) return;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pct = Math.min(1, Math.max(0, window.scrollY / max));
    progressBar.style.transform = `scaleX(${pct.toFixed(4)})`;
  };

  // Exponential lerp damping delivers ultra-responsive 60-144Hz wheel & trackpad feel
  const lenis = new Lenis({
    lerp: 0.09,
    smoothWheel: !motionPrefs.getState().reducedMotion,
    syncTouch: false,
    wheelMultiplier: 0.95,
    autoRaf: false,
  });

  lenis.on('scroll', (e: { velocity?: number; progress?: number }) => {
    rawVelocity = e.velocity ?? 0;
    if (progressBar && typeof e.progress === 'number') {
      progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, e.progress)).toFixed(4)})`;
    }
    ScrollTrigger.update();
  });

  // Fallback native scroll progress for touch / reduced-motion
  window.addEventListener(
    'scroll',
    () => {
      if (!lenisInstance || motionPrefs.getState().reducedMotion) {
        updateFallbackProgress();
      }
    },
    { passive: true }
  );

  gsap.ticker.add((time) => {
    if (!motionPrefs.getState().reducedMotion && !scrollLocked) {
      lenis.raf(time * 1000);
    }
    // Smoothly damp velocity so velocity-marquees never stutter
    smoothedVelocity += (rawVelocity - smoothedVelocity) * 0.16;
    rawVelocity *= 0.88;
  });

  gsap.ticker.lagSmoothing(0);

  motionPrefs.subscribe((state) => {
    if (state.reducedMotion) {
      lenis.stop();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    } else if (!scrollLocked) {
      lenis.start();
    }
  });

  lenisInstance = lenis;
  if (motionPrefs.getState().reducedMotion) {
    lenis.stop();
  }

  return lenis;
}

export function getScrollVelocity(): number {
  return smoothedVelocity;
}

export function setPageScrollLocked(locked: boolean): void {
  scrollLocked = locked;
  if (lenisInstance) {
    if (locked) lenisInstance.stop();
    else if (!motionPrefs.getState().reducedMotion) lenisInstance.start();
  }
  document.body.style.overflow = locked ? 'hidden' : '';
}

export function scrollToAnchor(target: string | HTMLElement): void {
  if (lenisInstance && !motionPrefs.getState().reducedMotion) {
    lenisInstance.scrollTo(target, {
      offset: -76,
      lerp: 0.1,
    });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: motionPrefs.getState().reducedMotion ? 'auto' : 'smooth' });
}
