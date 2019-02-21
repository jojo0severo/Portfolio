
$(document).ready(function () {
    $("#send_phrase_to_analysis").on("click", function () {
        var data = {
            phrase: $('#phrase_to_analyse').val()
        }
        $.ajax({
            url: "https://portfolio-joaosevero.herokuapp.com/_analyse_phrase",
            type: "post",
            contentType: "application/json",
            context: document.body,
            success: function (data) {
                console.log(data);
                $("#sentiment").text(data.sentiment);
            },
            data: JSON.stringify(data)
        });
    });
});

