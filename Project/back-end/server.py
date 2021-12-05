from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

from transcribe import transcribevideo
from summarizer import summarize

app = Flask(__name__)
cors = CORS(app)

@app.route("/transcribe/<file>")
def transcribe(file):
    transcript  = transcribevideo(file)
    print("TRANSCRIPT:",transcript)
    data = {
        "transcript": transcript,
        "summary": summarize(transcript)
    }
    print("SUMMARY:",data["summary"])
    return json.dumps(data)

if __name__ == "__main__":
    app.run(debug=True, port=3002)
