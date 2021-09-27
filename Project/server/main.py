from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Home"

@app.route("/login", methods=["POST", "GET"])      
def login():
    return 'login' 

@app.route("/users/<user>")
def user(user):
    return user

if __name__ == "__main__":
    app.run()