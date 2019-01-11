$(document).ready(function() {

$('.banner-sl').slick({
 	dots: true,
 	arrows: false,
 	appendDots: $('.banner__toggle'),
 	autoplay: true,
  	autoplaySpeed: 3000
 });

$('[data-jarallax]').jarallax({
    speed: 0.2
});

})
