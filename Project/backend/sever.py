from flask import Flask

from flask_cors import CORS, cross_origin
import json

from Project.backend.transcribe import transcribevideo

app = Flask(__name__)
cors = CORS(app)


@app.route("/transcribe/<filename>")
def transcribe(filename):
    data = {
        "words": transcribevideo(filename)
    }
    return json.dumps(data)


if __name__ == "__main__":
    app.run(debug=True)
