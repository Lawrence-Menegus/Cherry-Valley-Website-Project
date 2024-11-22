// Toggle mobile menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

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

// Function to open the vpopup
function openPopup() {
  document.getElementById("vpopup").style.display = "block"; // Show the vpopup
}

// Function to close the vpopup
function closedPopup() {
  document.getElementById("vpopup").style.display = "none"; // Hide the vpopup
}

// Close the vpopup when clicking outside of the content
window.onclick = function (event) {
  const popup = document.getElementById("vpopup");
  if (event.target === popup) {
    closedPopup();
  }
};

// Show the popup when the page loads without overriding other onload events
window.addEventListener("load", showPopup);
