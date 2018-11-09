$( document ).ready(function() {
    $( ".outer-container" ).click(function() {
      count++;
      $ (".outer-container").animate({
        width: "+=300%",
        height: "+=300%"
      }, 1000, function() {
        $(this).removeAttr('style');
        if (count%2==0) {
          console.log("hello");
          $(".frame, .cuts, .circle").css("background-color", "#fff");
          $(".main").css("background-color", "#995ab4");
        }
        else {
          console.log("breh")
          $(".frame, .cuts, .circle").css("background-color", "#995ab4");
          $(".main").css("background-color","#fff");
        }
      })
  });
});
