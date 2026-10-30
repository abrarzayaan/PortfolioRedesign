import { CONTACT_SPEC, SITE_META } from '../content/content';
import { gsap } from '../core/gsap-setup';
import { scrollToSheet } from '../core/lenis';
import { wrapInSheet } from '../core/sheet-frame';
import { draftingSound } from '../core/sound';
import { showToast } from '../core/toast';

export function renderContactAndFooter(): string {
  const questionsHtml = CONTACT_SPEC.firstCallQuestions
    .map(
      (q, i) => `
      <li>
        <span class="rfi-q-no">Q-0${i + 1}</span>
        <p>${q}</p>
      </li>
    `
    )
    .join('');

  const greatHtml = CONTACT_SPEC.greatFit.map((g) => `<li>${g}</li>`).join('');
  const notHtml = CONTACT_SPEC.notFit.map((n) => `<li>${n}</li>`).join('');

  const bodyHtml = `
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Request for Information (RFI) — Let’s Talk</h2>
        <p class="sheet-subtitle">
          If your system is slowing your business down, or you can see the next stage of growth and don’t trust your current system to carry it, file an RFI below or reach out directly.
        </p>
      </div>
    </div>

    <div class="rfi-master-grid">
      <!-- Architectural RFI Form -->
      <form id="rfi-form" class="rfi-drawing-form" novalidate>
        <div class="rfi-form-header">
          <span>DOCUMENT // RFI-2026-AZ</span>
          <span>ATTENTION: MD. SHAH ABRAR ZAHIN</span>
        </div>

        <div class="rfi-field">
          <label for="rfi-project">01 // PROJECT OR BUSINESS NAME</label>
          <input
            type="text"
            id="rfi-project"
            name="project"
            required
            placeholder="e.g., Multi-vendor pharma marketplace / Enterprise ERP reporting"
          />
        </div>

        <div class="rfi-field">
          <label for="rfi-bottleneck">02 // YOUR PRIMARY BOTTLENECK</label>
          <textarea
            id="rfi-bottleneck"
            name="bottleneck"
            rows="4"
            required
            placeholder="e.g., Dashboards take 25s to load, stock goes negative during flash sales, or teams reconcile Excel by hand..."
          ></textarea>
        </div>

        <div class="rfi-field">
          <label for="rfi-contact">03 // YOUR EMAIL OR PHONE</label>
          <input
            type="text"
            id="rfi-contact"
            name="contact"
            required
            placeholder="you@company.com"
          />
        </div>

        <div class="rfi-submit-row">
          <button type="submit" class="btn-vermilion">
            <span>Stamp &amp; Transmit RFI</span>
            <span aria-hidden="true">→</span>
          </button>
          <span class="mono-tiny">Opens pre-addressed email draft + stamps sheet</span>
        </div>

        <!-- Vermilion Rubber Stamp ("RECEIVED") -->
        <div id="rfi-rubber-stamp" class="rfi-rubber-stamp" hidden aria-hidden="true">
          <strong>RECEIVED</strong>
          <span>ATELIER AZ // DHAKA</span>
        </div>
      </form>

      <!-- Direct Channels + 5 First-Call Questions -->
      <div class="rfi-side-specs">
        <div class="direct-channels-card">
          <span class="mono-tiny vermilion">DIRECT SPECIFICATION CHANNELS</span>
          <button
            type="button"
            id="copy-email-rfi"
            class="rfi-email-btn"
            title="Click to copy email address"
          >
            ${SITE_META.email}
          </button>
          <div class="direct-links-row">
            <a href="mailto:${SITE_META.email}" class="dwg-link">Email App ↗</a>
            <a href="tel:+88${SITE_META.phone}" class="dwg-link">📞 ${SITE_META.phone}</a>
            <a href="${SITE_META.linkedin}" target="_blank" rel="noopener noreferrer" class="dwg-link">LinkedIn ↗</a>
            <a href="${SITE_META.github}" target="_blank" rel="noopener noreferrer" class="dwg-link">GitHub ↗</a>
          </div>
        </div>

        <div class="rfi-questions-card">
          <span class="mono-tiny">QUESTIONS I’LL ASK IN OUR FIRST CALL</span>
          <ol class="rfi-q-list">${questionsHtml}</ol>
        </div>
      </div>
    </div>

    <div class="fit-spec-row">
      <div class="fit-spec-cell good">
        <span class="mono-tiny vermilion">GREAT FIT SPECIFICATION</span>
        <ul>${greatHtml}</ul>
      </div>
      <div class="fit-spec-cell bad">
        <span class="mono-tiny">PROBABLY NOT A FIT</span>
        <ul>${notHtml}</ul>
      </div>
    </div>
  `;

  const contactSheet = wrapInSheet({
    id: 'contact',
    sheetNo: 'SHEET 10 / 10',
    sectionTag: '§10 REQUEST FOR INFORMATION (RFI) & FIT',
    projectTitle: 'ENGAGEMENT INITIATION',
    scale: '1 : 1',
    bodyHtml,
  });

  const finalFooter = `
    <footer class="final-titleblock-footer" aria-label="Master Drawing Title Block">
      <div class="master-tb-grid">
        <div class="mtb-cell">
          <span>ARCHITECT</span>
          <strong>${SITE_META.name}</strong>
        </div>
        <div class="mtb-cell">
          <span>DRAWN BY / CHECKED BY</span>
          <strong>AZ · Checked by: Coffee</strong>
        </div>
        <div class="mtb-cell">
          <span>SCALE &amp; EDITION</span>
          <strong>1 : 1 · Design B (Blueprint Atelier)</strong>
        </div>
        <div class="mtb-cell">
          <span>DHAKA TIME (GMT+6)</span>
          <strong id="atelier-clock">--:--:-- BST</strong>
        </div>
        <div class="mtb-cell action">
          <button type="button" id="atelier-top-btn" class="top-sheet-btn">
            SHEET 01 ↑
          </button>
        </div>
      </div>
    </footer>
  `;

  return `${contactSheet}${finalFooter}`;
}

