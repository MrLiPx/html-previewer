/* static/js/main.js — HTML Previewer landing page */

const GH_USER = 'MrLiPx';

/* Load GitHub profile and hydrate author card */
async function loadProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GH_USER}`);
    if (!res.ok) return;
    const u = await res.json();

    const $ = id => document.getElementById(id);
    if ($('avatar'))       $('avatar').src                = u.avatar_url;
    if ($('author-name'))  $('author-name').textContent   = u.name || u.login;
    if ($('author-handle'))$('author-handle').textContent = '@' + u.login;
    if ($('tag-repos'))    $('tag-repos').textContent     = u.public_repos + ' repos';
  } catch (_) { /* silently fall back to hardcoded values */ }
}

/* Scroll reveal for feature cards */
function initReveal() {
  const els = document.querySelectorAll('.fc, .author-card');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach((el, i) => {
    el.style.cssText += `opacity:0;transform:translateY(14px);transition:opacity .35s ${i * 40}ms,transform .35s ${i * 40}ms;`;
    io.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  initReveal();
});
