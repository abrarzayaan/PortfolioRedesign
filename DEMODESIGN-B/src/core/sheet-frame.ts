/**
 * Helper to wrap any section in an authentic Architectural Drafting Sheet
 * with corner `+` registration marks, sheet header index, and bottom-right Title Block.
 */

export interface SheetFrameOptions {
  id: string;
  sheetNo: string; // e.g., "SHEET 02 / 10"
  sectionTag: string; // e.g., "§02 POSITIONING & MANIFESTO"
  projectTitle: string;
  scale?: string;
  bodyHtml: string;
  extraClass?: string;
}

export function wrapInSheet(opts: SheetFrameOptions): string {
  const scale = opts.scale || '1 : 1';
  return `
    <section id="${opts.id}" class="drafting-sheet ${opts.extraClass || ''}" aria-label="${opts.sectionTag}">
      <div class="sheet-frame">
        <span class="reg-mark tl" aria-hidden="true">+</span>
        <span class="reg-mark tr" aria-hidden="true">+</span>
        <span class="reg-mark bl" aria-hidden="true">+</span>
        <span class="reg-mark br" aria-hidden="true">+</span>

        <div class="sheet-top-bar">
          <span class="sheet-sec-tag">${opts.sectionTag}</span>
          <span class="sheet-num-tag">${opts.sheetNo}</span>
        </div>

        <div class="sheet-content">
          ${opts.bodyHtml}
        </div>

        <footer class="sheet-title-block" aria-label="Sheet Title Block">
          <div class="tb-cell">
            <span class="tb-k">PROJECT</span>
            <strong class="tb-v">${opts.projectTitle}</strong>
          </div>
          <div class="tb-cell">
            <span class="tb-k">SCALE</span>
            <strong class="tb-v">${scale}</strong>
          </div>
          <div class="tb-cell">
            <span class="tb-k">DRAWN BY</span>
            <strong class="tb-v">AZ</strong>
          </div>
          <div class="tb-cell accent">
            <span class="tb-k">SHEET</span>
            <strong class="tb-v">${opts.sheetNo}</strong>
          </div>
        </footer>
      </div>
    </section>
  `;
}