export function initContactAndFooter(): void {
  const form = document.getElementById('rfi-form') as HTMLFormElement | null;
  const stamp = document.getElementById('rfi-rubber-stamp');
  const copyBtn = document.getElementById('copy-email-rfi');
  const clockEl = document.getElementById('atelier-clock');
  const topBtn = document.getElementById('atelier-top-btn');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const project = String(data.get('project') || 'Architecture Inquiry').trim();
    const bottleneck = String(data.get('bottleneck') || '').trim();
    const contact = String(data.get('contact') || '').trim();

    if (!bottleneck) {
      showToast('Please describe your bottleneck in field 02 first', 'vermilion');
      return;
    }

    draftingSound.stamp();

    if (stamp) {
      stamp.hidden = false;
      gsap.fromTo(
        stamp,
        { scale: 2.9, rotation: -18, autoAlpha: 0 },
        { scale: 1, rotation: -9, autoAlpha: 1, duration: 0.36, ease: 'back.out(1.6)' }
      );
      gsap.fromTo(
        form,
        { x: -4 },
        { x: 0, duration: 0.25, ease: 'elastic.out(1.2, 0.3)' }
      );
    }

    showToast('RFI Stamped RECEIVED — Opening email client…', 'vermilion');

    const subject = encodeURIComponent(`[RFI] ${project} — Backend Architecture`);
    const body = encodeURIComponent(
      `Project / Company: ${project}\nReply Contact: ${contact}\n\nPrimary Bottleneck:\n${bottleneck}`
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${SITE_META.email}?subject=${subject}&body=${body}`;
    }, 520);
  });

  copyBtn?.addEventListener('click', async () => {
    draftingSound.click();
    try {
      await navigator.clipboard.writeText(SITE_META.email);
      showToast(`Copied ${SITE_META.email} to clipboard`, 'vermilion');
    } catch {
      window.location.href = `mailto:${SITE_META.email}`;
    }
  });

  const tickClock = () => {
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
  tickClock();
  window.setInterval(tickClock, 1000);

  topBtn?.addEventListener('click', () => {
    draftingSound.click();
    scrollToSheet('#hero');
  });
}

