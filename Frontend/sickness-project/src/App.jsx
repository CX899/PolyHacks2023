import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Doctor from './assets/doctor.png'
import { Box, Button, TextField, Typography } from '@mui/material'
import ComboBox from './components/AutoCompleteBox';
import Navbar from './components/navbar';
import Response from './components/Response';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



//Code principale
function App() {
  const [view, setView] = useState(false);
  //Definition des useState
  
  const getBiopsis = () => {
    setView(true);
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
  <Box display="flex" flexDirection="row" borderRadius="15px" m="40px">
      
      <Biospsis/>
      </Box>
      <Button variant="contained" width="20px" color="success" onClick={getBiopsis}>Submit</Button>
      <Button variant="contained" width="20px" onClick={TextInput}>Set text</Button>
  </Box>
  )
}

export default App
