import { gsap } from './gsap-setup';

export function initJourneyCursor(): void {
  const cursor = document.getElementById('journey-cursor');
  const pill = document.getElementById('j-cursor-pill');
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  if (!cursor || isCoarse) {
    if (cursor) cursor.style.display = 'none';
    return;
  }

  const qx = gsap.quickTo(cursor, 'x', { duration: 0.14, ease: 'power3.out' });
  const qy = gsap.quickTo(cursor, 'y', { duration: 0.14, ease: 'power3.out' });

  window.addEventListener(
    'pointermove',
    (e) => {
      cursor.classList.add('is-active');
      qx(e.clientX);
      qy(e.clientY);
    },
    { passive: true }
  );

  document.addEventListener('mouseover', (e) => {
    const t = e.target as HTMLElement;
    const actionEl = t.closest<HTMLElement>('[data-cursor]');
    const clickable = t.closest('a, button');
    cursor.classList.toggle('is-hover', Boolean(clickable || actionEl));

    const label = actionEl?.getAttribute('data-cursor') || '';
    if (pill) {
      pill.textContent = label;
      cursor.classList.toggle('has-pill', Boolean(label));
    }
  });
}

