$(document).keypress(function(event){
    $("h1").text(event.key)
});



$(document).on("click", function(event){
    $("h1").css("color", "red")
})