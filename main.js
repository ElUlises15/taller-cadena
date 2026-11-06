const teeth = document.querySelector('#teeth');
if (teeth) {
  for (let i = 0; i < 24; i++) {
    const tooth = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    Object.entries({x: 236, y: 16, width: 28, height: 53, rx: 3, transform: `rotate(${i * 15} 250 250)`}).forEach(([key, value]) => tooth.setAttribute(key, value));
    teeth.append(tooth);
  }
}
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let scheduled = false;
function updateScroll() {
  if (!motion.matches) {
    document.documentElement.style.setProperty('--gear-turn', `${window.scrollY * .025}deg`);
    document.documentElement.style.setProperty('--chain-shift', `${-(window.scrollY * .08 % 34)}px`);
  }
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateScroll); }
}, {passive: true});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!motion.matches) entry.target.classList.add('entered');
      observer.unobserve(entry.target);
    }
  }), {threshold: .12});
  document.querySelectorAll('.service-grid article, .gallery figure').forEach(element => {
    element.classList.add('reveal'); observer.observe(element);
  });
}
