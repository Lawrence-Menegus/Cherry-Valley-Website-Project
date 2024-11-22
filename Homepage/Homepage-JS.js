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

// Function to close the popup with fade-out effect
function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
  setTimeout(() => {
    popup.style.display = "none";
  }, 500); // Match CSS transition duration
  localStorage.setItem("popupShown", "true"); // Mark popup as shown
}

// Delay popup appearance by 1 minute (60000 ms) with fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("popupShown")) {
    setTimeout(function () {
      const popup = document.getElementById("popup");
      popup.style.display = "block"; // Ensure it's part of the layout
      setTimeout(() => {
        popup.classList.add("show"); // Trigger fade-in effect
      }, 10); // Slight delay for transition to apply
    }, 30000); // 30 seconds
  }
});

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
