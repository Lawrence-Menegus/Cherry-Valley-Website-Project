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

