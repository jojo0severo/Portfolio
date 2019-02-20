from flask import Flask, render_template, jsonify, request
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)


@app.route('/_analyse_phrase', methods=['POST'])
def stuff():
    data = request.get_json(force=True)
    
    sentiment = 'Easter egg encontrado. Outros 3 estão presentes no site.'
    if data['phrase'].lower()[:6] in ['te amo', 'te amo!', 'te amo.', 't amo', 'love u',
                                      'love you']:
        return jsonify(sentiment=sentiment)

    score = analyser.polarity_scores(data['phrase'])

    if score['neu'] == 1.0:
        sentiment = 'Por favor digite uma frase em inglês. Caso esteja em inglês verifique a ortografia.'
        return jsonify(sentiment=sentiment)

    compound = score['compound']

    if compound >= 0.05:
        sentiment = 'Frase positiva.'
    elif -0.05 < compound < 0.05:
        sentiment = 'Frase neutra, sem sentimento prevalente.'
    else:
        sentiment = 'Frase negativa.'

    return jsonify(sentiment=sentiment)


@app.route('/', methods=['GET'])
def main():
    return render_template('index.html')


if __name__ == '__main__':
    analyser = SentimentIntensityAnalyzer()
    app.run(debug=False)
