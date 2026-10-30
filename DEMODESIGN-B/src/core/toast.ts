let timer: number | null = null;

export function showToast(msg: string, variant: 'vermilion' | 'blueprint' = 'vermilion'): void {
  const el = document.getElementById('atelier-toast');
  const txt = document.getElementById('toast-text');
  const pip = document.getElementById('toast-pip');
  if (!el || !txt || !pip) return;

  txt.textContent = msg;
  el.setAttribute('data-variant', variant);
  pip.setAttribute('data-variant', variant);
  el.hidden = false;
  requestAnimationFrame(() => el.classList.add('is-visible'));

  if (timer !== null) window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    el.classList.remove('is-visible');
    window.setTimeout(() => {
      if (!el.classList.contains('is-visible')) el.hidden = true;
    }, 260);
  }, 3200);
}

