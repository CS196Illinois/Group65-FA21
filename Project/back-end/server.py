from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

from transcriber import transcribe
from summarizer import summarize

app = Flask(__name__)
cors = CORS(app)

@app.route("/transcriber/<file>")
def generate(file):
    transcript  = transcribe(file)
    print("Transciption - Done.")
    data = {
        "transcript": transcript,
        "summary": summarize(transcript)
    }
    print("Summary - Done.")
    return json.dumps(data)

if __name__ == "__main__":
    app.run(debug=True, port=3002)
