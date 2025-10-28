// ---------- MOBILE MENU TOGGLE ----------
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ---------- OPTIONAL: AUTO CLOSE MENU ON LINK CLICK ----------
const allLinks = document.querySelectorAll('.nav-links a');
allLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ---------- SCROLL TO TOP (future feature) ----------
window.addEventListener('scroll', () => {
  // You can add animations or sticky navbar here later
});
