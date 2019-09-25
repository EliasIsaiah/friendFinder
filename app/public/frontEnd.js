// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $('select').formSelect();

    $("button").on("submit", function(event) {
        event.preventDefault();
        console.log("submitted!");
    })
});