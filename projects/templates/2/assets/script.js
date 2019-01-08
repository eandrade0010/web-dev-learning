

$(document).ready(function() {

  var scroll = 0;
  console.log(scroll);
  var lastScrollTop = 0;
  var elements = [1,2,3,4,5];
  var i = 0;
  $( ".main-content" ).scroll(function() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      i++;
      console.log('down');
      if (i >= elements.length ) {
        i = 0;
      }
      console.log(i);

    } else {
      console.log('up');
    }
    lastScrollTop = st;
    //
    // scroll = $(window).scrollTop();
    // console.log(scroll);
    $(".main-content").scrollTop($(".breh").offset().top);
    $(".main-content").off("scroll");
  });




});
