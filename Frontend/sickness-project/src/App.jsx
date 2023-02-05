import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Doctor from './assets/doctor.png'
import { Box, Button, TextField, Typography } from '@mui/material'
import Navbar from './components/navbar';
import Response from './components/Response';
import Autocomplete from '@mui/material/Autocomplete';
import severity from '../../../data/Symptom-severity.json'
import stats from './assets/charts.svg'
import Nurse from './assets/Nurse.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



//Code principale
function App() {

  //Definition des useState
  const [view, setView] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  const [selectedValue5, setSelectedValue5] = useState("");

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [score5, setScore5] = useState(0);

  const [response, setResponse] = useState("");
  const [score, setScore] = useState(0);
  //Definition des options
  const options = ["itching","skin_rash","nodal_skin_eruptions","continuous_sneezing","shivering","chills","joint_pain","stomach_pain","acidity","ulcers_on_tongue","muscle_wasting","vomiting","burning_micturition","fatigue","weight_gain","anxiety","cold_hands_and_feets","mood_swings","weight_loss","restlessness","lethargy","patches_in_throat","irregular_sugar_level","cough","high_fever","sunken_eyes","breathlessness","sweating","dehydration","indigestion","headache","yellowish_skin","dark_urine","nausea","loss_of_appetite","pain_behind_the_eyes","back_pain","constipation","abdominal_pain","diarrhoea","mild_fever","yellow_urine","yellowing_of_eyes","acute_liver_failure","fluid_overload","swelling_of_stomach","swelled_lymph_nodes","malaise","blurred_and_distorted_vision","phlegm","throat_irritation","redness_of_eyes","sinus_pressure","runny_nose","congestion","chest_pain","weakness_in_limbs","fast_heart_rate","pain_during_bowel_movements","pain_in_anal_region","bloody_stool","irritation_in_anus","neck_pain","dizziness","cramps","bruising","obesity","swollen_legs","swollen_blood_vessels","puffy_face_and_eyes","enlarged_thyroid","brittle_nails","swollen_extremeties","excessive_hunger","extra_marital_contacts","drying_and_tingling_lips","slurred_speech","knee_pain","hip_joint_pain","muscle_weakness","stiff_neck","swelling_joints","movement_stiffness","spinning_movements","loss_of_balance","unsteadiness","weakness_of_one_body_side","loss_of_smell","bladder_discomfort","foul_smell_ofurine","continuous_feel_of_urine","passage_of_gases","internal_itching","toxic_look_(typhos)","depression","irritability","muscle_pain","altered_sensorium","red_spots_over_body","belly_pain","abnormal_menstruation","dischromic_patches","watering_from_eyes","increased_appetite","polyuria","family_history","mucoid_sputum","rusty_sputum","lack_of_concentration","visual_disturbances","receiving_blood_transfusion","receiving_unsterile_injections","coma","stomach_bleeding","distention_of_abdomen","history_of_alcohol_consumption","fluid_overload","blood_in_sputum","prominent_veins_on_calf","palpitations","painful_walking","pus_filled_pimples","blackheads","scurring","skin_peeling","silver_like_dusting","small_dents_in_nails","inflammatory_nails","blister","red_sore_around_nose","yellow_crust_ooze","prognosis"]

  //Update des variables au changement des autocomplete
  useEffect(() => {
    setSelectedValue1(selectedValue1);
    setSelectedValue2(selectedValue2);
    setSelectedValue3(selectedValue3);
    setSelectedValue4(selectedValue4);
    setSelectedValue5(selectedValue5);
    

  },[selectedValue1,selectedValue2,selectedValue3,selectedValue4,selectedValue5, ]) 

 

  //Returns biopsis
  const getBiopsis = () => {
    setView(true);
    
    
    setScore(severity[selectedValue1][0]["weight"] + severity[selectedValue2][0]["weight"] + severity[selectedValue3][0]["weight"] + severity[selectedValue4][0]["weight"] + severity[selectedValue5][0]["weight"] )

    TextInput(Formating(selectedValue1) + "," + Formating(selectedValue2) + "," + Formating(selectedValue3) + "," + Formating(selectedValue4) + "," + Formating(selectedValue5));

  }


  //Formats user input
  const Formating = (input) => {
    if (input != '') {
    return input.replace(/_/g, ' ').replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();

    });
  }
}


  //On Press button show biopsis
