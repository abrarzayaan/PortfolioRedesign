export type QualityTier = 'high' | 'low';

export interface QualityState {
  tier: QualityTier;
  pixelRatio: number;
  maxPhysicsChips: number;
  reducedMotion: boolean;
  isMobile: boolean;
}

type Listener = (state: QualityState) => void;

class JourneyQualityManager {
  private tier: QualityTier = 'high';
  private reducedMotion = false;
  private isMobile = false;
  private listeners = new Set<Listener>();

  constructor() {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reducedMotion = mq.matches;
      mq.addEventListener('change', (e) => {
        this.reducedMotion = e.matches;
        this.emit();
      });

      this.isMobile = window.innerWidth <= 860 || window.matchMedia('(pointer: coarse)').matches;
      if (this.isMobile || (navigator.hardwareConcurrency || 4) <= 4 || this.reducedMotion) {
        this.tier = 'low';
      }

      window.addEventListener('resize', () => {
        const m = window.innerWidth <= 860 || window.matchMedia('(pointer: coarse)').matches;
        if (m !== this.isMobile) {
          this.isMobile = m;
          this.emit();
        }
      });
    }
    this.syncAttr();
  }

  public getState(): QualityState {
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const isHigh = this.tier === 'high' && !this.isMobile;
    return {
      tier: this.tier,
      pixelRatio: isHigh ? Math.min(dpr, 2) : Math.min(dpr, 1.5),
      maxPhysicsChips: isHigh ? 22 : 16,
      reducedMotion: this.reducedMotion,
      isMobile: this.isMobile,
    };
  }

  public toggleTier(): QualityState {
    this.tier = this.tier === 'high' ? 'low' : 'high';
    this.syncAttr();
    this.emit();
    return this.getState();
  }

  public subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private syncAttr(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-quality', this.tier);
    }
  }

  private emit(): void {
    const s = this.getState();
    this.listeners.forEach((fn) => fn(s));
  }
}

export const qualityManager = new JourneyQualityManager();

