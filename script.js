document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Dark Mode"; // Default text
  toggleButton.classList.add("toggle-btn");
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change button text based on mode
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "White Mode";
    } else {
      toggleButton.textContent = "Dark Mode";
    }

    //Store user preference
    localStorage.setItem(
      "darkMode",
      document.body.classList.contains("dark-mode")
    );
  });

  // Maintain user preference after refresh
  /* if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Dark Mode";
  }*/
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.opacity = "1"; // Show when scrolling down
    } else {
      backToTopButton.style.opacity = "0"; // Hide when near the top
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls smoothly to the top
  });
});
