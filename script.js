// 1. Open and close the menu on mobile
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// 2. Keep the footer year current
document.getElementById('year').textContent = new Date().getFullYear();
