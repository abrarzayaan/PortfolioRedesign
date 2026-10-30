import { STAGE_STOPS } from '../content/content';
import { ScrollTrigger } from './gsap-setup';
import { qualityManager } from './quality';
import type { LiquidStageScene } from '../webgl/liquid-stage';

/**
 * Signature Interaction Coordinator: "Ride the Packet"
 * Moves `#riding-packet` smoothly along `#journey-guide-path` as the visitor scrolls,
 * draws the colored `#journey-active-trail` behind it, updates `#packet-stop-hud`,
 * and drives WebGL liquid stage transitions between all 9 business stops!
 */

let liquidInstance: LiquidStageScene | null = null;

export async function initLiquidBackground(): Promise<LiquidStageScene | null> {
  const canvas = document.getElementById('liquid-canvas') as HTMLCanvasElement | null;
  if (!canvas) return null;
  const { LiquidStageScene: SceneCls } = await import('../webgl/liquid-stage');
  liquidInstance = new SceneCls(canvas);
  return liquidInstance;
}

export function initPacketJourney(): void {
  const guidePath = document.getElementById('journey-guide-path') as SVGPathElement | null;
  const activeTrail = document.getElementById('journey-active-trail') as SVGPathElement | null;
  const packetEl = document.getElementById('riding-packet');
  const packetTag = document.getElementById('riding-packet-tag');
  const stopHud = document.getElementById('packet-stop-hud');

  if (!guidePath || !activeTrail || !packetEl) return;

  const totalLen = guidePath.getTotalLength();
  activeTrail.style.strokeDasharray = `${totalLen}`;
  activeTrail.style.strokeDashoffset = `${totalLen}`;

  const updatePacketAtProgress = (p: number) => {
    const clamped = Math.max(0, Math.min(1, p));
    const drawLen = clamped * totalLen;
    activeTrail.style.strokeDashoffset = `${totalLen - drawLen}`;

    const pt = guidePath.getPointAtLength(drawLen);
    // SVG viewBox is 1000 x 1000 stretched across viewport
    const vx = (pt.x / 1000) * window.innerWidth;
    const vy = (pt.y / 1000) * window.innerHeight;
    packetEl.style.transform = `translate3d(${vx.toFixed(1)}px, ${vy.toFixed(1)}px, 0)`;

    if (packetTag) {
      packetTag.textContent = clamped > 0.92 ? 'DELIVERED' : '#001';
    }
  };

  updatePacketAtProgress(0.02);
  window.addEventListener('resize', () => {
    const prog = ScrollTrigger.maxScroll(window) > 0 ? window.scrollY / ScrollTrigger.maxScroll(window) : 0;
    updatePacketAtProgress(prog);
  });

  // Master scroll -> packet trajectory
  ScrollTrigger.create({
    trigger: '#journey-wrap',
    start: 'top top',
    end: 'bottom bottom',
    scrub: qualityManager.getState().reducedMotion ? false : 0.75,
    onUpdate: (self) => {
      updatePacketAtProgress(0.02 + self.progress * 0.98);
    },
  });

  // Stage-by-stage liquid shader transitions & HUD updates
  STAGE_STOPS.forEach((stop, idx) => {
    const section = document.getElementById(stop.id);
    if (!section) return;

    const prevStop = STAGE_STOPS[Math.max(0, idx - 1)];

    ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      end: 'top 20%',
      scrub: true,
      onUpdate: (self) => {
        if (idx === 0) {
          liquidInstance?.setStageBlend(stop.bgHex, stop.bgHex, 0, stop.trailHex);
        } else {
          liquidInstance?.setStageBlend(prevStop.bgHex, stop.bgHex, self.progress, stop.trailHex);
        }
      },
      onEnter: () => {
        if (stopHud) stopHud.textContent = stop.stopLabel;
        activeTrail.setAttribute('stroke', stop.trailHex);
        document.body.setAttribute('data-stage', stop.id);
      },
      onEnterBack: () => {
        if (stopHud) stopHud.textContent = stop.stopLabel;
        activeTrail.setAttribute('stroke', stop.trailHex);
        document.body.setAttribute('data-stage', stop.id);
      },
    });
  });
}

