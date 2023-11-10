function animateFromBottom() {
  var content = document.querySelector('.content');
  content.classList.add('show');
}

document.addEventListener('scroll', function () {
  var headerContainer = document.querySelector('header');

  if (window.scrollY > 100) {
     //background of header
    headerContainer.style.opacity = '1';
  } else {
    headerContainer.style.backgroundColor = 'rgba(51, 51, 51, 0)';
    headerContainer.style.opacity = '1';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  animateFromBottom();
});
