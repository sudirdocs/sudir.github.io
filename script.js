// Scroll Color Change
window.addEventListener('scroll', function() {
  let body = document.body;
  if (window.scrollY > 50) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

// Theme Toggle (Dark Mode)
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Scroll animations trigger
const elements = document.querySelectorAll('.slide-in-left, .slide-in-right');
window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      el.style.animationPlayState = 'running';
    }
  });
});
