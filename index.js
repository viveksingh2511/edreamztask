$(document).ready(function () {
  $('.nav-link').on('click', function (e) {
    e.preventDefault(); // Prevent default if links are "#"

    // Remove active class from all
    $('.nav-link').removeClass('active');

    // Add active class to clicked item
    $(this).addClass('active');
  });
});
