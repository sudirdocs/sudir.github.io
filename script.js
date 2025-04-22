// script.js

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Add transition animations to sections
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('in-view');
      }
    });
  });
});
