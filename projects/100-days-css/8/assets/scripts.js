function timerString(count) {

  // Convert count to string
  count = count.toString();
  // newCount adds spaces
  newCount = "";
  for (var i = 0; i < count.length; i++) {
    newCount += count[i] + " ";
  };

  zeros = 4 - count.length;
  countStr = "0 ".repeat(zeros) + newCount;

  return countStr;

};

$( document ).ready(function() {
  var count = 0;
  stop = false;
  $("#pause").click(function() {
    stop = true;
  });

  var stopWatch = setInterval(function() {
      count++;
      if (count == 9999) {
        count = 0;
      };
      if (stop) {
        clearInterval(stopWatch);
      }
      $("#timer").text(timerString(count));
      }, 1000);



});
