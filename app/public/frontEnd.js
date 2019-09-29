// A $( document ).ready() block.
$(document).ready(function () {


    $('.modal').modal();

    var instance = M.Modal.getInstance($(".modal"));
    // instance.open()

    const $modal = $("#messageModal");
    const $modalP = $("#messageModal p");

    getMatch = function () {

        let answers = [];
        for (let i = 1; i < 11; i++) {
            console.log($(`#question${i}`).val());
            answers.push($(`#question${i}`).val());
        }

        const data = {

            name: $("#name").val(),
            photo: $("#pictureURL").val(),
            answers: answers
        }

        console.log("data", data)

        return data;

    }

    $('select').formSelect();

    modalNotify = function (message) {
        $modalP.text("");
        $modalP.text(message);
        instance.open();
    }

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
                modalNotify("Form Incomplete");
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

            $.post('/api', getMatch()).then(data => console.log(data));

            $("#theForm")[0].reset();
            event.preventDefault();
        }
    });


    // console.log($("button"));
    // $("button").on("click", function (event) {
    //     console.log("clicked!");

    //     let answers = [];

    // for (let i = 1; i < 11; i++) {
    //     console.log($(`#question${i}`).val());
    //     answers.push($(`#question${i}`).val());
    // }
    //     // console.log(name);
    //     console.log(answers);


    //     console.log("submitted!");
    //     $.post('/api', { "testKey": "teststring" }).then(data => console.log(data));
    // })

    // let formObj = {
    //     testKey: "testString"
    // }
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