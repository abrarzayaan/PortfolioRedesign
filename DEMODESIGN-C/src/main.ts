import './styles/tokens.css';
import './styles/base.css';
import './styles/sections.css';

import { ScrollTrigger } from './core/gsap-setup';
import { initJourneyCursor } from './core/cursor';
import { initSmoothScroll } from './core/lenis';
import { initLiquidBackground, initPacketJourney } from './core/packet-journey';
import { runPacketPreloader } from './core/preloader';

import { initNavigation } from './sections/nav';
import { initHeroAnimations, renderHero } from './sections/hero';
import { initPositioningAnimations, renderPositioning } from './sections/positioning';
import { initServicesDeck, renderServices } from './sections/services';
import { initWorkPosters, renderWork } from './sections/work';
import { initProofAndRace, renderProof } from './sections/proof';
import { initPhysicsToolkit, renderToolkit } from './sections/toolkit';
import { initProcessAndLogs, renderProcessAndLogs } from './sections/process';
import { initScaleSimulation, renderDirection } from './sections/direction';
import { initContactAndFooter, renderContactAndFooter } from './sections/contact';

function mountJourneySections(): void {
  const wrap = document.getElementById('journey-wrap');
  if (!wrap) return;

  wrap.innerHTML = [
    renderHero(),
    renderPositioning(),
    renderServices(),
    renderWork(),
    renderProof(),
    renderToolkit(),
    renderProcessAndLogs(),
    renderDirection(),
    renderContactAndFooter(),
  ].join('');
}

async function bootstrap(): Promise<void> {
  mountJourneySections();

  initSmoothScroll();
  initJourneyCursor();

  // Boot fullscreen WebGL liquid stage shader concurrently with Order #001 preloader
  const liquidReady = initLiquidBackground();
  await runPacketPreloader();
  await liquidReady;

  // Initialize section controllers (pinned C-S4 Queue/Worker section initialized before downstream triggers)
  initHeroAnimations();
  initPositioningAnimations();
  initServicesDeck();
  initWorkPosters();
  initProofAndRace();
  void initPhysicsToolkit();
  initProcessAndLogs();
  initScaleSimulation();
  initContactAndFooter();

  // Navigation active-stop observers & Master "Ride the Packet" scroll coordinator
  initNavigation();
  initPacketJourney();

  ScrollTrigger.sort();
  ScrollTrigger.refresh();
}

void bootstrap();

