jQuery(function ($) {
  $('.accordion-title').on('click', function () {
        $(this).next().slideToggle(200);
        $(this).toggleClass('open', 200);
      });
  $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $("#page_top").fadeIn();
          } else {
              $("#page_top").fadeOut();
          }
      });
  $(".btn").click(function () {
    var position = $("#contact").offset().top;
    $('html').animate({scrollTop:position});
  });

    // アコーディオン機能
    $('.js-ac-trigger').on('click', function() {
      $(this).next().slideToggle(200);
      $(this).toggleClass('is-active', 200);
    });
    $('.js-ac').on('click', function() {
      $(this).toggleClass('is-active', 200);
    });



});
