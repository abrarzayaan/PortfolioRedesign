import { qualityManager } from './quality';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rot: number;
  vRot: number;
  life: number;
}

const COLORS = ['#C6FF3D', '#FF5A36', '#1D3BFF', '#FFC933', '#7A4DFF', '#FFFFFF'];
let particles: Particle[] = [];
let rafId: number | null = null;

export function fireConfetti(originXRatio = 0.5, originYRatio = 0.55, count = 48): void {
  if (qualityManager.getState().reducedMotion) return;

  const canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ox = canvas.width * originXRatio;
  const oy = canvas.height * originYRatio;

  for (let i = 0; i < count; i++) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.1;
    const speed = 5 + Math.random() * 11;
    particles.push({
      x: ox,
      y: oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: 5 + Math.random() * 6,
      color: COLORS[i % COLORS.length],
      rot: Math.random() * Math.PI,
      vRot: (Math.random() - 0.5) * 0.25,
      life: 1.0,
    });
  }

  if (rafId !== null) return;

  const step = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter((p) => p.life > 0.02);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.34;
      p.vx *= 0.985;
      p.rot += p.vRot;
      p.life -= 0.015;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      ctx.restore();
    }

    if (particles.length > 0) {
      rafId = requestAnimationFrame(step);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rafId = null;
    }
  };

  rafId = requestAnimationFrame(step);
}

