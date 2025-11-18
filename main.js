// ----- ScrollReveal Animations -----
ScrollReveal({
  distance: '50px',
  duration: 1200,
  delay: 100,
  reset: false
});
ScrollReveal().reveal('.hero h1, .hero p, .hero .btn', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.features h2', { origin: 'top' });
ScrollReveal().reveal('.card', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.preview .content, .preview .mockup-box', { origin: 'left', interval: 200 });
ScrollReveal().reveal('.testimonial-card', { origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.screenshot-card', { origin: 'bottom', interval: 150, distance: '35px' });


// ----- Scroll Header Effect -----
const header = document.querySelector('.mainHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ----- Particle Background -----
const canvasAll = document.getElementById('bgParticles');
const ctxAll = canvasAll.getContext('2d');
let wAll, hAll;
let particlesAll = [];

function resizeCanvasAll() {
  wAll = canvasAll.width = window.innerWidth;
  hAll = canvasAll.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvasAll);
resizeCanvasAll();

function createParticlesAll() {
  particlesAll = [];
  const numParticles = Math.floor((wAll * hAll) / 8000);
  for (let i = 0; i < numParticles; i++) {
    particlesAll.push({
      x: Math.random() * wAll,
      y: Math.random() * hAll,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: `hsla(${200 + Math.random() * 100}, 80%, 70%, 0.6)`
    });
  }
}
createParticlesAll();

function animateParticlesAll() {
  ctxAll.clearRect(0, 0, wAll, hAll);
  particlesAll.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > wAll) p.speedX *= -1;
    if (p.y < 0 || p.y > hAll) p.speedY *= -1;
    ctxAll.beginPath();
    ctxAll.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctxAll.fillStyle = p.color;
    ctxAll.fill();
  });
  requestAnimationFrame(animateParticlesAll);
}
animateParticlesAll();

const themeBtn = document.querySelector('.theme-toggle');

const themeCheckbox = document.getElementById('toggle-theme');

// Проверяем состояние при загрузке
if (localStorage.getItem('theme') === 'light') {
  document.body.dataset.theme = 'light';
  themeCheckbox.checked = true;
} else {
  themeCheckbox.checked = false;
}

themeCheckbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.dataset.theme = '';
    localStorage.setItem('theme', 'dark');
  }
});

const burger = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

// Показать/скрыть меню при нажатии на бургер
burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Закрывать меню при клике на ссылку
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});
