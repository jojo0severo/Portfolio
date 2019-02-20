
$(document).ready(function () {
    $("#send_phrase_to_analysis").on("click", function () {
        var data = {
            phrase: $('#phrase_to_analyse').val()
        }
        $.ajax({
            url: "https://portfolio-joao-severo.netlify.com/_analyse_phrase",
            type: "post",
            contentType: "application/x-www-form-urlencoded",
            context: document.body,
            success: function (data) {
                console.log(data);
                $("#sentiment").text(data.sentiment);
            },
            data: JSON.stringify(data)
        });
    });
});

