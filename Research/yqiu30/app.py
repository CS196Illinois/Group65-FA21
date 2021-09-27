from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.route("/")
def home():
    return "<h1>Welcome to the Login Page</h1>"
@app.route("/login", methods=["POST", "GET"])      
def login():
    return render_template('login.html')

@app.route("/<user>")
def user(user):
    return "<h1>{user}</h1>"
if __name__ == "__main__":
    app.run()

