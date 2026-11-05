
/* =====================================
   KK WORLD - MAIN JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

  // Navbar scroll effect
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });

  // Reveal sections on scroll
  const revealElements = document.querySelectorAll(
    ".card, .section-title, .about, .cta"
  );

  revealElements.forEach(function (element) {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }

    });

  }, {
    threshold: 0.15
  });

  revealElements.forEach(function (element) {
    observer.observe(element);
  });

});
