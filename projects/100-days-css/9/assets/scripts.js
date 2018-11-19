function dragger(element) {
  $(document).on('mousemove', function(e) {
    element.css({
      left: e.pageX
    });
  });
}


$(document).ready(function() {

  var dragElem = $(".centered-circle");
  var listener = 0;
  dragElem.on('mousedown', function() {
    console.log("hello");

    listener = setTimeout(
      dragger(dragElem), 1000);
  });
  dragElem.on('mouseup mouseleave', function() {
    console.log("wat");
    clearTimeout(listener);

  });




})
