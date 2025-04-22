document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add scroll animation to sections
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
        section.classList.add('in-view');
      }
    });
  });

  // Trigger animation on load
  window.dispatchEvent(new Event('scroll'));
});
