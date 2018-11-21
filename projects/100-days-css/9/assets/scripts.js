function holdNDrag(element) {
  limit = element.parent().width();
  frameWidth = $(".frame").width();
  // console.log(elemParent);
  mouseup = false;
  $(document).on('mouseup', function() {
    mouseup = true;
    return;
  });
  $(document).on('mousemove', function(e) {
    if (!mouseup) {

      if (e.pageX > limit/4 && e.pageX < (frameWidth - limit/4)) {
        element.css({
          left: e.pageX - limit/4 - element.width()/2
        });

      }
    };
  });
};


$(document).ready(function() {
  var dragElem = $(".centered-circle");
  dragElem.on('mousedown', function() {
    holdNDrag(dragElem);
  });
})
