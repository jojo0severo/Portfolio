from flask import Flask, render_template, jsonify, request
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


app = Flask(__name__)
analyser = SentimentIntensityAnalyzer()


@app.route('/_analyse_phrase', methods=['POST'])
def stuff():
    try:
        data = request.get_json()

        sentiment = 'Easter egg encontrado. Outros 3 estão presentes no site.'
        if data['phrase'].lower()[:12] in ['te amo jojo', 'te amo, jojo!', 'te amo. jojo',
                                           't amo jojo', 'love u jojo', 'love you, jojo']:
            return jsonify(sentiment=sentiment)

        score = analyser.polarity_scores(data['phrase'])
        compound = score['compound']

        if compound >= 0.05:
            sentiment = 'Frase positiva.'
        elif -0.05 < compound < 0.05:
            sentiment = 'Frase neutra, sem sentimento prevalente.'
        else:
            sentiment = 'Frase negativa.'

        return jsonify(sentiment=sentiment)
    except Exception as e:
        return jsonify(response=repr(e))


@app.route('/', methods=['GET'])
def main():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
