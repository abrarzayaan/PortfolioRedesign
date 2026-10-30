import { gsap } from './gsap-setup';

export function initDraftingCursor(): void {
  const cursor = document.getElementById('drafting-cursor');
  const coords = document.getElementById('cursor-coords');
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  if (!cursor || isCoarse) {
    if (cursor) cursor.style.display = 'none';
    return;
  }

  const setX = gsap.quickTo(cursor, 'x', { duration: 0.1, ease: 'power3.out' });
  const setY = gsap.quickTo(cursor, 'y', { duration: 0.1, ease: 'power3.out' });

  window.addEventListener(
    'pointermove',
    (e) => {
      cursor.classList.add('is-active');
      setX(e.clientX);
      setY(e.clientY);
      if (coords) {
        const px = String(Math.round(e.clientX)).padStart(4, '0');
        const py = String(Math.round(e.clientY)).padStart(4, '0');
        coords.textContent = `x: ${px}  y: ${py}`;
      }
    },
    { passive: true }
  );

  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const isInteractive = Boolean(target.closest('a, button, input, textarea, select, [data-interactive]'));
    const inLens = Boolean(target.closest('.lens-stage'));
    cursor.classList.toggle('is-hover', isInteractive);
    cursor.classList.toggle('in-lens-stage', inLens);
  });
}

