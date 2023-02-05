from flask import Flask 
from flask_cors import CORS, cross_origin
import numpy as np
import pandas as pd
from scipy.stats import mode
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/get_result/<user_data>", methods=["GET"])

def get_result(user_data):
    #text = user_data
    #text += "Will this work?"
    #return {"serverReply": text}

    # Reading the training data
    DATA_PATH = "dataset/Training.csv"
    data = pd.read_csv(DATA_PATH).dropna(axis = 1)

    # Encoding the labels into num value
    encoder = LabelEncoder()
    data["prognosis"] = encoder.fit_transform(data["prognosis"])

    # Splitting the data into train and test (80:20)
    X = data.iloc[:,:-1]
    y = data.iloc[:, -1]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 24)
    
    
    # Training and testing Random Forest Classifier
    rf_model = RandomForestClassifier(random_state=18)
    rf_model.fit(X_train, y_train)
    preds = rf_model.predict(X_test)
    print(f"Accuracy on train data by Random Forest Classifier: {accuracy_score(y_train, rf_model.predict(X_train))*100}")
    
    print(f"Accuracy on test data by Random Forest Classifier: {accuracy_score(y_test, preds)*100}")
    
    cf_matrix = confusion_matrix(y_test, preds)
    plt.figure(figsize=(12,8))
    sns.heatmap(cf_matrix, annot=True)
    plt.title("Confusion Matrix for Random Forest Classifier on Test Data")
    plt.show()
    
    final_rf_model = RandomForestClassifier(random_state=18)
    final_rf_model.fit(X, y)
    
    # Reading the test data
    test_data = pd.read_csv("./dataset/Testing.csv").dropna(axis=1)
    
    test_X = test_data.iloc[:, :-1]
    test_Y = encoder.transform(test_data.iloc[:, -1])
    
    final_preds = final_rf_model.predict(test_X)
    
    print(f"Accuracy on Test dataset by the combined model: {accuracy_score(test_Y, final_preds)*100}")
    
    cf_matrix = confusion_matrix(test_Y, final_preds)
    plt.figure(figsize=(12,8))
    
    sns.heatmap(cf_matrix, annot = True)
    plt.title("Confusion Matrix for Combined Model on Test Dataset")
    plt.show()

    symptoms = X.columns.values

    symptom_index = {}
    for index, value in enumerate(symptoms):
        symptom = " ".join([i.capitalize() for i in value.split("_")])
        symptom_index[symptom] = index

    data_dict = {
        "symptom_index":symptom_index,
        "predictions_classes":encoder.classes_
    }


    def predictDisease(symptoms):
        symptoms = symptoms.split(",")
        
        # creating input data for the models
        input_data = [0] * len(data_dict["symptom_index"])
        for symptom in symptoms:
            index = data_dict["symptom_index"][symptom]
            input_data[index] = 1
            
        # reshaping the input data and converting it into suitable format for model predictions
        input_data = np.array(input_data).reshape(1,-1)

        rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(input_data)[0]]
    
        return rf_prediction

get_result("wow")



if __name__ == "__main__":
    app.run(debug=True)