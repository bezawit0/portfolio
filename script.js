// ===== MOBILE MENU =====
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu on link click
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

// ===== CONTACT FORM =====
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.textContent = "Sending...";
  button.style.transform = "scale(0.95)";

  setTimeout(() => {
    alert("Thank you for contacting me 😊");
    button.textContent = "Send Message";
    button.style.transform = "scale(1)";
    form.reset();
  }, 800);
});
