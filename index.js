$(document).ready(function () {
  // Highlight active nav link
  $('.n-link').on('click', function (e) {
    e.preventDefault();
    $('.n-link').removeClass('active');
    $(this).addClass('active');
  });

  // Smooth scrolling
  $('#about-link').on('click', function (e) {
    e.preventDefault();
    $('#about')[0].scrollIntoView({ behavior: 'smooth' });
  });
  $('#blog-link').on('click', function (e) {
    e.preventDefault();
    $('#blog')[0].scrollIntoView({ behavior: 'smooth' });
  });
  $('#service-link').on('click', function (e) {
    e.preventDefault();
    $('#service')[0].scrollIntoView({ behavior: 'smooth' });
  });

  // Back to Top Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $('.back-to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // Language switch translations
  const translations = {
    en: {
      home: '<i class="bi bi-house-fill"></i> Home',
      about: '<i class="bi bi-file-person-fill"></i> About',
      service: '<i class="bi bi-gear-fill"></i> Service',
      blog: '<i class="bi bi-substack"></i> Blog',
      contact: '<i class="bi bi-telephone-fill"></i> Contact',
      language: '<i class="bi bi-globe"></i> Language'
    },
    fr: {
      home: '<i class="bi bi-house-fill"></i> Accueil',
      about: '<i class="bi bi-file-person-fill"></i> À propos',
      service: '<i class="bi bi-gear-fill"></i> Service',
      blog: '<i class="bi bi-substack"></i> Blogue',
      contact: '<i class="bi bi-telephone-fill"></i> Contact',
      language: '<i class="bi bi-globe"></i> Langue'
    },
    es: {
      home: '<i class="bi bi-house-fill"></i> Inicio',
      about: '<i class="bi bi-file-person-fill"></i> Acerca de',
      service: '<i class="bi bi-gear-fill"></i> Servicio',
      blog: '<i class="bi bi-substack"></i> Blogio',
      contact: '<i class="bi bi-telephone-fill"></i> Contacto',
      language: '<i class="bi bi-globe"></i> Idioma'
    }
  };

  function updateContent(lang) {
    const langData = translations[lang];
    $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      if (langData[key]) {
        $(this).html(langData[key]);
      }
    });
  }

  // Language dropdown click
  $('.lang-option').click(function (e) {
    e.preventDefault();
    const selectedLang = $(this).data('lang');
    updateContent(selectedLang);
  });

  // Initialize to English
  updateContent("en");
});
