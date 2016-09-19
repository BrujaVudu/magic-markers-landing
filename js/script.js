$(function() {
  $('#video-wrapper-main').click(function() {

    $(".videoWrapperVideo#video-main").html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Sy9kegzWbFs?modestbranding=1&autohide=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');

  });

  // $('#video-wrapper-main').hover(
  //   function() {
  //     $(this).stop().animate({opacity: 0},200,function() {
  //       $(this).css({'background-image': "url('../assets/imghover.jpg')"})
  //         .animate({opacity: 1},{duration:200});
  //     });
  //   },
  //   function() {
  //     $(this).stop().animate({opacity: 0},200,function() {
  //       $(this).css({'background-image': "url('../assets/img.jpg')"})
  //         .animate({opacity: 1},{duration:200});
  //     });
  //   }
  // );
});