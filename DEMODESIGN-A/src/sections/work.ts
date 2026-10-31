import { CaseStudyItem, SELECTED_CASES } from '../content/content';
import { gsap, ScrollTrigger } from '../core/gsap-setup';
import { motionPrefs } from '../core/quality';

function renderCaseCard(cs: CaseStudyItem, idx: number): string {
  const metricsHtml = cs.metrics
    .map(
      (m) => `
      <div class="pcc-metric-col">
        <strong class="pcc-metric-val">${m.val}</strong>
        <span class="pcc-metric-label">${m.label}</span>
      </div>
    `
    )
    .join('');

  const bulletsHtml = cs.bullets
    .map((b) => {
      // Split on colon if available to highlight key architectural deliverables
      const colonIdx = b.indexOf(':');
      let formattedBullet = b;
      if (colonIdx > 0 && colonIdx < 45) {
        const lead = b.slice(0, colonIdx);
        const rest = b.slice(colonIdx + 1);
        formattedBullet = `<strong class="pcc-bullet-lead">${lead}:</strong>${rest}`;
      }
      return `
      <li class="pcc-bullet-item">
        <span class="pcc-bullet-dot" aria-hidden="true">✦</span>
        <div class="pcc-bullet-content">${formattedBullet}</div>
      </li>
    `;
    })
    .join('');

  const stackHtml = cs.stack
    .map((t) => `<span class="pcc-stack-tag">${t}</span>`)
    .join('');

  const actionHtml = cs.liveDemo
    ? `
      <a
        href="${cs.liveDemo}"
        target="_blank"
        rel="noopener noreferrer"
        class="pcc-action-btn live"
        data-magnetic="0.18"
      >
        <span>Launch Live Demo</span>
        <span class="pcc-btn-arrow" aria-hidden="true">↗</span>
      </a>
    `
    : cs.links && cs.links.length > 0
    ? `
      <div class="pcc-links-group">
        ${cs.links
          .map(
            (l) => `
          <a
            href="${l.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="pcc-action-btn ghost"
            data-magnetic="0.15"
          >
            <span>${l.label}</span>
            <span class="pcc-btn-arrow" aria-hidden="true">↗</span>
          </a>
        `
          )
          .join('')}
      </div>
    `
    : `
      <div class="pcc-action-note">
        <span class="pcc-lock-icon" aria-hidden="true">🔒</span>
        <span>Client Confidential · Enterprise Core</span>
      </div>
    `;

  const statusBadgeHtml = cs.liveDemo
    ? `
      <div class="pcc-status-badge available" title="Live production demo is currently online">
        <span class="pcc-status-dot green" aria-hidden="true"></span>
        <span class="pcc-status-text">Live Demo Available</span>
      </div>
    `
    : `
      <div class="pcc-status-badge unavailable" title="Proprietary client infrastructure / confidential">
        <span class="pcc-status-dot red" aria-hidden="true"></span>
        <span class="pcc-status-text">${cs.demoUnavailableReason || 'Demo Not Available (Enterprise Core)'}</span>
      </div>
    `;

  const isDefaultExpanded = idx === 0;

  return `
    <article class="pcc-card ${isDefaultExpanded ? 'is-expanded' : ''}" data-case-card="${idx}">
      <!-- A. Header & Summary Trigger (Always visible) -->
      <div class="pcc-card-summary" data-case-summary="${idx}">
        <div class="pcc-topbar">
          <div class="pcc-case-identity">
            <span class="pcc-num">PROJECT // ${cs.index}</span>
            <span class="pcc-divider" aria-hidden="true">/</span>
            <span class="pcc-period">${cs.roleAndPeriod}</span>
          </div>

          <div class="pcc-status-wrap">
            ${statusBadgeHtml}
          </div>
        </div>

        <div class="pcc-summary-row">
          <div class="pcc-summary-info">
            <h3 class="pcc-title">${cs.title}</h3>
            <p class="pcc-subtitle">${cs.subtitle}</p>
            <div class="pcc-summary-tags">
              <span class="pcc-kpi-pill">${cs.headlineKpi}</span>
              <div class="pcc-quick-stack" aria-label="Key technologies">
                ${cs.stack.slice(0, 4).map((t) => `<span class="pcc-quick-tag">${t}</span>`).join('')}
                ${cs.stack.length > 4 ? `<span class="pcc-quick-more">+${cs.stack.length - 4} more</span>` : ''}
              </div>
            </div>
          </div>

          <div class="pcc-toggle-col">
            <button
              type="button"
              class="pcc-toggle-btn"
              aria-expanded="${isDefaultExpanded ? 'true' : 'false'}"
              aria-controls="pcc-drawer-${idx}"
              data-case-toggle="${idx}"
              data-magnetic="0.16"
            >
              <span class="pcc-toggle-text">${isDefaultExpanded ? 'Collapse Architecture' : 'Explore Architecture'}</span>
              <span class="pcc-toggle-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="12" height="12">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- B. Expandable Architecture Drawer -->
      <div
        id="pcc-drawer-${idx}"
        class="pcc-drawer"
        style="${isDefaultExpanded ? 'display: block; height: auto; opacity: 1;' : 'display: none; height: 0px; opacity: 0;'}"
      >
        <div class="pcc-drawer-inner">
          <div class="pcc-drawer-divider" aria-hidden="true"></div>

          <!-- Architectural Mandate -->
          <div class="pcc-takeaway-bar">
            <span class="pcc-takeaway-label">ARCHITECTURAL MANDATE:</span>
            <p class="pcc-takeaway-quote">“${cs.clientTakeaway}”</p>
          </div>

          <!-- 4-Column Key Metrics Strip -->
          <div class="pcc-metrics-strip" aria-label="Key system metrics">
            ${metricsHtml}
          </div>

          <!-- System Architecture Deliverables -->
          <div class="pcc-details-block">
            <div class="pcc-details-header">
              <span class="pcc-subhead">SYSTEM ARCHITECTURE &amp; PRODUCTION DELIVERABLES</span>
            </div>
            <ul class="pcc-bullet-list">
              ${bulletsHtml}
            </ul>
          </div>

          <!-- Card Bottom Bar (Full Stack + Single Action CTA) -->
          <div class="pcc-bottom-bar">
            <div class="pcc-stack-wrapper">
              <span class="pcc-stack-label">COMPLETE STACK:</span>
              <div class="pcc-stack-cluster" aria-label="Full technology stack">
                ${stackHtml}
              </div>
            </div>
            <div class="pcc-action-cluster">
              ${actionHtml}
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

export function renderWork(): string {
  return `
    <section id="work" class="k-section theme-light work-section" aria-labelledby="work-heading">
      <div class="k-container">
        <div class="section-head-row split">
          <div>
            <span class="section-kicker dark">03 // PROOF, NOT PROMISES</span>
            <h2 id="work-heading" class="section-display-h2 dark" data-cursor-blend>
              Selected production <em class="serif-accent dark-serif">systems.</em>
            </h2>
          </div>
          <p class="section-lead-note">
            Production-verified architectures, live deployments, and resilient backend systems engineered for enterprise growth.
          </p>
        </div>

        <div class="pcc-cards-stack">
          ${SELECTED_CASES.map((cs, i) => renderCaseCard(cs, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

export function initWorkInteractions(): void {
  const cards = document.querySelectorAll<HTMLElement>('.pcc-card');
  const reduced = motionPrefs.getState().reducedMotion;

  if (cards.length === 0) return;

  // Entrance scroll reveal for cards
  if (!reduced) {
    cards.forEach((card) => {
      gsap.from(card, {
        y: 28,
        opacity: 0.85,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      });
    });
  }

  // Interactive Expand / Collapse logic
  cards.forEach((card) => {
    const summary = card.querySelector<HTMLElement>('.pcc-card-summary');
    const toggleBtn = card.querySelector<HTMLButtonElement>('.pcc-toggle-btn');
    const drawer = card.querySelector<HTMLElement>('.pcc-drawer');
    const toggleText = card.querySelector<HTMLElement>('.pcc-toggle-text');

    if (!drawer || !toggleBtn) return;

    let isAnimating = false;

    const toggleCard = (e?: Event) => {
      // If clicking inside a link, don't toggle accordion
      if (e && (e.target as HTMLElement).closest('a')) return;
      if (isAnimating) return;

      const isExpanded = card.classList.contains('is-expanded');

      if (isExpanded) {
        // Collapse
        isAnimating = true;
        card.classList.remove('is-expanded');
        toggleBtn.setAttribute('aria-expanded', 'false');
        if (toggleText) toggleText.textContent = 'Explore Architecture';

        if (reduced) {
          drawer.style.height = '0px';
          drawer.style.opacity = '0';
          drawer.style.display = 'none';
          isAnimating = false;
          ScrollTrigger.refresh();
        } else {
          gsap.to(drawer, {
            height: 0,
            opacity: 0,
            duration: 0.45,
            ease: 'power3.inOut',
            onComplete: () => {
              drawer.style.display = 'none';
              isAnimating = false;
              ScrollTrigger.refresh();
            },
          });
        }
      } else {
        // Expand
        isAnimating = true;
        card.classList.add('is-expanded');
        toggleBtn.setAttribute('aria-expanded', 'true');
        if (toggleText) toggleText.textContent = 'Collapse Architecture';

        drawer.style.display = 'block';
        drawer.style.height = 'auto';
        drawer.style.opacity = '1';
        const targetHeight = drawer.offsetHeight;
        drawer.style.height = '0px';
        drawer.style.opacity = '0';

        if (reduced) {
          drawer.style.height = 'auto';
          drawer.style.opacity = '1';
          isAnimating = false;
          ScrollTrigger.refresh();
        } else {
          gsap.fromTo(
            drawer,
            { height: 0, opacity: 0 },
            {
              height: targetHeight,
              opacity: 1,
              duration: 0.5,
              ease: 'power3.inOut',
              onComplete: () => {
                drawer.style.height = 'auto';
                isAnimating = false;
                ScrollTrigger.refresh();
              },
            }
          );

          // Subtle stagger for inner sections
          const innerChildren = drawer.querySelectorAll<HTMLElement>('.pcc-drawer-inner > *');
          if (innerChildren.length > 0) {
            gsap.fromTo(
              innerChildren,
              { y: 16, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.45,
                stagger: 0.06,
                ease: 'power2.out',
                delay: 0.12,
              }
            );
          }
        }
      }
    };

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCard(e);
    });

    if (summary) {
      summary.addEventListener('click', (e) => {
        toggleCard(e);
      });
    }
  });
}
