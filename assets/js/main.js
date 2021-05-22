$(function(){

  console.log($(".full-screen"));
  
  // section1のスライダー用
  　$('.bgimg-slider').bgSwitcher({
    　　images: ['../img/topview1.JPG','../img/topview2.JPG','../img/topview3.JPG'],
    　　effect: "drop",
    　　easing: "linear"
    　});
  
  
  

    
  
  
  // section2
  $(function() {
    $('.beaches').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
            
  });
  });