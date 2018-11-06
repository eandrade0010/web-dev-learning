$( document ).ready(function() {
    $( ".fa-check").hide();
    $( "a" ).click(function() {
      $( this ).children("span:last").hide();
      $( this ).children("span:first").show();
      $( this ).css("color", "#d3dbdf");

  });
});
