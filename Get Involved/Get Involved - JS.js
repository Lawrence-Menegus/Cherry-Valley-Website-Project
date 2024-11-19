// Mobile menu toggle
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Toggle the mobile menu visibility
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Show the main popup when the page loads
window.onload = function () {
  document.getElementById("popup").style.display = "block";
};

// Function to close the main popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openEmailPopup(popupId) {
  document.getElementById(popupId).style.display = "flex";
}

function closeEmailPopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

// Function to close popups when clicking outside of them
window.onclick = function (event) {
  // Close the specific email popups if clicked outside
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    if (event.target === popup) {
      closeEmailPopup(popup.id); // Close the clicked popup
    }
  });

  // Close the main popup if clicked outside
  const mainPopup = document.getElementById("popup");
  if (event.target === mainPopup) {
    closePopup();
  }
};

// Function to open the popup
function openPopup(popupId) {
  document.getElementById(popupId).style.display = "flex";
}

// Function to validate the email and submit, then proceed to PayPal
function validateAndSubmit(popupId, buttonId) {
  const email = document.getElementById("userEmail").value;

  // Simple email validation pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(email)) {
    alert("Thank you for subscribing!");
    closeEmailPopup(popupId); // Close the popup after successful submission

    // Proceed to PayPal redirection
    document.getElementById(buttonId).click();
  } else {
    alert("Please enter a valid email.");
  }
}

// Event listener for the form submit button (ensure to attach this to your submit button)
// Assuming each form has a submit button with an id `submitBtn-1`, `submitBtn-2`, etc.
document.getElementById("submitBtn-1").addEventListener("click", function () {
  validateAndSubmit("emailPopup-1", "paypalBtn-1");
});
document.getElementById("submitBtn-2").addEventListener("click", function () {
  validateAndSubmit("emailPopup-2", "paypalBtn-2");
});
document.getElementById("submitBtn-3").addEventListener("click", function () {
  validateAndSubmit("emailPopup-3", "paypalBtn-3");
});
document.getElementById("submitBtn-4").addEventListener("click", function () {
  validateAndSubmit("emailPopup-4", "paypalBtn-4");
});
document.getElementById("submitBtn-5").addEventListener("click", function () {
  validateAndSubmit("emailPopup-5", "paypalBtn-5");
});
document.getElementById("submitBtn-6").addEventListener("click", function () {
  validateAndSubmit("emailPopup-6", "paypalBtn-6");
});
