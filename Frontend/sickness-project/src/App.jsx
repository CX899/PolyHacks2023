import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Doctor from './assets/doctor.png'
import { Box, Button, TextField, Typography } from '@mui/material'
import ComboBox from './components/AutoCompleteBox';
import Navbar from './components/navbar';

function App() {
  const [text, setText] = useState('Sickness PolyHacks')
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

  return (
    <Box >
      <Navbar />
    <Box display="flex" flexDirection="row" borderRadius="15px" m="40px" height="70vh">
    <Box m="20px" display="flex" flexDirection="column" width="40%">
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
      }}>
        Take Care, Be safe</Typography>
      <Typography m="20px" fontFamily="Poppins" fontWeight="400" textAlign="left"> 
          Sickness PolyHacks is a web application that allows users to input their symptoms and receive a diagnosis of their illness.
      </Typography>
      
      
    </Box>
    
  </Box>
  <Box display="flex" flexDirection="row" borderRadius="15px" m="40px">
      <Button variant="contained" width="20px" color="success">Submit</Button>
      <Button variant="contained" width="20px" onClick={TextInput}>Set text</Button>
      <ComboBox />
      <Typography fontFamily="Poppins" fontWeight="600" variant="h8">{text}</Typography>
      </Box>
  </Box>
  )
}

export default App
