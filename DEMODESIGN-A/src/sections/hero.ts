import { HERO_COPY, PROFILE_META } from '../content/content';
import { gsap, SplitText } from '../core/gsap-setup';
import { getScrollVelocity } from '../core/lenis';
import { motionPrefs } from '../core/quality';

function wrapProximityChars(text: string): string {
  return text
    .split(' ')
    .map(
      (word) =>
        `<span class="prox-word">${Array.from(word)
          .map((ch) => `<span class="prox-char">${ch}</span>`)
          .join('')}</span>`
    )
    .join(' ');
}

export function renderHero(): string {
  const statsHtml = HERO_COPY.quickStats
    .map(
      (s) => `
      <div class="hero-stat-cell">
        <strong>${s.val}</strong>
        <span>${s.label}</span>
      </div>
    `
    )
    .join('');

  const marqueeItems = [...PROFILE_META.chain, ...PROFILE_META.chain]
    .map(
      (step) => `
      <span class="marquee-step">
        <em>${step}</em>
        <i aria-hidden="true">✦</i>
      </span>
    `
    )
    .join('');

  return `
    <section id="hero" class="k-section theme-dark hero-section" aria-label="Introduction">
      <div class="k-container hero-inner">
        <div class="hero-meta-bar">
          <span class="meta-pill">
            <i class="live-dot" aria-hidden="true"></i>
            ${HERO_COPY.eyebrow}
          </span>
          <span class="meta-mono">${PROFILE_META.subRole}</span>
        </div>

        <h1 class="hero-display-h1" id="hero-h1" data-cursor-blend>
          <span class="line-mask">
            <span class="line-inner">${wrapProximityChars(HERO_COPY.h1Line1)}</span>
          </span>
          <span class="line-mask">
            <span class="line-inner">
              ${wrapProximityChars(HERO_COPY.h1Line2Prefix)}
              <em class="serif-accent">${HERO_COPY.h1Accent}</em>
              ${wrapProximityChars(HERO_COPY.h1Line2Suffix)}
            </span>
          </span>
        </h1>

        <div class="hero-lead-grid">
          <p class="hero-subcopy" id="hero-subcopy">
            ${HERO_COPY.subcopy}
          </p>

          <div class="hero-cta-group">
            <a
              href="#contact"
              class="btn-kinetic primary"
              data-nav-link
              data-magnetic="0.24"
              data-cursor="START CALL"
            >
              <span class="roll-wrap">
                <span data-text="${HERO_COPY.primaryCta} →">${HERO_COPY.primaryCta} →</span>
              </span>
            </a>

            <a
              href="#work"
              class="btn-kinetic ghost"
              data-nav-link
              data-magnetic="0.2"
            >
              <span class="roll-wrap">
                <span data-text="${HERO_COPY.secondaryCta} ↓">${HERO_COPY.secondaryCta} ↓</span>
              </span>
            </a>
          </div>
        </div>

        <div class="hero-stats-strip" aria-label="Verified production metrics">
          ${statsHtml}
        </div>
      </div>

      <!-- Scroll-Velocity Kinetic Marquee (animmasterlib.dev signature) -->
      <div class="velocity-marquee" aria-label="End-to-end ownership chain">
        <div class="velocity-marquee-track" id="hero-marquee-track">
          <div class="marquee-group">${marqueeItems}</div>
          <div class="marquee-group" aria-hidden="true">${marqueeItems}</div>
        </div>
      </div>
    </section>
  `;
}

