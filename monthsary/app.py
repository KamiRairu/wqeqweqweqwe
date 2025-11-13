from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/month1")
def month1():
    return render_template("month1.html")

@app.route("/words-of-affirmation")
def words_of_affirmation():
    return render_template("words.html")

@app.route("/acts-of-service")
def acts_of_service():
    return render_template("service.html")

@app.route("/receiving-gifts")
def receiving_gifts():
    return render_template("gifts.html")

@app.route("/quality-time")
def quality_time():
    return render_template("time.html")

@app.route("/physical-touch")
def physical_touch():
    return render_template("touch.html")

if __name__ == "__main__":
    app.run(debug=True)
