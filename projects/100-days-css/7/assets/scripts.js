$( document ).ready(function() {
  var orbWidth = $("#orb").outerWidth()/2;
  var frameWidth = $(".frame").width();

  $( document ).on('mousemove', function(e){
    $(" #orb-glow ").animate({
      width: "+=100%",
      height: "+=100%"
    }, 800,
      function() {
      $(this).css("width", "100%");
      $(this).css("height", "100%");
      }
    );
    if (e.pageX < frameWidth && e.pageY <= frameWidth)  {
      $( "#orb" ).css({
        left: e.pageX -orbWidth*2,
        top: e.pageY -orbWidth*2
      })
    }

  });
});
