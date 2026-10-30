import { ScrollTrigger } from '../core/gsap-setup';
import { scrollToSheet } from '../core/lenis';
import { qualityManager } from '../core/quality';
import { draftingSound } from '../core/sound';

export function initNavigation(): void {
  const soundBtn = document.getElementById('sound-toggle');
  const soundLabel = document.getElementById('sound-label');
  const qualBtn = document.getElementById('quality-toggle');
  const qualLabel = document.getElementById('quality-label');

  const syncQual = () => {
    const s = qualityManager.getState();
    if (qualLabel) qualLabel.textContent = `3D: ${s.tier.toUpperCase()}`;
  };
  syncQual();
  qualityManager.subscribe(syncQual);

  soundBtn?.addEventListener('click', () => {
    const on = draftingSound.toggle();
    soundBtn.setAttribute('aria-pressed', String(on));
    soundBtn.classList.toggle('is-active', on);
    if (soundLabel) soundLabel.textContent = on ? 'SFX ON' : 'SFX OFF';
  });

  qualBtn?.addEventListener('click', () => {
    draftingSound.click();
    qualityManager.toggleTier();
  });

  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-nav-link]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      draftingSound.click();
      scrollToSheet(href);
    }
  });

  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#sheet-nav-list a'));
  navLinks.forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    ScrollTrigger.create({
      trigger: target,
      start: 'top 52%',
      end: 'bottom 52%',
      onToggle: (self) => a.classList.toggle('is-current', self.isActive),
    });
  });
}

