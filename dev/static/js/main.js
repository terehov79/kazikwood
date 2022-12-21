(function ($) {

  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });

  $(".products__mini").on('click', function () {
    $(this).hide().next().slideDown(300);
  });
  
  $(".products__full .full__info").on('click', function () {
    $(this).parents(".products__full").hide().prev().slideDown(0);
  });


  // $(".products__full").on('click', function () {
  //   $(this).hide().prev().show(300);
  // });

  

  // $('body').on ('click', function () {
  //   $('.section__full').hide();
  //   $('.section__mini').show();
  // });

  // $('.products__section').on ('click', function (event) {
  //  event.stopPropaga


  $(".swiper-container").each(function () {
    let $parent = $(this).parents('.slider');
    new Swiper(this, {
      speed: 1000,
      spaceBetween: 50,
      slidesPerView: 1,
      loop: false,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      navigation: {
        nextEl: $parent.find(".swiper-next_btn")[0],
        prevEl: $parent.find(".swiper-prev_btn")[0]
      },
      pagination: {
        el: $parent.find(".swiper-pagination")[0],
        type: 'fraction',
      },
    });
  });

  let menuBtn = document.querySelector('.header__burger-btn');
  let menu = document.querySelector('.header__burger-menu');
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })


  
})(jQuery);

