// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $('select').formSelect();

    console.log($("button"));
    $("body").on("submit", function(event) {
        event.preventDefault();

        let answers = [];

        let name = $("#name").val();
        
        for( let i = 1; i < 11; i++) {
            console.log($(`#question${i}`).val());
            answers.push($(`#question${i}`).val());
        }
        // console.log(name);
        console.log(answers);


        console.log("submitted!");
        $.post('/api', $('#theForm').serialize())
    })

    let formObj = {
        testKey : "testString"
    }
/*     $("a.test").on("click", function(event) {

        console.log("reached testButton handler");
        console.log($('#theForm').serialize());

        let mondays = $("#question1").val();
        console.log("mondays", mondays);


        $('select').formSelect('getSelectedValues');

        testObj = {
            testKey: "testString"
        }

        $.post('/api', testObj, function (data) {
            console.log(data);
        })
    }) */
});