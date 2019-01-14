from flask import Flask, render_template


app = Flask(__name__)
print(app)


@app.route('/')
def start():
    return render_template('tela_inicial.html')


if __name__ == '__main__':
    app.run()
