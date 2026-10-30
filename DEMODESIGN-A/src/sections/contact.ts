import { CONTACT_DATA, PROFILE_META } from '../content/content';
import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';
import { uiAudio } from '../core/sound';
import { showKineticToast } from '../core/toast';

export function renderContact(): string {
  const waveEmailChars = Array.from(PROFILE_META.email)
    .map((ch) => `<span class="wave-char">${ch}</span>`)
    .join('');

  const greatHtml = CONTACT_DATA.greatFit.map((g) => `<li>${g}</li>`).join('');
  const notHtml = CONTACT_DATA.notFit.map((n) => `<li>${n}</li>`).join('');

  const questionsHtml = CONTACT_DATA.firstCallQuestions
    .map(
      (q, idx) => `
      <div class="fc-accordion-item ${idx === 0 ? 'is-open' : ''}">
        <button
          type="button"
          class="fc-summary"
          aria-expanded="${idx === 0}"
          aria-controls="fc-body-${idx}"
        >
          <span class="fc-q-num">Q0${idx + 1}</span>
          <span class="fc-q-text">${q}</span>
          <span class="fc-q-plus" aria-hidden="true">+</span>
        </button>
        <div
          id="fc-body-${idx}"
          class="fc-body-panel"
          style="${idx === 0 ? 'height: auto; opacity: 1;' : 'height: 0px; opacity: 0;'}"
        >
          <p class="fc-q-note">
            We’ll map this directly to your schema, query bottlenecks, and target business ROI in our first 30-minute discovery call.
          </p>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section id="contact" class="k-section theme-light contact-section" aria-labelledby="contact-heading">
      <div class="k-container">
        <div class="contact-hero-box">
          <span class="section-kicker dark">09 // LET’S TALK ARCHITECTURE</span>
          <h2 id="contact-heading" class="contact-giant-h2" data-cursor-blend>
            Is your system slowing your <em class="serif-accent dark-serif">business</em> down?
          </h2>
          <p class="contact-subcopy">${CONTACT_DATA.sub}</p>

          <!-- Giant Character-Wave Copyable Email (animmasterlib.dev style) -->
          <button
            type="button"
            id="giant-email-btn"
            class="giant-email-btn"
            data-magnetic="0.14"
            data-cursor="CLICK TO COPY"
            aria-label="Copy email address ${PROFILE_META.email}"
          >
            <span class="wave-email-wrap">${waveEmailChars}</span>
            <span class="copy-tag-pill">COPY EMAIL ⧉</span>
          </button>

          <div class="contact-direct-links">
            <a
              href="mailto:${PROFILE_META.email}"
              class="btn-kinetic dark-solid"
              data-magnetic="0.2"
            >
              <span class="roll-wrap"><span data-text="Write an Email ↗">Write an Email ↗</span></span>
            </a>

            <a
              href="tel:+88${PROFILE_META.phone}"
              class="btn-kinetic dark-outline"
              data-magnetic="0.2"
            >
              <span class="roll-wrap"><span data-text="Call ${PROFILE_META.phone}">Call ${PROFILE_META.phone}</span></span>
            </a>

            <a
              href="${PROFILE_META.linkedin}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-kinetic dark-outline"
              data-magnetic="0.2"
            >
              <span class="roll-wrap"><span data-text="LinkedIn ↗">LinkedIn ↗</span></span>
            </a>

            <a
              href="${PROFILE_META.github}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-kinetic dark-outline"
              data-magnetic="0.2"
            >
              <span class="roll-wrap"><span data-text="GitHub ↗">GitHub ↗</span></span>
            </a>
          </div>
        </div>

        <div class="contact-details-grid">
          <!-- Fit Matrix -->
          <div class="fit-matrix-col">
            <div class="fit-card good">
              <span class="section-kicker dark">WHO I’M THE RIGHT FIT FOR</span>
              <ul>${greatHtml}</ul>
            </div>

            <div class="fit-card muted">
              <span class="section-kicker dark">PROBABLY NOT A FIT</span>
              <ul>${notHtml}</ul>
            </div>
          </div>

          <!-- 5 First-Call Questions Smooth Accordion -->
          <div class="first-call-col">
            <span class="section-kicker dark">QUESTIONS I’LL ASK IN OUR FIRST CALL</span>
            <div class="fc-accordion-list">
              ${questionsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactInteractions(): void {
  const emailBtn = document.getElementById('giant-email-btn');
  const waveChars = emailBtn ? Array.from(emailBtn.querySelectorAll<HTMLElement>('.wave-char')) : [];

  emailBtn?.addEventListener('pointerenter', () => {
    uiAudio.tick(640);
    if (motionPrefs.getState().reducedMotion || waveChars.length === 0) return;

    gsap.killTweensOf(waveChars);
    gsap.fromTo(
      waveChars,
      { y: 0 },
      {
        y: -7,
        duration: 0.2,
        stagger: 0.014,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
      }
    );
  });

  emailBtn?.addEventListener('click', async () => {
    uiAudio.tick(760);
    try {
      await navigator.clipboard.writeText(PROFILE_META.email);
      showKineticToast(`Copied ${PROFILE_META.email} to clipboard.`);
    } catch {
      window.location.href = `mailto:${PROFILE_META.email}`;
    }
  });

  // Smooth GSAP Accordion for 5 First-Call Questions
  document.querySelectorAll<HTMLElement>('.fc-accordion-item').forEach((item) => {
    const btn = item.querySelector<HTMLButtonElement>('.fc-summary');
    const panel = item.querySelector<HTMLElement>('.fc-body-panel');
    if (!btn || !panel) return;

    btn.addEventListener('click', () => {
      uiAudio.tick(520);
      const isOpen = item.classList.contains('is-open');
      const reduced = motionPrefs.getState().reducedMotion;
      gsap.killTweensOf(panel);

      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        if (reduced) {
          panel.style.height = '0px';
          panel.style.opacity = '0';
        } else {
          gsap.fromTo(
            panel,
            { height: panel.offsetHeight, opacity: 1 },
            {
              height: 0,
              opacity: 0,
              duration: 0.32,
              ease: 'kineticOut',
              onComplete: () => ScrollTrigger.refresh(),
            }
          );
        }
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        if (reduced) {
          panel.style.height = 'auto';
          panel.style.opacity = '1';
        } else {
          gsap.fromTo(
            panel,
            { height: panel.offsetHeight, opacity: 0.2 },
            {
              height: panel.scrollHeight,
              opacity: 1,
              duration: 0.36,
              ease: 'kineticOut',
              onComplete: () => {
                panel.style.height = 'auto';
                ScrollTrigger.refresh();
              },
            }
          );
        }
      }
    });
  });
}
