from flask import Flask
from flask import render_template
import datetime


app = Flask(__name__, static_folder='static', static_url_path='')

@app.route("/")
@app.route("/start")
def hello():
    dt_now = str(datetime.datetime.now())
    dt = dt_now.split()[0].split('-')
    dt = '.'.join(reversed(dt))
    name = open('./setup.txt').readline()
    return render_template('index.html', name=name, date=dt)
