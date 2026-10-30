/**
 * Playful tactile synth sound effects (muted by default).
 */
class JourneySound {
  private ctx: AudioContext | null = null;
  private enabled = false;

  public toggle(): boolean {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.ensure();
      this.pop(660, 0.05);
    }
    return this.enabled;
  }

  public pop(freq = 560, dur = 0.045): void {
    if (!this.enabled) return;
    this.ensure();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.35, now + dur);
    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + dur);
  }

  public win(): void {
    if (!this.enabled) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
      window.setTimeout(() => this.pop(f, 0.09), idx * 65);
    });
  }

  private ensure(): void {
    if (!this.ctx && typeof window !== 'undefined') {
      const AC = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }
}

export const journeySound = new JourneySound();

