// Mobile menu toggle
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Toggle the mobile menu visibility
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
}

// Function to open the email popup
function openEmailPopup(popupId) {
  document.getElementById(popupId).style.display = "flex";
}

// Function to close the email popup
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

// Function to show PayPal donation button after submitting the email form
function showPaypalButton() {
  // Close the email popup after submission
  closeEmailPopup("emailPopup"); // Close the email popup

  // Show the PayPal donation button
  document.querySelector(".customPaypalButton").style.display = "block";
  // Optionally, scroll to the PayPal button if needed
  document
    .querySelector(".customPaypalButton")
    .scrollIntoView({ behavior: "smooth" });
}

// Function to handle form submission via Google Forms (simulating the submission flow)
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // You might want to use the form's built-in submission process here
  // Simulate successful form submission by showing PayPal button
  showPaypalButton();

  // Optionally, you can send the form data manually using the Google Forms API or simply rely on Google Forms to handle the backend submission
  alert("Thank you for subscribing!");
  // Close the email popup and show PayPal button
  closeEmailPopup("emailPopup");
}

// Google Form submission logic
function setupGoogleFormSubmission() {
  const googleFormIframe = document.querySelector(
    "iframe[src*='docs.google.com/forms']"
  );

  googleFormIframe.addEventListener("load", function () {
    // You can track the form submission completion here,
    // but for now, we simulate the email form submission with a button trigger
    const submitButton = googleFormIframe.contentWindow.document.querySelector(
      ".appsMaterialWizButtonPaperbuttonContent"
    );

    // If Google Form submit button exists, simulate a click event on it
    if (submitButton) {
      submitButton.addEventListener("click", function () {
        showPaypalButton();
      });
    }
  });
}

// Trigger the Google Form setup when the iframe is loaded
window.addEventListener("load", setupGoogleFormSubmission);

// Function to validate the email and submit
function validateAndSubmit(popupId, buttonId) {
  const email = document.getElementById("userEmail").value;

  // Simple email validation pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(email)) {
    alert("Thank you for subscribing!");
    closeEmailPopup(popupId); // Close the email popup after successful submission

    // Submit the PayPal form
    document.getElementById("donateForm").submit();
  } else {
    alert("Please enter a valid email.");
  }
}

// Event listener for when the email form is submitted
document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    handleFormSubmission(event);
  });

// Function to open the popup Volunteer
function openVolunteerPopup() {
  document.getElementById("vpopup").style.display = "block"; // Show the popup
}

// Function to close the Volunteer popup
function closeVolunteerPopup() {
  document.getElementById("vpopup").style.display = "none"; // Hide the popup
}
