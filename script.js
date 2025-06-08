document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.classList.add("toggle-btn");
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});

document.addEventListener("scroll", function () {
  document.querySelectorAll("section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      section.style.opacity = 1;
    }
  });
});

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add("header-hidden"); // Hide when scrolling down
  } else {
    header.classList.remove("header-hidden"); // Show when scrolling up
  }
  lastScrollY = window.scrollY;
});

const navButton = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

navButton.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
