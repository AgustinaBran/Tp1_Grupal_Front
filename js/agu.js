 
/* ---- 1. MENÚ HAMBURGUESA ---- */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
 
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('nav-open');
});
 
// Cerrar menú al hacer click en un link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('nav-open');
  });
});
 
 
/* ---- 2. NAV LINK ACTIVO (Intersection Observer) ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
 
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('nav-active');
        }
      });
    }
  });
}, { threshold: 0.4 });
 
sections.forEach(section => sectionObserver.observe(section));
 
 
/* ---- 3. ANIMACIONES FADE-IN AL SCROLL ---- */
const fadeElements = document.querySelectorAll(
  '.tarjeta, .pelicula-card, .habilidades-bloque, .contacto-info, .contacto-form, .section-title'
);
 
// Agregar clase base antes de animar
fadeElements.forEach(el => el.classList.add('fade-hidden'));
 
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Delay escalonado para grids (tarjetas, películas)
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.remove('fade-hidden');
        entry.target.classList.add('fade-visible');
      }, delay);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
 
// Delay escalonado para grids
document.querySelectorAll('.tarjetas-grid .tarjeta').forEach((el, i) => {
  el.dataset.delay = i * 120;
});
document.querySelectorAll('.peliculas-grid .pelicula-card').forEach((el, i) => {
  el.dataset.delay = i * 120;
});
 
fadeElements.forEach(el => fadeObserver.observe(el));
 
 
/* ---- 4. BOTÓN VOLVER ARRIBA ---- */
const backToTop = document.getElementById('back-to-top');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
 
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});