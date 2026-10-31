import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';

import { initMagneticTargets, initSpotlightCards, ScrollTrigger } from './core/gsap-setup';
import { initKineticCursor } from './core/cursor';
import { initSmoothScroll } from './core/lenis';
import { runShutterPreloader } from './core/preloader';

import { initNavigation } from './sections/nav';
import { initHeroAnimations, playHeroEntrance, renderHero } from './sections/hero';
import { initPositioningAnimations, renderPositioning } from './sections/positioning';
import { initServicesAnimations, renderServices } from './sections/services';
import { initWorkInteractions, renderWork } from './sections/work';
import { initProofAnimations, renderProof } from './sections/proof';
import { initToolkitAnimations, renderToolkit } from './sections/toolkit';
import { initProcessAnimations, renderProcess } from './sections/process';
import { initTimelineAnimations, renderTimeline } from './sections/timeline';
import { initDirectionSwitchboard, renderDirection } from './sections/direction';
import { initContactInteractions, renderContact } from './sections/contact';
import { initFooter, renderFooter } from './sections/footer';

function mountMonograph(): void {
  const app = document.getElementById('monograph-app');
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
    renderContact(),
    renderFooter(),
  ].join('');
}

async function waitForFontsSafe(timeoutMs = 700): Promise<void> {
  if (!('fonts' in document)) return;
  await Promise.race([
    document.fonts.ready.catch(() => undefined),
    new Promise((r) => window.setTimeout(r, timeoutMs)),
  ]);
}

async function bootstrap(): Promise<void> {
  mountMonograph();

  initSmoothScroll();
  initKineticCursor();
  initMagneticTargets();
  initSpotlightCards();
  initNavigation();

  // Wait for web fonts first (takes ~50-100ms)
  await waitForFontsSafe();

  // Pre-initialize downstream sections & calculate ScrollTriggers while preloader covers the screen
  initPositioningAnimations();
  initServicesAnimations();
  initWorkInteractions();
  initProofAnimations();
  initToolkitAnimations();
  initProcessAnimations();
  initTimelineAnimations();
  initDirectionSwitchboard();
  initContactInteractions();
  initFooter();

  ScrollTrigger.sort();
  ScrollTrigger.refresh();

  // Smoothly open shutter preloader and reveal hero with zero main-thread CPU interference
  await runShutterPreloader(() => {
    playHeroEntrance();
  });

  initHeroAnimations();
}

void bootstrap();
