nextIcon = '<img src="../img/Vector 1.png" class="but-pic" alt="">';
prevIcon = '<img src="../img/Vector 2.png" class="but-pic" alt="">';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    items:1,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    nav:true,
    navText:[
      prevIcon,
      nextIcon
    ]
})