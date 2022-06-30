$(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  }); 
  $('.services__tubs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.services__tubs').find('.tab-item').removeClass('active-tab').hide();
      $('.services__tubs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });
    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
    });
});