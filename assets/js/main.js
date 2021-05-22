$(function(){

<<<<<<< HEAD
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
=======
    $(document).on('ready', function() {
        $(".full-screen").slick({
          centerMode: true,
          centerPadding: '5%',
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 1000,
          infinite: true,
        });
      });





$(document).on('ready', function() {
  $(".full-screen").slick({
    centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
    centerPadding: '5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
    dots: true, // ドットインジケーターの表示
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
    speed: 1000, // スライド/フェードアニメーションの速度を設定
    infinite: true // スライドのループを有効にするか
  });

});

console.log($(".full-screen"));

// section1のスライダー用
　$('.bgimg-slider').bgSwitcher({
  　　images: ['./assets/img/topview2.JPG','./assets/img/topview3.JPG','./assets/img/topview1.JPG','./assets/img/topview4.JPG'],
  　　effect: "drop",
  　　easing: "linear"
  　});

})
>>>>>>> 28dcbdc0b48bf11c0332b8a64c825ce6973389d6
