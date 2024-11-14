const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides_fade");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
});

window.onload = function () {
  document.getElementById("popup").style.display = "block";
};

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Function to open the popup
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
