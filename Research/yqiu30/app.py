from flask import Flask

app = Flask(__name__)
@app.route("/")
def home():
    return "<b>Hello,this is the main page</b>"
@app.route("/Hello")      
def hello():
    return "hello hello I am Yukang"
if __name__ == "__main__":
    app.run()

