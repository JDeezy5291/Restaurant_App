$(document).ready(function () {

    $("#toggle").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });
    $("#resize ul li a").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });
    $(".close-btn").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });
    $(".scroll-down").click(function (){
        $('html').animate({
            scrollTop: $(".container-fluid").offset().top - '80'
        }, 2000);
    });

});

TweenMax.from('#brand', 1, {
    delay: .4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})
TweenMax.staggerFrom('#menu li a', 1, {
    delay: .4,
    opacity: 0,
    ease: Expo.easeInOut
}, .1)

new WOW().init();