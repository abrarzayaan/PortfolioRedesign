import { SITE_META } from '../content/content';
import { gsap, prepareStrokeDraw, ScrollTrigger } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';

export function renderHero(): string {
  const chainPills = SITE_META.chain
    .map(
      (step, idx) =>
        `<span class="j-chain-chip">${step}</span>${
          idx < SITE_META.chain.length - 1 ? '<span class="j-chain-arrow">→</span>' : ''
        }`
    )
    .join('');

  return `
    <section id="hero" class="stage-section stage-cream" aria-label="Stop 00: Customer">
      <div class="container hero-stage-inner">
        <div class="stop-header-row">
          <span class="stop-pill dark">STOP 00 // CUSTOMER PLACES AN ORDER</span>
          <span class="stop-pill outline">${SITE_META.location} · ${SITE_META.experience}</span>
        </div>

        <h1 class="hero-bricolage-h1" id="hero-var-h1">
          <span class="hero-word-row">I architect the systems</span>
          <span class="hero-word-row">
            your business
            <em class="tomato-word">
              grows
              <svg class="tomato-underline" viewBox="0 0 260 18" preserveAspectRatio="none" aria-hidden="true">
                <path id="hero-tomato-path" d="M4 13 Q 130 2, 256 12" fill="none" stroke="#FF5A36" stroke-width="5" stroke-linecap="round"/>
              </svg>
            </em>
            on.
            <span class="inline-waiting-packet" title="Order #001 waiting to depart">
              <i></i>
              <small>ORDER #001</small>
            </span>
          </span>
        </h1>

        <p class="hero-subcopy">
          End-to-end backend architecture, data, and distributed systems that turn business problems into measurable growth.
        </p>

        <div class="hero-cta-bar">
          <a href="#contact" class="btn-bold-ink" data-nav-link data-cursor="LET'S TALK">
            <span>Let’s fix your bottleneck</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="#positioning" class="btn-bold-outline" data-nav-link data-cursor="RIDE PACKET">
            <span>Follow the order ↓</span>
          </a>
        </div>

        <div class="hero-chain-strip" aria-label="End-to-end ownership chain">
          <span class="mono-kicker">THE REQUEST’S FULL JOURNEY (OWNED END-TO-END):</span>
          <div class="j-chain-wrap">${chainPills}</div>
        </div>
      </div>
    </section>
  `;
}

export function initHeroAnimations(): void {
  const q = qualityManager.getState();
  const h1 = document.getElementById('hero-var-h1');
  const underline = document.getElementById('hero-tomato-path') as SVGPathElement | null;

  if (q.reducedMotion) return;

  gsap.from('.hero-word-row', {
    y: 44,
    rotation: 1.4,
    autoAlpha: 0,
    duration: 0.95,
    stagger: 0.1,
    ease: 'expo.out',
  });

  if (underline) {
    prepareStrokeDraw(underline);
    gsap.to(underline, {
      strokeDashoffset: 0,
      duration: 0.85,
      delay: 0.35,
      ease: 'power3.out',
    });
  }

  // Variable-font width (`wdth`) & weight (`wght`) scroll animation on Bricolage Grotesque
  if (h1) {
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {
        const wdth = (82 + self.progress * 18).toFixed(1);
        const wght = Math.round(720 + self.progress * 80);
        h1.style.fontVariationSettings = `'wdth' ${wdth}, 'wght' ${wght}`;
      },
    });
  }
}

