// For buttons
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});


// For Photo Gallery 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
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


// code for the image zoom 

// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal
var upcomingImg = document.getElementById("upcomingImg");
var newsletterImg = document.getElementById("newsletterImg");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

// Click event for Upcoming Events image
upcomingImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Click event for Newsletter image
newsletterImg.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Close the modal when clicking on <span> (x)
span.onclick = function() { 
  modal.style.display = "none";
};

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