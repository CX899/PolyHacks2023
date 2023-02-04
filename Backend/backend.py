from flask import Flask 
from flask_cors import CORS, cross_origin

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/get_result/<user_data>", methods=["GET"])
def get_result(user_data):
    text = user_data
    text += "Will this work?"
    return {"serverReply": text}
    
if __name__ == "__main__":
    app.run(debug=True)