import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Doctor from './assets/doctor.png'
import { Box, Button, TextField, Typography } from '@mui/material'

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
    <Box backgroundColor="white" display="flex" flexDirection="row" borderRadius="15px" m="40px">
    <Box m="60px" display="flex" flexDirection="column" width="50%">
      <Typography variant="h3">Sickness PolyHacks</Typography>
      <Typography> 
        <p>
          Sickness PolyHacks is a web application that allows users to input their symptoms and receive a diagnosis of their illness.
        </p>
      </Typography>
      <Typography variant="h8">{text}</Typography>
      <TextField
      id="outlined"
      label="Symptoms"
      multiline
      rows={4}
      defaultValue="Ex: Fever, Cough, Headache, etc."
      variant="outlined"
      />
      <Button variant="contained" width="20px" color="success">Submit</Button>
      <Button variant="contained" width="20px" onClick={TextInput}>Set text</Button>
    </Box>
    <Box m="60px" display="flex" flexDirection="column" width="40%">
      <img className='hero__img' src={Doctor} alt="Doctor" />
  </Box>
  </Box>
  )
}

export default App
