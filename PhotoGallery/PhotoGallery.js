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
// Delay popup appearance by 30 seconds (30000 ms)
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("popupShown")) {
    setTimeout(function () {
      showPopup(); // Show the popup after 30 seconds
    }, 30000); // 30 seconds delay
  }
});

// Function to show the popup with smooth transition
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block"; // Ensure the popup is visible
  setTimeout(() => {
    popup.classList.add("show"); // Add the 'show' class for smooth transition
  }, 10); // Short delay to ensure the popup is displayed before the transition starts
  localStorage.setItem("popupShown", "true"); // Mark popup as shown
}

// Function to close the popup with smooth transition
function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show"); // Remove the 'show' class to trigger the hide transition
  setTimeout(() => {
    popup.style.display = "none"; // Hide the popup after the transition ends
  }, 300); // Match the duration of the transition
  localStorage.setItem("popupShown", "true"); // Mark popup as shown
}

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
