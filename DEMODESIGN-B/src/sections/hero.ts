import { HERO_SPEC, SITE_META } from '../content/content';
import { gsap, prepareStrokeDraw, ScrollTrigger } from '../core/gsap-setup';
import { qualityManager } from '../core/quality';
import { wrapInSheet } from '../core/sheet-frame';
import { draftingSound } from '../core/sound';

export function renderHero(): string {
  const calloutsHtml = HERO_SPEC.layers
    .map(
      (l, i) => `
      <div class="iso-callout" data-iso-callout="${i}" tabindex="0">
        <div class="callout-leader" aria-hidden="true">
          <svg viewBox="0 0 48 12" class="leader-svg">
            <line x1="0" y1="6" x2="42" y2="6" stroke="currentColor" stroke-width="1.4" />
            <circle cx="44" cy="6" r="2.6" fill="currentColor" />
          </svg>
        </div>
        <div class="callout-text">
          <span class="callout-code">${l.code} // ${l.name}</span>
          <small>${l.spec}</small>
        </div>
      </div>
    `
    )
    .join('');

  const chainHtml = SITE_META.chain
    .map(
      (c, i) =>
        `<span class="chain-step">${c}</span>${
          i < SITE_META.chain.length - 1 ? '<span class="chain-sep">➝</span>' : ''
        }`
    )
    .join('');

  const bodyHtml = `
    <div class="hero-blueprint-grid">
      <div class="hero-copy-col">
        <div class="spec-meta-strip">
          <span class="spec-badge vermilion">END-TO-END BUSINESS BACKEND ARCHITECT</span>
          <span class="spec-badge">${SITE_META.location} · ${SITE_META.experience}</span>
        </div>

        <h1 class="hero-fraunces-h1">
          <span class="h1-mask"><span class="h1-line">I <em class="arch-word">architect<svg class="arch-underline" viewBox="0 0 260 12" preserveAspectRatio="none" aria-hidden="true"><path id="hero-arch-underline" d="M2 8 Q 130 2, 258 8" fill="none" stroke="#FF4D1C" stroke-width="3" stroke-linecap="round"/></svg></em></span></span>
          <span class="h1-mask"><span class="h1-line">the systems your</span></span>
          <span class="h1-mask"><span class="h1-line">business grows on.</span></span>
        </h1>

        <!-- Architectural Dimension Line beneath H1 -->
        <div class="hero-dimension-bar" aria-label="Scope Dimension: Business to System">
          <svg viewBox="0 0 520 26" class="dim-svg" preserveAspectRatio="none" aria-hidden="true">
            <line x1="2" y1="4" x2="2" y2="22" stroke="#101010" stroke-width="1.4" />
            <line x1="518" y1="4" x2="518" y2="22" stroke="#101010" stroke-width="1.4" />
            <line id="hero-dim-line" x1="8" y1="13" x2="512" y2="13" stroke="#101010" stroke-width="1.3" />
            <polygon points="4,13 13,9 13,17" fill="#101010" />
            <polygon points="516,13 507,9 507,17" fill="#101010" />
          </svg>
          <span class="dim-label">BUSINESS PROBLEM ➝ PRODUCTION ARCHITECTURE (45% ↓ SQL LATENCY · 99.9% UPTIME)</span>
        </div>

        <p class="hero-lead">${HERO_SPEC.sub}</p>

        <div class="hero-cta-row">
          <a href="${HERO_SPEC.primaryCta.href}" class="btn-vermilion" data-nav-link>
            <span>${HERO_SPEC.primaryCta.label}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="${HERO_SPEC.secondaryCta.href}" class="btn-outline-ink" data-nav-link>
            <span>${HERO_SPEC.secondaryCta.label}</span>
          </a>
        </div>

        <div class="hero-chain-box">
          <span class="mono-tiny">OWNERSHIP CHAIN // SCALE 1:1</span>
          <div class="chain-flow">${chainHtml}</div>
        </div>
      </div>

      <div class="hero-wireframe-col">
        <div class="wireframe-viewport-box">
          <div class="wf-header">
            <span>FIG 1.0 // EXPLODED SYSTEM ISOMETRIC</span>
            <span class="wf-hint">DRAG TO ORBIT · SCROLL TO EXPLODE</span>
          </div>

          <div class="wf-stage-grid">
            <div class="wf-canvas-holder">
              <canvas id="hero-wireframe-canvas" aria-label="3D Exploded Isometric System Architecture Wireframe"></canvas>
            </div>
            <div class="wf-callouts-col">
              ${calloutsHtml}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return wrapInSheet({
    id: 'hero',
    sheetNo: 'SHEET 01 / 10',
    sectionTag: '§01 ARCHITECTURAL ELEVATION & OVERVIEW',
    projectTitle: 'MD. SHAH ABRAR ZAHIN — PORTFOLIO',
    scale: '1 : 1',
    bodyHtml,
    extraClass: 'hero-sheet',
  });
}

export async function initHeroSection(): Promise<void> {
  const q = qualityManager.getState();
  const lines = document.querySelectorAll<HTMLElement>('#hero .h1-line');
  const underline = document.getElementById('hero-arch-underline') as SVGPathElement | null;
  const dimLine = document.getElementById('hero-dim-line') as SVGLineElement | null;
  const calloutEls = Array.from(document.querySelectorAll<HTMLElement>('[data-iso-callout]'));

  if (!q.reducedMotion) {
    gsap.fromTo(
      lines,
      { yPercent: 112 },
      { yPercent: 0, duration: 1.05, stagger: 0.09, ease: 'expo.out' }
    );

    if (underline) {
      prepareStrokeDraw(underline);
      gsap.to(underline, { strokeDashoffset: 0, duration: 0.9, delay: 0.35, ease: 'power3.out' });
    }

    if (dimLine) {
      prepareStrokeDraw(dimLine);
      gsap.to(dimLine, { strokeDashoffset: 0, duration: 1.0, delay: 0.45, ease: 'power3.out' });
    }
  }

  // Lazy-load Three.js Isometric Wireframe
  const canvas = document.getElementById('hero-wireframe-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const { IsometricWireframeScene } = await import('../webgl/wireframe-scene');
  const isoScene = new IsometricWireframeScene(canvas, (hoveredIdx) => {
    calloutEls.forEach((el, idx) => {
      el.classList.toggle('is-active', idx === hoveredIdx);
    });
  });

  // Hovering callout badges highlights corresponding 3D wireframe slab
  calloutEls.forEach((el, idx) => {
    el.addEventListener('pointerenter', () => {
      draftingSound.hover();
      isoScene.setHighlightedLayer(idx);
    });
    el.addEventListener('pointerleave', () => {
      isoScene.setHighlightedLayer(-1);
    });
    el.addEventListener('focus', () => isoScene.setHighlightedLayer(idx));
    el.addEventListener('blur', () => isoScene.setHighlightedLayer(-1));
  });

  // Scroll explodes wireframe slabs apart across the first 100vh
  if (!q.reducedMotion) {
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
      onUpdate: (self) => {
        isoScene.setExplodeProgress(0.28 + self.progress * 0.72);
      },
    });
  }
}

