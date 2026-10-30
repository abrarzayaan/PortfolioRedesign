let toastTimer: number | null = null;

export function showToast(msg: string): void {
  const el = document.getElementById('journey-toast');
  const msgEl = document.getElementById('journey-toast-msg');
  if (!el || !msgEl) return;

  msgEl.textContent = msg;
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add('is-visible'));

  if (toastTimer !== null) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    el.classList.remove('is-visible');
    window.setTimeout(() => {
      if (!el.classList.contains('is-visible')) el.hidden = true;
    }, 260);
  }, 3200);
}

