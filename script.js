{
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mainNav");

  mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    const icon = mobileBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close mobile menu on link click
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      const icon = mobileBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.getAttribute("href");
      if (id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Form Submission
  const form = document.getElementById("contactForm");
  const confirmMsg = document.getElementById("formConfirmation");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    confirmMsg.classList.add("show");
    form.reset();
    setTimeout(() => confirmMsg.classList.remove("show"), 5000);
  });

  // Scroll to Top
  const scrollBtn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animate Skill Bars
  function animateSkills() {
    document.querySelectorAll(".skill-level").forEach((bar) => {
      const level = bar.dataset.level;
      bar.style.width = level + "%";
    });
  }

  // Fade In Animation
  function checkFade() {
    document.querySelectorAll(".fade-in").forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("visible");
        if (el.classList.contains("skills-container")) {
          setTimeout(animateSkills, 300);
        }
      }
    });
  }

  window.addEventListener("scroll", checkFade);
  window.addEventListener("load", checkFade);
  setTimeout(checkFade, 2000);
}
