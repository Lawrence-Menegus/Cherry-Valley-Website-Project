const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('carousel-left').addEventListener('click', function () {
      const wrapper = document.querySelector('.board__carousel-wrapper');
      wrapper.scrollBy({
          left: -640, // Scroll left by the width of two members
          behavior: 'smooth'
      });
  });

  document.getElementById('carousel-right').addEventListener('click', function () {
      const wrapper = document.querySelector('.board__carousel-wrapper');
      wrapper.scrollBy({
          left: 640, // Scroll right by the width of two members
          behavior: 'smooth'
      });
  });
});

// Function to show the popup
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Show the popup when the page loads
window.onload = function() {
  showPopup();
};

// Function to open the popup
function openPopup() {
  document.getElementById("vpopup").style.display = "block"; // Show the popup
}

// Function to close the popup
function closedPopup() {
  document.getElementById("vpopup").style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside of the content
window.onclick = function(event) {
  const popup = document.getElementById("vpopup");
  if (event.target === popup) {
      closedPopup();
  }
};