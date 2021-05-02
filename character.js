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
});
