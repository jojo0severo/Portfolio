
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
                simulate_adding_dots("Tentando adivinhar a frase", data.sentiment)
            },
            data: JSON.stringify(data)
        });
    });
});




var control = 0;
function simulate_adding_dots(phrase, sentiment){
    setTimeout(function(){
        control ++;
        if (control < 5){
            document.getElementById("sentiment").innerText = phrase;
            phrase = add_dot(phrase);
            simulate_adding_dots(phrase, sentiment);
        }
        else if (control == 5){
            document.getElementById("sentiment").innerText = sentiment
        }
    }, 1000);
}


function add_dot(phrase){
    return phrase + '.'
}

