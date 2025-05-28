$(document).ready(function () {
  $('.nav-link').on('click', function (e) {
    e.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});
// nevigate to about section
document.getElementById('about-link').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
