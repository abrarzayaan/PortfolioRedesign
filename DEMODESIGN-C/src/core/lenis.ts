import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap-setup';
import { qualityManager } from './quality';

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): Lenis | null {
  if (qualityManager.getState().reducedMotion) return null;

  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.96,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  lenisInstance = lenis;
  return lenis;
}

export function scrollToStop(target: string | HTMLElement): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -68, duration: 1.25 });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  el?.scrollIntoView({ behavior: qualityManager.getState().reducedMotion ? 'auto' : 'smooth' });
}

export function setScrollLocked(locked: boolean): void {
  if (lenisInstance) {
    if (locked) lenisInstance.stop();
    else lenisInstance.start();
  }
  document.body.style.overflow = locked ? 'hidden' : '';
}

