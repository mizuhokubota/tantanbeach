$(function(){

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
  　　images: ['./assets/img/topview1.JPG','./assets/img/topview2.JPG','./assets/img/topview3.JPG','./assets/img/topview4.JPG','./assets/img/topview5.JPG'],
  　　effect: "drop",
  　　easing: "linear"
  　});

})