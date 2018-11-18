

function populateContainer(noSquares, container) {
  for (var i=0; i<noSquares; i++) {
    width = container.width()-i*10;
    squareDivs[i] = document.createElement("div");
    squareDivs[i].setAttribute("class", "dynamic-squares");
    squareDivs[i].setAttribute("id", "square-"+(i+1).toString());

    $(".container").append(squareDivs[i]);
    $(".dynamic-squares").css("position", "absolute");
    $("#square-"+(i+1).toString()).css("top", (container.width-width).toString());
    $("#square-"+(i+1).toString()).css("left", (container.width-width).toString());
    $("#square-"+(i+1).toString()).css("width", width.toString());
    $("#square-"+(i+1).toString()).css("height", width.toString());
  }
}

function rotateSquare(element, delayMultiple, minAngle, maxAngle) {
  var $square = element;
  $({deg: minAngle}).delay(delayMultiple*50).animate({deg: maxAngle}, {
    duration: 4000,
    step: function(now) {
      $square.css({
        transform: "rotate("+now+"deg)"
      });
    },
    complete: function() {
      $({deg: maxAngle}).animate({deg: minAngle}, {
          duration: 4000,
          step: function(now) {
            $square.css({
              transform: "rotate("+now+"deg)"
            });
          },
          // complete: rotateSquare(element, delayMultiple, minAngle, maxAngle)
        });
    }
  });
};

function fun() {
  for (var i=0; i<=squareDivs.length; i++) {
    rotateSquare($("#square-"+i.toString()),i, 0,360);

  }
}

$( document ).ready(function() {
  squareDivs = [];
  const frame = document.getElementsByClassName("frame");
  const container = document.createElement("div");
  container.setAttribute("class", "container")
  $(".frame").append(container);
  populateContainer(20, $(".container"));
  fun();
});
