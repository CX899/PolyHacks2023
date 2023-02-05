# PolyHacks2023
##Inspiration
- Quebec, especially during the Covid pandemic, had overfilled emergency rooms that seemed to have ten years of waiting time. One of the main reasons behind those inefficient emergency rooms is the many small cases that people overreact about. Therefore, we decided to tackle this problem with our idea. We created a web app that gives a possible preliminary diagnosis for the patient's illness. It also tells him whether or not they should go to the hospital. No more endless waiting in doctor's offices or guessing at self-diagnosis - take control of your health with our app today

##What it does
- Our web app takes in five symptoms that the user inputs. These symptoms are then sent to our python back-end, used in an AI/ML model we trained using a random tree algorithm. The model then tells us the most probable illness (that is in our dataset) and sends it back to our front end. We then take that data and visualize it in a pleasant UI that tells the patient all the necessary information.

##How we built it
- To build, scale, and deploy our disease prediction web app, we used HTML, CSS, and JavaScript to build the front-end. We also utilized Material UI to  improve the UI design.
- We used the React.js framework combined with Vite.js and Node.js as a package manager.
- For the back-end, we created an AI/ML Python-based model connected with flask.
- We used a Kaggle challenge dataset and a random forest algorithm to train and test our model.

##Challenges we ran into
- One of the main challenges we ran into was training and testing our model. We had some issues with the data, as it was often not correctly cleaned and sorted or in the correct format.
- Another challenge was to integrate the model into the web app. Getting data from front to back and back to front was more challenging than expected.

##Accomplishments that we're proud of
- We are incredibly proud of getting this model to work. It was our first time working so extensively with AI/ML, and we were able to integrate it seamlessly into a well-designed web app.
We are also proud of creating a web app whose main selling point is functionality while having a pleasant interface. In the past, we often focused too much on the UI/UX design and neglected usability.

##What's next for SicknessHacks
- Expand the dataset used to cover more illnesses and symptoms.
- Provide the possibility of symptom severity to provide a more accurate diagnosis.
- Add the option to contact the nearest hospital in case of emergencies.
- Synchronize it to a database so that doctors can see their patients' symptoms history.
