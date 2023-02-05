import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Doctor from './assets/doctor.png'
import { Box, Button, TextField, Typography } from '@mui/material'
import ComboBox from './components/AutoCompleteBox';
import Navbar from './components/navbar';
import Response from './components/Response';
import Autocomplete from '@mui/material/Autocomplete';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



//Code principale
function App() {
  const [view, setView] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  const [selectedValue3, setSelectedValue3] = useState("");
  const [selectedValue4, setSelectedValue4] = useState("");
  const [selectedValue5, setSelectedValue5] = useState("");

  //Definition des useState
  
  const options = ["itching","skin_rash","nodal_skin_eruptions","continuous_sneezing","shivering","chills","joint_pain","stomach_pain","acidity","ulcers_on_tongue","muscle_wasting","vomiting","burning_micturition","spotting_urination","fatigue","weight_gain","anxiety","cold_hands_and_feets","mood_swings","weight_loss","restlessness","lethargy","patches_in_throat","irregular_sugar_level","cough","high_fever","sunken_eyes","breathlessness","sweating","dehydration","indigestion","headache","yellowish_skin","dark_urine","nausea","loss_of_appetite","pain_behind_the_eyes","back_pain","constipation","abdominal_pain","diarrhoea","mild_fever","yellow_urine","yellowing_of_eyes","acute_liver_failure","fluid_overload","swelling_of_stomach","swelled_lymph_nodes","malaise","blurred_and_distorted_vision","phlegm","throat_irritation","redness_of_eyes","sinus_pressure","runny_nose","congestion","chest_pain","weakness_in_limbs","fast_heart_rate","pain_during_bowel_movements","pain_in_anal_region","bloody_stool","irritation_in_anus","neck_pain","dizziness","cramps","bruising","obesity","swollen_legs","swollen_blood_vessels","puffy_face_and_eyes","enlarged_thyroid","brittle_nails","swollen_extremeties","excessive_hunger","extra_marital_contacts","drying_and_tingling_lips","slurred_speech","knee_pain","hip_joint_pain","muscle_weakness","stiff_neck","swelling_joints","movement_stiffness","spinning_movements","loss_of_balance","unsteadiness","weakness_of_one_body_side","loss_of_smell","bladder_discomfort","foul_smell_ofurine","continuous_feel_of_urine","passage_of_gases","internal_itching","toxic_look_(typhos)","depression","irritability","muscle_pain","altered_sensorium","red_spots_over_body","belly_pain","abnormal_menstruation","dischromic_patches","watering_from_eyes","increased_appetite","polyuria","family_history","mucoid_sputum","rusty_sputum","lack_of_concentration","visual_disturbances","receiving_blood_transfusion","receiving_unsterile_injections","coma","stomach_bleeding","distention_of_abdomen","history_of_alcohol_consumption","fluid_overload","blood_in_sputum","prominent_veins_on_calf","palpitations","painful_walking","pus_filled_pimples","blackheads","scurring","skin_peeling","silver_like_dusting","small_dents_in_nails","inflammatory_nails","blister","red_sore_around_nose","yellow_crust_ooze","prognosis"]

  useEffect(() => {
    setSelectedValue1(selectedValue1);
    setSelectedValue2(selectedValue2);
    setSelectedValue3(setSelectedValue3);
    setSelectedValue4(setSelectedValue4);
    setSelectedValue5(setSelectedValue5);

  },[selectedValue1,selectedValue2,selectedValue3,selectedValue4,selectedValue5, ]) 

  const getBiopsis = () => {
    setView(true);
    console.log(Formating(selectedValue1) + "," + Formating(selectedValue2) + "," + Formating(selectedValue3) + "," + Formating(selectedValue4) + "," + Formating(selectedValue5));
  }

  const Formating = (input) => {
    return input.replace(/_/g, ' ').replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
  }

  function Biospsis () {
    if (view === true) {
      return <Response word="Malaria" />
    }
  } 

  //Definition des fonctions
  const TextInput = () => {

    const inputed_text=text;

    axios.get("http://127.0.0.1:5000/get_result/"+inputed_text).then(res => 
        {
            console.log(res);
            setText(res.data.serverReply);
            console.log(res.data.serverReply)
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
          "text-shadow": ".5rem .5rem 0 rgba(22, 160, 133, .2)",
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
  <Box display="flex" flexDirection="column" borderRadius="15px" m="40px" height="40vh" marginTop="30vh">
    <Box>
    <Typography variant="h3" fontFamily="roboto" fontWeight="600">
    Enter your symptoms
    </Typography>
    </Box>
    <Box display="flex" flexDirection="row" m="20px">
      <Box display="flex" flexDirection="row" alignItems="center"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
    <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue1) => {
          setSelectedValue1(selectedValue1);
        }}
        renderInput={(params) => <TextField {...params} label="Options" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue2) => {
          setSelectedValue2(selectedValue2);
        }}
        renderInput={(params) => <TextField {...params} label="Options" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue3) => {
          setSelectedValue3(selectedValue3);
        }}
        renderInput={(params) => <TextField {...params} label="Options" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue4) => {
          setSelectedValue4(selectedValue4);
        }}
        renderInput={(params) => <TextField {...params} label="Options" variant="outlined"/>}/>
        <Autocomplete
        isOptionEqualToValue={(option, value) => option.title === value.title}
        options={options}
        onChange={(event, selectedValue5) => {
          setSelectedValue5(selectedValue5);
        }}
        renderInput={(params) => <TextField {...params} label="Options" variant="outlined"/>}/>
      </Box>
      </Box>
      </Box>  
  <Box display="flex" flexDirection="row" borderRadius="15px" m="40px">
      <Biospsis/>
      </Box>
      <Button variant="contained" width="20px" color="success" onClick={getBiopsis}>Submit</Button>
      <Button variant="contained" width="20px" onClick={TextInput}>Set text</Button>
  </Box>
  )
}

export default App
