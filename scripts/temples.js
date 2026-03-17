// Footer dynamic info
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? 'X' : '☰';
});
