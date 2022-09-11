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
  $('.burger').click(function(event) {
    $('.burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

