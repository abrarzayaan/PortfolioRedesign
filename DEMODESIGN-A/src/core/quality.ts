export interface MotionState {
  reducedMotion: boolean;
  isMobile: boolean;
}

type Listener = (state: MotionState) => void;

class MotionPreferenceManager {
  private state: MotionState;
  private userCalmOverride = false;
  private listeners = new Set<Listener>();

  constructor() {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia('(max-width: 820px)');

    this.state = {
      reducedMotion: mqReduce.matches,
      isMobile: mqMobile.matches,
    };

    this.syncDomAttr();

    mqReduce.addEventListener('change', (e) => {
      this.state.reducedMotion = e.matches || this.userCalmOverride;
      this.syncDomAttr();
      this.emit();
    });

    mqMobile.addEventListener('change', (e) => {
      this.state.isMobile = e.matches;
      this.emit();
    });
  }

  private syncDomAttr(): void {
    document.documentElement.setAttribute(
      'data-motion',
      this.state.reducedMotion ? 'calm' : 'full'
    );
  }

  public getState(): MotionState {
    return { ...this.state };
  }

  public toggleMotion(): boolean {
    this.userCalmOverride = !this.userCalmOverride;
    this.state.reducedMotion =
      this.userCalmOverride || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.syncDomAttr();
    this.emit();
    return !this.state.reducedMotion;
  }

  public subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit(): void {
    const snap = this.getState();
    this.listeners.forEach((fn) => fn(snap));
  }
}

export const motionPrefs = new MotionPreferenceManager();
