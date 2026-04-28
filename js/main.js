// ====================================
// RULOS DE ESTATUA — main.js
// Interactividad de la portada
// ====================================

// --- Partículas flotantes de fantasmas y slime ---
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const symbols = ['👻', '🟢', '⚗️', '✨', '💚'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = 10 + Math.random() * 10;
    const size = 0.8 + Math.random() * 1.2;

    p.style.cssText = `
      left: ${left}%;
      font-size: ${size}rem;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(p);
  }
}

// --- Efecto hover con sonido de "¿A quién vas a llamar?" en las cards ---
function initCardEffects() {
  const cards = document.querySelectorAll('.member-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      // Pequeño shake animado
      this.style.transition = 'transform 0.1s ease';
    });
  });
}

// --- Botón "Conocé al equipo": animación de contador de fantasmas ---
function initHeroButton() {
  const btn = document.querySelector('.hero .btn-primary');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    // Crear efecto de partícula al click antes de hacer scroll
    const burst = document.createElement('span');
    burst.textContent = '👻';
    burst.style.cssText = `
      position: fixed;
      left: ${e.clientX - 12}px;
      top: ${e.clientY - 12}px;
      font-size: 1.5rem;
      pointer-events: none;
      z-index: 9999;
      animation: ghostBurst 0.6s ease forwards;
    `;
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 600);
  });
}

// --- Animación de entrada para las cards al hacer scroll ---
function initScrollReveal() {
  const cards = document.querySelectorAll('.member-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

// --- Agregar keyframe dinámico para burst del botón ---
function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ghostBurst {
      0%   { transform: scale(1) translateY(0); opacity: 1; }
      100% { transform: scale(2.5) translateY(-40px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

// --- Contador divertido de integrantes en la sección equipo ---
function initTeamCounter() {
  const sectionTitle = document.querySelector('.team-section .section-title');
  if (!sectionTitle) return;

  let revealed = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !revealed) {
        revealed = true;
        let count = 0;
        const target = 4;
        const interval = setInterval(() => {
          count++;
          sectionTitle.textContent = `Los Cazadores (${count})`;
          if (count >= target) {
            clearInterval(interval);
            setTimeout(() => {
              sectionTitle.textContent = 'Los Cazadores';
            }, 1500);
          }
        }, 200);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(sectionTitle);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  addDynamicStyles();
  createParticles();
  initCardEffects();
  initHeroButton();
  initScrollReveal();
  initTeamCounter();
});
