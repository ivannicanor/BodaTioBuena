document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
  });
// Seleccionamos el header
const header = document.querySelector('header');
const hamburger = document.getElementById('nav-menu');

// Añadimos un evento de scroll para el header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        hamburger.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        hamburger.classList.remove('scrolled');
    }
});