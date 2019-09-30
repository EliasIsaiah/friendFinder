// A $( document ).ready() block.
$(document).ready(function () {


    $('.modal').modal();

    var instance = M.Modal.getInstance($(".modal"));
    // instance.open()

    const $modal = $("#messageModal");
    const $modalP = $("#modalP");
    const $modalH = $("#modalHeader");

    getMatch = function () {

        let answers = [];
        for (let i = 1; i < 11; i++) {
            // console.log($(`#question${i}`).val());
            answers.push($(`#question${i}`).val());
        }

        const data = {

            name: $("#name").val(),
            photo: $("#pictureURL").val(),
            answers: answers
        }

        // console.log("data", data)

        return data;

    }

    $('select').formSelect();

    modalNotify = function (message) {
        $modalH.text(message);
        instance.open();
    }

    modalMatched = function (name, imageURL) {
        $modalH.text(`You matched with: ${name}`);
        let matchImg = $("<div>")
        .attr("class", "matchImg")
        .css({
            'background': `center / contain no-repeat url(${imageURL})`,

        });

        $("#modal-content").append(matchImg);

        instance.open();
    }

    invalid = function () {

        const name = $("#name").val();
        const picURL = $("#pictureURL").val();

        if (name === "") {
            // console.log("name is empty");
            return true
        };

        if (picURL === "") {
            // console.log("url is empty/invalid");
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

        let matchName, matchPhoto;


        console.log(event);
        if (!invalid(event)) {
            // console.log("invalid is false");

            $.post('/api', getMatch()).then(({ id, name, photo, ...rest }) => {

                matchName = name;
                matchPhoto = photo;
                console.log(matchName, matchPhoto);
                modalMatched(matchName, matchPhoto);
            })

            $("#theForm")[0].reset();
            event.preventDefault();
        }
    });

});