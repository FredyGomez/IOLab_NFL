import os
import json
from flask import Flask,render_template,request, jsonify
from recommendationsRamit import *
from os import environ

app = Flask(__name__)
    
@app.route('/home')
def index():    
    return render_template('index.html')

@app.route('/compare')
def compare():    
    return render_template('comparison.html')


@app.route('/getRecommendations', methods=['GET'])
def getRecommendations():
    team_name = 'Wait for it'
    if(request.args.get('week')):
        week = int(request.args.get('week'))
    else:
        week = 11
    data = {}
    answer = generatePlayerRecommendations(team_name, week) ## Team name is 'Wait for it' doing analysis for week 11
    i = 0
    for player in answer:
        data[i]=player
        i=i+1  
    return jsonify(data)
    

if __name__ == '__main__':
    app.debug = True
    port = int(environ['FLASK_PORT'])
    app.run(port=port)  
