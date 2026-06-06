/* =========================
   LIGHTBOX
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

if (lightbox && lightboxImg && lightboxClose) {

  document.querySelectorAll(".lightbox-trigger").forEach(item => {

    item.addEventListener("click", e => {

      e.preventDefault();

      lightboxImg.src = item.href;

      lightbox.classList.add("active");

      document.body.style.overflow = "hidden";
    });

  });

  function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {
      closeLightbox();
    }

  });

  document.addEventListener("keydown", e => {

    if (e.key === "Escape") {
      closeLightbox();
    }

  });

}