function Biospsis () {
    if (view === true && response != "" && response != undefined) {
      return <Box><Response word={response} score={score} /></Box>
    }
  } 

  //Communication backend
  const TextInput = (inputed_text) => {

    axios.get("http://127.0.0.1:5000/get_result/"+inputed_text).then(res => 
        {
            setResponse((res['data']['serverReply']));
        }
    );
  }
  

  //Code HTML
  return (
    <Box>
      <Navbar />
    <Box display="flex" flexDirection="row" borderRadius="15px" m="40px" height="70vh">
      <Box m="20px" display="flex" flexDirection="column" width="40%" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
        <img className='hero__img' src={Doctor} alt="Doctor" />
      </Box>
      <Box m="20px" display="flex" flexDirection="column" width="50%" justifyContent="center">
        <Typography
        fontFamily="Poppins" 
        fontWeight="600" 
        fontSize="4rem" 
        variant="h2" 
        sx={{
          "textShadow": ".5rem .5rem 0 rgba(22, 160, 133, .2)",
        }}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        Take Care, Be safe
        </Typography>
        <Typography m="20px" fontFamily="Poppins" fontWeight="400" textAlign="left" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"> 
          Sickness PolyHacks is a web application that allows users to input their symptoms and receive a diagnosis of their illness.
        </Typography>
    </Box>
  </Box>
  <Box backgroundColor="#e1f5e4" p="40px" borderRadius="15px" boxShadow={3}>
      <Typography variant="h3" fontFamily="roboto" fontWeight="600" sx={{"textShadow": ".5rem .5rem 0 rgba(22, 160, 133, .2)",}}>
      How it works
      </Typography>
  <Box display="flex" flexDirection="row">
    <Box>
      <Typography m="60px" fontFamily="Poppins" fontWeight="400" textAlign="left" width="60%" height="20vh">
      In SicknessHacks, our web app, we utilized an <b>AI Model</b> trained on a large dataset of <b>symptoms</b> and <b>diseases</b> to provide a diagnosis to the user. The user inputs their symptoms and the AI model processes the information, utilizing its vast knowledge to generate a <b><em>diagnose</em></b>. 
      </Typography>
      </Box>
      <Box paddingRight="10%">
      <img className='hero__img' src={stats} alt="Doctor" />
      </Box>
    </Box>
    <Box display="flex" flexDirection="row">
    <Box paddingLeft="10%">
      <img className='hero__img' src={Nurse} alt="Doctor" />
      </Box>
    <Box>
      <Typography m="60px" fontFamily="Poppins" fontWeight="400" textAlign="right" paddingLeft="3%" height="20vh">
      SicknessHacks then presents the most likely diagnosis based on the symptoms provided, along with relevant information and recommended next steps for the user to take. This approach to diagnosis helps to <b>emergency waiting rooms</b>. 
      </Typography>
    </Box>
    
      </Box>
  </Box>
  <Box display="flex" flexDirection="column" borderRadius="15px" m="40px" marginTop="30vh">
    <Box>
    <Typography variant="h3" fontFamily="roboto" fontWeight="600" sx={{
          "textShadow": ".5rem .5rem 0 rgba(22, 160, 133, .2)",
        }}>
    Enter your symptoms
    </Typography>
    </Box>
    <Box display="flex" flexDirection="row" m="20px">
      <Box display="flex" flexDirection="row" alignItems="center"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}>
    <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue1) => {
          setSelectedValue1(selectedValue1);
        }}
        renderInput={(params) => <TextField {...params} label="Symptom 1" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue2) => {
          setSelectedValue2(selectedValue2);
        }}
        renderInput={(params) => <TextField {...params} label="Symptom 2" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue3) => {
          setSelectedValue3(selectedValue3);
        }}
        renderInput={(params) => <TextField {...params} label="Symptom 3" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue4) => {
          setSelectedValue4(selectedValue4);
        }}
        renderInput={(params) => <TextField {...params} label="Symptom 4" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue5) => {
          setSelectedValue5(selectedValue5);
        }}
        renderInput={(params) => <TextField {...params} label="Symptom 5" variant="outlined"/>}/>
      </Box>
      </Box>
      </Box>  
  <Box display="flex" flexDirection="row" borderRadius="15px" m="40px">
      <Biospsis/>
      </Box>
      <button className="button accept-btn" onClick={getBiopsis}>Submit Your Symptoms</button>
  </Box>
  )
}

export default App
