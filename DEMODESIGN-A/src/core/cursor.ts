import { gsap } from './gsap-setup';
import { motionPrefs } from './quality';

/**
 * 120fps Ticker-Driven Blend-Mode & Action-Pill Kinetic Cursor
 */
export function initKineticCursor(): void {
  const cursor = document.getElementById('kinetic-cursor');
  const pill = document.getElementById('k-cursor-pill');
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  if (!cursor || isCoarse) {
    if (cursor) cursor.style.display = 'none';
    return;
  }

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let curX = targetX;
  let curY = targetY;
  let hasMoved = false;
  let lastEl: EventTarget | null = null;

  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'touch') return;
      targetX = e.clientX;
      targetY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        curX = targetX;
        curY = targetY;
      }
      if (!motionPrefs.getState().reducedMotion) {
        cursor.classList.add('is-visible');
      }
    },
    { passive: true }
  );

  document.documentElement.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-visible');
  });

  window.addEventListener('pointerdown', () => cursor.classList.add('is-pressed'), { passive: true });
  window.addEventListener('pointerup', () => cursor.classList.remove('is-pressed'), { passive: true });

  document.addEventListener(
    'pointerover',
    (e) => {
      if (e.target === lastEl) return;
      lastEl = e.target;
      const target = e.target as HTMLElement | null;
      if (!target || !target.closest) return;

      const pillEl = target.closest<HTMLElement>('[data-cursor]');
      const blendEl = target.closest<HTMLElement>('[data-cursor-blend]');
      const interactive = target.closest('a, button, summary');

      const pillLabel = pillEl?.getAttribute('data-cursor') || '';
      if (pill && pill.textContent !== pillLabel) {
        pill.textContent = pillLabel;
      }

      cursor.classList.toggle('mode-pill', Boolean(pillLabel));
      cursor.classList.toggle('mode-blend', !pillLabel && Boolean(blendEl));
      cursor.classList.toggle('mode-link', !pillLabel && !blendEl && Boolean(interactive));
    },
    { passive: true }
  );

  motionPrefs.subscribe((s) => {
    if (s.reducedMotion) {
      cursor.classList.remove('is-visible');
    }
  });

  gsap.ticker.add((_, deltaTime) => {
    if (!hasMoved || motionPrefs.getState().reducedMotion || document.hidden) return;
    const dt = Math.min(40, deltaTime || 16.67) / 16.67;
    const alpha = 1 - Math.pow(1 - 0.26, dt);
    curX += (targetX - curX) * alpha;
    curY += (targetY - curY) * alpha;
    cursor.style.transform = `translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0)`;
  });
}
