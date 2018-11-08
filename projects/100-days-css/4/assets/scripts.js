var purple = "#995ab4";
var white = "#fff";

var count = 1;

(function($) {
  $.fn.invertGradient = function() {
    $(".top-left-cut").css({
      background: "-webkit-linear-gradient(30deg, #000 50%, transparent 50%);"
    // );

    });
  };
})( jQuery );





$( document ).ready(function() {
    // $( ".container").hide();
    $( ".outer-container" ).click(function() {
      count++;
      console.log(count);
      $ (".outer-container").animate({
        width: "+=300%",
        height: "+=300%"
      }, 1000, function() {
        $(this).removeAttr('style');
        $(".frame").css("background-color", "#fff")
        $(".main").css("background-color","#995ab4")
        $(".cuts").css("background-color", "#fff")
        $(".circle").css("background-color", "#fff")

      })
  });
});
