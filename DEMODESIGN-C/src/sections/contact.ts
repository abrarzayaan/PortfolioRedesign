import { GROWTH_CONTACT, SITE_META } from '../content/content';
import { fireConfetti } from '../core/confetti';
import { gsap, prepareStrokeDraw, scrambleTo } from '../core/gsap-setup';
import { scrollToStop } from '../core/lenis';
import { qualityManager } from '../core/quality';
import { journeySound } from '../core/sound';
import { showToast } from '../core/toast';

export function renderContactAndFooter(): string {
  const qHtml = GROWTH_CONTACT.questions
    .map(
      (q, i) => `
      <li>
        <span class="gq-idx">0${i + 1}</span>
        <p>${q}</p>
      </li>
    `
    )
    .join('');

  const greatHtml = GROWTH_CONTACT.greatFit.map((g) => `<li>${g}</li>`).join('');
  const notHtml = GROWTH_CONTACT.notFit.map((n) => `<li>${n}</li>`).join('');

  return `
    <section id="contact" class="stage-section stage-growth" aria-labelledby="growth-heading">
      <div class="container">
        <div class="stop-header-row centered">
          <span class="stop-pill dark">STOP 09 // ORDER #001 BECOMES MEASURABLE GROWTH</span>
        </div>

        <!-- Packet Transforms Into Rising Growth Chart -->
        <div class="growth-chart-stage" id="growth-chart-stage">
          <svg viewBox="0 0 860 220" class="growth-svg" role="img" aria-label="Rising business growth line chart (Illustrative payoff)">
            <defs>
              <linearGradient id="growth-fill-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0B0B0F" stop-opacity="0.18" />
                <stop offset="100%" stop-color="#0B0B0F" stop-opacity="0.0" />
              </linearGradient>
            </defs>
            <path
              id="growth-area-path"
              d="M 40 185 C 190 180, 260 155, 390 132 C 520 108, 630 68, 805 28 L 805 200 L 40 200 Z"
              fill="url(#growth-fill-grad)"
              opacity="0"
            />
            <path
              id="growth-line-path"
              d="M 40 185 C 190 180, 260 155, 390 132 C 520 108, 630 68, 805 28"
              fill="none"
              stroke="#0B0B0F"
              stroke-width="6"
              stroke-linecap="round"
            />
            <polygon id="growth-arrow-tip" points="822,22 794,18 804,42" fill="#0B0B0F" />
            <circle cx="40" cy="185" r="9" fill="#FFFFFF" stroke="#0B0B0F" stroke-width="3.5" />
          </svg>
          <span class="growth-chart-tag">TECH ➝ TRUSTWORTHY DATA ➝ +20% YoY BUSINESS GROWTH (ILLUSTRATIVE CURVE)</span>
        </div>

        <div class="growth-cta-center">
          <h2 id="growth-heading" class="growth-giant-h2">
            ${GROWTH_CONTACT.headline}
          </h2>
          <p class="growth-sub">${GROWTH_CONTACT.sub}</p>

          <button
            type="button"
            id="growth-copy-email"
            class="growth-email-pill"
            data-cursor="CLICK TO COPY"
          >
            <span id="growth-email-txt">${SITE_META.email}</span>
          </button>

          <div class="growth-buttons-row">
            <a href="mailto:${SITE_META.email}" class="btn-bold-ink" data-cursor="EMAIL NOW">
              <span>Send an Email ↗</span>
            </a>
            <a href="tel:+88${SITE_META.phone}" class="btn-bold-outline dark-border">
              <span>📞 ${SITE_META.phone}</span>
            </a>
            <a href="${SITE_META.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-bold-outline dark-border">
              <span>LinkedIn ↗</span>
            </a>
            <a href="${SITE_META.github}" target="_blank" rel="noopener noreferrer" class="btn-bold-outline dark-border">
              <span>GitHub ↗</span>
            </a>
          </div>
        </div>

        <div class="growth-bottom-grid">
          <div class="growth-card">
            <span class="mono-kicker">QUESTIONS I’LL ASK IN OUR FIRST CALL</span>
            <ol class="growth-q-list">${qHtml}</ol>
          </div>

          <div class="growth-fit-stack">
            <div class="growth-card">
              <span class="mono-kicker">WHO I’M THE RIGHT FIT FOR</span>
              <ul class="fit-ul good">${greatHtml}</ul>
            </div>
            <div class="growth-card muted">
              <span class="mono-kicker">PROBABLY NOT A FIT</span>
              <ul class="fit-ul bad">${notHtml}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="journey-footer" aria-label="Footer">
      <div class="container footer-flex">
        <div class="footer-status">
          <span class="delivered-badge">ORDER #001 DELIVERED ✔</span>
          <span class="footer-copy">© 2026 ${SITE_META.name} · Built with Three.js, Matter.js &amp; GSAP</span>
        </div>

        <div class="footer-clock-pill">
          <span>DHAKA, BD (GMT+6):</span>
          <strong id="journey-clock">--:--:-- BST</strong>
        </div>

        <button type="button" id="fly-packet-top" class="fly-top-btn" data-cursor="FLY UP ↑">
          <span>Send Packet to Top ↑</span>
        </button>
      </div>
    </footer>
  `;
}

export function initContactAndFooter(): void {
  const q = qualityManager.getState();
  const linePath = document.getElementById('growth-line-path') as SVGPathElement | null;
  const areaPath = document.getElementById('growth-area-path');
  const emailBtn = document.getElementById('growth-copy-email');
  const emailTxt = document.getElementById('growth-email-txt');
  const clockEl = document.getElementById('journey-clock');
  const topBtn = document.getElementById('fly-packet-top');

  if (linePath && !q.reducedMotion) {
    prepareStrokeDraw(linePath);

    gsap.timeline({
      scrollTrigger: {
        trigger: '#growth-chart-stage',
        start: 'top 78%',
        once: true,
        onEnter: () => {
          window.setTimeout(() => {
            journeySound.win();
            fireConfetti(0.5, 0.42, 65);
          }, 550);
        },
      },
    })
      .to(linePath, {
        strokeDashoffset: 0,
        duration: 1.15,
        ease: 'power3.out',
      })
      .to(
        areaPath,
        {
          opacity: 1,
          duration: 0.65,
          ease: 'power2.out',
        },
        0.4
      );
  }

  emailBtn?.addEventListener('pointerenter', () => {
    scrambleTo(emailTxt, SITE_META.email, 0.5);
  });

  emailBtn?.addEventListener('click', async () => {
    journeySound.pop(740);
    try {
      await navigator.clipboard.writeText(SITE_META.email);
      showToast(`Copied ${SITE_META.email} to clipboard!`);
    } catch {
      window.location.href = `mailto:${SITE_META.email}`;
    }
  });

  const tick = () => {
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
  tick();
  window.setInterval(tick, 1000);

  topBtn?.addEventListener('click', () => {
    journeySound.win();
    scrollToStop('#hero');
  });
}

