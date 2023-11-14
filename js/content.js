$(function(){
   
       
    var decoSwiper = new Swiper('.deco.swiper-container');
    var photoSwiper = new Swiper('.photo-swiper.swiper-container', {
        loop:true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });
   
});