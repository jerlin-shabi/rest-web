function animateFromBottom() {
  var content = document.querySelector('.content');
  content.classList.add('show');
}

document.addEventListener('scroll', function () {
  var headerContainer = document.querySelector('header');

  if (window.scrollY > 150) {
    headerContainer.style.backgroundColor = 'red'; // Change background color on scroll
    headerContainer.style.opacity = '1';
  } else {
    headerContainer.style.backgroundColor = 'rgba(51, 51, 51, 0)'; // Transparent background when at the top
    headerContainer.style.opacity = '1'; // Fully visible at the top
  }
});

document.addEventListener('DOMContentLoaded', function () {
  animateFromBottom();
});
