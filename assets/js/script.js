/* Click To Top */
const button = document.getElementById("toped");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
});

// Smooth scroll to top when button is clicked
button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* Toggle Navigation */
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.add("open");
});

close.addEventListener("click", () => {
  navList.classList.remove("open");
});

/* Fix Nav */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("fix-nav");
  } else {
    header.classList.remove("fix-nav");
  }
});

// Get the current page URL path
const currentPage = window.location.pathname.split("/").pop();

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through each link and add 'active' class if it matches the current page
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
