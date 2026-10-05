const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImg = document.querySelector("[data-lightbox-img]");
const privacyDialog = document.querySelector("[data-privacy-dialog]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-gallery]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = button.dataset.gallery;
    lightbox.hidden = false;
  });
});

document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => {
  if (lightbox) {
    lightbox.hidden = true;
    lightboxImg.src = "";
  }
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.hidden = true;
    lightboxImg.src = "";
  }
});

document.querySelector("[data-privacy-open]")?.addEventListener("click", () => {
  if (privacyDialog?.showModal) {
    privacyDialog.showModal();
  }
});

document.querySelector("[data-privacy-close]")?.addEventListener("click", () => {
  privacyDialog?.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    lightbox.hidden = true;
    lightboxImg.src = "";
  }
});
