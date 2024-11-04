// Toggle mobile menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Popup show and close functions
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Show the popup when the page loads without overriding other onload events
window.addEventListener("load", showPopup);

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