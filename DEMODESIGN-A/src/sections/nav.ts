import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { scrollToAnchor, setPageScrollLocked } from '../core/lenis';
import { motionPrefs } from '../core/quality';
import { uiAudio } from '../core/sound';

export function initNavigation(): void {
  const soundBtn = document.getElementById('sound-toggle');
  const soundLabel = document.getElementById('sound-label');
  const mndSoundBtn = document.getElementById('mnd-sound-btn');

  const motionBtn = document.getElementById('motion-toggle');
  const motionLabel = document.getElementById('motion-label');
  const mndMotionBtn = document.getElementById('mnd-motion-btn');

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuLabel = document.getElementById('mm-label');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  const syncSoundUi = () => {
    const active = uiAudio.isEnabled();
    soundBtn?.setAttribute('aria-pressed', String(active));
    soundBtn?.classList.toggle('is-active', active);
    if (soundLabel) soundLabel.textContent = active ? 'SFX ON' : 'SFX OFF';
    if (mndSoundBtn) mndSoundBtn.textContent = active ? 'SFX ON' : 'SFX OFF';
  };

  const toggleSound = () => {
    uiAudio.toggle();
    syncSoundUi();
  };

  soundBtn?.addEventListener('click', toggleSound);
  mndSoundBtn?.addEventListener('click', toggleSound);

  const syncMotionUi = () => {
    const reduced = motionPrefs.getState().reducedMotion;
    const label = reduced ? 'MOTION: CALM' : 'MOTION: FULL';
    if (motionLabel) motionLabel.textContent = label;
    if (mndMotionBtn) mndMotionBtn.textContent = label;
    motionBtn?.setAttribute('aria-pressed', String(reduced));
  };
  syncMotionUi();
  motionPrefs.subscribe(syncMotionUi);

  const handleMotionToggle = () => {
    uiAudio.tick(520);
    motionPrefs.toggleMotion();
  };
  motionBtn?.addEventListener('click', handleMotionToggle);
  mndMotionBtn?.addEventListener('click', handleMotionToggle);

  // Responsive Mobile Drawer Open / Close
  let menuOpen = false;
  const setMobileMenu = (open: boolean) => {
    if (!mobileDrawer || menuOpen === open) return;
    menuOpen = open;
    mobileMenuBtn?.setAttribute('aria-expanded', String(open));
    mobileMenuBtn?.classList.toggle('is-open', open);
    if (mobileMenuLabel) mobileMenuLabel.textContent = open ? 'Close' : 'Menu';

    if (open) {
      mobileDrawer.hidden = false;
      setPageScrollLocked(true);
      requestAnimationFrame(() => mobileDrawer.classList.add('is-open'));
      if (!motionPrefs.getState().reducedMotion) {
        gsap.fromTo(
          '.mnd-links li',
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.035, ease: 'kineticOut' }
        );
      }
    } else {
      mobileDrawer.classList.remove('is-open');
      setPageScrollLocked(false);
      window.setTimeout(() => {
        if (!menuOpen) mobileDrawer.hidden = true;
      }, 280);
    }
  };

  mobileMenuBtn?.addEventListener('click', () => {
    uiAudio.tick(580);
    setMobileMenu(!menuOpen);
  });

  document.querySelectorAll('[data-close-mnav]').forEach((el) => {
    el.addEventListener('click', () => setMobileMenu(false));
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) setMobileMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1120 && menuOpen) setMobileMenu(false);
  });

  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-nav-link]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      uiAudio.tick(600);
      if (menuOpen) setMobileMenu(false);
      scrollToAnchor(href);
    }
  });

  // Highlight active section in desktop nav
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('#nav-links a'));
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const sec = document.querySelector<HTMLElement>(href);
    if (!sec) return;

    ScrollTrigger.create({
      trigger: sec,
      start: 'top 48%',
      end: 'bottom 48%',
      onToggle: (self) => link.classList.toggle('is-active', self.isActive),
    });
  });
}
