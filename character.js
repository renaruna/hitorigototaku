$(function() {
    var $home = $('.home-index');
    var h = $(window).height();

    $('.menu').hover(
        function(){
            $home.animate({'marginRight':'200px'},500);
            $home.css("height",h);
        },
        function () {
          $home.animate({'marginRight':'0'},500);
        }
    );
    
    //スライダー
    function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    //前へ次へボタンは表示しとく
    $('.change-btn').show();
    
    if (slideIndex == 0) {
      //activeになってるスライドが1番最初（0）のとき、前へボタンを隠す
      $('.prev-btn').hide();
    
    } else if (slideIndex == $('.slide').length - 1) {
      //activeになってるスライドが1番最後（slide.length-1）のとき、次へボタンを隠す
      $('.next-btn').hide();
    }
  }
  
  //下の番号を押して写真変える
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });
  
  //前へ次へボタン押して写真変える
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });
});
