document.querySelector('.fa-bars').addEventListener('click', function() {
  document.querySelector('.hamburger-menu').classList.add('active')
});

document.querySelector('.fa-times').addEventListener('click', function() {
  document.querySelector('.hamburger-menu').classList.remove('active')
});