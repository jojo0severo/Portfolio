
$(document).ready(function () {
    $("#send_phrase_to_analysis").on("click", function () {
        $("#sentiment").text("Recrutando escravos para análise...");
        var data = {
            phrase: $('#phrase_to_analyse').val()
        }
        $.ajax({
            url: "http://127.0.0.1:5000/_analyse_phrase",
            type: "post",
            contentType: "application/json",
            context: document.body,
            success: function (data) {
                simulate_adding_dots("Tentando adivinhar a frase", data.sentiment, 0)
            },
            data: JSON.stringify(data)
        });
    });
});


function simulate_adding_dots(phrase, sentiment, control){
    setTimeout(function(){
        control ++;
        if (control < 5){
            document.getElementById("sentiment").innerText = phrase;
            phrase = add_dot(phrase);
            simulate_adding_dots(phrase, sentiment, control);
        }
        else if (control == 5){
            document.getElementById("sentiment").innerText = sentiment
        }
    }, 1000);
}


function add_dot(phrase){
    return phrase + '.'
}

