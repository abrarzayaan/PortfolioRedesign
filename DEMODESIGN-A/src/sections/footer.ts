import { PROFILE_META } from '../content/content';
import { scrollToAnchor } from '../core/lenis';
import { uiAudio } from '../core/sound';

export function renderFooter(): string {
  return `
    <footer class="kinetic-footer theme-dark" aria-label="Footer">
      <div class="k-container footer-row">
        <div class="footer-brand-col">
          <strong>© 2026 ${PROFILE_META.name}</strong>
          <span>End-to-End Business Backend Architect ·</span>
        </div>

        <div class="footer-clock-box">
          <span>DHAKA, BD (GMT+6)</span>
          <strong id="dhaka-live-clock">--:--:-- BST</strong>
        </div>

        <button
          type="button"
          id="back-to-top-btn"
          class="btn-kinetic ghost small"
          data-magnetic="0.28"
          data-cursor="SCROLL TOP"
        >
          <span class="roll-wrap"><span data-text="Back to top ↑">Back to top ↑</span></span>
        </button>
      </div>
    </footer>
  `;
}

export function initFooter(): void {
  const clockEl = document.getElementById('dhaka-live-clock');
  const topBtn = document.getElementById('back-to-top-btn');

  const updateClock = () => {
    if (!clockEl) return;
    try {
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date());
      clockEl.textContent = `${formatted} BST`;
    } catch {
      clockEl.textContent = 'GMT+6';
    }
  };

  updateClock();
  window.setInterval(updateClock, 1000);

  topBtn?.addEventListener('click', () => {
    uiAudio.tick(700);
    scrollToAnchor('#hero');
  });
}
