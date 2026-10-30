import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';

import { ScrollTrigger } from './core/gsap-setup';
import { initSmoothScroll } from './core/lenis';
import { initDraftingCursor } from './core/cursor';
import { initLensStages } from './core/lens';
import { runDraftingPreloader } from './core/preloader';

import { initNavigation } from './sections/nav';
import { renderHero, initHeroSection } from './sections/hero';
import { renderPositioning, initPositioningSection } from './sections/positioning';
import { renderServices } from './sections/services';
import { renderWork, initWorkSection } from './sections/work';
import { renderProof, initProofSection } from './sections/proof';
import { renderToolkit, initToolkitSection } from './sections/toolkit';
import { renderProcess, initProcessSection } from './sections/process';
import { renderTimeline, initTimelineSection } from './sections/timeline';
import { renderDirection, initDirectionSection } from './sections/direction';
import { renderContactAndFooter, initContactAndFooter } from './sections/contact';

function mountAllSheets(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = [
    renderHero(),
    renderPositioning(),
    renderServices(),
    renderWork(),
    renderProof(),
    renderToolkit(),
    renderProcess(),
    renderTimeline(),
    renderDirection(),
    renderContactAndFooter(),
  ].join('');
}

async function bootstrap(): Promise<void> {
  // 1. Mount semantic HTML sheets immediately for SEO, screen readers & fast first paint
  mountAllSheets();

  // 2. Boot drafting cursor, smooth scroll, navigation & dual-layer Lens stages
  initSmoothScroll();
  initDraftingCursor();
  initNavigation();
  initLensStages();

  // 3. Run B-S0 Preloader in parallel with lazy-loaded Three.js Hero Wireframe
  const heroPromise = initHeroSection().catch((err) => {
    console.warn('3D Wireframe fallback:', err);
  });

  await runDraftingPreloader();
  await heroPromise;

  // 4. Initialize sheet-by-sheet GSAP animations & interactive workbenches
  initPositioningSection();
  initWorkSection();
  initProofSection();
  initToolkitSection();
  initProcessSection();
  initTimelineSection();
  initDirectionSection();
  initContactAndFooter();

  ScrollTrigger.sort();
  ScrollTrigger.refresh();
}

bootstrap();

