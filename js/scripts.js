$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let array = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val()];    

    array.sort();

    let newArray = array.toString().toUpperCase();
    
    $("#botlist").show();
    $(this).hide();

    $("ul").append("<li>" + array[0] + "</li>");
    $("ul").append("<li>" + array[1] + "</li>");
    $("ul").append("<li>" + array[2] + "</li>");
    $("ul").append("<li>" + array[3] + "</li>");
 
  });
});