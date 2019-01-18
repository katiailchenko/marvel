'use strict';
const images = document.images;
const images_total_count = images.length;
const preloader = document.getElementById('page-preloader');
const perc_display = document.getElementById('load_perc');

for(let i = 0; i < images_total_count; i++) {
  let image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}

let images_loaded_count = 0;

function image_loaded() {
  images_loaded_count++;
  perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';

  if(images_loaded_count >= images_total_count) {
    setTimeout(function() {
      if(!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 2000);
  }
}


$(document).ready(function() {

$('.banner-sl').slick({
 	dots: true,
 	arrows: false,
 	appendDots: $('.banner__toggle'),
 	autoplay: true,
  	autoplaySpeed: 4000
 });

$('[data-jarallax]').jarallax({
    speed: 0.2
});

})
