import { ScrollTrigger } from '../core/gsap-setup';
import { scrollToStop } from '../core/lenis';
import { qualityManager } from '../core/quality';
import { journeySound } from '../core/sound';

export function initNavigation(): void {
  const soundBtn = document.getElementById('sound-toggle');
  const soundLabel = document.getElementById('sound-label');
  const qualBtn = document.getElementById('quality-toggle');
  const qualLabel = document.getElementById('quality-label');

  const syncQual = () => {
    const s = qualityManager.getState();
    if (qualLabel) qualLabel.textContent = `FX: ${s.tier.toUpperCase()}`;
  };
  syncQual();
  qualityManager.subscribe(syncQual);

  soundBtn?.addEventListener('click', () => {
    const on = journeySound.toggle();
    soundBtn.setAttribute('aria-pressed', String(on));
    soundBtn.classList.toggle('is-active', on);
    if (soundLabel) soundLabel.textContent = on ? 'SFX ON' : 'SFX OFF';
  });

  qualBtn?.addEventListener('click', () => {
    journeySound.pop();
    qualityManager.toggleTier();
  });

  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-nav-link]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      journeySound.pop();
      scrollToStop(href);
    }
  });

  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('#stop-nav-links a'));
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const el = document.querySelector<HTMLElement>(href);
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 52%',
      end: 'bottom 52%',
      onToggle: (self) => link.classList.toggle('is-current', self.isActive),
    });
  });
}

