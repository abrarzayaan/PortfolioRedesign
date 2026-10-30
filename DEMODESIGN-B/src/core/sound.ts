/**
 * Subtle mechanical drafting UI sound synthesizer (muted by default).
 */
class DraftingSound {
  private ctx: AudioContext | null = null;
  private enabled = false;

  public toggle(): boolean {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.ensure();
      this.tick(820, 0.035);
    }
    return this.enabled;
  }

  public hover(): void {
    if (!this.enabled) return;
    this.tick(1180, 0.018, 0.015);
  }

  public click(): void {
    if (!this.enabled) return;
    this.tick(640, 0.04, 0.03);
  }

  public stamp(): void {
    if (!this.enabled) return;
    this.ensure();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(165, now);
    osc.frequency.exponentialRampToValueAtTime(52, now + 0.14);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.16);
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

  private tick(freq: number, dur: number, vol = 0.025): void {
    this.ensure();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(vol, now);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + dur);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + dur);
  }
}

export const draftingSound = new DraftingSound();

