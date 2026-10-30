import { SWIPE_CARDS } from '../content/content';
import { gsap } from '../core/gsap-setup';
import { journeySound } from '../core/sound';

export function renderServices(): string {
  const cardsHtml = SWIPE_CARDS.map(
    (c, idx) => `
      <article
        class="deck-card"
        data-deck-idx="${idx}"
        aria-label="${c.no}: ${c.problem}"
        data-cursor="DRAG / FLIP"
      >
        <div class="deck-card-top">
          <span class="deck-no">${c.no}</span>
          <span class="deck-outcome-badge">${c.badge}</span>
        </div>

        <h3 class="deck-problem">${c.problem}</h3>

        <div class="deck-columns">
          <div class="deck-box">
            <span class="mono-kicker">WHAT I DO AT THIS LAYER</span>
            <p>${c.action}</p>
          </div>
          <div class="deck-box highlight">
            <span class="mono-kicker">MEASURED / EXPECTED OUTCOME</span>
            <p>${c.outcome}</p>
          </div>
        </div>

        <div class="deck-card-footer">
          <span>Swipe, drag, or click Flip Card →</span>
          <strong>ORDER #001 VALIDATED ✔</strong>
        </div>
      </article>
    `
  ).join('');

  const dotsHtml = SWIPE_CARDS.map(
    (_, idx) => `
      <button
        type="button"
        class="deck-dot ${idx === 0 ? 'is-active' : ''}"
        data-jump-card="${idx}"
        aria-label="Jump to problem card ${idx + 1}"
      >0${idx + 1}</button>
    `
  ).join('');

  return `
    <section id="services" class="stage-section stage-cobalt" aria-labelledby="api-heading">
      <div class="container">
        <div class="stop-header-row split">
          <div>
            <span class="stop-pill light">STOP 02 // API LAYER — 8 BUSINESS BOTTLENECKS</span>
            <h2 id="api-heading" class="stage-h2 light">
              Flip through the problems I eliminate.
            </h2>
          </div>

          <div class="deck-controls">
            <button type="button" id="deck-prev" class="deck-btn" aria-label="Previous problem card">← Prev</button>
            <button type="button" id="deck-next" class="deck-btn primary" aria-label="Flip to next problem card">Flip Card ↻</button>
          </div>
        </div>

        <div class="swipe-deck-stage" id="swipe-deck-stage">
          ${cardsHtml}
        </div>

        <div class="deck-dots-bar" role="tablist" aria-label="Problem cards index">
          ${dotsHtml}
        </div>
      </div>
    </section>
  `;
}

export function initServicesDeck(): void {
  const stage = document.getElementById('swipe-deck-stage');
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.deck-card'));
  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-jump-card]'));
  const prevBtn = document.getElementById('deck-prev');
  const nextBtn = document.getElementById('deck-next');

  if (!stage || cards.length === 0) return;

  let activeIndex = 0;
  const total = cards.length;

  const layoutDeck = (animate = true) => {
    cards.forEach((card, i) => {
      const rel = (i - activeIndex + total) % total;
      const visibleStack = rel <= 3;

      const props = {
        x: 0,
        y: visibleStack ? rel * 14 : 48,
        scale: visibleStack ? 1 - rel * 0.045 : 0.84,
        rotation: rel === 0 ? 0 : (rel % 2 === 0 ? 1 : -1) * rel * 1.3,
        opacity: rel === 0 ? 1 : visibleStack ? 1 - rel * 0.22 : 0,
        zIndex: total - rel,
        pointerEvents: rel === 0 ? 'auto' : 'none',
      };

      if (animate) {
        gsap.to(card, {
          ...props,
          duration: 0.48,
          ease: 'expo.out',
        });
      } else {
        gsap.set(card, props);
      }
    });

    dots.forEach((d, idx) => d.classList.toggle('is-active', idx === activeIndex));

    const badge = cards[activeIndex].querySelector('.deck-outcome-badge');
    if (badge && animate) {
      gsap.fromTo(badge, { scale: 0.78 }, { scale: 1, duration: 0.55, ease: 'elastic.out(1.2, 0.5)' });
    }
  };

  layoutDeck(false);

  const stepCard = (delta: number) => {
    journeySound.pop(delta > 0 ? 640 : 480);
    activeIndex = (activeIndex + delta + total) % total;
    layoutDeck(true);
  };

  nextBtn?.addEventListener('click', () => stepCard(1));
  prevBtn?.addEventListener('click', () => stepCard(-1));

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = Number(dot.getAttribute('data-jump-card') || '0');
      journeySound.pop();
      activeIndex = idx;
      layoutDeck(true);
    });
  });

  // Pointer drag / touch swipe on top card
  let startX = 0;
  let dragging = false;

  stage.addEventListener('pointerdown', (e) => {
    if ((e.target as HTMLElement).closest('button')) return;
    dragging = true;
    startX = e.clientX;
  });

  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    gsap.set(cards[activeIndex], { x: dx * 0.65, rotation: dx * 0.04 });
  });

  window.addEventListener('pointerup', (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 55) {
      stepCard(dx < 0 ? 1 : -1);
    } else if (Math.abs(dx) < 6) {
      // Single click on card flips to next
      stepCard(1);
    } else {
      layoutDeck(true);
    }
  });
}

