$(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
  $('.services__tubs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.services__tubs').find('.tab-item').removeClass('active-tab').hide();
    $('.services__tubs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });


  $('.content').css({
    'paddingTop': $('header').outerHeight() + 30 + 'px'
  });
  if($(window).scrollTop() > 50){
    $('header').css({ background :'rgba(0, 0, 0, .9)'});
    $('header').addClass('header__fixed');
  }
  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
      $('header').css({ background :'rgba(0, 0, 0, .9)'});
      $('header').addClass('header__fixed');
    }
    else{
      $('header').css({ background :''});
      $('header').removeClass('header__fixed');
    }
  });
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
});