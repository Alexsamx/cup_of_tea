let swiper = new Swiper('.swiper', {
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  grabCursor: true,

});

$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger,.header_menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

