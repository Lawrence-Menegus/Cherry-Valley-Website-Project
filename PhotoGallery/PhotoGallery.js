// For buttons
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// For Photo Gallery
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Initial setup
showSlide(currentSlide);

// Function to show the popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Show the popup when the page loads
window.onload = function () {
  showPopup();
};

const carouselWrapper = document.querySelector(
  ".video-gallery__carousel-wrapper"
);
const leftButton = document.getElementById("carousel-left");
const rightButton = document.getElementById("carousel-right");

leftButton.addEventListener("click", () => {
  carouselWrapper.scrollBy({ left: -300, behavior: "smooth" });
});

rightButton.addEventListener("click", () => {
  carouselWrapper.scrollBy({ left: 300, behavior: "smooth" });
});

// Function to open the popup Volunteer
function openPopup() {
  document.getElementById("vpopup").style.display = "block"; // Show the popup
}

// Function to close the popup
function closedPopup() {
  document.getElementById("vpopup").style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside of the content
window.onclick = function (event) {
  const popup = document.getElementById("vpopup");
  if (event.target === popup) {
    closedPopup();
  }
};
