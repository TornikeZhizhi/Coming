

$(document).ready(function(){

  var vw = $(window).width()


  if (vw > 992) {

    var $layer_0 = $('.flower_l'),
    $layer_1 = $('.flower_r'),
    $layer_2 = $('.flower_c'),
    $container = $('body'),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on('mousemove.parallax', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;
  

  
  TweenMax.to(
    $layer_2, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 100 + 'px) translateY(' + top / 30 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_1, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 14 + 'px) translateY(' + top / 12 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
  
  TweenMax.to(
    $layer_0,
    10,
    {
      css: {
        transform: 'rotate(' + left / 200 + 'deg)'
      },
      ease: Expo.easeOut,
      overwrite: 'none'
    }
  )
});
  }



})

