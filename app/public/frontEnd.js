// A $( document ).ready() block.
$(document).ready(function () {
    
    
    $('.modal').modal();
    
    var instance = M.Modal.getInstance($(".modal"));
    instance.open()

    $('select').formSelect();

    invalid = function () {
        
        const name = $("#name").val();
        const picURL = $("#pictureURL").val();

        if (name === "") {
            console.log("name is empty");
            return true
        };

        if (picURL === "") {
            console.log("url is empty/invalid");
            return true
        };

        for (let i = 1; i < 11; i++) {
            if ($(`#question${i}`).val() == null) {
                console.log($(`#question${i}`).val());
                console.log("detected invalid select");
                return true
            }
        }

        return false;
    }

    console.log("ready!");

    $("#submit").on("click", (event) => {
        console.log(event);
        if (!invalid(event)) {
            console.log("invalid is false");
            $("#theForm")[0].reset();
            event.preventDefault();
        }
    });


    // console.log($("button"));
    // $("button").on("click", function (event) {
    //     console.log("clicked!");

    //     let answers = [];

    //     for (let i = 1; i < 11; i++) {
    //         console.log($(`#question${i}`).val());
    //         answers.push($(`#question${i}`).val());
    //     }
    //     // console.log(name);
    //     console.log(answers);


    //     console.log("submitted!");
    //     $.post('/api', { "testKey": "teststring" }).then(data => console.log(data));
    // })

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