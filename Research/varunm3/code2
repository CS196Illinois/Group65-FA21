from flask import Flask
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)

@app.route("/transcribe/<filename>")
def transcribevideo(filename):
    d = {
        "data": "This is the transcribed text"
    }
    return json.dumps(d)

if __name__ == "__main__":
    app.run(debug=True)