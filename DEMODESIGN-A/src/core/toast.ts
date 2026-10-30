let toastTimeout: number | null = null;

export function showKineticToast(message: string): void {
  const toast = document.getElementById('k-toast');
  const msgEl = document.getElementById('k-toast-msg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add('is-shown'));

  if (toastTimeout !== null) window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove('is-shown');
    window.setTimeout(() => {
      if (!toast.classList.contains('is-shown')) toast.hidden = true;
    }, 240);
  }, 3200);
}
