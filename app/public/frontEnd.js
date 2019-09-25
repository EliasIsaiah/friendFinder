// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $('select').formSelect();

    $("button").on("submit", function(event) {
        event.preventDefault();
        console.log("submitted!");
        $.post('/api', $('#theForm').serialize())
    })

    let formObj = {
        testKey : "testString"
    }
    $("a.test").on("click", function(event) {

        console.log("reached testButton handler");
        console.log($('#theForm').serialize());
        console.log($("#mondays").val());

        $('select').formSelect('getSelectedValues');

        testObj = {
            testKey: "testString"
        }

        $.post('/api', testObj, function (data) {
            console.log(data);
        })
    })
});