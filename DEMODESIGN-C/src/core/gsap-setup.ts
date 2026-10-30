import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

export { gsap, ScrollTrigger, Flip };

const CHARS = '0123456789ABCDEF#>_:*+';

export function scrambleTo(
  el: HTMLElement | null,
  targetText: string,
  duration = 0.65,
  delay = 0
): gsap.core.Tween | null {
  if (!el) return null;
  const state = { p: 0 };
  const len = targetText.length;

  return gsap.to(state, {
    p: 1,
    duration,
    delay,
    ease: 'power2.out',
    onUpdate: () => {
      const done = Math.floor(state.p * len);
      let s = '';
      for (let i = 0; i < len; i++) {
        const ch = targetText[i];
        if (ch === ' ' || i < done) s += ch;
        else s += CHARS[(i * 9 + Math.floor(state.p * 39)) % CHARS.length];
      }
      el.textContent = s;
    },
    onComplete: () => {
      el.textContent = targetText;
    },
  });
}

export function prepareStrokeDraw(el: SVGGeometryElement): number {
  const length = el.getTotalLength ? el.getTotalLength() : 500;
  el.style.strokeDasharray = `${length}`;
  el.style.strokeDashoffset = `${length}`;
  return length;
}

