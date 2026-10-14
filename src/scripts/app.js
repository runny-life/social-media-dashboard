import '../styles/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggleButtonElement = document.querySelector('[data-js-toggle-theme-button]');
  const STORAGE_KEY = 'theme-mode';

  const applyTheme = (mode) => {
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

    root.setAttribute('data-theme', resolved);
    root.dataset.themeMode = mode;

    toggleButtonElement.setAttribute('aria-checked', String(resolved === 'dark'));
  };

  applyTheme(localStorage.getItem(STORAGE_KEY) || 'system');

  toggleButtonElement.addEventListener('click', () => {
    const theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  });

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved || saved === 'system') applyTheme('system');
  });
});