export function initHeroAnimations(): void {
  const reduced = motionPrefs.getState().reducedMotion;
  const lineInners = document.querySelectorAll<HTMLElement>('#hero-h1 .line-inner');
  const subcopy = document.getElementById('hero-subcopy');
  const proxChars = Array.from(document.querySelectorAll<HTMLElement>('#hero-h1 .prox-char'));
  const marqueeTrack = document.getElementById('hero-marquee-track');

  if (!reduced) {
    gsap.from(lineInners, {
      yPercent: 112,
      duration: 1.0,
      stagger: 0.1,
      ease: 'kineticOut',
      clearProps: 'transform',
    });

    if (subcopy) {
      const splitSub = new SplitText(subcopy, { type: 'lines' });
      gsap.from(splitSub.lines, {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.06,
        delay: 0.18,
        ease: 'power3.out',
        onComplete: () => {
          // Revert SplitText lines so responsive resizing always wraps cleanly
          splitSub.revert();
        },
      });
    }

    gsap.from('.hero-stat-cell', {
      y: 18,
      autoAlpha: 0,
      duration: 0.65,
      stagger: 0.07,
      delay: 0.28,
      ease: 'power3.out',
    });
  }

  // Zero-Reflow GPU-Composited Mouse Proximity Typography Effect
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const heroEl = document.getElementById('hero-h1');

  if (heroEl && !isCoarse && proxChars.length > 0) {
    interface CharNode {
      el: HTMLElement;
      relX: number;
      relY: number;
      curT: number;
      targetT: number;
    }

    let heroRect: DOMRect | null = null;
    let pointerInside = false;
    let localMouseX = -999;
    let localMouseY = -999;

    const nodes: CharNode[] = proxChars.map((el) => ({
      el,
      relX: 0,
      relY: 0,
      curT: 0,
      targetT: 0,
    }));

    const measureRelativeOffsets = () => {
      const base = heroEl.getBoundingClientRect();
      heroRect = base;
      for (let i = 0; i < nodes.length; i++) {
        const r = nodes[i].el.getBoundingClientRect();
        nodes[i].relX = r.left - base.left + r.width / 2;
        nodes[i].relY = r.top - base.top + r.height / 2;
      }
    };

    // Measure once after hero slide-in settles, and on container resize only (never on scroll!)
    window.setTimeout(measureRelativeOffsets, 1050);
    const ro = new ResizeObserver(() => measureRelativeOffsets());
    ro.observe(heroEl);

    heroEl.addEventListener('pointerenter', () => {
      heroRect = heroEl.getBoundingClientRect();
      pointerInside = true;
    });

    heroEl.addEventListener(
      'pointermove',
      (e) => {
        if (!heroRect) heroRect = heroEl.getBoundingClientRect();
        localMouseX = e.clientX - heroRect.left;
        localMouseY = e.clientY - heroRect.top;
      },
      { passive: true }
    );

    heroEl.addEventListener('pointerleave', () => {
      pointerInside = false;
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].targetT = 0;
      }
    });

    gsap.ticker.add((_, deltaTime) => {
      if (motionPrefs.getState().reducedMotion || document.hidden) return;
      const dt = Math.min(40, deltaTime || 16.67) / 16.67;
      const lerpFactor = 1 - Math.pow(1 - 0.22, dt);
      const radius = 165;

      let anyActive = pointerInside;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (pointerInside) {
          const d = Math.hypot(localMouseX - n.relX, localMouseY - n.relY);
          const raw = Math.max(0, 1 - d / radius);
          n.targetT = raw * raw * (3 - 2 * raw);
        }

        if (Math.abs(n.targetT - n.curT) > 0.002) {
          anyActive = true;
          n.curT += (n.targetT - n.curT) * lerpFactor;
          const lift = (-n.curT * 7.5).toFixed(2);
          const scale = (1 + n.curT * 0.065).toFixed(3);
          n.el.style.transform = `translate3d(0, ${lift}px, 0) scale(${scale})`;
          n.el.classList.toggle('is-prox-lit', n.curT > 0.32);
        } else if (n.targetT === 0 && n.curT !== 0) {
          n.curT = 0;
          n.el.style.transform = '';
          n.el.classList.remove('is-prox-lit');
        }
      }
      void anyActive;
    });
  }

  // Smooth Scroll-Velocity Kinetic Marquee
  if (marqueeTrack) {
    let xPercent = 0;
    let dir = -1;
    let currentSkew = 0;

    gsap.ticker.add((_, deltaTime) => {
      if (motionPrefs.getState().reducedMotion || document.hidden) return;
      const dt = Math.min(40, deltaTime || 16.67) / 16.67;
      const vel = getScrollVelocity();
      if (Math.abs(vel) > 0.35) {
        dir = vel > 0 ? -1 : 1;
      }

      const speed = 0.032 + Math.min(0.26, Math.abs(vel) * 0.011);
      xPercent += speed * dir * dt;
      if (xPercent <= -50) xPercent += 50;
      if (xPercent > 0) xPercent -= 50;

      const targetSkew = gsap.utils.clamp(-5.5, 5.5, vel * 0.12);
      currentSkew += (targetSkew - currentSkew) * 0.14;

      marqueeTrack.style.transform = `translate3d(${xPercent.toFixed(3)}%, 0, 0) skewX(${currentSkew.toFixed(2)}deg)`;
    });
  }
}
