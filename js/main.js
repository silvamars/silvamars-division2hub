const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainMenu.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mainMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainMenu.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = mainMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      mainMenu.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const bgImage = document.querySelector('.bg-image');

if (bgImage) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    bgImage.style.transform = `scale(1.04) translateY(${offset * 0.08}px)`;
  });
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-active');
    navMenu.classList.toggle('is-open');

    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

/* =========================
   LIGHTBOX
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const triggers = document.querySelectorAll(".lightbox-trigger");

  if (!lightbox || !lightboxImg || !lightboxClose || triggers.length === 0) return;

  triggers.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const img = item.querySelector("img");

      lightboxImg.src = item.href;
      lightboxImg.alt = img ? img.alt : "";

      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    lightboxImg.alt = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
});