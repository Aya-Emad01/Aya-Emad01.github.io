const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  menu.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  menu.classList.toggle('open', !open);
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
const navLinks = [...menu.querySelectorAll('a[href^="#"]')];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const currentSection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-30% 0px -60% 0px' });
sections.forEach((section) => currentSection.observe(section));
