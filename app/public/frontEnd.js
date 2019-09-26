// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
    $('select').formSelect();

    // console.log($("button"));
    $("button").on("click", function (event) {
        console.log("clicked!");

        let answers = [];

        const name = $("#name").val();
        if(name === "") {
            alert("name cannot be empty");
            event.preventDefault();
            return;
        }
        const picURL = $("#pictureURL").val();

        for (let i = 1; i < 11; i++) {
            console.log($(`#question${i}`).val());
            answers.push($(`#question${i}`).val());
        }
        // console.log(name);
        console.log(answers);


        console.log("submitted!");
        $.post('/api', { "testKey": "teststring" }).then(data => console.log(data));
    })

    let formObj = {
        testKey: "testString"
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